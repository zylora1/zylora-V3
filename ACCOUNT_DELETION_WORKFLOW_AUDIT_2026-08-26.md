# Zylora Account Deletion Workflow Audit — 2026-08-26

## Finding before remediation
The prior `Zylora-Minimal-UI-AI-Chat2-Polished-Final-2026-08-26.zip` did **not** expose a self-service account-deletion option in Settings and did not contain a dedicated authenticated account-deletion API workflow.

## Implemented workflow
- Settings → **Danger zone → Delete account**.
- Confirmation requires the signed-in account email, the literal word `DELETE`, and an explicit irreversible-action checkbox.
- Destructive deletion requires a session authenticated within the previous 15 minutes. Stale sessions receive `REAUTH_REQUIRED` and the UI offers a sign-in-again flow.
- Password and Google sign-in both return to the deletion confirmation flow after reauthentication.
- `SUPER_ADMIN` self-service deletion is blocked; privileged administrator deprovisioning must be handled administratively.
- Successful deletion clears the session cookie and browser session state, then redirects to the public landing page.

## Data deletion scope
For websites still owned by the deleting account, the workflow removes the website and associated leads, appointments, custom-domain records, Google Sheets integration state, chatbot/knowledge data, analytics, editor history/revisions, media metadata, redirects/IndexNow state, notification deliveries/settings, exports, generation jobs and published snapshots.

Account-level data removed includes authentication sessions/tokens, credit wallets/transactions, billing and Razorpay order records, contacts, notification settings/OTP records, support conversations/messages, freelancer marketplace identity/submissions/ratings/links/enquiries, account audit rows, managed-service enquiries tied to the account email, and matching notification outbox recipients.

Media blobs and Cloudflare custom hostnames are removed on a best-effort basis. If an external provider is temporarily unavailable, the account is still deleted and a privacy-clean operational cleanup record is placed in `account_deletion_cleanup` for follow-up.

## Transfer safety
A website already transferred to another Zylora user is **not** deleted when the former owner deletes their account. Site-scoped editor/media/history ownership references that still point to the former owner are reassigned to the current site owner before user deletion, preventing transferred websites from being damaged by account deletion.

## Verification performed
- `tests/test_account_deletion.py`: 3/3 passed.
  - owned account/site/lead/session removal
  - recent-auth enforcement
  - transferred-site preservation/reassignment
- API/platform/release/account deletion regression group: 26/26 passed.
- Static/security/account deletion group: 17/17 passed.
- Adversarial/policy/AI-first group: 17/17 passed.
- Migration QA: 7/7 checks passed.
- Python compilation passed for changed backend modules.
- JavaScript syntax validation passed for changed dashboard/auth scripts.

A single monolithic `pytest -q` invocation was attempted but exceeded the execution window before completion; no failure was reported before timeout. The relevant suites were then executed separately as listed above.
