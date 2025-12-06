import React from 'react';
import { Briefcase, HeartPulse, PiggyBank, Landmark, Umbrella, TrendingUp } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

const services = [
  {
    name: "Retirement Planning",
    icon: <Umbrella className="w-8 h-8" />,
    desc: "AI-calculated corpus projections. Start investing in high-growth equity funds to secure your golden years.",
    color: "text-orange-400"
  },
  {
    name: "Tax Saving (ELSS)",
    icon: <Landmark className="w-8 h-8" />,
    desc: "Save up to ₹46,800 in taxes under Section 80C. We select the best performing ELSS funds for you.",
    color: "text-emerald-400"
  },
  {
    name: "Emergency Funds",
    icon: <HeartPulse className="w-8 h-8" />,
    desc: "Liquid fund recommendations to build a 6-month safety net that earns better than a savings account.",
    color: "text-rose-400"
  },
  {
    name: "Risk-Based SIPs",
    icon: <TrendingUp className="w-8 h-8" />,
    desc: "Personalized portfolios (Conservative, Moderate, Aggressive) based on your unique financial profile.",
    color: "text-blue-400"
  },
  {
    name: "Goal Planning",
    icon: <PiggyBank className="w-8 h-8" />,
    desc: "Buying a house? A car? We reverse-engineer the monthly investment needed to hit your targets.",
    color: "text-violet-400"
  },
  {
    name: "Portfolio Review",
    icon: <Briefcase className="w-8 h-8" />,
    desc: "Upload your existing portfolio. Our AI scans for red flags, high expense ratios, and underperformance.",
    color: "text-amber-400"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Comprehensive Wealth Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Zyvox replaces the need for expensive human advisors. Get institutional-grade planning for every aspect of your financial life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="h-[300px]">
                <TiltCard>
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 ${item.color}`}>
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
                    <p className="text-slate-400 leading-relaxed">
                        {item.desc}
                    </p>
                </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
