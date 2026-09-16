import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Q1: What services does Linksoft offer?",
    a: "We provide a range of fintech solutions, including collections (pay-in services), disbursements (payout services), wallet disbursements, IBFT, and our One-Click seamless checkout solution.",
  },
  {
    q: "Q2: Who can benefit from your services?",
    a: "Our services are ideal for startups, SMEs, and large enterprises seeking secure, efficient, and scalable payment infrastructure.",
  },
  {
    q: "Q3: How can I get started with your services?",
    a: "Getting started is simple! Just contact us through our website, and our team will guide you through a smooth onboarding process tailored to your needs.",
  },
  {
    q: "Q4: Can I disburse payments to mobile wallets?",
    a: "Yes. We offer wallet disbursement services, allowing you to send funds directly to supported mobile wallets quickly and securely.",
  },
  {
    q: "Q5: What is the One-Click checkout solution?",
    a: "Our One-Click checkout simplifies the payment process, allowing customers to complete transactions instantly with minimal input, improving user experience.",
  },
  {
    q: "Q6: How long does the onboarding process take?",
    a: "Onboarding timelines vary depending on your requirements, but we aim to get you up and running quickly with full support at every step.",
  },
  {
    q: "Q7: How do I contact customer support?",
    a: "You can reach us via email, phone, or the contact form on our website. Our dedicated support team is here to assist you.",
  },
  {
    q: "Q8: How are your services priced?",
    a: "Our pricing is customized based on your business needs. Contact us for a tailored quote.",
  },
  {
    q: "Q9: Are there any hidden fees?",
    a: "No. We provide transparent, upfront pricing with no hidden charges, what you see is what you pay.",
  },
];

const FaqSection = () => (
  <section id="faqs" className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
      >
        Frequently Asked Questions (FAQs)
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <AccordionItem
              value={item.q}
              className="border-0 rounded-full data-[state=open]:rounded-3xl bg-secondary overflow-hidden transition-all"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-heading font-semibold text-secondary-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-secondary-foreground/90 text-sm leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
