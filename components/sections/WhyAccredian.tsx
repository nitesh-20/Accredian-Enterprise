'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '10K+', label: 'Professionals Upskilled' },
  { value: '95%', label: 'Career Transition Rate' },
  { value: '500+', label: 'Hiring Partners' },
  { value: '50+', label: 'Industry Expert Mentors' }
];

export function WhyAccredian() {
  return (
    <section className="py-20 bg-blue-600 text-white" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering the workforce of tomorrow
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              At Accredian, we believe that continuous learning is the key to organizational success. We bridge the gap between traditional education and industry requirements, delivering impactful learning experiences that drive real business results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2 border-l-2 border-blue-400 pl-4">
                  <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
                  <span className="text-blue-200 text-sm md:text-base">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] w-full bg-blue-700 rounded-3xl p-8 overflow-hidden shadow-2xl border border-blue-500 flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3" />
            
            <div className="relative z-10 space-y-6">
              <svg className="w-12 h-12 text-blue-300 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white">
                &quot;Accredian&apos;s enterprise training program completely transformed our team&apos;s approach to data. We&apos;ve seen a 40% increase in productivity and a significant boost in employee morale since partnering with them.&quot;
              </p>
              <div>
                <p className="font-bold text-lg">Sarah Jenkins</p>
                <p className="text-blue-200">VP of Engineering, TechCorp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
