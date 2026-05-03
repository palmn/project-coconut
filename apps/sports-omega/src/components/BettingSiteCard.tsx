"use client";
import { motion } from "framer-motion";
import { Star, Gift, ExternalLink, Check } from "lucide-react";

interface BettingSite {
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  features: string[];
  color: string;
  cta: string;
}

export function BettingSiteCard({ site, index }: { site: BettingSite; index: number }) {
  const isTopRated = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,82,147,0.15)" }}
      className={`bg-card ${isTopRated ? 'border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/20 ring-2 ring-[#d4af37]/30' : 'border-2 border-border'} rounded-xl overflow-hidden group relative`}
    >
      {isTopRated && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-1 bg-gradient-to-r from-[#f4e5a1] via-[#d4af37] to-[#c9a227] text-[#0a0e1a] rounded-full font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center gap-1 border border-[#f4e5a1]">
            <Star className="w-3 h-3 fill-[#0a0e1a]" />
            <span>Bäst just nu</span>
          </div>
        </div>
      )}
      <div
        className="h-3"
        style={{ backgroundColor: site.color }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="mb-2">{site.name}</h3>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < site.rating
                      ? 'fill-[#d4af37] text-[#d4af37] drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm opacity-60">{site.rating}/5</span>
            </div>
          </div>
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl"
            style={{ backgroundColor: site.color }}
          >
            {site.name.charAt(0)}
          </div>
        </div>

        <div className="mb-6 p-4 bg-gradient-to-br from-[#003566]/20 to-[#d4af37]/10 rounded-lg border border-[#d4af37]/30">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-[#d4af37] drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]" />
            <span className="text-sm font-semibold text-[#d4af37]">Välkomstbonus</span>
          </div>
          <div className="text-lg font-bold">{site.bonus}</div>
        </div>

        <div className="space-y-2 mb-6">
          {site.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
              <span className="opacity-80">{feature}</span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[#003566] text-white rounded-lg hover:bg-[#004785] transition-colors group-hover:shadow-lg"
        >
          <span className="font-semibold">{site.cta}</span>
          <ExternalLink className="w-4 h-4" />
        </motion.button>

        <div className="mt-3 text-xs text-center opacity-60">
          18+ | Spela ansvarsfullt | Regler & villkor gäller
        </div>
      </div>
    </motion.div>
  );
}
