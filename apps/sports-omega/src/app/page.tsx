import { Logo } from "./components/Logo";
import { LiveMatchCard } from "./components/LiveMatchCard";
import { NewsCard } from "./components/NewsCard";
import { OddsComparisonTable } from "./components/OddsComparisonTable";

export default function HomePage() {
  return (
    <<mainmain className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <<sectionsection className="relative overflow-hidden bg-gradient-to-br from-[#003566] via-[#004785] to-[#003566] py-20 px-6 text-center text-white">
        <<divdiv className="relative z-10 max-w-7xl mx-auto">
          <<divdiv className="flex justify-center mb-8">
            <<LogoLogo size="lg" showText={true} variant="light" />
          </div>
          <<hh1 className="text-4xl md:text-6xl font-bold mb-4">
            Sverige mot Världen 2026
          </h1>
          <<pp className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Följ Blågult i USA, Kanada och Mexiko. Vi jämför oddsen från alla svenska spelbolag så att du får det bästa värdet.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <<divdiv className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <<sectionsection>
          <<hh2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <<spanspan className="w-2 h-8 bg-[#d4af37] rounded-full" />
            Live Matcher
          </h2>
          <<divdiv className="grid md:grid-cols-2 gap-6">
            <<LiveLiveMatchCard 
              homeTeam="Brasilien" 
              awayTeam="Argentina" 
              homeScore={2} 
              awayScore={1} 
              minute={78} 
              status="Grupp A" 
            />
            <<LiveLiveMatchCard 
              homeTeam="Frankrike" 
              awayTeam="Tyskland" 
              homeScore={0} 
              awayScore={0} 
              minute={34} 
              status="Grupp C" 
            />
          </div>
        </section>

        <<sectionsection>
          <<hh2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <<spanspan className="w-2 h-8 bg-[#d4af37] rounded-full" />
            Bästa Oddsen: Sverige vs Spanien
          </h2>
          <<OddsOddsComparisonTable />
        </section>

        <<sectionsection>
          <<hh2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <<spanspan className="w-2 h-8 bg-[#d4af37] rounded-full" />
            Senaste Nyheterna
          </h2>
          <<divdiv className="grid md:grid-cols-3 gap-6">
            <<NewsNewsCard title="Zlatan: 'Sverige kan vinna VM 2026'" category="Spelare" />
            <<NewsNewsCard title="Isak i toppform inför starten" category="Analys" />
            <<NewsNewsCard title="VM-grupperna klara" category="VM-nyheter" />
          </div>
        </section>
      </div>

      {/* Footer */}
      <<footerfooter className="border-t border-border bg-card py-12 px-6">
        <<divdiv className="max-w-7xl mx-auto text-center text-sm opacity-60">
          <<pp>© 2026 VM Oddsjämförelse. Spela ansvarsfullt. 18+.</p>
        </div>
      </footer>
    </main>
  );
}
