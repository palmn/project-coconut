import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Tv, Radio as RadioIcon, TrendingUp } from "lucide-react";
import { getMatchById } from "@/data/matches";
import { getHeadToHead } from "@/data/headToHead";
import { CountryFlag } from "@/components/CountryFlag";
import { Logo } from "@/components/Logo";
import { CountdownTimer } from "@/components/CountdownTimer";
import { MatchTabs } from "@/components/MatchTabs";

import { matchesData } from "@/data/matches";

export async function generateStaticParams() {
  return matchesData.map((match) => ({
    matchId: match.id,
  }));
}

export default async function MatchDetailPage({
  params,
}: {
  params: Promise<{ matchId: string }>;
}) {
  const { matchId } = await params;
  const match = getMatchById(matchId);

  if (!match) {
    notFound();
  }

  const swedenMatchDate = new Date('2026-04-13T21:00:00');
  const headToHead = getHeadToHead(matchId);

  const bestOdds = {
    home: Math.max(
      match.odds.betsson.home,
      match.odds.unibet.home,
      match.odds.svenskaspel.home,
      match.odds.comeon.home,
      match.odds.leovegas.home
    ),
    draw: Math.max(
      match.odds.betsson.draw,
      match.odds.unibet.draw,
      match.odds.svenskaspel.draw,
      match.odds.comeon.draw,
      match.odds.leovegas.draw
    ),
    away: Math.max(
      match.odds.betsson.away,
      match.odds.unibet.away,
      match.odds.svenskaspel.away,
      match.odds.comeon.away,
      match.odds.leovegas.away
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" showText={true} />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Tillbaka</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003566] via-[#004785] to-[#003566] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4af37] to-[#c9a227] rounded-full blur-3xl opacity-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center mb-8">
            <div className="text-center lg:text-right">
              <div className="flex justify-center lg:justify-end mb-4">
                <CountryFlag country={match.homeTeam} size="lg" />
              </div>
              <h1 className="text-5xl font-bold mb-2">{match.homeTeam}</h1>
              {match.homeScore !== undefined && (
                <div className="text-7xl font-bold text-[#d4af37]">
                  {match.homeScore}
                </div>
              )}
            </div>

            <div className="text-center">
              {match.status === "live" && (
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-500 uppercase tracking-wider font-bold">Live {match.minute}&apos;</span>
                  </div>
                </div>
              )}
              <div className="text-6xl opacity-30 mb-4">VS</div>
              <div className="flex items-center gap-3 text-sm opacity-80 justify-center">
                <Calendar className="w-4 h-4" />
                <span>{match.date}</span>
                <span>•</span>
                <Clock className="w-4 h-4" />
                <span>{match.time}</span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                <CountryFlag country={match.awayTeam} size="lg" />
              </div>
              <h1 className="text-5xl font-bold mb-2">{match.awayTeam}</h1>
              {match.awayScore !== undefined && (
                <div className="text-7xl font-bold text-[#d4af37]">
                  {match.awayScore}
                </div>
              )}
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 text-sm opacity-80">
              <MapPin className="w-4 h-4" />
              <span>{match.venue}</span>
            </div>
          </div>

          {match.status === "upcoming" && match.id === "m3" && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-4 text-sm opacity-80">Matchstart om:</div>
              <CountdownTimer targetDate={swedenMatchDate} />
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Broadcast Info */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Tv className="w-6 h-6 text-[#003566]" />
                <h2>Var kan jag se matchen?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-3">TV-kanaler</div>
                  <div className="space-y-2">
                    {match.broadcast.tv.map((channel, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 rounded-lg border border-[#d4af37]/20"
                      >
                        <Tv className="w-5 h-5 text-[#003566]" />
                        <span className="font-semibold">{channel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-3">Streaming</div>
                  <div className="space-y-2">
                    {match.broadcast.streaming.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 rounded-lg border border-[#d4af37]/20"
                      >
                        <RadioIcon className="w-5 h-5 text-[#003566]" />
                        <span className="font-semibold">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Match Tabs - client component wrapper */}
            <MatchTabs match={match} headToHead={headToHead} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Best Odds */}
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-[#003566]" />
                <h3>Bästa oddsen</h3>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Hemma</div>
                  <div className="px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#003566] rounded-lg font-bold text-xl shadow-lg">
                    {bestOdds.home.toFixed(2)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Oavgjort</div>
                  <div className="px-4 py-3 bg-muted rounded-lg font-bold text-xl">
                    {bestOdds.draw.toFixed(2)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Borta</div>
                  <div className="px-4 py-3 bg-muted rounded-lg font-bold text-xl">
                    {bestOdds.away.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {Object.entries(match.odds).map(([bookmaker, odds]) => (
                  <div key={bookmaker} className="flex items-center justify-between text-sm p-2 hover:bg-muted/50 rounded transition-colors">
                    <span className="font-medium capitalize">{bookmaker}</span>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded ${odds.home === bestOdds.home ? 'bg-[#d4af37] text-[#003566] font-bold' : 'bg-muted'}`}>
                        {odds.home.toFixed(2)}
                      </span>
                      <span className={`px-2 py-1 rounded ${odds.draw === bestOdds.draw ? 'bg-[#d4af37] text-[#003566] font-bold' : 'bg-muted'}`}>
                        {odds.draw.toFixed(2)}
                      </span>
                      <span className={`px-2 py-1 rounded ${odds.away === bestOdds.away ? 'bg-[#d4af37] text-[#003566] font-bold' : 'bg-muted'}`}>
                        {odds.away.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-[#d4af37] text-[#003566] rounded-lg font-bold hover:shadow-xl transition-all shadow-lg">
                Spela nu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
