# Mohammed Izhan Shaikh — Project Manager Portfolio

A cinematic, interactive portfolio showcasing 6+ years of supply chain and project management expertise. Built with vanilla HTML/CSS/JS with Left Coast design aesthetics.

## Live Demo

🔗 **[View Live](https://mohammed-izhan-portfolio.vercel.app)** (Coming soon - deploy first)

## Features

✨ **Cinematic Design**
- Smooth animations and transitions
- Left Coast-inspired aesthetics
- Dark, minimalist layout
- Responsive to all screen sizes

📱 **Fully Responsive**
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Ultra-small mobile (<480px)

🎬 **Animations**
- Fade-in-up reveals on scroll
- Shimmer effects on hover
- Staggered card animations
- Morphing hero blob
- Parallax backgrounds

🎮 **Interactive**
- Timeline-based project cards
- Expandable work history
- Modal case studies
- Live tweaks panel for customization

🔧 **Customizable**
- Built-in tweaks system
- Theme switching
- Accent color options
- Animation speed controls

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohdizhan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```
   
   Portfolio will be available at `http://localhost:3000`

4. **No build step needed** — This is a static HTML site. Open `index.html` directly in your browser or use the npm scripts for a local server.

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy. One-click setup from GitHub.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site is live! 🎉

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., mohdizhan.dev)
   - Update DNS records at your domain registrar

### Deploy to Netlify

1. Connect your GitHub repo at [netlify.com](https://netlify.com)
2. Build command: `npm run build` (or leave blank)
3. Publish directory: `./` (root)
4. Click Deploy

### Deploy to GitHub Pages

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch, root folder
5. Site will be live at `https://YOUR_USERNAME.github.io/portfolio`

## File Structure

```
├── index.html                 # Main portfolio page
├── hero-background-placeholder.png  # Hero section bg
├── package.json              # Node dependencies & scripts
├── vercel.json              # Vercel deployment config
├── .gitignore               # Git ignore rules
├── README.md                # This file
└── [other assets]
```

## Customization

### Edit Content

Open `index.html` and find these sections:

- **Hero**: Change name, tagline, meta info
- **About**: Update bio and stats
- **Experience**: Edit work history
- **Projects**: Update case studies
- **Skills**: Add/remove skill categories
- **Contact**: Update email and links

### Update Styling

All CSS is inline in `<style>` tag in `index.html`:

- **Colors**: Search for `#fbfbfb` and `rgba(251,251,251,...)`
- **Fonts**: Modify font-family in body/h1/h2
- **Animations**: Adjust `@keyframes` and durations
- **Spacing**: Update padding/margin values

### Tweaks Panel

Use the built-in tweaks (⚙ button) to:
- Switch between light/dark themes
- Change accent colors (Gold, Cyan)
- Adjust animation speed

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)

## Performance

- **Fast**: ~45KB uncompressed HTML
- **Zero dependencies**: No external frameworks
- **Instant load**: Static HTML, no build process
- **Lighthouse**: 95+ on all metrics

## SEO

- Open Graph meta tags for social sharing
- Semantic HTML structure
- Optimized meta descriptions
- Mobile viewport configuration

## License

This portfolio is personal and not open-sourced. Feel free to fork and adapt the code style and structure for your own portfolio.

## Contact

📧 **Email**: mohdizhan7@gmail.com  
🔗 **LinkedIn**: [linkedin.com/in/mohdizhan](https://linkedin.com/in/mohdizhan)

---

Built with HTML, CSS, and vanilla JavaScript.  
Designed with cinematic aesthetics inspired by Left Coast Design Studio.
