# Accredian Enterprise Landing Page

A high-quality, production-ready partial clone of the Accredian Enterprise landing page. Built with modern web development standards focusing on performance, accessibility, and a premium user experience.

## Project Overview

This project is a sophisticated landing page designed for the enterprise segment of Accredian. It showcases a modern UI with subtle animations, a fully responsive layout, and a functional lead capture form. The codebase follows clean architecture principles to ensure maintainability and scalability.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form + Zod
- **Deployment**: Vercel ready

## Folder Structure

```
├── app/                  # Next.js App Router (Pages, Layout, API Routes)
│   ├── api/              # API Endpoints (e.g., /api/leads)
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   └── page.tsx          # Main landing page assembling all sections
├── components/           # Reusable React components
│   ├── layout/           # Global layout components (Navbar, Footer)
│   ├── sections/         # Landing page sections (Hero, Features, CTA, etc.)
│   └── ui/               # Base UI components (shadcn/ui)
├── constants/            # Global constants and static data (e.g., Navigation links)
├── data/                 # Local data storage (mock backend for leads)
├── lib/                  # Utility functions (e.g., tailwind-merge utils)
└── public/               # Static assets (images, icons)
```

## Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/nitesh-20/Accredian-Enterprise.git
   cd Accredian-Enterprise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on Vercel. 
To deploy:
1. Push the code to your GitHub repository.
2. Import the project in your Vercel dashboard.
3. Next.js will automatically detect the framework and deploy the site.

## Approach & Component Architecture

- **Modularity**: Every section of the landing page is abstracted into its own component within `components/sections`. This prevents a bloated `page.tsx` and allows individual sections to be reused or updated independently.
- **Design System**: Leveraged `shadcn/ui` alongside Tailwind CSS to maintain consistent spacing, typography, and interactive states across the application.
- **State Management**: Used local component state and React Hook Form for managing the lead capture form without the need for global state management libraries.
- **API Integration**: Developed a Next.js API route (`/api/leads`) that handles form submissions, validates payloads (client-side via Zod), and stores the data locally in `data/leads.json` to mock a backend.

## Responsive Strategy

The application follows a mobile-first responsive design strategy:
- **Mobile (`< 768px`)**: Stacked layouts, hamburger menu navigation, tailored typography scaling.
- **Tablet (`>= 768px`)**: Two-column grids for features and benefits, adjusted paddings.
- **Desktop (`>= 1024px`)**: Full navigation, expansive hero layouts, and maximum container widths to ensure the UI doesn't stretch infinitely on ultra-wide monitors.

## Future Improvements

- **Database Integration**: Replace the local JSON mock backend with a robust database solution like PostgreSQL (via Prisma) or Supabase.
- **Headless CMS**: Integrate a CMS (like Sanity or Strapi) to allow non-technical teams to update the content, testimonials, and FAQs.
- **Analytics**: Implement PostHog or Google Analytics for tracking user behavior and conversion rates on the lead capture form.
- **Dark Mode**: Add a system-aware dark mode theme utilizing `next-themes`.
