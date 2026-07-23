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
- **Database**: PostgreSQL (hosted on Neon)
- **ORM**: Prisma ORM
- **Deployment**: Vercel ready

## Folder Structure

```
├── app/                  # Next.js App Router (Pages, Layout, API Routes)
│   ├── api/leads         # API Endpoints (e.g., /api/leads)
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   └── page.tsx          # Main landing page assembling all sections
├── components/           # Reusable React components
│   ├── layout/           # Global layout components (Navbar, Footer)
│   ├── sections/         # Landing page sections (Hero, Features, CTA, etc.)
│   └── ui/               # Base UI components (shadcn/ui)
├── constants/            # Global constants and static data (e.g., Navigation links)
├── lib/                  # Utility functions and Prisma Singleton
├── prisma/               # Prisma schema and migrations
└── public/               # Static assets (images, icons)
```

## Setup & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/nitesh-20/Accredian-Enterprise.git
   cd Accredian-Enterprise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory by copying the example:
   ```bash
   cp .env.example .env
   ```
   Add your Neon PostgreSQL connection string to the `DATABASE_URL` variable inside the `.env` file.

4. **Initialize Database**
   Push the Prisma schema to your Neon database to create the tables, and generate the Prisma Client:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on Vercel. 
To deploy:
1. Push the code to your GitHub repository.
2. Import the project in your Vercel dashboard.
3. Ensure you add `DATABASE_URL` to the Environment Variables in your Vercel project settings.
4. Next.js will automatically detect the framework, run `prisma generate` during the build step, and deploy the site.

## Architecture & Database Design

- **Modularity**: Every section of the landing page is abstracted into its own component within `components/sections`.
- **API & Database Integration**: Developed a robust Next.js API route (`/api/leads`) that handles form submissions. It utilizes **Prisma ORM** to connect to a **PostgreSQL database (Neon)**. 
- **Validation Pipeline**: Incoming payloads are validated client-side via React Hook Form, and securely re-validated server-side using Zod before any database interaction occurs.

### Database Schema

The PostgreSQL database uses the following `Lead` schema managed by Prisma:
- `id` (Int, Primary Key, Auto-increment)
- `fullName` (String)
- `email` (String)
- `phone` (String)
- `company` (String)
- `message` (String)
- `createdAt` (DateTime, Default: now())

## AI Usage

This project was built iteratively with the assistance of advanced AI coding agents, demonstrating rapid prototyping, architectural decision-making, and migration from a mockup JSON-storage to a production PostgreSQL database.

## Future Improvements

- **Headless CMS**: Integrate a CMS (like Sanity or Strapi) to allow non-technical teams to update the content, testimonials, and FAQs.
- **Analytics**: Implement PostHog or Google Analytics for tracking user behavior and conversion rates on the lead capture form.
- **Dark Mode**: Add a system-aware dark mode theme utilizing `next-themes`.
