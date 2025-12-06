import React from 'react';
import { Calculator, TrendingUp, Shield, FileText, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Smart Data Collection",
    description: "We systematically collect your financial details via chat to understand your income, expenses, and savings potential.",
    className: "md:col-span-2"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Risk-Based Profiling",
    description: "Zyvox evaluates your risk tolerance to recommend the perfect mix of Equity, Debt, and Gold assets.",
    className: "md:col-span-1"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Instant Plans",
    description: "Get a detailed text-based plan with SIP projections and fund recommendations in seconds.",
    className: "md:col-span-1"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bank-Grade Security",
    description: "Your financial data is encrypted and stored securely. We never share your personal info with third parties.",
    className: "md:col-span-2"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose <span className="text-emerald-400">Zyvox AI</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We combine the empathy of a human advisor with the speed and precision of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative group overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 
                hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20
                ${feature.className}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
