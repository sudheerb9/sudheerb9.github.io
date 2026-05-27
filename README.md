# Portfolio

Personal site for [Sudheer Bulusu](https://sudheerbulusu.com), built with Next.js and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (GitHub Actions + GitHub Pages)

Every push to `main` runs lint, builds a static export, and deploys to GitHub Pages.

### One-time setup

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually under **Actions**).

### Custom domain (`sudheerbulusu.com`)

`public/CNAME` is already set. In **Settings → Pages → Custom domain**, enter `sudheerbulusu.com` and add the DNS records GitHub shows (usually `A` records to GitHub IPs, or a `CNAME` to `<user>.github.io`).

### Project site vs user site

| Hosting | Example URL | `NEXT_PUBLIC_BASE_PATH` |
| --- | --- | --- |
| User/org site (`username.github.io` repo) | `https://sudheerb9.github.io` | leave empty |
| Custom domain at root | `https://sudheerbulusu.com` | leave empty |
| Project repo | `https://sudheerb9.github.io/portfolio` | `/portfolio` |

For a project site, add a repository variable **Settings → Secrets and variables → Actions → Variables**: `NEXT_PUBLIC_BASE_PATH` = `/portfolio` (match your repo name).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint |
| `npm run start` | Serves production build (not used on GitHub Pages) |
