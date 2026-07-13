# Bhavesh Manhar // Red Team Portfolio

A zero-build, GitHub Pages-ready portfolio for **Bhavesh Manhar / 0xTonyb**.

## Design direction

Graphite operator-console aesthetic with restrained red threat indicators, custom responsive layouts, a capability console, a deliberately redacted BlackMagic R&D section, public field notes and an interactive terminal Easter egg.

## Run locally

No package install is needed.

Open `index.html` directly in a browser, or serve the folder with Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## Operator console

Press:

```text
Ctrl + `
```

Or type `blackmagic` while the page is focused.

Available commands:

```text
help
whoami
operations
skills
methodology
blackmagic
fieldnotes
github
contact
clear
exit
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch and `/ (root)`.
6. Save.

The site uses relative paths, so it works from a GitHub Pages repository subpath.

## Public-data choices

- Headline name: Bhavesh Manhar
- Callsign: 0xTonyb
- GitHub: `github.com/tonyb760`
- LinkedIn: `linkedin.com/in/bhavesh-patel760/`
- Public BlackMagic content is intentionally high-level.
- BlackMagic internals, implementation details, architecture and repository remain redacted/private.
- The phone number from the CV is intentionally **not** published in the site.
- The current employer name is intentionally de-emphasised in the public operation record; the portfolio focuses on capability and impact.

## Files

```text
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── assets
    ├── bhavesh-manhar.webp
    └── favicon.svg
```
