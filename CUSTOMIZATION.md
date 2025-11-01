# Portfolio Customization Guide

This guide will help you personalize your portfolio website with your own information.

## 🎯 Quick Start Checklist

- [ ] Update personal information in Hero Section
- [ ] Add your skills and expertise in About Section
- [ ] Replace project examples with your projects
- [ ] Add your work experience and education
- [ ] Update contact information
- [ ] Customize colors and styling
- [ ] Add your social media links
- [ ] Update metadata and SEO information

## 📝 Step-by-Step Customization

### 1. Hero Section
**File:** `components/sections/hero-section.tsx`

Replace the following:
```tsx
// Line 15: Your name
<span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
  Your Name  // ← Change this
</span>

// Line 19: Your title/description
<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
  Full Stack Developer & UI/UX Designer crafting beautiful, functional web experiences
  // ← Change this
</p>

// Lines 37-49: Social media links
<a href="https://github.com" ...>  // ← Update to your GitHub
<a href="https://linkedin.com" ...>  // ← Update to your LinkedIn
<a href="mailto:your.email@example.com">  // ← Update to your email
```

### 2. About Section
**File:** `components/sections/about-section.tsx`

**Skills Array (Line 8):**
```tsx
const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", 
  "TailwindCSS", "PostgreSQL", "MongoDB", "AWS", "Docker"
  // ← Add/remove your actual skills
]
```

**Features (Lines 13-36):**
Customize the feature cards to highlight your strengths:
```tsx
const features = [
  {
    icon: Code2,
    title: "Your Strength",  // ← Change
    description: "Your description"  // ← Change
  },
  // ... more features
]
```

**Description (Line 43):**
```tsx
<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
  Passionate developer with 5+ years of experience building web applications
  // ← Update with your background
</p>
```

### 3. Projects Section
**File:** `components/sections/projects-section.tsx`

**Projects Array (Lines 9-67):**
Replace each project object with your actual projects:

```tsx
{
  title: "Your Project Name",
  description: "Your project description (2-3 sentences)",
  image: "https://images.unsplash.com/photo-...",  // ← Use your project screenshot
  tags: ["Tech1", "Tech2", "Tech3"],  // ← Technologies used
  github: "https://github.com/yourusername/repo",  // ← Your repo link
  demo: "https://yourproject.com"  // ← Your live demo
}
```

**Tips for project images:**
- Use screenshots of your actual projects
- Recommended size: 800x600 or similar aspect ratio
- Upload to your repository or use a CDN
- Update `next.config.ts` if using custom domains

### 4. Experience Section
**File:** `components/sections/experience-section.tsx`

**Work Experience (Lines 8-47):**
```tsx
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start - End (e.g., 2022 - Present)",
    description: "Brief description of your role",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  },
  // Add more experiences
]
```

**Education (Lines 49-63):**
```tsx
const education = [
  {
    degree: "Your Degree Name",
    school: "University/Institution Name",
    period: "Year Range",
    description: "Additional details about your education"
  },
  // Add more education entries
]
```

### 5. Contact Section
**File:** `components/sections/contact-section.tsx`

**Contact Information (Lines 24-40):**
```tsx
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",  // ← Your email
    href: "mailto:your.email@example.com"  // ← Your email
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",  // ← Your phone
    href: "tel:+15551234567"  // ← Your phone
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, State/Country",  // ← Your location
    href: "#"
  }
]
```

**Form Submission:**
To make the contact form functional, update the `handleSubmit` function (lines 15-19) to:
- Send to your email service (SendGrid, Mailgun, etc.)
- Use a form service (Formspree, Basin, etc.)
- Connect to your backend API

Example with Formspree:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  // Handle response
}
```

### 6. Footer
**File:** `components/footer.tsx`

**Personal Information (Lines 35-38):**
```tsx
<h3 className="text-2xl font-bold mb-4">Your Name</h3>  // ← Your name
<p className="text-muted-foreground mb-4">
  Your tagline or brief description
