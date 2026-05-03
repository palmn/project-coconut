import { motion } from "motion/react";
import { Link } from "react-router";
import { TrendingUp, Target, Users } from "lucide-react";
import { CountryFlag } from "./CountryFlag";

interface LiveMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute: number;
  status: string;
  stats: {
    possession: [number, number];
    shots: [number, number];
    shotsOnTarget: [number, number];
    corners: [number, number];
  };
  topOdds: {
    home: { value: number; site: string };
    draw: { value: number; site: string };
    away: { value: number; site: string };
  };
}

export function LiveMatchCard({ match }: { match: LiveMatch }) {
  return (
    <Link to={`/match/${match.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border-2 border-[#003566] rounded-xl p-6 relative overflow-hidden hover:border-[#d4af37] transition-colors cursor-pointer"
      >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37] to-[#c9a227] opacity-10 rounded-full -mr-16 -mt-16 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#d4af37] to-[#c9a227] opacity-10 rounded-full -ml-12 -mb-12 blur-2xl" />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-red-500 rounded-full"
          />
          <span className="text-red-500 uppercase tracking-wider">Live</span>
          <span className="text-sm opacity-60">{match.minute}'</span>
        </div>
        <span className="text-sm opacity-60 uppercase">{match.status}</span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center mb-8">
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 mb-2">
            <span className="text-sm opacity-60 uppercase tracking-wide">{match.homeTeam}</span>
            <CountryFlag country={match.homeTeam} size="md" />
          </div>
          <motion.div
            key={match.homeScore}
            initial={{ scale: 1.3, color: "#d4af37" }}
            animate={{ scale: 1, color: "#e8eaed" }}
            className="text-[4.5rem] leading-none font-bold"
          >
            {match.homeScore}
          </motion.div>
        </div>

        <div className="text-3xl opacity-30">–</div>

        <div className="text-left">
          <div className="flex items-center gap-2 mb-2">
            <CountryFlag country={match.awayTeam} size="md" />
            <span className="text-sm opacity-60 uppercase tracking-wide">{match.awayTeam}</span>
          </div>
          <motion.div
            key={match.awayScore}
            initial={{ scale: 1.3, color: "#d4af37" }}
            animate={{ scale: 1, color: "#e8eaed" }}
            className="text-[4.5rem] leading-none font-bold"
          >
            {match.awayScore}
          </motion.div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="opacity-60">Bollinnehav</span>
            <span>{match.stats.possession[0]}% - {match.stats.possession[1]}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${match.stats.possession[0]}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#003566] to-[#004785]"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center pt-2">
          <div>
            <Target className="w-4 h-4 mx-auto mb-1 opacity-40" />
            <div className="text-sm opacity-60 mb-1">Skott (på mål)</div>
            <div className="font-semibold">{match.stats.shots[0]} ({match.stats.shotsOnTarget[0]}) - {match.stats.shots[1]} ({match.stats.shotsOnTarget[1]})</div>
          </div>
          <div>
            <div className="text-sm opacity-60 mb-1">Hörnor</div>
            <div className="font-semibold">{match.stats.corners[0]} - {match.stats.corners[1]}</div>
          </div>
          <div>
            <Users className="w-4 h-4 mx-auto mb-1 opacity-40" />
            <div className="text-sm opacity-60 mb-1">VM 2026</div>
            <div className="text-xs opacity-60">Grupp A</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="flex items-center gap-2 mb-3 text-sm opacity-60">
          <TrendingUp className="w-4 h-4" />
          <span>Bästa live-odds just nu</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-xs opacity-60 mb-1">Hemma</div>
            <div className="px-3 py-2 bg-[#003566] text-white rounded font-semibold">
              {match.topOdds.home.value.toFixed(2)}
            </div>
            <div className="text-xs opacity-40 mt-1">{match.topOdds.home.site}</div>
          </div>
          <div className="text-center">
            <div className="text-xs opacity-60 mb-1">Oavgjort</div>
            <div className="px-3 py-2 bg-muted rounded font-semibold">
              {match.topOdds.draw.value.toFixed(2)}
            </div>
            <div className="text-xs opacity-40 mt-1">{match.topOdds.draw.site}</div>
          </div>
          <div className="text-center">
            <div className="text-xs opacity-60 mb-1">Borta</div>
            <div className="px-3 py-2 bg-muted rounded font-semibold">
              {match.topOdds.away.value.toFixed(2)}
            </div>
            <div className="text-xs opacity-40 mt-1">{match.topOdds.away.site}</div>
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
