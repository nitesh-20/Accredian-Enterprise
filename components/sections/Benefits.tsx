'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const BENEFITS = [
  'Customized learning paths aligned with your business goals',
  'Track employee progress with detailed analytics dashboards',
  'Increase retention by investing in employee growth',
  'Access to industry experts and thought leaders',
  'Flexible scheduling that doesn\'t disrupt daily operations',
  'Dedicated customer success manager for your organization'
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden" id="benefits">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <Image 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
              alt="Corporate training" 
              fill
              className="object-cover"
            />
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  98%
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Completion Rate</h4>
                  <p className="text-sm text-slate-600">Across all enterprise cohorts</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why partner with <span className="text-blue-600">Accredian?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-2">
              Transform your workforce into a competitive advantage. Our enterprise solutions are designed to deliver measurable ROI through targeted skill development.
            </p>
            
            <div className="flex flex-col gap-4">
              {BENEFITS.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
