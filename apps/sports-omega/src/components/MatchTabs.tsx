import { motion } from "motion/react";
import * as Tabs from "@radix-ui/react-tabs";
import { Activity, Users, History, Newspaper, BarChart3 } from "lucide-react";
import { MatchDetails } from "../data/matches";
import { HeadToHeadMatch } from "../data/headToHead";
import { CountryFlag } from "./CountryFlag";

interface MatchTabsProps {
  match: MatchDetails;
  headToHead: HeadToHeadMatch[];
}

export function MatchTabs({ match, headToHead }: MatchTabsProps) {
  return (
    <Tabs.Root defaultValue="statistics" className="w-full">
      <Tabs.List className="flex gap-2 border-b border-border mb-8 overflow-x-auto">
        <Tabs.Trigger
          value="statistics"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border-b-2 border-transparent hover:border-[#003566]/30 data-[state=active]:border-[#d4af37] data-[state=active]:text-[#003566] transition-colors whitespace-nowrap"
        >
          <BarChart3 className="w-4 h-4" />
          <span>Match Statistik</span>
        </Tabs.Trigger>

        <Tabs.Trigger
          value="lineups"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border-b-2 border-transparent hover:border-[#003566]/30 data-[state=active]:border-[#d4af37] data-[state=active]:text-[#003566] transition-colors whitespace-nowrap"
        >
          <Users className="w-4 h-4" />
          <span>Laguppställningar</span>
        </Tabs.Trigger>

        <Tabs.Trigger
          value="h2h"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border-b-2 border-transparent hover:border-[#003566]/30 data-[state=active]:border-[#d4af37] data-[state=active]:text-[#003566] transition-colors whitespace-nowrap"
        >
          <History className="w-4 h-4" />
          <span>Senaste möten</span>
        </Tabs.Trigger>

        <Tabs.Trigger
          value="news"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border-b-2 border-transparent hover:border-[#003566]/30 data-[state=active]:border-[#d4af37] data-[state=active]:text-[#003566] transition-colors whitespace-nowrap"
        >
          <Newspaper className="w-4 h-4" />
          <span>Nyheter</span>
        </Tabs.Trigger>
      </Tabs.List>

      {/* Match Statistics Tab */}
      <Tabs.Content value="statistics" className="space-y-6">
        {match.stats ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-6 h-6 text-[#003566]" />
                <h2>Matchstatistik</h2>
              </div>

              <div className="space-y-6">
                {/* Possession */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Bollinnehav</span>
                    <span className="font-semibold">{match.stats.possession[0]}% - {match.stats.possession[1]}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${match.stats.possession[0]}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#003566] to-[#004785]"
                    />
                  </div>
                </div>

                {/* Pass Accuracy */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Passningssäkerhet</span>
                    <span className="font-semibold">{match.stats.passAccuracy[0]}% - {match.stats.passAccuracy[1]}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${match.stats.passAccuracy[0]}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-[#d4af37] to-[#c9a227]"
                    />
                  </div>
                </div>

                {/* Other Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm opacity-60 mb-2">Skott totalt</div>
                    <div className="text-2xl font-bold">{match.stats.shots[0]} - {match.stats.shots[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm opacity-60 mb-2">Skott på mål</div>
                    <div className="text-2xl font-bold">{match.stats.shotsOnTarget[0]} - {match.stats.shotsOnTarget[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm opacity-60 mb-2">Räddningar</div>
                    <div className="text-2xl font-bold">{match.stats.saves[0]} - {match.stats.saves[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm opacity-60 mb-2">Hörnor</div>
                    <div className="text-2xl font-bold">{match.stats.corners[0]} - {match.stats.corners[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm opacity-60 mb-2">Frisparkar</div>
                    <div className="text-2xl font-bold">{match.stats.fouls[0]} - {match.stats.fouls[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm opacity-60 mb-2">Offside</div>
                    <div className="text-2xl font-bold">{match.stats.offsides[0]} - {match.stats.offsides[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-lg border border-yellow-500/20">
                    <div className="text-sm opacity-60 mb-2">Gula kort</div>
                    <div className="text-2xl font-bold">{match.stats.yellowCards[0]} - {match.stats.yellowCards[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg border border-red-500/20">
                    <div className="text-sm opacity-60 mb-2">Röda kort</div>
                    <div className="text-2xl font-bold">{match.stats.redCards[0]} - {match.stats.redCards[1]}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Match Events */}
            {match.events && match.events.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="mb-6">Matchhändelser</h3>

                <div className="space-y-3">
                  {match.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-4 p-4 rounded-lg ${
                        event.team === 'home' ? 'bg-[#003566]/10' : 'bg-muted/50'
                      }`}
                    >
                      <div className="text-sm font-bold min-w-[3rem] text-center px-3 py-1 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#003566] rounded-full">
                        {event.minute}'
                      </div>
                      <div className="text-2xl">
                        {event.type === 'goal' && '⚽'}
                        {event.type === 'yellow' && '🟨'}
                        {event.type === 'red' && '🟥'}
                        {event.type === 'substitution' && '🔄'}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{event.player}</div>
                        {event.assistedBy && (
                          <div className="text-sm text-muted-foreground">Assist: {event.assistedBy}</div>
                        )}
                      </div>
                      <div className="text-sm opacity-60">
                        {event.team === 'home' ? match.homeTeam : match.awayTeam}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-muted-foreground">Matchstatistik är tillgänglig när matchen startar</p>
          </div>
        )}
      </Tabs.Content>

      {/* Lineups Tab */}
      <Tabs.Content value="lineups">
        {match.lineups ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-[#003566]" />
              <h2>Laguppställningar</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Home Team */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CountryFlag country={match.homeTeam} size="md" />
                  <h3>{match.homeTeam}</h3>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Formation: <span className="font-semibold text-foreground">{match.lineups.home.formation}</span>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3 text-[#003566]">Startelva</div>
                  <div className="space-y-2">
                    {match.lineups.home.startingXI.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#003566] to-[#004785] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {player.number}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.position}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold mb-3 opacity-60">Avbytare</div>
                  <div className="space-y-2">
                    {match.lineups.home.substitutes.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-3 p-2 opacity-60"
                      >
                        <div className="w-8 h-8 bg-muted text-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          {player.number}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.position}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border text-sm">
                  <span className="text-muted-foreground">Tränare:</span>{' '}
                  <span className="font-semibold">{match.lineups.home.coach}</span>
                </div>
              </div>

              {/* Away Team */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CountryFlag country={match.awayTeam} size="md" />
                  <h3>{match.awayTeam}</h3>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Formation: <span className="font-semibold text-foreground">{match.lineups.away.formation}</span>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3 text-[#003566]">Startelva</div>
                  <div className="space-y-2">
                    {match.lineups.away.startingXI.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#003566] to-[#004785] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {player.number}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.position}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold mb-3 opacity-60">Avbytare</div>
                  <div className="space-y-2">
                    {match.lineups.away.substitutes.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-3 p-2 opacity-60"
                      >
                        <div className="w-8 h-8 bg-muted text-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          {player.number}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.position}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border text-sm">
                  <span className="text-muted-foreground">Tränare:</span>{' '}
                  <span className="font-semibold">{match.lineups.away.coach}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-muted-foreground">Laguppställningar tillkännages närmare matchstart</p>
          </div>
        )}
      </Tabs.Content>

      {/* Head to Head Tab */}
      <Tabs.Content value="h2h">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <History className="w-6 h-6 text-[#003566]" />
            <h2>Senaste möten</h2>
          </div>

          {headToHead.length > 0 ? (
            <div className="space-y-4">
              {headToHead.map((h2h, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-muted-foreground">{h2h.date}</div>
                    <div className="px-3 py-1 bg-[#003566] text-white rounded-full text-xs font-semibold">
                      {h2h.tournament}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1">
                      <CountryFlag country={h2h.homeTeam} size="sm" />
                      <span className="font-semibold">{h2h.homeTeam}</span>
                    </div>

                    <div className="px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-[#003566] rounded-lg font-bold text-xl mx-4">
                      {h2h.score}
                    </div>

                    <div className="flex items-center gap-2 flex-1 justify-end">
                      <span className="font-semibold">{h2h.awayTeam}</span>
                      <CountryFlag country={h2h.awayTeam} size="sm" />
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground text-center">
                    {h2h.venue}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <History className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="text-muted-foreground">Inga tidigare möten registrerade</p>
            </div>
          )}
        </motion.div>
      </Tabs.Content>

      {/* News Tab */}
      <Tabs.Content value="news">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Newspaper className="w-6 h-6 text-[#003566]" />
            <h2>Matchrelaterade nyheter</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 border border-border rounded-lg hover:border-[#003566] transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-[#003566] to-[#004785] rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-2">För 2 timmar sedan</div>
                  <h3 className="mb-2">Experterna: "{match.homeTeam} favoriter trots underläge"</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Trots att oddsen pekar mot {match.awayTeam}, tror flera fotbollsexperter att {match.homeTeam} har goda chanser att vinna matchen...
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg hover:border-[#003566] transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-[#d4af37] to-[#c9a227] rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-2">För 5 timmar sedan</div>
                  <h3 className="mb-2">VM-statistik: {match.homeTeam} vs {match.awayTeam}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Vi har granskat statistiken från de senaste mötena mellan lagen. Här är vad siffrorna säger...
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg hover:border-[#003566] transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-[#003566]/50 to-[#004785]/50 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-2">Igår</div>
                  <h3 className="mb-2">Odds-guiden: Bästa spelen inför stormatchen</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Våra oddsexperter har analyserat alla spelbolag och hittat de bästa oddsen och speltipsen...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
