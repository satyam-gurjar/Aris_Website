# AI Assistant - Landing Page

A production-ready, futuristic landing website for the AI Assistant desktop application. Built with Next.js 14, React Three Fiber, and Framer Motion.

![AI Assistant](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-Ready-black?style=for-the-badge&logo=vercel)

## 🌟 Features

### 🎯 Core Features
- **Auto OS Detection** - Automatically detects user's OS and highlights the correct download button
- **Interactive 3D Graphics** - Stunning floating AI hologram with particle effects using React Three Fiber
- **Smooth Animations** - Professional micro-interactions with Framer Motion
- **Glassmorphism UI** - Modern glass effect design with neon accents
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **SEO Optimized** - Complete meta tags for search engines and social sharing

### ⚡ Performance
- **142 KB First Load JS** - Highly optimized bundle size
- **Static Generation** - Pre-rendered pages for instant loading
- **Lazy Loading** - 3D scenes load on-demand
- **Code Splitting** - Automatic route-based splitting

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Update Download Links

**File:** `components/DownloadSection.tsx` (Lines 18-40)

```typescript
downloadUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPO/releases/latest/download/YOUR_FILE.exe'
```

Replace with your actual GitHub release URLs for each platform.

## 🌐 Deploy to Vercel (Recommended)

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your repository
- Click "Deploy"

3. **Done!** Your site is live in 2-3 minutes! 🎉

📖 **Detailed Guide:** See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for complete step-by-step instructions.

## 📋 Deployment Checklist

- [ ] Build succeeds locally (`npm run build`)
- [ ] Download URLs updated
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Tested on mobile and desktop

✅ **Quick Reference:** [DEPLOY_CHECKLIST.md](DEPLOY_CHECKLIST.md)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation
│   ├── Hero.tsx            # Hero with 3D
│   ├── Features.tsx        # Feature cards
│   ├── DownloadSection.tsx # Download buttons (⭐ UPDATE THIS)
│   └── three/              # 3D components
├── lib/
│   └── detectOS.ts         # OS detection utility
└── railway.json            # Railway config
```

## 🎨 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Three Fiber** - 3D graphics
- **Framer Motion** - Animations

## ⚙️ Customization

Edit these files:
- **Colors:** `tailwind.config.ts`
- **Content:** `components/Hero.tsx`, `components/Features.tsx`
- **Download URLs:** `components/DownloadSection.tsx` ⭐

## 📚 Documentation

- [RAILWAY.md](RAILWAY.md) - Deploy to Railway
- [DOWNLOAD_LINKS.md](DOWNLOAD_LINKS.md) - Configure download links
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Full customization guide

## 📄 License

MIT License - Free to use, modify, and distribute

---

Built for [AI Assistant](https://github.com/satyam-gurjar/AI_Assistant) by Satyam Gurjar
