# Modern Next.js App

A modern, feature-rich web application built with Next.js 15, Tailwind CSS 4, and shadcn/ui components. This project demonstrates best practices for building scalable React applications with a beautiful, responsive design and dark mode support.

## ✨ Features

- **Next.js 15** - Latest version with App Router and Server Components
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible React components
- **Dark Mode** - Theme switching with system preference detection
- **TypeScript** - Full type safety throughout the application
- **Responsive Design** - Mobile-first approach with modern layouts
- **Custom Components** - Reusable header and footer components
- **Multi-page Structure** - Home, About, and Author pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/asfi50/nextjs15-tailwind4-shadcn
   cd nextjs15-tailwind4-shadcn
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── author/            # Author page
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── footer.tsx        # Custom footer component
│   ├── header.tsx        # Custom header with navigation
│   ├── mode-toggle.tsx   # Theme switcher component
│   └── theme-provider.tsx # Theme context provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Components

### Core Components

- **Header** - Navigation with theme toggle and responsive design
- **Footer** - Multi-column footer with links and branding
- **ModeToggle** - Dark/light/system theme switcher
- **ThemeProvider** - Context for theme management

### Pages

- **Home** - Hero section with features showcase
- **About** - Company story, values, and statistics
- **Author** - Developer profile with experience and skills

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS 4](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Theme System

The app includes a sophisticated theme system with:

- Light and dark mode support
- System preference detection
- Smooth transitions between themes
- Custom color palette with OKLCH color space

### Component Architecture

- All UI components are built with shadcn/ui
- Fully customizable and accessible
- Consistent design system throughout
- TypeScript support for better DX

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Responsive navigation
- Optimized for all screen sizes

## 🚀 Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com/):

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with zero configuration

Alternatively, you can deploy to any platform that supports Node.js applications.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
