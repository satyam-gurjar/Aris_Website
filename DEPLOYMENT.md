# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Quick Deploy

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Deploy via CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Deploy to Netlify

1. **Build command:**
```bash
npm run build
```

2. **Publish directory:**
```
.next
```

3. **Environment variables:**
No environment variables needed for basic deployment.

## Deploy to Custom Server

### Build for production:
```bash
npm run build
```

### Start the server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

### Using PM2 for production:
```bash
npm install -g pm2
pm2 start npm --name "ai-assistant-landing" -- start
pm2 save
pm2 startup
```

## Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t ai-assistant-landing .
docker run -p 3000:3000 ai-assistant-landing
```

## Environment Variables

No environment variables are required for basic deployment. If you add features that need them:

Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Performance Optimization

### 1. Enable Image Optimization
Already configured in `next.config.js`

### 2. Enable Compression
Vercel handles this automatically. For custom servers, use compression middleware.

### 3. CDN Configuration
Vercel provides global CDN. For custom deployments, consider:
- Cloudflare
- AWS CloudFront
- Azure CDN

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Verify 3D animations work smoothly
- [ ] Check mobile responsiveness
- [ ] Test all download links
- [ ] Verify GitHub links
- [ ] Check page load speed (aim for < 3s)
- [ ] Test on multiple browsers
- [ ] Verify SEO metadata
- [ ] Check accessibility features
- [ ] Test scroll animations

## Monitoring

### Vercel Analytics
Automatically included with Vercel deployment.

### Google Analytics
Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Custom Domain

### Vercel:
1. Go to Project Settings
2. Navigate to Domains
3. Add your custom domain
4. Update DNS records as instructed

### DNS Configuration:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## SSL Certificate

SSL is automatically provided by:
- Vercel (Let's Encrypt)
- Netlify (Let's Encrypt)

For custom servers, use:
- [Let's Encrypt](https://letsencrypt.org/)
- Certbot for automatic renewal

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 3D Scene Not Loading
- Check WebGL support in browser
- Verify Three.js dependencies are installed
- Check browser console for errors

### Slow Performance
- Enable Next.js Image Optimization
- Lazy load 3D components (already implemented)
- Use a CDN for static assets
- Enable gzip compression

## Scaling

For high traffic:
1. Use Vercel Pro for better performance
2. Enable ISR (Incremental Static Regeneration) if needed
3. Implement caching strategies
4. Use edge functions for dynamic content

---

For more information, visit [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
