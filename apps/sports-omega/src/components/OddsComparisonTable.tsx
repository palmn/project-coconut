"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { CountryFlag } from "./CountryFlag";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  odds: {
    betsson: { home: number; draw: number; away: number };
    unibet: { home: number; draw: number; away: number };
    svenskaspel: { home: number; draw: number; away: number };
    comeon: { home: number; draw: number; away: number };
    leovegas: { home: number; draw: number; away: number };
  };
}

export function OddsComparisonTable({ match }: { match: Match }) {
  const bookmakers = [
    { key: 'betsson', name: 'Betsson', color: '#00B67A' },
    { key: 'unibet', name: 'Unibet', color: '#1D9F3C' },
    { key: 'svenskaspel', name: 'Svenska Spel', color: '#003566' },
    { key: 'comeon', name: 'ComeOn', color: '#FF6B00' },
    { key: 'leovegas', name: 'LeoVegas', color: '#FFB81C' },
  ];

  const getBestOdds = (outcome: 'home' | 'draw' | 'away') => {
    return Math.max(...bookmakers.map(b => match.odds[b.key as keyof typeof match.odds][outcome]));
  };

  const bestOdds = {
    home: getBestOdds('home'),
    draw: getBestOdds('draw'),
    away: getBestOdds('away'),
  };

  return (
    <Link href={`/match/${match.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-xl overflow-hidden hover:border-[#003566] transition-colors cursor-pointer"
      >
      <div className="bg-gradient-to-r from-[#003566] to-[#004785] p-6 text-white">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center mb-4">
          <div className="text-right flex items-center justify-end gap-3">
            <div className="text-2xl font-bold">{match.homeTeam}</div>
            <CountryFlag country={match.homeTeam} size="lg" />
          </div>
          <div className="text-xl opacity-60">vs</div>
          <div className="text-left flex items-center gap-3">
            <CountryFlag country={match.awayTeam} size="lg" />
            <div className="text-2xl font-bold">{match.awayTeam}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{match.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{match.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{match.venue}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#003566]" />
          <h3 className="text-[#003566]">Oddsjämförelse - Svenska spelbolag</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4">Spelbolag</th>
                <th className="text-center py-3 px-4">Hemmavinst</th>
                <th className="text-center py-3 px-4">Oavgjort</th>
                <th className="text-center py-3 px-4">Bortavinst</th>
                <th className="text-right py-3 px-4">Spela</th>
              </tr>
            </thead>
            <tbody>
              {bookmakers.map((bookmaker, index) => {
                const odds = match.odds[bookmaker.key as keyof typeof match.odds];
                return (
                  <motion.tr
                    key={bookmaker.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: bookmaker.color }}
                        />
                        <span className="font-medium">{bookmaker.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={`px-3 py-1.5 rounded font-semibold ${
                        odds.home === bestOdds.home
                          ? 'bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#003566] shadow-lg border border-[#f4e5a1]'
                          : 'bg-muted'
                      }`}>
                        {odds.home.toFixed(2)}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={`px-3 py-1.5 rounded font-semibold ${
                        odds.draw === bestOdds.draw
                          ? 'bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#003566] shadow-lg border border-[#f4e5a1]'
                          : 'bg-muted'
                      }`}>
                        {odds.draw.toFixed(2)}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={`px-3 py-1.5 rounded font-semibold ${
                        odds.away === bestOdds.away
                          ? 'bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#003566] shadow-lg border border-[#f4e5a1]'
                          : 'bg-muted'
                      }`}>
                        {odds.away.toFixed(2)}
                      </span>
                    </td>
                    <td className="text-right py-4 px-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-[#003566] text-white rounded hover:bg-[#004785] transition-colors text-sm ml-auto"
                      >
                        <span>Spela nu</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 rounded-lg text-sm border border-[#d4af37]/20">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-4 h-4 mt-0.5 text-[#d4af37]" />
            <div>
              <span className="font-semibold">Bästa oddsen markerade i guld.</span>
              <span className="opacity-60 ml-1">
                Jämför alltid odds innan du spelar för att få bästa möjliga värde på ditt spel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
