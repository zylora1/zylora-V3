"""Read MP4 container metadata without requiring a video codec or network access."""
from __future__ import annotations

import json
import struct
import sys
from pathlib import Path


def boxes(handle, end: int):
    while handle.tell() + 8 <= end:
        start = handle.tell()
        header = handle.read(8)
        if len(header) < 8:
            return
        size, kind = struct.unpack('>I4s', header)
        if size == 1:
            size = struct.unpack('>Q', handle.read(8))[0]
            header_size = 16
        else:
            header_size = 8
        if size == 0:
            size = end - start
        if size < header_size or start + size > end:
            return
        yield start, size, kind.decode('latin1')
        handle.seek(start + size)


def child_boxes(handle, start: int, size: int):
    handle.seek(start + 8)
    yield from boxes(handle, start + size)


def read_payload(handle, start: int, size: int, limit: int = 2_000_000) -> bytes:
    payload_size = size - 8
    if payload_size > limit:
        return b''
    handle.seek(start + 8)
    return handle.read(payload_size)


def inspect(path: Path) -> dict:
    result = {'file': str(path), 'bytes': path.stat().st_size, 'duration_seconds': None, 'tracks': []}
    with path.open('rb') as handle:
        top_end = path.stat().st_size
        moov = next((box for box in boxes(handle, top_end) if box[2] == 'moov'), None)
        if not moov:
            return result
        moov_start, moov_size, _ = moov
        for start, size, kind in child_boxes(handle, moov_start, moov_size):
            if kind == 'mvhd':
                payload = read_payload(handle, start, size)
                if payload:
                    version = payload[0]
                    if version == 0 and len(payload) >= 20:
                        scale, duration = struct.unpack('>II', payload[12:20])
                    elif version == 1 and len(payload) >= 32:
                        scale = struct.unpack('>I', payload[20:24])[0]
                        duration = struct.unpack('>Q', payload[24:32])[0]
                    else:
                        scale = duration = 0
                    if scale:
                        result['duration_seconds'] = round(duration / scale, 3)
            elif kind == 'trak':
                track = {'type': None, 'width': None, 'height': None, 'timescale': None, 'duration_seconds': None}
                for tstart, tsize, tkind in child_boxes(handle, start, size):
                    if tkind == 'tkhd':
                        payload = read_payload(handle, tstart, tsize)
                        if payload and len(payload) >= 8:
                            track['width'] = round(struct.unpack('>I', payload[-8:-4])[0] / 65536, 3)
                            track['height'] = round(struct.unpack('>I', payload[-4:])[0] / 65536, 3)
                    elif tkind == 'mdia':
                        for mstart, msize, mkind in child_boxes(handle, tstart, tsize):
                            payload = read_payload(handle, mstart, msize)
                            if mkind == 'mdhd' and payload:
                                version = payload[0]
                                if version == 0 and len(payload) >= 20:
                                    scale, duration = struct.unpack('>II', payload[12:20])
                                elif version == 1 and len(payload) >= 32:
                                    scale = struct.unpack('>I', payload[20:24])[0]
                                    duration = struct.unpack('>Q', payload[24:32])[0]
                                else:
                                    scale = duration = 0
                                track['timescale'] = scale
                                track['duration_seconds'] = round(duration / scale, 3) if scale else None
                            elif mkind == 'hdlr' and len(payload) >= 12:
                                track['type'] = payload[8:12].decode('latin1')
                if track['type'] or track['width'] or track['height']:
                    result['tracks'].append(track)
    return result


if __name__ == '__main__':
    print(json.dumps([inspect(Path(name)) for name in sys.argv[1:]], indent=2))
