from __future__ import annotations
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..models import Appointment, SchedulingConfig
from ..enums import AppointmentStatus

class SchedulingError(ValueError): pass

def _weekdays(config: SchedulingConfig) -> set[int]:
    return {int(x) for x in config.weekdays_csv.split(",") if x.strip()}

def available_slots(db: Session, config: SchedulingConfig, local_date, now_utc: datetime | None = None) -> list[datetime]:
    if not config.enabled: return []
    tz = ZoneInfo(config.timezone)
    if local_date.weekday() not in _weekdays(config): return []
    now_utc = now_utc or datetime.now(timezone.utc)
    start_local = datetime(local_date.year, local_date.month, local_date.day, tzinfo=tz) + timedelta(minutes=config.day_start_minute)
    end_local = datetime(local_date.year, local_date.month, local_date.day, tzinfo=tz) + timedelta(minutes=config.day_end_minute)
    active = db.scalars(select(Appointment).where(Appointment.site_id==config.site_id, Appointment.status==AppointmentStatus.CONFIRMED)).all()
    slots=[]; cursor=start_local
    while cursor + timedelta(minutes=config.duration_minutes) <= end_local:
        start_utc = cursor.astimezone(timezone.utc)
        end_utc = (cursor + timedelta(minutes=config.duration_minutes)).astimezone(timezone.utc)
        if start_utc >= now_utc + timedelta(minutes=5):
            blocked=False
            for appt in active:
                astart = appt.starts_at.replace(tzinfo=timezone.utc) if appt.starts_at.tzinfo is None else appt.starts_at.astimezone(timezone.utc)
                aend = appt.ends_at.replace(tzinfo=timezone.utc) if appt.ends_at.tzinfo is None else appt.ends_at.astimezone(timezone.utc)
                bstart = astart - timedelta(minutes=config.buffer_minutes)
                bend = aend + timedelta(minutes=config.buffer_minutes)
                if start_utc < bend and end_utc > bstart:
                    blocked=True; break
            if not blocked: slots.append(cursor)
        cursor += timedelta(minutes=config.duration_minutes)
    return slots

def book_slot(db: Session, config: SchedulingConfig, starts_local: datetime, lead_id: int | None = None, managed_lead_id: int | None = None, now_utc: datetime | None = None, commit: bool = True) -> Appointment:
    if starts_local.tzinfo is None: raise SchedulingError("timezone_required")
    valid = available_slots(db, config, starts_local.date(), now_utc=now_utc)
    if not any(v == starts_local for v in valid): raise SchedulingError("slot_unavailable")
    start_utc = starts_local.astimezone(timezone.utc).replace(tzinfo=None)
    end_utc = (starts_local + timedelta(minutes=config.duration_minutes)).astimezone(timezone.utc).replace(tzinfo=None)
    appt=Appointment(site_id=config.site_id, lead_id=lead_id, managed_lead_id=managed_lead_id, starts_at=start_utc, ends_at=end_utc, timezone=config.timezone, status=AppointmentStatus.CONFIRMED)
    db.add(appt)
    if commit: db.commit();db.refresh(appt)
    else: db.flush()
    return appt

def cancel_appointment(db: Session, appointment_id: int) -> Appointment:
    appt=db.get(Appointment, appointment_id)
    if not appt: raise SchedulingError("appointment_not_found")
    appt.status=AppointmentStatus.CANCELLED; db.commit(); return appt
