# ✅ Deployment Checklist

Quick reference checklist for deploying your portfolio.

## Pre-Deployment Checklist

### Content & Design
- [ ] All text content is correct and spell-checked
- [ ] All links work (internal and external)
- [ ] All modals open and close properly
- [ ] Mobile menu works on small screens
- [ ] Animations play smoothly
- [ ] Images load correctly
- [ ] Colors and fonts look good

### Browser Testing
- [ ] Desktop Chrome ✓
- [ ] Desktop Firefox ✓
- [ ] Desktop Safari ✓
- [ ] Mobile Chrome ✓
- [ ] Mobile Safari (iOS) ✓
- [ ] Tablet view ✓

### Performance
- [ ] Page loads in <3 seconds
- [ ] No console errors
- [ ] No broken assets
- [ ] SEO meta tags present
- [ ] Open Graph tags set

---

## Local Deployment (Git Setup)

```bash
# 1. Initialize Git
git init

# 2. Configure user (first time only)
git config user.name "Your Name"
git config user.email "your@email.com"

# 3. Stage all files
git add .

# 4. Create initial commit
git commit -m "Initial commit: Cinematic portfolio"

# 5. Rename branch to main
git branch -M main
```

- [ ] Git initialized
- [ ] All files staged
- [ ] Initial commit created
- [ ] Branch renamed to main

---

## GitHub Deployment

```bash
# 1. Create repo at github.com/new
# 2. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 3. Push to GitHub
git push -u origin main
```

### On GitHub
1. Go to https://github.com/YOUR_USERNAME/portfolio
2. Verify all files are there
3. Check README displays

- [ ] GitHub repository created
- [ ] Local repo connected to GitHub
- [ ] Code pushed to main branch
- [ ] All files visible on GitHub
- [ ] README displays correctly

---

## Vercel Deployment (Recommended)

### Account Setup
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

- [ ] Vercel account created
- [ ] GitHub connected to Vercel

### Project Import
1. Click "New Project"
2. Paste GitHub repo URL
3. Click "Import"
4. Verify settings (auto-detected as static)
5. Click "Deploy"

- [ ] Repository imported
- [ ] Settings verified
- [ ] Deployment started
- [ ] Deployment completed

### Post-Deployment
1. Note your Vercel URL (e.g., portfolio-abc123.vercel.app)
2. Test all pages load
3. Test responsive design
4. Test modals and interactions

- [ ] Portfolio accessible at Vercel URL
- [ ] All pages load correctly
- [ ] Mobile view works
- [ ] Interactions work
- [ ] No console errors

---

## Custom Domain (Optional)

If using your own domain (e.g., mohdizhan.dev):

1. In Vercel dashboard → Settings → Domains
2. Enter domain name
3. Copy Vercel's nameservers
4. Update DNS at domain registrar
5. Wait 15 minutes for propagation

- [ ] Domain registered
- [ ] Domain added to Vercel
- [ ] DNS records updated
- [ ] Domain pointing to portfolio

---

## Share & Promote

### Social Media
- [ ] LinkedIn post with portfolio link
- [ ] Twitter/X post with portfolio link
- [ ] Portfolio link in LinkedIn bio
- [ ] Portfolio link in GitHub profile

### Professional
- [ ] Portfolio link in resume/CV
- [ ] Portfolio link in email signature
- [ ] Send to relevant contacts
- [ ] Update professional profiles

### Tracking
- [ ] Share Vercel analytics link (if public)
- [ ] Monitor page views in Vercel dashboard
- [ ] Collect feedback from viewers

---

## Maintenance

### Regular Updates
- [ ] Update project descriptions
- [ ] Add new case studies
- [ ] Remove outdated information
- [ ] Update links as needed

### Monitoring
- [ ] Check Vercel uptime monthly
- [ ] Monitor for broken links
- [ ] Test on new browser versions
- [ ] Check mobile on new devices

---

## Success Metrics

After deployment:
- [ ] Portfolio is live and accessible
- [ ] All pages load without errors
- [ ] Mobile responsive works perfectly
- [ ] Animations play smoothly
- [ ] Modals function correctly
- [ ] Contact links work
- [ ] Social sharing shows preview

---

## Troubleshooting

If something breaks:

1. **Check Vercel logs**
   - Vercel Dashboard → Deployments → Click failed deployment

2. **Hard refresh browser**
   - Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

3. **Clear cache**
   - DevTools → Network → Disable cache → Refresh

4. **Test in incognito**
   - Open in private/incognito window

5. **Check file names**
   - Ensure capitalization matches
   - Ensure no typos in paths

6. **Verify GitHub push**
   ```bash
   git status  # See if changes are pending
   git push    # Push latest changes
   ```

---

## Timeline

**Day 1:** Local testing & Git setup
**Day 2:** Push to GitHub & deploy to Vercel
**Day 3:** Test live site & share on social
**Ongoing:** Monitor & update

---

## Support Resources

- **Vercel Help**: https://vercel.com/support
- **GitHub Docs**: https://docs.github.com
- **MDN Web Docs**: https://developer.mozilla.org
- **Stack Overflow**: https://stackoverflow.com

---

**Last Updated:** 2024  
**Status:** ✅ Ready to Deploy
