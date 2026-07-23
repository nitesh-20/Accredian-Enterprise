'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Thank you for reaching out! Our enterprise team will contact you shortly.');
        reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden" id="contact">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full blur-[128px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Ready to transform your <span className="text-blue-400">workforce?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Connect with our enterprise solutions team to build a customized training program that aligns with your business objectives.
            </p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                Customized learning paths
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                Dedicated account manager
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                Detailed progress analytics
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900 border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Request a Demo</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    placeholder="John Doe" 
                    {...register('fullName')}
                    className={errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    {...register('email')}
                    className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    {...register('phone')}
                    className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Acme Corp" 
                    {...register('company')}
                    className={errors.company ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How can we help you?</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your team's training needs..." 
                  className={`min-h-[120px] ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  {...register('message')}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-medium rounded-md shadow-lg shadow-blue-200/50 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get in Touch'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
