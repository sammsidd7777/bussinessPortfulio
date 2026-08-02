# Siddarth Kumar — Portfolio (React + Vite + Tailwind)

This is a React/Vite/Tailwind CSS rewrite of the original HTML/CSS/JS portfolio site.

## Structure

```
src/
  components/
    Sidebar.jsx     - Left profile sidebar (avatar, contacts, socials)
    Navbar.jsx       - Top page-switcher nav
    ArticleHeader.jsx- Reusable page title
  pages/
    Home.jsx
    Services.jsx
    Projects.jsx
    About.jsx
    Contact.jsx
    Resume.jsx
  data/
    data.js          - All content (services, projects, skills, timeline, etc.) as arrays
  assets/images/      - Optimized images used across pages
```

## How it works

- `App.jsx` holds `activePage` state and swaps pages — same single-page-app behavior as
  the original `data-page` / vanilla JS nav switching, but done the React way.
- All repeating content (service cards, project cards, skills, tech stack, timeline,
  contact info) lives in `src/data/data.js` as plain arrays, mapped over in JSX. Edit
  content there instead of hunting through markup.
- Styling uses Tailwind utility classes plus a small custom theme (`@theme` block in
  `src/index.css`) matching the original dark/gold color palette:
  - `smoky-black` (#191A19) — page background
  - `eerie-black` — card background
  - `onyx` — inner surface / secondary cards
  - `jet` — borders
  - `gold` (#ffbf00) / `vegas-gold` — accent color

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
```

## Notes / next steps

- The contact form currently just logs to console and shows a "Message Sent" confirmation.
  Wire it up to a backend or a service like Formspree/EmailJS to actually send emails.
- The résumé PDF is served from `public/resume.pdf` — replace with your latest CV anytime.
- Some project screenshots were resized/compressed from the original assets to keep the
  bundle small; swap in higher-res versions from your projects folder if you want.
