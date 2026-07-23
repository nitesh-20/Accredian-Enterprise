'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Briefcase, Video, Certificate } from 'lucide-react';

const FEATURES = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: 'Industry-Vetted Curriculum',
    description: 'Learn from syllabi designed by top product leaders and data scientists to match current market demands.'
  },
  {
    icon: <Video className="w-6 h-6 text-blue-600" />,
    title: 'Live Interactive Sessions',
    description: 'Engage in real-time with instructors and peers. Get your doubts resolved instantly during the classes.'
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: 'Hands-on Projects',
    description: 'Build a strong portfolio by working on real-world projects and case studies from top companies.'
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: '1-on-1 Mentorship',
    description: 'Get personalized guidance and career advice from industry experts to accelerate your professional growth.'
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-600" />,
    title: 'Career Support',
    description: 'Access exclusive job boards, resume building workshops, and mock interviews to land your dream job.'
  },
  {
    icon: <Certificate className="w-6 h-6 text-blue-600" />,
    title: 'Global Certification',
    description: 'Earn a globally recognized certificate upon completion to showcase your newly acquired skills.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-slate-50" id="features">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to <span className="text-blue-600">excel</span>
          </h2>
          <p className="text-lg text-slate-600">
            Our comprehensive programs are designed to provide a holistic learning experience, combining theoretical knowledge with practical application.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white group-hover:[&>svg]:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
