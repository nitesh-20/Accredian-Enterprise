'use client';

import { motion } from 'framer-motion';

const COMPANIES = [
  { name: 'Google', id: 1 },
  { name: 'Microsoft', id: 2 },
  { name: 'Amazon', id: 3 },
  { name: 'Meta', id: 4 },
  { name: 'Netflix', id: 5 },
  { name: 'Apple', id: 6 },
];

export function TrustedCompanies() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by Top Companies Worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-slate-400 grayscale hover:grayscale-0 hover:text-slate-800 transition-all cursor-default"
            >
              {company.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
