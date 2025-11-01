# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4, featuring components from the shadcn/ui registry.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16 App Router, React 19, and TypeScript
- **Beautiful UI Components**: Leveraging shadcn/ui components from the official registry
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Dark Mode Ready**: Built-in support for light and dark themes
- **Smooth Animations**: Polished user experience with smooth scroll and transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
├── app/
│   ├── globals.css        # Global styles and Tailwind configuration
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main portfolio page
├── components/
│   ├── ui/                # shadcn/ui components (from registry)
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   ├── tabs.tsx
│   │   └── textarea.tsx
│   ├── sections/          # Portfolio sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── experience-section.tsx
│   │   └── contact-section.tsx
│   ├── navigation.tsx     # Navigation bar with mobile menu
│   └── footer.tsx         # Footer component
├── lib/
│   └── utils.ts           # Utility functions
└── components.json        # shadcn/ui configuration
```

## 🎨 Sections

1. **Hero Section**
   - Eye-catching introduction with gradient text
   - Call-to-action buttons
   - Social media links

2. **About Section**
   - Personal introduction
   - Feature highlights (Clean Code, UI/UX Design, Performance, Collaboration)
   - Technical skills showcase

3. **Projects Section**
   - Grid layout of featured projects
   - Project cards with images, descriptions, and tags
   - Links to live demos and source code

4. **Experience Section**
   - Tabbed interface for Work Experience and Education
   - Detailed timeline of professional journey
   - Key achievements for each role

5. **Contact Section**
   - Contact information cards
   - Contact form with validation
   - Multiple ways to get in touch

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/sections/hero-section.tsx`):
   - Replace "Your Name" with your actual name
   - Update social media links
   - Modify the introduction text

2. **About Section** (`components/sections/about-section.tsx`):
   - Update the skills array with your technologies
   - Customize feature descriptions

3. **Projects Section** (`components/sections/projects-section.tsx`):
   - Replace project data with your actual projects
   - Update project images, descriptions, and links

4. **Experience Section** (`components/sections/experience-section.tsx`):
   - Add your work experience and education
   - Update company names, dates, and achievements

5. **Contact Section** (`components/sections/contact-section.tsx`):
   - Update email, phone, and location
   - Configure form submission logic

6. **Metadata** (`app/layout.tsx`):
   - Update page title and description
   - Add your name to the metadata

### Styling

- Color scheme can be modified in `app/globals.css`
- shadcn/ui uses CSS variables for theming
- Customize the `--radius` and color variables for your brand

### Adding More Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

For example:
```bash
npx shadcn@latest add @shadcn/dialog
npx shadcn@latest add @shadcn/dropdown-menu
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## 📦 Built With

- [Next.js 16](https://nextjs.org/) - React Framework
- [React 19](https://react.dev/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Lucide React](https://lucide.dev/) - Icons

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ Star this repo if you find it helpful!
