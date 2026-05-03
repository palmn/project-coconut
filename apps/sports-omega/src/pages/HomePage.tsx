import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { TrendingUp, Radio, Clock, History, ArrowRight, MapPin, Timer, ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard } from "../components/NewsCard";
import { LiveMatchCard } from "../components/LiveMatchCard";
import { OddsComparisonTable } from "../components/OddsComparisonTable";
import { PastMatchCard } from "../components/PastMatchCard";
import { Logo } from "../components/Logo";
import { MatchTable } from "../components/MatchTable";
import { CountryFlag } from "../components/CountryFlag";
import { CountdownTimer } from "../components/CountdownTimer";
import heroImage from "../../imports/image.png";

export function HomePage() {
  const [selectedGroup, setSelectedGroup] = useState("B");
  const [pastMatchIndex, setPastMatchIndex] = useState(0);

  // Sweden's next match - April 13, 2026 at 21:00 (9 PM)
  const swedenMatchDate = new Date('2026-04-13T21:00:00');

  const groupStandings = {
    A: [
      { position: 1, team: "Frankrike", played: 2, won: 2, drawn: 0, lost: 0, gf: 6, ga: 2, gd: 4, points: 6 },
      { position: 2, team: "Tyskland", played: 2, won: 1, drawn: 0, lost: 1, gf: 4, ga: 3, gd: 1, points: 3 },
      { position: 3, team: "USA", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 4, gd: -1, points: 3 },
      { position: 4, team: "Mexiko", played: 2, won: 0, drawn: 0, lost: 2, gf: 2, ga: 6, gd: -4, points: 0 },
    ],
    B: [
      { position: 1, team: "Spanien", played: 2, won: 2, drawn: 0, lost: 0, gf: 5, ga: 1, gd: 4, points: 6 },
      { position: 2, team: "Sverige", played: 2, won: 1, drawn: 0, lost: 1, gf: 4, ga: 3, gd: 1, points: 3 },
      { position: 3, team: "Argentina", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, gd: 0, points: 3 },
      { position: 4, team: "Kanada", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 6, gd: -5, points: 0 },
    ],
    C: [
      { position: 1, team: "Brasilien", played: 2, won: 2, drawn: 0, lost: 0, gf: 5, ga: 1, gd: 4, points: 6 },
      { position: 2, team: "England", played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 2, gd: 1, points: 4 },
      { position: 3, team: "Japan", played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 3, gd: -1, points: 1 },
      { position: 4, team: "Sydkorea", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 5, gd: -4, points: 0 },
    ],
    D: [
      { position: 1, team: "Portugal", played: 2, won: 1, drawn: 1, lost: 0, gf: 4, ga: 2, gd: 2, points: 4 },
      { position: 2, team: "Nederländerna", played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 1, gd: 2, points: 4 },
      { position: 3, team: "Belgien", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, gd: 0, points: 3 },
      { position: 4, team: "Kroatien", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 5, gd: -4, points: 0 },
    ],
  };

  const currentGroupStandings = groupStandings[selectedGroup as keyof typeof groupStandings];

  const allMatches = [
    {
      id: "m1",
      homeTeam: "Brasilien",
      awayTeam: "Argentina",
      date: "12 apr",
      time: "Live",
      status: "live" as const,
      liveScore: { home: 2, away: 1 },
      minute: 78,
      bestOdds: { home: 1.85, draw: 4.20, away: 5.50 },
    },
    {
      id: "m2",
      homeTeam: "Frankrike",
      awayTeam: "Tyskland",
      date: "12 apr",
      time: "Live",
      status: "live" as const,
      liveScore: { home: 0, away: 0 },
      minute: 34,
      bestOdds: { home: 2.10, draw: 3.40, away: 3.20 },
    },
    {
      id: "m3",
      homeTeam: "Sverige",
      awayTeam: "Spanien",
      date: "13 apr",
      time: "21:00",
      status: "upcoming" as const,
      bestOdds: { home: 3.50, draw: 3.25, away: 2.15 },
    },
    {
      id: "m4",
      homeTeam: "England",
      awayTeam: "Portugal",
      date: "14 apr",
      time: "18:00",
      status: "upcoming" as const,
      bestOdds: { home: 2.30, draw: 3.35, away: 3.15 },
    },
    {
      id: "m5",
      homeTeam: "Nederländerna",
      awayTeam: "Belgien",
      date: "14 apr",
      time: "21:00",
      status: "upcoming" as const,
      bestOdds: { home: 2.60, draw: 3.20, away: 2.80 },
    },
    {
      id: "m6",
      homeTeam: "Italien",
      awayTeam: "Kroatien",
      date: "15 apr",
      time: "18:00",
      status: "upcoming" as const,
      bestOdds: { home: 2.40, draw: 3.10, away: 3.00 },
    },
  ];

  const news = [
    {
      id: "1",
      title: "Zlatan Ibrahimović: 'Sverige kan vinna VM 2026'",
      excerpt: "Den svenska fotbollslegenden tror på storbragd i USA, Kanada och Mexiko. 'Vi har laget som kan gå hela vägen', säger Zlatan i en exklusiv intervju.",
      category: "Spelare",
      date: "12 april 2026",
      image: "https://images.unsplash.com/photo-1775005968276-583380cbde49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2NjZXIlMjBwbGF5ZXIlMjBhY3Rpb24lMjBnb2FsfGVufDF8fHx8MTc3NjAyNTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min",
    },
    {
      id: "2",
      title: "Alexander Isak i toppform inför VM-starten",
      excerpt: "Newcastles svenska stjärna har gjort 23 mål denna säsong och är i karriärens form. Oddsen för att han blir skyttekung har sjunkit kraftigt.",
      category: "Analys",
      date: "11 april 2026",
      image: "https://images.unsplash.com/photo-1770237711068-6aebf8e5d591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBhY3Rpb24lMjBnb2FsfGVufDF8fHx8MTc3NjAyNTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "4 min",
    },
    {
      id: "3",
      title: "VM-grupperna klara: Sveriges väg till final",
      excerpt: "Lottningen är klar och Sverige hamnade i grupp B tillsammans med Argentina, Sydkorea och Kanada. Vi analyserar Sveriges chanser.",
      category: "VM-nyheter",
      date: "10 april 2026",
      image: "https://images.unsplash.com/photo-1705593973313-75de7bf95b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmb290YmFsbCUyMHN0YWRpdW0lMjB3b3JsZCUyMGN1cHxlbnwxfHx8fDE3NzYwMjU3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min",
    },
  ];

  const liveMatches = [
    {
      id: "m1",
      homeTeam: "Brasilien",
      awayTeam: "Argentina",
      homeScore: 2,
      awayScore: 1,
      minute: 78,
      status: "Grupp A",
      stats: {
        possession: [52, 48],
        shots: [16, 14],
        shotsOnTarget: [7, 6],
        corners: [8, 5],
      },
      topOdds: {
        home: { value: 1.85, site: "Unibet" },
        draw: { value: 4.20, site: "Betsson" },
        away: { value: 5.50, site: "Svenska Spel" },
      },
    },
    {
      id: "m2",
      homeTeam: "Frankrike",
      awayTeam: "Tyskland",
      homeScore: 0,
      awayScore: 0,
      minute: 34,
      status: "Grupp C",
      stats: {
        possession: [58, 42],
        shots: [8, 5],
        shotsOnTarget: [3, 2],
        corners: [4, 2],
      },
      topOdds: {
        home: { value: 2.10, site: "ComeOn" },
        draw: { value: 3.40, site: "LeoVegas" },
        away: { value: 3.20, site: "Betsson" },
      },
    },
  ];

  const upcomingMatches = [
    {
      id: "m3",
      homeTeam: "Sverige",
      awayTeam: "Spanien",
      date: "13 april 2026",
      time: "21:00",
      venue: "MetLife Stadium, New Jersey",
      odds: {
        betsson: { home: 3.40, draw: 3.20, away: 2.10 },
        unibet: { home: 3.45, draw: 3.15, away: 2.15 },
        svenskaspel: { home: 3.35, draw: 3.25, away: 2.05 },
        comeon: { home: 3.50, draw: 3.10, away: 2.12 },
        leovegas: { home: 3.42, draw: 3.18, away: 2.08 },
      },
    },
    {
      id: "m4",
      homeTeam: "England",
      awayTeam: "Portugal",
      date: "14 april 2026",
      time: "18:00",
      venue: "SoFi Stadium, Los Angeles",
      odds: {
        betsson: { home: 2.25, draw: 3.30, away: 3.10 },
        unibet: { home: 2.20, draw: 3.35, away: 3.15 },
        svenskaspel: { home: 2.30, draw: 3.25, away: 3.05 },
        comeon: { home: 2.22, draw: 3.32, away: 3.12 },
        leovegas: { home: 2.28, draw: 3.28, away: 3.08 },
      },
    },
  ];

  const pastMatches = [
    {
      id: "m_past1",
      homeTeam: "Sverige",
      awayTeam: "Italien",
      homeScore: 3,
      awayScore: 2,
      date: "11 april 2026",
      venue: "AT&T Stadium, Dallas",
      status: "Slutspelad",
      stats: {
        possession: [48, 52],
        shots: [14, 18],
        shotsOnTarget: [8, 9],
        corners: [6, 9],
        fouls: [12, 15],
        yellowCards: [2, 4],
        redCards: [0, 1],
        offsides: [3, 5],
      },
      events: [
        { minute: 12, type: "goal", team: "away", player: "Chiesa" },
        { minute: 23, type: "goal", team: "home", player: "Isak" },
        { minute: 34, type: "yellow", team: "away", player: "Bonucci" },
        { minute: 45, type: "goal", team: "home", player: "Kulusevski" },
        { minute: 58, type: "red", team: "away", player: "Barella" },
        { minute: 67, type: "goal", team: "away", player: "Immobile" },
        { minute: 82, type: "goal", team: "home", player: "Isak" },
      ],
    },
    {
      id: "m_past2",
      homeTeam: "Nederländerna",
      awayTeam: "Belgien",
      homeScore: 1,
      awayScore: 1,
      date: "10 april 2026",
      venue: "Arrowhead Stadium, Kansas City",
      status: "Slutspelad",
      stats: {
        possession: [55, 45],
        shots: [16, 11],
        shotsOnTarget: [6, 5],
        corners: [8, 4],
        fouls: [10, 14],
        yellowCards: [3, 3],
        redCards: [0, 0],
        offsides: [4, 2],
      },
      events: [
        { minute: 15, type: "goal", team: "home", player: "Gakpo" },
        { minute: 28, type: "yellow", team: "away", player: "De Bruyne" },
        { minute: 56, type: "goal", team: "away", player: "Lukaku" },
        { minute: 71, type: "yellow", team: "home", player: "van Dijk" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003566] via-[#004785] to-[#003566]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Swedish national team celebrating"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003566]/60 via-[#003566]/40 to-[#003566]/60" />
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <Logo size="lg" showText={true} animate={true} variant="light" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg opacity-90 max-w-2xl mx-auto text-white mb-4"
            >
              Sveriges <span className="text-[#d4af37] font-bold drop-shadow-lg">premium</span> portal för VM-odds och expertanalyser
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-6 text-sm text-white/90"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#d4af37] to-[#c9a227] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                <span>Live-odds</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#d4af37] to-[#c9a227] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                <span>Exklusiva bonusar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#d4af37] to-[#c9a227] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                <span>Expertanalys</span>
              </div>
            </motion.div>
          </div>

          {/* Sweden's Next Match + Group Table */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Sweden's Next Match - Compact */}
            <Link to="/match/m3" className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-border backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-shadow cursor-pointer h-full"
              >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#FFD700] to-[#c9a227] rounded-full animate-pulse shadow-lg" />
                  <span className="uppercase tracking-wider font-semibold text-sm">Sveriges nästa match</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Timer className="w-3 h-3" />
                  <span>Kickoff</span>
                </div>
              </div>

              <div className="mb-4">
                <CountdownTimer targetDate={swedenMatchDate} />
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <CountryFlag country="Sverige" size="lg" />
                  </div>
                  <div className="text-xl font-bold text-foreground">Sverige</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-1">VS</div>
                  <div className="text-xs text-muted-foreground">13 apr</div>
                  <div className="text-xs font-semibold text-foreground">21:00</div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <CountryFlag country="Spanien" size="lg" />
                  </div>
                  <div className="text-xl font-bold text-foreground">Spanien</div>
                </div>
              </div>

              <div className="text-center mb-4 text-xs text-muted-foreground flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>MetLife Stadium, NJ</span>
              </div>

              <div className="border-t border-border pt-4">
                <div className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>Bästa odds</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">1</div>
                    <div className="bg-gradient-to-br from-[#003566] to-[#004785] text-white px-3 py-2 rounded-lg font-bold text-lg">
                      3.50
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">X</div>
                    <div className="bg-muted px-3 py-2 rounded-lg font-bold text-lg text-foreground">
                      3.25
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">2</div>
                    <div className="bg-muted px-3 py-2 rounded-lg font-bold text-lg text-foreground">
                      2.15
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-[#FFD700] via-[#c9a227] to-[#FFD700] text-[#003566] rounded-lg font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg"
                >
                  <span>Se alla odds</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
            </Link>

            {/* Group Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden h-full"
            >
              <div className="bg-gradient-to-r from-[#003566] to-[#004785] px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <h3>Grupptabell</h3>
                  <div className="flex gap-1">
                    {['A', 'B', 'C', 'D'].map((group) => (
                      <button
                        key={group}
                        onClick={() => setSelectedGroup(group)}
                        className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
                          selectedGroup === group
                            ? 'bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#0a0e1a] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border bg-muted/30">
                    <tr>
                      <th className="text-left py-3 px-4 text-xs font-semibold">#</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold">Lag</th>
                      <th className="text-center py-3 px-4 text-xs font-semibold">S</th>
                      <th className="text-center py-3 px-4 text-xs font-semibold">V</th>
                      <th className="text-center py-3 px-4 text-xs font-semibold">O</th>
                      <th className="text-center py-3 px-4 text-xs font-semibold">F</th>
                      <th className="text-center py-3 px-4 text-xs font-semibold">+/-</th>
                      <th className="text-center py-3 px-4 text-xs font-semibold">P</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentGroupStandings.map((team, index) => (
                      <tr
                        key={team.team}
                        className={`border-b border-border last:border-0 ${
                          team.team === "Sverige" ? 'bg-[#d4af37]/10' : ''
                        } ${index < 2 ? 'border-l-4 border-l-[#d4af37]' : ''}`}
                      >
                        <td className="py-3 px-4 text-sm font-semibold">{team.position}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <CountryFlag country={team.team} size="sm" />
                            <span className="font-medium text-sm">{team.team}</span>
                          </div>
                        </td>
                        <td className="text-center py-3 px-4 text-sm">{team.played}</td>
                        <td className="text-center py-3 px-4 text-sm">{team.won}</td>
                        <td className="text-center py-3 px-4 text-sm">{team.drawn}</td>
                        <td className="text-center py-3 px-4 text-sm">{team.lost}</td>
                        <td className={`text-center py-3 px-4 text-sm font-semibold ${
                          team.gd > 0 ? 'text-green-500' : team.gd < 0 ? 'text-red-500' : ''
                        }`}>
                          {team.gd > 0 ? '+' : ''}{team.gd}
                        </td>
                        <td className="text-center py-3 px-4 text-sm font-bold">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-3 bg-muted/20 text-xs text-muted-foreground border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-1 bg-[#d4af37] rounded" />
                  <span>Topp 2 går vidare till slutspel</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Matches Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <MatchTable matches={allMatches} />
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FFD700] to-[#c9a227] rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#FFD700] to-[#c9a227] rounded-full blur-3xl opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2">Senaste från VM</h2>
              <p className="opacity-60">Exklusiv analys, spelarfokus och expertkommentarer</p>
            </div>
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-[#d4af37] hover:gap-3 transition-all font-semibold"
            >
              <span>Alla nyheter</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTI5MyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Radio className="w-8 h-8 text-red-500" />
            </motion.div>
            <div>
              <h2 className="mb-2">Pågående matcher</h2>
              <p className="opacity-60">Live-odds uppdateras varje sekund</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {liveMatches.map((match) => (
              <LiveMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches - Odds Comparison */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Clock className="w-8 h-8 text-[#003566]" />
            <div>
              <h2 className="mb-2">Kommande matcher</h2>
              <p className="opacity-60">Jämför odds från alla svenska spelbolag</p>
            </div>
          </div>

          <div className="space-y-6">
            {upcomingMatches.map((match) => (
              <OddsComparisonTable key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Matches Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <History className="w-8 h-8 text-[#003566]" />
              <div>
                <h2 className="mb-2">Tidigare matcher</h2>
                <p className="opacity-60">Fullständig statistik från avslutade matcher</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPastMatchIndex(Math.max(0, pastMatchIndex - 2))}
                disabled={pastMatchIndex === 0}
                className="p-2 rounded-lg bg-card border border-border hover:border-[#d4af37] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-muted-foreground">
                {Math.floor(pastMatchIndex / 2) + 1} / {Math.ceil(pastMatches.length / 2)}
              </span>
              <button
                onClick={() => setPastMatchIndex(Math.min(pastMatches.length - 2, pastMatchIndex + 2))}
                disabled={pastMatchIndex >= pastMatches.length - 2}
                className="p-2 rounded-lg bg-card border border-border hover:border-[#d4af37] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {pastMatches.slice(pastMatchIndex, pastMatchIndex + 2).map((match) => (
              <PastMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Logo size="sm" showText={true} />
              </div>
              <p className="text-sm opacity-60">
                Sveriges bästa oddsjämförelse för fotbolls-VM 2026. Alla svenska spelbolag på ett ställe.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Snabblänkar</h4>
              <ul className="space-y-2 text-sm opacity-60">
                <li className="hover:opacity-100 cursor-pointer">Live-matcher</li>
                <li className="hover:opacity-100 cursor-pointer">Kommande matcher</li>
                <li className="hover:opacity-100 cursor-pointer">Resultat & statistik</li>
                <li className="hover:opacity-100 cursor-pointer">Nyheter</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Spelbolag</h4>
              <ul className="space-y-2 text-sm opacity-60">
                <li className="hover:opacity-100 cursor-pointer">Betsson</li>
                <li className="hover:opacity-100 cursor-pointer">Unibet</li>
                <li className="hover:opacity-100 cursor-pointer">Svenska Spel</li>
                <li className="hover:opacity-100 cursor-pointer">Alla spelbolag</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Ansvarsfullt spelande</h4>
              <ul className="space-y-2 text-sm opacity-60">
                <li className="hover:opacity-100 cursor-pointer">Spelpaus.se</li>
                <li className="hover:opacity-100 cursor-pointer">Stödlinjen</li>
                <li className="hover:opacity-100 cursor-pointer">Om spelansvar</li>
                <li className="hover:opacity-100 cursor-pointer">18+ krävs</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
            <p>© 2026 VM Oddsjämförelse. Alla rättigheter förbehållna.</p>
            <div className="flex gap-6">
              <span className="hover:opacity-100 cursor-pointer">Integritetspolicy</span>
              <span className="hover:opacity-100 cursor-pointer">Villkor</span>
              <span className="hover:opacity-100 cursor-pointer">Kontakt</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-center opacity-60">
            Spela ansvarsfullt. Spel kan vara beroendeframkallande. 18 år är åldersgränsen för alla typer av spel om pengar.
          </div>
        </div>
      </footer>
    </div>
  );
}
