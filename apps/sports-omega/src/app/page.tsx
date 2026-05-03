import { Logo } from "@/components/Logo";
import { LiveMatchCard } from "@/components/LiveMatchCard";
import { NewsCard } from "@/components/NewsCard";
import { OddsComparisonTable } from "@/components/OddsComparisonTable";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003566] via-[#004785] to-[#003566] py-20 px-6 text-center text-white">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <Logo size="lg" showText={true} variant="light" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sverige mot Världen 2026
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Följ Blågult i USA, Kanada och Mexiko. Vi jämför oddsen från alla svenska spelbolag så att du får det bästa värdet.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-[#d4af37] rounded-full" />
            Live Matcher
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <LiveMatchCard match={{
              id: "bra-arg-1",
              homeTeam: "Brasilien",
              awayTeam: "Argentina",
              homeScore: 2,
              awayScore: 1,
              minute: 78,
              status: "Grupp A",
              stats: { possession: [52, 48], shots: [14, 10], shotsOnTarget: [6, 4], corners: [5, 3] },
              topOdds: { home: { value: 2.10, site: "Bet365" }, draw: { value: 3.40, site: "Unibet" }, away: { value: 3.80, site: "Svenska Spel" } }
            }} />
            <LiveMatchCard match={{
              id: "fra-ger-1",
              homeTeam: "Frankrike",
              awayTeam: "Tyskland",
              homeScore: 0,
              awayScore: 0,
              minute: 34,
              status: "Grupp C",
              stats: { possession: [55, 45], shots: [8, 6], shotsOnTarget: [2, 1], corners: [4, 2] },
              topOdds: { home: { value: 1.80, site: "Bet365" }, draw: { value: 3.60, site: "ComeOn" }, away: { value: 4.50, site: "Unibet" } }
            }} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-[#d4af37] rounded-full" />
            Bästa Oddsen: Sverige vs Spanien
          </h2>
          <OddsComparisonTable match={{
            id: "swe-esp-1",
            homeTeam: "Sverige",
            awayTeam: "Spanien",
            date: "2026-06-15",
            time: "20:00",
            venue: "MetLife Stadium, New Jersey",
            odds: {
              betsson: { home: 4.50, draw: 3.40, away: 1.80 },
              unibet: { home: 4.75, draw: 3.25, away: 1.85 },
              svenskaspel: { home: 4.40, draw: 3.50, away: 1.75 },
              comeon: { home: 4.80, draw: 3.30, away: 1.82 },
              leovegas: { home: 4.65, draw: 3.45, away: 1.78 }
            }
          }} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-[#d4af37] rounded-full" />
            Senaste Nyheterna
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <NewsCard article={{
              id: "news-1",
              title: "Zlatan: 'Sverige kan vinna VM 2026'",
              excerpt: "Den svenska legendaren tror på blågult i sommarens stora turnering.",
              category: "Spelare",
              date: "2026-05-03",
              image: "",
              readTime: "3 min"
            }} index={0} />
            <NewsCard article={{
              id: "news-2",
              title: "Isak i toppform inför starten",
              excerpt: "Newcastles stjärna har gjort 22 mål denna säsong och ser stark ut.",
              category: "Analys",
              date: "2026-05-02",
              image: "",
              readTime: "5 min"
            }} index={1} />
            <NewsCard article={{
              id: "news-3",
              title: "VM-grupperna klara",
              excerpt: "Sverige hamnar i Grupp E tillsammans med Spanien, Japan och Nya Zeeland.",
              category: "VM-nyheter",
              date: "2026-05-01",
              image: "",
              readTime: "2 min"
            }} index={2} />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm opacity-60">
          <p>© 2026 VM Oddsjämförelse. Spela ansvarsfullt. 18+.</p>
        </div>
      </footer>
    </main>
  );
}
