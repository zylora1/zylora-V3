-- Server-side provider caps used for pre-call reservation sizing.  INSERT OR
-- IGNORE preserves operator overrides on upgraded installations.
INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('ai_creator_input_token_limit','20000',CURRENT_TIMESTAMP),
 ('ai_editor_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_sitewide_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_assistant_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_provider_input_token_cap','100000',CURRENT_TIMESTAMP),
 ('ai_provider_output_token_cap','20000',CURRENT_TIMESTAMP),
 ('ai_creator_primary_output_token_limit','800',CURRENT_TIMESTAMP),
 ('ai_creator_copy_output_token_limit','500',CURRENT_TIMESTAMP),
 ('ai_editor_output_token_limit','1200',CURRENT_TIMESTAMP),
 ('ai_sitewide_output_token_limit','800',CURRENT_TIMESTAMP),
 ('ai_seo_input_token_limit','12000',CURRENT_TIMESTAMP),
 ('ai_seo_output_token_limit','220',CURRENT_TIMESTAMP),
 ('ai_cms_input_token_limit','15000',CURRENT_TIMESTAMP),
 ('ai_cms_output_token_limit','1600',CURRENT_TIMESTAMP);
