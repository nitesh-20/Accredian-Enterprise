'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Michael Chang',
    role: 'Director of Data Science at FinTech Global',
    content: 'The customized Data Science program provided by Accredian was exactly what our team needed. The transition from theoretical concepts to practical, real-world application was seamless.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Product at InnovateInc',
    content: 'Partnering with Accredian for our product managers was the best decision this year. The 1-on-1 mentorship helped our junior PMs scale up incredibly fast.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'David Wilson',
    role: 'CHRO at TechSolutions',
    content: 'We saw a 60% increase in internal mobility after implementing Accredian’s enterprise learning paths. The ROI is clear, and the employee feedback has been outstanding.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=8'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Hear from our <span className="text-blue-600">Enterprise Partners</span>
          </h2>
          <p className="text-lg text-slate-600">
            Discover how leading organizations are transforming their workforce with Accredian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic flex-grow mb-8 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