</p>
```

**Social Links (Lines 41-56):**
Update all social media URLs to your profiles.

**Copyright (Line 79):**
```tsx
<p>© {currentYear} Your Name. All rights reserved.</p>  // ← Your name
```

### 7. Metadata & SEO
**File:** `app/layout.tsx`

Update the metadata (lines 16-19):
```tsx
export const metadata: Metadata = {
  title: "Portfolio | Your Name - Full Stack Developer",  // ← Your title
  description: "Portfolio of Your Name - Full Stack Developer & UI/UX Designer crafting beautiful web experiences",  // ← Your description
};
```

For better SEO, consider adding:
```tsx
export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Your description here",
  keywords: ["Your Name", "Full Stack Developer", "React", "Next.js", ...],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Portfolio",
    description: "Your description",
    url: "https://yourwebsite.com",
    siteName: "Your Name Portfolio",
    images: [{ url: "https://yourwebsite.com/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Portfolio",
    description: "Your description",
    creator: "@yourtwitterhandle",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};
```

### 8. Navigation
**File:** `components/navigation.tsx`

**Brand Name (Line 28):**
```tsx
<a href="#" className="text-xl font-bold">
  Portfolio  // ← Change to your name or brand
</a>
```

## 🎨 Styling Customization

### Colors
**File:** `app/globals.css`

The theme uses CSS variables. To change colors:

1. **Primary Color** (Lines 49-50):
```css
--primary: oklch(0.205 0 0);  /* Dark */
--primary-foreground: oklch(0.985 0 0);  /* Light text on primary */
```

2. **Accent Colors** (Lines 55-56):
```css
--accent: oklch(0.97 0 0);
--accent-foreground: oklch(0.205 0 0);
```

3. **Border Radius** (Line 47):
```css
--radius: 0.625rem;  /* Adjust for rounder/sharper corners */
```

### Fonts
The project uses Geist fonts by default. To change:

**File:** `app/layout.tsx`

```tsx
import { Inter } from "next/font/google";  // Example with Inter

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Update in body className
<body className={`${inter.variable} antialiased`}>
```

## 🖼️ Images

### Project Screenshots
1. Take high-quality screenshots of your projects (1600x900 recommended)
2. Optimize images using tools like TinyPNG or ImageOptim
3. Store in `/public/projects/` folder or use a CDN
4. Update image paths in `projects-section.tsx`

### Profile Picture
Add your photo to the About or Hero section:
```tsx
import Image from "next/image"

<Image 
  src="/your-photo.jpg" 
  alt="Your Name"
  width={300}
  height={300}
  className="rounded-full"
/>
```

## 🚀 Going Live

### Before Deployment:
1. ✅ Replace all placeholder text with your information
2. ✅ Test all links (projects, social media, contact)
3. ✅ Ensure contact form works
4. ✅ Add Google Analytics or tracking (optional)
5. ✅ Test on mobile devices
6. ✅ Run `npm run build` to check for errors
7. ✅ Add a custom domain (optional)

### Deployment Options:
- **Vercel** (Recommended): Automatic deployments from GitHub
- **Netlify**: Similar to Vercel, free tier available
- **AWS Amplify**: Good for AWS users
- **GitHub Pages**: Free static hosting

## 📱 Mobile Responsiveness

The portfolio is mobile-responsive by default. Test on:
- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

Use Chrome DevTools to test different screen sizes.

## 🔧 Advanced Customization

### Adding Analytics
**Google Analytics:**
Create `app/analytics.tsx`:
```tsx
import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  )
}
```

### Adding a Blog
Use MDX or a CMS like Contentful/Sanity to add blog functionality.

### Adding Animations
Install Framer Motion:
```bash
npm install framer-motion
```

Example usage:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

## 🐛 Troubleshooting

### Common Issues:

**Images not loading:**
- Check `next.config.ts` for correct `remotePatterns`
- Verify image URLs are accessible
- Check browser console for errors

**Styling issues:**
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check for CSS conflicts

**Build errors:**
- Run `npm run build` to see detailed errors
- Check TypeScript errors: `npx tsc --noEmit`
- Verify all imports are correct

## 📞 Need Help?

If you encounter issues:
1. Check the error message carefully
2. Search for the error on Stack Overflow
3. Check Next.js documentation
4. Review shadcn/ui documentation
5. Check browser console for errors

---

Happy customizing! 🎉
