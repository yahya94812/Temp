# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ✅ Prerequisites

- Node.js 20 or higher installed
- A code editor (VS Code recommended)
- Basic knowledge of React/Next.js

## 📋 Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

### 3. Customize Your Content

#### Update Your Name (2 minutes)
Open `components/sections/hero-section.tsx` and change line 15:
```tsx
Your Name  // ← Change this to your actual name
```

#### Add Your Skills (1 minute)
Open `components/sections/about-section.tsx` and update line 8:
```tsx
const skills = [
  "Your", "Skills", "Here"  // ← Add your technologies
]
```

#### Update Contact Info (1 minute)
Open `components/sections/contact-section.tsx` and update lines 26-38:
```tsx
value: "your.email@example.com",  // ← Your email
value: "+1 (555) 123-4567",       // ← Your phone
value: "Your City, Country",       // ← Your location
```

### 4. Add Your Projects (5 minutes)

Open `components/sections/projects-section.tsx` and replace the projects array (starting at line 9):

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of what you built",
    image: "https://images.unsplash.com/photo-...",  // Or use your screenshot
    tags: ["React", "Node.js", "MongoDB"],           // Technologies used
    github: "https://github.com/yourusername/repo",  // Your GitHub link
    demo: "https://yourproject.com"                   // Live demo link
  },
  // Add more projects...
]
```

### 5. Update Social Links (1 minute)

Find and replace these in multiple files:
- `https://github.com` → Your GitHub URL
- `https://linkedin.com` → Your LinkedIn URL
- `your.email@example.com` → Your email address

**Files to update:**
- `components/sections/hero-section.tsx`
- `components/footer.tsx`

### 6. Customize Metadata (1 minute)

Open `app/layout.tsx` and update:
```tsx
title: "Portfolio | Your Name - Full Stack Developer",
description: "Your professional description here",
```

## 🎨 Optional: Customize Colors

Open `app/globals.css` and modify line 47:
```css
--radius: 0.625rem;  /* Change for rounder/sharper corners */
```

For colors, adjust the primary color on line 49:
```css
--primary: oklch(0.205 0 0);  /* Adjust lightness and hue */
```

## 🚀 Deploy to Vercel (5 minutes)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Your portfolio will be live at `your-project.vercel.app`!

## 📝 Next Steps

Now that your basic portfolio is running:

1. ✅ Add real project screenshots
2. ✅ Write compelling project descriptions
3. ✅ Add your work experience
4. ✅ Test on mobile devices
5. ✅ Share with friends for feedback

## 🆘 Troubleshooting

### Server won't start?
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Images not showing?
- Check that URLs are correct
- For local images, put them in `/public/` folder
- Update `next.config.ts` for external image domains

### Build errors?
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

## 📚 Learn More

For detailed customization instructions, see:
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Complete customization guide
- [FEATURES.md](./FEATURES.md) - All features explained
- [README.md](./README.md) - Full documentation

## 💡 Pro Tips

1. **Take Your Time**: Don't rush the customization
2. **Real Content**: Use actual projects, not placeholders
3. **Quality Images**: Use high-quality screenshots
4. **Proofread**: Check for typos and grammar
5. **Mobile Test**: Always test on mobile devices
6. **Get Feedback**: Ask others to review it
7. **Keep Simple**: Less is often more

## 🎯 30-Minute Challenge

Can you customize the entire portfolio in 30 minutes?

- [ ] (5 min) Update name and contact info
- [ ] (10 min) Add 3 real projects with descriptions
- [ ] (5 min) Add skills and experience
- [ ] (5 min) Update all social media links
- [ ] (5 min) Test on mobile and fix any issues

## 🎉 You're Ready!

Your portfolio is now set up and ready to showcase your work. Remember to:
- Keep it updated with new projects
- Maintain consistency in your content
- Make it personal and unique to you

Need help? Check the documentation files or search for answers in the Next.js and shadcn/ui documentation.

Good luck with your portfolio! 🚀
