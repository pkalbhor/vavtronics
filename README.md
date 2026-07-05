# VAVTRONICS Website

Marketing site for VAVTRONICS Pvt Ltd — Battery Management Systems, custom
Li-ion battery packs, and industrial interlocking systems.

Built with [Next.js](https://nextjs.org) (App Router, static export) and
Tailwind CSS. Hosted on **Firebase Hosting** (project `vavtronics`, live at
[vavtronics.web.app](https://vavtronics.web.app)). The contact form is served
by a **Firebase Cloud Function** (`sendContactEmail`) that sends email through
the GoDaddy mailbox via SMTP.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To test the contact form locally, create `.env.local` in the project root with
the SMTP settings (same keys as `functions/.env` plus `SMTP_PASS=<mailbox password>`) —
the dev server runs `app/api/contact/route.js` directly.

## Architecture notes

- `next.config.mjs` uses `output: 'export'` — the site is fully static,
  built into `out/` and served by Firebase Hosting (`cleanUrls: true` maps
  `/contact` → `contact.html`; do not add a `** → /index.html` rewrite, it
  breaks direct page URLs).
- `firebase.json` rewrites `/api/contact` to the `sendContactEmail` Cloud
  Function (`functions/index.js`, us-central1, Node 22).
- Non-secret SMTP config lives in `functions/.env` (committed on purpose).
  The mailbox password lives in Secret Manager as `SMTP_PASS`.

## Manual deployment

### Prerequisites (one-time)

```bash
npm install -g firebase-tools   # Firebase CLI
firebase login                  # sign in as a project owner/editor
npm install --prefix functions  # function deps (needed for deploy analysis)
```

The SMTP password must exist as a secret (already set up; only repeat if the
mailbox password changes):

```bash
firebase functions:secrets:set SMTP_PASS
# paste the GoDaddy mailbox password when prompted
```

### Deploy

```bash
npm run build                             # builds the static site into out/
firebase deploy --only hosting            # site only (most common)
firebase deploy --only functions          # contact-form function only
firebase deploy --only hosting,functions  # both
```

Deploy `functions` only when something under `functions/` changed — the
function keeps running across hosting deploys.

### Verify after deploying

- Open https://vavtronics.web.app/contact directly (not by clicking from the
  home page) — it must show the contact page, not the home page.
- Submit the form once; the email arrives at `info@vavtronics.com`
  (check spam the first time).
- If sending fails: `firebase functions:log` shows the SMTP error.
  SMTP settings are in `functions/.env` — defaults are for classic GoDaddy
  Workspace email (`smtpout.secureserver.net:465`); the file has commented
  values for Titan and Microsoft 365 mailboxes.

### GitHub Actions

`.github/workflows/` contains the auto-generated Firebase Hosting workflows:
pushes to `main` auto-deploy **hosting only** (using the
`FIREBASE_SERVICE_ACCOUNT_VAVTRONICS` repo secret), and pull requests get
preview channels. Functions are deliberately **not** deployed from CI —
deploy them manually as above.
