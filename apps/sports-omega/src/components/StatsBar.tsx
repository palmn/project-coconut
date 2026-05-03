import { motion } from "motion/react";
import { TrendingUp, Users, Trophy, Zap } from "lucide-react";

export function StatsBar() {
  const stats = [
    { icon: Trophy, label: "VM-matcher", value: "64", trend: "Live" },
    { icon: TrendingUp, label: "Odds jämförda", value: "2.4M+", trend: "idag" },
    { icon: Zap, label: "Bonusar aktiva", value: "18", trend: "Nu" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#003566] via-[#004785] to-[#003566] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37]/30 to-[#c9a227]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#d4af37]/40 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                  <stat.icon className="w-6 h-6 text-[#d4af37] drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-80 mb-1">{stat.label}</div>
              <div className="text-xs text-[#d4af37] font-semibold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]">{stat.trend}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
