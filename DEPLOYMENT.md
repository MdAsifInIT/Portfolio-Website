# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Your portfolio code ready to deploy

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Choose a repository name (e.g., `portfolio`, `my-portfolio`, or `yourusername.github.io`)
5. Set visibility to **Public**
6. Click **"Create repository"**

### 2. Update Homepage URL

Before pushing to GitHub, you need to update the homepage URL in `package.json`:

**Option A: If your repo is named `yourusername.github.io`**
```json
"homepage": "https://yourusername.github.io"
```

**Option B: If your repo has a different name (e.g., `portfolio`)**
```json
"homepage": "https://yourusername.github.io/portfolio"
```

Open `/app/frontend/package.json` and update the `homepage` field accordingly.

### 3. Push Your Code to GitHub

From the `/app` directory, run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. The workflow will automatically trigger and deploy your site

### 5. Wait for Deployment

- The GitHub Actions workflow will automatically build and deploy your portfolio
- You can monitor the progress in the **Actions** tab of your repository
- First deployment typically takes 2-3 minutes

### 6. Access Your Live Site

Once deployment is complete, your portfolio will be available at:

- If repo is `yourusername.github.io`: `https://yourusername.github.io`
- If repo has another name: `https://yourusername.github.io/repository-name`

The URL will also be shown in the GitHub Pages settings.

## Automatic Deployments

After the initial setup, every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy your portfolio.

```bash
# Make changes to your portfolio
# Edit /app/frontend/src/data/mock.js or components

# Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main

# GitHub Actions will automatically deploy the changes
```

## Manual Deployment Trigger

You can also manually trigger a deployment:

1. Go to the **Actions** tab in your repository
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select the `main` branch
5. Click **"Run workflow"**

## Troubleshooting

### Build Fails

If the build fails, check:
1. The `homepage` field in `/frontend/package.json` is correct
2. All dependencies are listed in `package.json`
3. Check the Actions log for specific error messages

### 404 Error on Deployed Site

If you get a 404 error:
1. Make sure GitHub Pages is enabled in Settings → Pages
2. Verify the `homepage` field matches your repository structure
3. Wait a few minutes after deployment completes
4. Clear your browser cache

### Routing Issues

If page routing doesn't work (404 on refresh):
1. This is expected behavior for single-page apps on GitHub Pages
2. The HashRouter can be used if needed, or implement a 404.html workaround

## Custom Domain (Optional)

To use a custom domain:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In GitHub repository Settings → Pages → Custom domain
3. Enter your domain (e.g., `www.yourportfolio.com`)
4. Update DNS records at your registrar:
   - Add a CNAME record pointing to `yourusername.github.io`
5. Enable "Enforce HTTPS" in GitHub Pages settings

## Alternative Deployment Options

If you prefer not to use GitHub Pages, you can also deploy to:

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework: Create React App
4. Root directory: `frontend`
5. Deploy

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `/frontend/build` folder
3. Or connect your GitHub repository

### Static Hosting
Build locally and upload to any static hosting:
```bash
cd /app/frontend
yarn build
# Upload the 'build' folder to your hosting provider
```

## Need Help?

- Check GitHub Actions logs for detailed error messages
- Review [GitHub Pages documentation](https://docs.github.com/pages)
- Verify all file paths are relative (no hardcoded localhost URLs)

---

Happy deploying! 🚀
