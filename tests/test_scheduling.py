from datetime import date,datetime,timezone
import pytest
from zoneinfo import ZoneInfo
from apps.api.app.models import SchedulingConfig
from apps.api.app.services.sites import create_site
from apps.api.app.services.scheduling import *

def setup_cfg(db,user):
    s=create_site(db,user,'Sched','sched','AI',2)
    c=SchedulingConfig(site_id=s.id,enabled=True,timezone='Asia/Kolkata',duration_minutes=30,buffer_minutes=15,day_start_minute=540,day_end_minute=660,weekdays_csv='0,1,2,3,4'); db.add(c); db.commit(); return c

def test_slots_booking_buffer_and_cancel(db,user):
    c=setup_cfg(db,user); d=date(2026,8,24) # Monday
    now=datetime(2026,8,23,0,0,tzinfo=timezone.utc)
    slots=available_slots(db,c,d,now); assert len(slots)==4
    first=slots[1]
    appt=book_slot(db,c,first,now_utc=now); assert appt.status=='CONFIRMED'
    slots2=available_slots(db,c,d,now)
    assert first not in slots2 and slots[0] not in slots2 and slots[2] not in slots2
    cancel_appointment(db,appt.id)
    assert first in available_slots(db,c,d,now)

def test_disabled_weekend_expired_and_errors(db,user):
    c=setup_cfg(db,user)
    assert available_slots(db,c,date(2026,8,23),datetime(2026,8,20,tzinfo=timezone.utc))==[]
    c.enabled=False; db.commit(); assert available_slots(db,c,date(2026,8,24),datetime(2026,8,20,tzinfo=timezone.utc))==[]
    c.enabled=True; db.commit()
    naive=datetime(2026,8,24,9,0)
    with pytest.raises(SchedulingError): book_slot(db,c,naive,now_utc=datetime(2026,8,20,tzinfo=timezone.utc))
    tz=ZoneInfo('Asia/Kolkata'); bad=datetime(2026,8,24,12,0,tzinfo=tz)
    with pytest.raises(SchedulingError): book_slot(db,c,bad,now_utc=datetime(2026,8,20,tzinfo=timezone.utc))
    with pytest.raises(SchedulingError): cancel_appointment(db,999)
