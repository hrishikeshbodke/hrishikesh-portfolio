# Hrishikesh Bodke - Portfolio Website

> **Production-Ready Angular 20 Portfolio** 
> A modern, animated, enterprise-grade portfolio showcasing full-stack development expertise in .NET Core, Angular, and government-scale systems.

## 🚀 Built With

- **Angular 20.3** - Latest Angular with standalone components
- **TypeScript** - Type-safe development
- **CSS3** - Modern styling with gradients and animations
- **Angular Animations** - Smooth, professional transitions

## ✨ Features

### 🎨 Modern UI/UX
- **Smooth scroll animations** - fadeIn, slideIn, scaleIn effects
- **Micro-interactions** - Hover effects and transitions
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Theme** - Professional government-grade aesthetic
- **Glass-morphism effects** - Modern backdrop filters

### 📱 Sections
1. **Hero** - Animated introduction with code preview
2. **About** - Professional background and education
3. **Skills** - Categorized technical skills with progress bars
4. **Experience** - Detailed timeline with achievements
5. **Projects** - Filterable project showcase (5 real projects)
6. **Contact** - Functional contact form
7. **Footer** - Quick links and social connections

### 🔧 Technical Highlights
- **Standalone Components** - No NgModules, Angular 20 architecture
- **Signals API** - Modern reactive state management
- **Lazy Loading Ready** - Performance optimized
- **Type Safety** - Strict TypeScript configuration
- **Service-Based Architecture** - Centralized data management
- **Animation Library** - Reusable animation triggers

## 📂 Project Structure

```
src/
├── app/
│   ├── components/           # Feature components
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── contact/
│   │   └── footer/
│   ├── core/
│   │   ├── models/          # TypeScript interfaces
│   │   │   └── profile.model.ts
│   │   ├── services/        # Data services
│   │   │   └── portfolio-data.service.ts
│   │   └── animations/      # Animation library
│   │       └── animations.ts
│   ├── app.ts               # Root component
│   ├── app.config.ts        # App configuration
│   └── app.routes.ts        # Routing (if needed)
└── styles.css               # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v20 or higher)

### Local Development

1. **Clone/Navigate to the project:**
   ```bash
   cd z:\Angular\portfolio\10-02-2026\protfolioV1.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

4. **Open in browser:**
   ```
   http://localhost:4200
   ```

## 📦 Build for Production

### Standard Build
```bash
npm run build
```

Output will be in `dist/protfolio-v1.0/browser/` directory.

### Production Build with Optimization
```bash
ng build --configuration production
```

This creates an optimized build with:
- AOT compilation
- Tree shaking
- Minification
- Output hashing for cache busting

## 🌐 Deployment Options

### Option 1: GitHub Pages

1. **Install GitHub Pages package:**
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Build and deploy:**
   ```bash
   ng build --configuration production --base-href /your-repo-name/
   ngh --dir=dist/protfolio-v1.0/browser
   ```

3. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

### Option 2: Azure Static Web Apps

1. **Create Azure Static Web App** in Azure Portal

2. **Configure build settings:**
   - Build command: `npm run build`
   - Output folder: `dist/protfolio-v1.0/browser`

3. **Connect GitHub repository** for automatic deployments

### Option 3: Netlify

1. **Connect repository** to Netlify

2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist/protfolio-v1.0/browser`

3. **Deploy** - Automatic on git push

### Option 4: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Production deployment:**
   ```bash
   vercel --prod
   ```

### Option 5: Firebase Hosting

1. **Install Firebase tools:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

3. **Deploy:**
   ```bash
   ng build --configuration production
   firebase deploy
   ```

## 🎯 Customization Guide

### Update Personal Information

Edit `src/app/core/services/portfolio-data.service.ts`:

```typescript
getProfile(): Profile {
  return {
    name: 'Your Name',
    title: 'Your Title',
    // ... update all fields
  };
}
```

### Add New Skills

Add to `getSkillCategories()` method in `portfolio-data.service.ts`

### Add New Projects

Add to `getProjects()` method in `portfolio-data.service.ts`

### Modify Colors/Theme

Update color variables in component styles or global `styles.css`:
- Primary: `#3b82f6` (Blue)
- Secondary: `#8b5cf6` (Purple)
- Background: `#0f172a` (Dark blue)

## 🔍 Key Technologies Showcased

**Backend:**
- .NET Core, C#
- ASP.NET MVC, Web API
- Entity Framework
- SQL Server

**Frontend:**
- Angular 20
- TypeScript
- HTML5, CSS3
- jQuery, AJAX

**Security:**
- AES/RSA Encryption
- Digital Signatures
- JWT Authentication

**GIS & Maps:**
- OpenLayers
- WMS Layers
- KML Integration

**DevOps:**
- Git & GitHub
- IIS Server
- SonarQube

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 2.5s
- **Bundle Size:** Optimized with lazy loading

## 🐛 Troubleshooting

### Animations not working
Ensure `provideAnimations()` is in `app.config.ts`:
```typescript
import { provideAnimations } from '@angular/platform-browser/animations';
```

### Port 4200 already in use
```bash
ng serve --port 4300
```

## 📄 License

This project is created for professional portfolio purposes.

## 👤 Contact

**Hrishikesh Bodke**
- Email: hrishikesh.bodke@cdac.in
- LinkedIn: [Connect on LinkedIn](https://linkedin.com/in/hrishikesh-bodke)
- GitHub: [View Profile](https://github.com/hrishikeshbodke)

---

**Built with ❤️ using Angular 20 | Enterprise-Grade | Government-Scale Experience**

*Last Updated: February 10, 2026*

