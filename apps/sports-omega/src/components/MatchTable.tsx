"use client";
import { motion } from "framer-motion";
import { Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { CountryFlag } from "./CountryFlag";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  status: "live" | "upcoming";
  liveScore?: { home: number; away: number };
  minute?: number;
  bestOdds: {
    home: number;
    draw: number;
    away: number;
  };
}

export function MatchTable({ matches }: { matches: Match[] }) {
  return (
    <div className="bg-card border border-border backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#003566] to-[#004785] px-6 py-4 text-white">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          <h3>Alla matcher</h3>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border bg-muted/30">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-semibold">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold">Match</th>
              <th className="text-left py-3 px-4 text-sm font-semibold">Tid</th>
              <th className="text-center py-3 px-4 text-sm font-semibold">1</th>
              <th className="text-center py-3 px-4 text-sm font-semibold">X</th>
              <th className="text-center py-3 px-4 text-sm font-semibold">2</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <motion.tr
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="py-4 px-4">
                  <Link to={`/match/${match.id}`} className="block">
                    {match.status === "live" ? (
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-red-500 rounded-full"
                        />
                        <span className="text-red-500 text-sm font-semibold uppercase">Live</span>
                        {match.minute && (
                          <span className="text-xs text-muted-foreground">{match.minute}'</span>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{match.date}</span>
                      </div>
                    )}
                  </Link>
                </td>

                <td className="py-4 px-4">
                  <Link to={`/match/${match.id}`} className="block">
                    <div className="flex items-center gap-2">
                      <CountryFlag country={match.homeTeam} size="sm" />
                      <span className="font-medium">{match.homeTeam}</span>
                      {match.liveScore && (
                        <span className="text-lg font-bold text-foreground">
                          {match.liveScore.home} - {match.liveScore.away}
                        </span>
                      )}
                      {!match.liveScore && <span className="text-muted-foreground">vs</span>}
                      <span className="font-medium">{match.awayTeam}</span>
                      <CountryFlag country={match.awayTeam} size="sm" />
                    </div>
                  </Link>
                </td>

                <td className="py-4 px-4 text-sm text-muted-foreground">
                  <Link to={`/match/${match.id}`} className="block">
                    {match.time}
                  </Link>
                </td>

                <td className="text-center py-4 px-4">
                  <Link to={`/match/${match.id}`} className="block">
                    <div className="inline-block px-3 py-1 bg-muted rounded font-semibold text-sm hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#c9a227] hover:text-[#003566] transition-all cursor-pointer hover:shadow-md">
                      {match.bestOdds.home.toFixed(2)}
                    </div>
                  </Link>
                </td>

                <td className="text-center py-4 px-4">
                  <Link to={`/match/${match.id}`} className="block">
                    <div className="inline-block px-3 py-1 bg-muted rounded font-semibold text-sm hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#c9a227] hover:text-[#003566] transition-all cursor-pointer hover:shadow-md">
                      {match.bestOdds.draw.toFixed(2)}
                    </div>
                  </Link>
                </td>

                <td className="text-center py-4 px-4">
                  <Link to={`/match/${match.id}`} className="block">
                    <div className="inline-block px-3 py-1 bg-muted rounded font-semibold text-sm hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#c9a227] hover:text-[#003566] transition-all cursor-pointer hover:shadow-md">
                      {match.bestOdds.away.toFixed(2)}
                    </div>
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-muted/20 text-center">
        <button className="text-sm text-[#d4af37] hover:underline font-semibold">
          Visa alla matcher →
        </button>
      </div>
    </div>
  );
}
