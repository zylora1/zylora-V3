-- Persist the verified Google profile image instead of showing a generic avatar.
ALTER TABLE users ADD COLUMN profile_image_url TEXT;
