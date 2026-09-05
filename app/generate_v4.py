def generate_v4_operations(doc_json: str, instruction: str, selection: list[str]) -> tuple[list[dict], str]:
    import uuid
    import json
    ops = []
    lower_inst = instruction.lower()
    page_id = 'home'
    if 'make this heading bigger' in lower_inst and selection:
        ops.append({'type': 'UPDATE_STYLE', 'pageId': page_id, 'nodeId': selection[0], 'css': {'font-size': '48px'}})
    elif 'center this' in lower_inst and selection:
        ops.append({'type': 'UPDATE_STYLE', 'pageId': page_id, 'nodeId': selection[0], 'css': {'text-align': 'center'}})
    return ops, 'openai'
