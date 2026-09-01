-- Zylora platform policy: customer websites do not have a blog CMS.
-- Preserve only platform posts (site_id IS NULL), which are managed by SUPER_ADMIN.
DELETE FROM blog_posts WHERE site_id IS NOT NULL;
