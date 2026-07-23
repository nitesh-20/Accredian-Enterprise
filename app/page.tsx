import { Hero } from '@/components/sections/Hero';
import { TrustedCompanies } from '@/components/sections/TrustedCompanies';
import { Features } from '@/components/sections/Features';
import { Benefits } from '@/components/sections/Benefits';
import { WhyAccredian } from '@/components/sections/WhyAccredian';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Features />
      <Benefits />
      <WhyAccredian />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
