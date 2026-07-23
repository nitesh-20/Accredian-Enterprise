'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQS = [
  {
    question: "How long does a typical enterprise training program last?",
    answer: "Our programs are highly customizable. A typical program runs between 3 to 6 months, depending on the learning path and the depth of the curriculum chosen by your organization."
  },
  {
    question: "Can we track the progress of our employees?",
    answer: "Yes, you will have access to a dedicated analytics dashboard where you can monitor attendance, assignment completion rates, and overall performance of your team members in real-time."
  },
  {
    question: "Are the instructors industry professionals?",
    answer: "Absolutely. All our instructors and mentors are active industry practitioners working at top product companies. They bring real-world experience and current market insights to the classroom."
  },
  {
    question: "Can the curriculum be customized for our specific tech stack?",
    answer: "Yes, for enterprise cohorts of 20 or more employees, we offer curriculum customization to ensure the projects and tools taught align perfectly with your organization's internal tech stack."
  },
  {
    question: "What happens if an employee misses a live session?",
    answer: "All live sessions are recorded and made available on the learning management system within 24 hours. Employees can watch the recordings and reach out to mentors if they have any questions."
  }
];

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Have questions about our enterprise programs? We've got answers.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
