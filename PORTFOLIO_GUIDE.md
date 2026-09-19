# Portfolio Guide

This project is a Vite + React + TypeScript portfolio. It is ready to push to GitHub and deploy on Vercel.

## Where to change your details

The main editable content lives in **`src/content.ts`**. Start there:

- `name`: your full name
- `initials`: the letters shown in the top-left logo
- `role`: your professional headline
- `intro`: the short introduction in the hero section
- `location`: the location shown beside your portrait
- `email`: the email used by the contact button
- `availability`: the status shown in the header
- `aboutLead` and `aboutBody`: your About section text
- `social.linkedin` and `social.github`: your real social profile URLs
- `projects`: your portfolio project titles, descriptions, dates, tags, and image URLs
- `skills`: the skills listed in the About section

Your downloadable resume belongs at **`public/resume.pdf`**. Replace the placeholder file with your final PDF using the same filename. The Resume button in the header will then download the updated document automatically.

You can also update these presentation details in **`src/App.tsx`**:

- The hero headline: `Ideas made clear. Experiences made human.`
- The portrait image URL
- The project filter labels
- The footer copyright year

Use local images by placing them in `public/images/` and changing a project image to `/images/your-file.jpg`. Do not include `public/` in the browser path. This is more reliable than depending on an external image host.

## Light and dark mode

Use the `Dark` / `Light` button in the site header. The preference is saved in the browser using `localStorage`, so a visitor's choice remains after refresh. Theme colors are defined in **`src/index.css`** and **`src/App.css`**.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

Before pushing, run the same checks used by the project:

```bash
npm run lint
npm run build
```

## Push to GitHub

1. Create a new empty repository on GitHub. Do not add a second README if this project already has files.
2. Open PowerShell in this project folder.
3. Run these commands, replacing the URL with your repository URL:

```bash
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

For future changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Choose **Add New Project**.
3. Import your portfolio repository.
4. Keep the detected settings. Vercel should detect Vite automatically.
5. Click **Deploy**.

The normal settings are:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Every push to `main` will trigger a new deployment. Vercel will give you a public URL that you can add to your resume and social profiles. You can later connect a custom domain from the Vercel project settings.

## Before sharing publicly

Replace all sample content in `src/content.ts`, replace the portrait image, update the LinkedIn and GitHub URLs, and update the metadata in **`index.html`**. The Open Graph title and description in `index.html` control the preview text used by many social platforms.
