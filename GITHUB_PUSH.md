# Push to GitHub - Step by Step Guide

## Step 1: Create a New Repository on GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `vancouver-landing-page` (or your preferred name)
3. Description: `48 Hours in Vancouver - High-end landing page for Airliners.ca`
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Run These Commands in Your Terminal

Open your terminal and run these commands one by one:

```bash
# Navigate to your project
cd "/Users/airliners/vancouver Landing page"

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Vancouver landing page with Anthropic-style design"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/vancouver-landing-page.git

# Push to GitHub
git push -u origin main
```

## Step 3: If Git Asks for Credentials

GitHub may ask for authentication. Use one of these methods:

### Option A: Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use the token as your password when pushing

### Option B: GitHub CLI
```bash
# Install GitHub CLI (if not installed)
brew install gh

# Login
gh auth login

# Then push
git push -u origin main
```

## Step 4: Verify

After pushing, visit your repository on GitHub:
```
https://github.com/YOUR_USERNAME/vancouver-landing-page
```

---

## Quick Copy-Paste Version

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd "/Users/airliners/vancouver Landing page"
git init
git add .
git commit -m "Initial commit: Vancouver landing page"
git remote add origin https://github.com/YOUR_USERNAME/vancouver-landing-page.git
git push -u origin main
```

## After Pushing to GitHub

You can connect it to Netlify for automatic deployments:
1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your `vancouver-landing-page` repository
5. Netlify will auto-detect the build settings
6. Click "Deploy site"

Every push to `main` will automatically deploy! 🚀
