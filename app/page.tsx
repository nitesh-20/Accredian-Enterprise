import { Hero } from '@/components/sections/Hero';
import { TrustedCompanies } from '@/components/sections/TrustedCompanies';
import { Features } from '@/components/sections/Features';
import { Benefits } from '@/components/sections/Benefits';
import { WhyAccredian } from '@/components/sections/WhyAccredian';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Features />
      <Benefits />
      <WhyAccredian />
    </>
  );
}
