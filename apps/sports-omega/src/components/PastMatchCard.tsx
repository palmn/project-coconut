"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { CountryFlag } from "./CountryFlag";

interface PastMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
  venue: string;
  status: string;
  stats: {
    possession: [number, number];
    shots: [number, number];
    shotsOnTarget: [number, number];
    corners: [number, number];
    fouls: [number, number];
    yellowCards: [number, number];
    redCards: [number, number];
    offsides: [number, number];
  };
  events: {
    minute: number;
    type: 'goal' | 'yellow' | 'red' | 'substitution';
    team: 'home' | 'away';
    player: string;
  }[];
}

export function PastMatchCard({ match }: { match: PastMatch }) {
  return (
    <Link href={`/match/${match.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-lg overflow-hidden hover:border-[#003566] transition-colors cursor-pointer"
      >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4 text-sm opacity-60">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{match.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{match.venue}</span>
            </div>
          </div>
          <span className="px-2 py-1 bg-muted rounded text-xs uppercase">{match.status}</span>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center mb-4">
          <div className="text-right">
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-sm opacity-60 uppercase tracking-wide">{match.homeTeam}</span>
              <CountryFlag country={match.homeTeam} size="md" />
            </div>
            <div className="text-5xl font-bold leading-none">{match.homeScore}</div>
          </div>

          <div className="text-2xl opacity-30">–</div>

          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <CountryFlag country={match.awayTeam} size="md" />
              <span className="text-sm opacity-60 uppercase tracking-wide">{match.awayTeam}</span>
            </div>
            <div className="text-5xl font-bold leading-none">{match.awayScore}</div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-2 py-3 border-t border-border text-sm text-[#d4af37] hover:text-[#f4e5a1] transition-colors font-semibold">
          <span>Visa matchsida</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
