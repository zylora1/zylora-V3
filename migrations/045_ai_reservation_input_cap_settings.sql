-- Complete the reservation-cap catalogue for installations that already
-- applied migration 041/044 before the configurable input caps were added.
INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('ai_creator_input_token_limit','20000',CURRENT_TIMESTAMP),
 ('ai_editor_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_sitewide_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_assistant_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_provider_input_token_cap','100000',CURRENT_TIMESTAMP),
 ('ai_provider_output_token_cap','20000',CURRENT_TIMESTAMP);
