-- Final transactional hardening for lead/contact identity and appointment booking.
-- A booked slot is unique per site even under concurrent workers.
ALTER TABLE appointments ADD COLUMN cancellation_token_hash TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_appointments_site_slot_booked
  ON appointments(site_id, starts_at) WHERE status='BOOKED';
CREATE INDEX IF NOT EXISTS idx_contacts_user_phone ON contacts(user_id, phone) WHERE phone IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_leads_contact_time ON leads(contact_id, created_at);
