# Netlify Deployment Guide

## Your project is ready to deploy!

The production build has been created in the `dist/` folder.

## Deployment Options

### Option 1: Netlify Web Interface (Easiest)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Sign in to your Netlify account (or create one)
3. Drag and drop the `dist/` folder into the browser
4. Your site will be live in seconds!

### Option 2: Connect to Git (Recommended for continuous deployment)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [https://app.netlify.com/](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

Every time you push to your repository, Netlify will automatically rebuild and deploy!

### Option 3: Netlify CLI

```bash
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Build Configuration

Your project includes a `netlify.toml` file with the correct build settings:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Custom Domain

After deploying, you can:
1. Go to your site settings in Netlify
2. Click "Domain management"
3. Add your custom domain (e.g., vancouver.airliners.ca)
4. Follow Netlify's DNS instructions

## Environment Variables

If you need to add environment variables:
1. Go to Site settings → Build & deploy → Environment
2. Add your variables (e.g., `VITE_API_URL`)

## Quick Deploy (Drag & Drop)

Since your build is complete, the fastest way is:

1. Open Finder and navigate to: `/Users/airliners/vancouver Landing page/dist`
2. Go to: https://app.netlify.com/drop
3. Drag the entire `dist` folder into the browser
4. Done! Your site is live.

---

**Note:** The `dist/` folder is already built and ready to deploy!
