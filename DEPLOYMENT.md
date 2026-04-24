# 🚀 Deployment Guide

Complete step-by-step instructions to deploy your portfolio locally, to GitHub, and to Vercel.

---

## Phase 1: Local Setup & Testing

### Step 1: Initialize Git Repository

```bash
# Navigate to your project directory
cd /path/to/portfolio

# Initialize Git
git init

# Configure Git (if first time)
git config user.name "Mohammed Izhan"
git config user.email "mohdizhan7@gmail.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Cinematic portfolio with Left Coast design"
```

### Step 2: Test Locally

```bash
# Option A: Using npm (requires Node.js)
npm install
npm run dev
# Visit http://localhost:3000

# Option B: Direct browser
# Simply open index.html in your browser

# Option C: Using Python (if installed)
python -m http.server 3000
# Visit http://localhost:3000
```

### Step 3: Verify Everything Works

- [ ] Navigation links work
- [ ] Modals open/close smoothly
- [ ] Hamburger menu toggles on mobile
- [ ] Tweaks panel opens and saves settings
- [ ] Animations play smoothly
- [ ] Responsive layout adapts on resize

---

## Phase 2: Push to GitHub

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `portfolio` (or your preferred name)
3. **Description**: "Mohammed Izhan - Supply Chain & Project Manager Portfolio"
4. **Public** or **Private** (your choice)
5. **Do NOT** initialize with README (we have one)
6. Click **Create repository**

### Step 2: Connect Local Repository to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if on master)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example for user "mohdizhan":**
```bash
git remote add origin https://github.com/mohdizhan/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Verify on GitHub

- [ ] Go to your repo: https://github.com/YOUR_USERNAME/portfolio
- [ ] Confirm all files are there
- [ ] README displays correctly

---

## Phase 3: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest option for static sites.

### Step 1: Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. You'll be redirected to Vercel dashboard

### Step 2: Import Your Repository

1. Click **"New Project"**
2. Under **"Import Git Repository"**, paste your repo URL:
   ```
   https://github.com/YOUR_USERNAME/portfolio
   ```
3. Click **Import**

### Step 3: Configure Vercel

The configuration should auto-detect as static site. Verify:

- **Project Name**: `portfolio` (or your preferred name)
- **Framework**: `Other` (static)
- **Build Command**: Leave empty
- **Output Directory**: `./`
- **Environment Variables**: None needed

Click **Deploy** → **Done! 🎉**

### Step 4: Get Your Live URL

After deployment, Vercel gives you a URL like:
```
https://portfolio-abc123.vercel.app
```

Your portfolio is now **live and publicly accessible**!

### Step 5: Custom Domain (Optional)

To use your own domain (e.g., mohdizhan.dev):

1. In Vercel dashboard, go to **Settings → Domains**
2. Enter your domain name
3. Vercel shows you DNS records to add
4. Update DNS at your domain registrar (GoDaddy, Namecheap, etc.)
5. Wait 5-15 minutes for propagation
6. Your domain now points to your portfolio!

---

## Phase 4: Optional Deployments

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Connect GitHub, select your repo
4. Settings:
   - **Build command**: Leave empty
   - **Publish directory**: `./`
5. **Deploy site**

### Deploy to GitHub Pages

1. Go to your GitHub repo → **Settings**
2. Scroll to **"Pages"** (left sidebar)
3. **Source**: Select `main` branch, `/root` folder
4. Click **Save**
5. Site lives at: `https://YOUR_USERNAME.github.io/portfolio`

---

## Phase 5: Share Your Portfolio

### Deployment Status

| Platform | URL | Status |
|----------|-----|--------|
| **Vercel** | https://portfolio-abc123.vercel.app | ✅ Live |
| **GitHub** | https://github.com/YOUR_USERNAME/portfolio | ✅ Source |
| **Custom Domain** | https://your-domain.com | (Optional) |

### Share on Social

**LinkedIn:**
```
Just shipped my new portfolio. Six years of supply chain & operations 
condensed into one cinematic landing page. Built with HTML/CSS, inspired by 
Left Coast Design Studio.

https://your-vercel-url.com
```

**Twitter/X:**
```
New portfolio live 🚀

Six years of supply chain ops, warehouse automation, and crisis management. 
Check it out and let's talk supply chain transformation.

Built with vanilla HTML/CSS + Left Coast aesthetics.

https://your-vercel-url.com
```

**Email:**
```
Subject: New Portfolio

Hi [Name],

I've launched my new portfolio showcasing my work in supply chain operations 
and project management.

Check it out here: https://your-vercel-url.com

Would love your feedback!

Best,
Mohammed Izhan
```

---

## Troubleshooting

### Issue: Vercel shows 404 error

**Solution:**
1. Ensure `index.html` is in root directory
2. Check that `vercel.json` is configured correctly
3. Redeploy: Go to Vercel dashboard → **Deployments** → **Redeploy**

### Issue: Changes not showing on Vercel

**Solution:**
1. Push changes to GitHub: `git push`
2. Vercel auto-redeploys on GitHub push
3. If not, manually redeploy in Vercel dashboard

### Issue: Images not loading

**Solution:**
1. Ensure image paths are relative (e.g., `./hero-background-placeholder.png`)
2. Never use absolute paths
3. Check file names match exactly (case-sensitive on Linux)

### Issue: Mobile menu not working

**Solution:**
1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Clear browser cache and cookies
3. Test in incognito/private mode

---

## Next Steps

- [ ] Deploy to Vercel ✅
- [ ] Set up custom domain (optional)
- [ ] Share portfolio on LinkedIn
- [ ] Update resume with portfolio link
- [ ] Monitor Vercel analytics
- [ ] Collect feedback from peers
- [ ] Iterate and improve

---

## Useful Links

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Guide**: https://guides.github.com
- **Netlify Docs**: https://docs.netlify.com
- **Domain Registrars**: 
  - https://namecheap.com
  - https://godaddy.com
  - https://porkbun.com

---

## Support

If you encounter issues during deployment, here's what to check:

1. **File structure**: All files in root directory?
2. **File names**: Case-sensitive? Correct spelling?
3. **URLs**: Absolute or relative? (Use relative)
4. **Permissions**: Does your GitHub account have push access?
5. **Browser cache**: Hard refresh? Incognito window?

For Vercel-specific issues, check their [support docs](https://vercel.com/support).

---

**Deployment complete! 🎉 Your portfolio is now live and ready to share.**
