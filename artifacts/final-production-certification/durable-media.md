# Durable media evidence

- Railway configuration declares `MEDIA_STORAGE_PROVIDER=s3` with an S3-compatible endpoint, bucket, region, and access/secret variables.
- Non-mutating `head_bucket` check failed with HTTP 400.
- Non-mutating `list_objects_v2` check failed with `InvalidArgument: Credential access key has length 54, should be 32`.

Result: the application is configured for durable object storage, but the current credential set is not accepted by the provider. No production upload or redeploy persistence claim is made. Status: **FAIL / HUMAN ACTION REQUIRED**. Replace the R2/S3 credential pair in Railway, then rerun an authenticated upload → publish → redeploy → reload test.
