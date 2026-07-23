'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50" id="hero">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 font-medium w-fit mb-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              #1 Enterprise EdTech Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Upskill Your Team with <span className="text-blue-600">Accredian Enterprise</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Empower your workforce with top-tier education and practical skills. We provide world-class programs in Data Science, AI, and Product Management to future-proof your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 text-base h-14 rounded-md shadow-lg shadow-blue-200">
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-base h-14 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-md">
                Explore Programs
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="User avatar" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>Join 10,000+ professionals upskilling today</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                ↑
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Productivity</p>
                <p className="text-xl font-bold text-slate-900">+45%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
