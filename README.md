# daniProfolio

Personal portfolio for Danish Farman. Built with React and Vite. Project animations, artwork, and resume files are stored in `public/`, so they are included with every production build and can be served as static assets.

## Run locally

```bash
npm ci
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to the `main` branch. In the repository settings, choose **Pages → Build and deployment → Source → GitHub Actions**. Vite uses relative asset URLs, which supports the portfolio being served from a repository subpath.

Keep site assets in `public/` and reference them through `import.meta.env.BASE_URL` in React components so their URLs continue working on GitHub Pages.
