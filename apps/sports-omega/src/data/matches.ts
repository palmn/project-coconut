export interface Player {
  number: number;
  name: string;
  position: string;
}

export interface MatchDetails {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  status: "live" | "upcoming" | "finished";
  homeScore?: number;
  awayScore?: number;
  minute?: number;
  broadcast: {
    tv: string[];
    streaming: string[];
  };
  stats?: {
    possession: [number, number];
    shots: [number, number];
    shotsOnTarget: [number, number];
    corners: [number, number];
    fouls: [number, number];
    yellowCards: [number, number];
    redCards: [number, number];
    offsides: [number, number];
    saves: [number, number];
    passAccuracy: [number, number];
  };
  lineups?: {
    home: {
      formation: string;
      startingXI: Player[];
      substitutes: Player[];
      coach: string;
    };
    away: {
      formation: string;
      startingXI: Player[];
      substitutes: Player[];
      coach: string;
    };
  };
  odds: {
    betsson: { home: number; draw: number; away: number };
    unibet: { home: number; draw: number; away: number };
    svenskaspel: { home: number; draw: number; away: number };
    comeon: { home: number; draw: number; away: number };
    leovegas: { home: number; draw: number; away: number };
  };
  events?: {
    minute: number;
    type: 'goal' | 'yellow' | 'red' | 'substitution';
    team: 'home' | 'away';
    player: string;
    assistedBy?: string;
  }[];
}

export const matchesData: MatchDetails[] = [
  {
    id: "m3",
    homeTeam: "Sverige",
    awayTeam: "Spanien",
    date: "13 april 2026",
    time: "21:00",
    venue: "MetLife Stadium, New Jersey",
    status: "upcoming",
    broadcast: {
      tv: ["TV4", "SVT1"],
      streaming: ["TV4 Play", "SVT Play"],
    },
    odds: {
      betsson: { home: 3.40, draw: 3.20, away: 2.10 },
      unibet: { home: 3.45, draw: 3.15, away: 2.15 },
      svenskaspel: { home: 3.35, draw: 3.25, away: 2.05 },
      comeon: { home: 3.50, draw: 3.10, away: 2.12 },
      leovegas: { home: 3.42, draw: 3.18, away: 2.08 },
    },
    lineups: {
      home: {
        formation: "4-3-3",
        startingXI: [
          { number: 1, name: "Robin Olsen", position: "GK" },
          { number: 2, name: "Emil Krafth", position: "RB" },
          { number: 3, name: "Victor Lindelöf", position: "CB" },
          { number: 4, name: "Isak Hien", position: "CB" },
          { number: 5, name: "Ludwig Augustinsson", position: "LB" },
          { number: 6, name: "Albin Ekdal", position: "CM" },
          { number: 7, name: "Dejan Kulusevski", position: "CM" },
          { number: 8, name: "Kristoffer Olsson", position: "CM" },
          { number: 9, name: "Alexander Isak", position: "ST" },
          { number: 10, name: "Emil Forsberg", position: "LW" },
          { number: 11, name: "Viktor Gyökeres", position: "RW" },
        ],
        substitutes: [
          { number: 12, name: "Kristoffer Nordfeldt", position: "GK" },
          { number: 13, name: "Gabriel Gudmundsson", position: "LB" },
          { number: 14, name: "Jesper Karlström", position: "CM" },
          { number: 15, name: "Anthony Elanga", position: "FW" },
        ],
        coach: "Janne Andersson",
      },
      away: {
        formation: "4-3-3",
        startingXI: [
          { number: 1, name: "Unai Simón", position: "GK" },
          { number: 2, name: "Dani Carvajal", position: "RB" },
          { number: 3, name: "Aymeric Laporte", position: "CB" },
          { number: 4, name: "Pau Torres", position: "CB" },
          { number: 5, name: "Alejandro Balde", position: "LB" },
          { number: 6, name: "Rodri", position: "CM" },
          { number: 7, name: "Pedri", position: "CM" },
          { number: 8, name: "Gavi", position: "CM" },
          { number: 9, name: "Álvaro Morata", position: "ST" },
          { number: 10, name: "Ferran Torres", position: "LW" },
          { number: 11, name: "Nico Williams", position: "RW" },
        ],
        substitutes: [
          { number: 12, name: "David Raya", position: "GK" },
          { number: 13, name: "Marcos Llorente", position: "MF" },
          { number: 14, name: "Mikel Oyarzabal", position: "FW" },
          { number: 15, name: "Dani Olmo", position: "MF" },
        ],
        coach: "Luis de la Fuente",
      },
    },
  },

  {
    id: "m1",
    homeTeam: "Brasilien",
    awayTeam: "Argentina",
    date: "12 april 2026",
    time: "Live",
    venue: "Rose Bowl, Los Angeles",
    status: "live",
    homeScore: 2,
    awayScore: 1,
    minute: 78,
    broadcast: {
      tv: ["TV4", "Viaplay Sports"],
      streaming: ["TV4 Play", "Viaplay"],
    },
    stats: {
      possession: [52, 48],
      shots: [16, 14],
      shotsOnTarget: [7, 6],
      corners: [8, 5],
      fouls: [12, 15],
      yellowCards: [2, 3],
      redCards: [0, 0],
      offsides: [3, 4],
      saves: [5, 5],
      passAccuracy: [87, 85],
    },
    odds: {
      betsson: { home: 2.20, draw: 3.40, away: 3.20 },
      unibet: { home: 2.25, draw: 3.35, away: 3.15 },
      svenskaspel: { home: 2.15, draw: 3.45, away: 3.25 },
      comeon: { home: 2.30, draw: 3.30, away: 3.10 },
      leovegas: { home: 2.22, draw: 3.38, away: 3.18 },
    },
    events: [
      { minute: 12, type: "goal", team: "away", player: "Lionel Messi" },
      { minute: 23, type: "yellow", team: "away", player: "Rodrigo De Paul" },
      { minute: 34, type: "goal", team: "home", player: "Vinícius Júnior", assistedBy: "Neymar Jr" },
      { minute: 56, type: "goal", team: "home", player: "Richarlison" },
      { minute: 67, type: "yellow", team: "home", player: "Casemiro" },
    ],
    lineups: {
      home: {
        formation: "4-2-3-1",
        startingXI: [
          { number: 1, name: "Alisson", position: "GK" },
          { number: 2, name: "Danilo", position: "RB" },
          { number: 3, name: "Marquinhos", position: "CB" },
          { number: 4, name: "Éder Militão", position: "CB" },
          { number: 6, name: "Alex Sandro", position: "LB" },
          { number: 5, name: "Casemiro", position: "CDM" },
          { number: 8, name: "Bruno Guimarães", position: "CDM" },
          { number: 10, name: "Neymar Jr", position: "CAM" },
          { number: 7, name: "Raphinha", position: "RW" },
          { number: 11, name: "Vinícius Júnior", position: "LW" },
          { number: 9, name: "Richarlison", position: "ST" },
        ],
        substitutes: [
          { number: 12, name: "Ederson", position: "GK" },
          { number: 13, name: "Gabriel Jesus", position: "FW" },
        ],
        coach: "Dorival Júnior",
      },
      away: {
        formation: "4-3-3",
        startingXI: [
          { number: 1, name: "Emiliano Martínez", position: "GK" },
          { number: 2, name: "Nahuel Molina", position: "RB" },
          { number: 3, name: "Cristian Romero", position: "CB" },
          { number: 4, name: "Nicolás Otamendi", position: "CB" },
          { number: 5, name: "Marcos Acuña", position: "LB" },
          { number: 6, name: "Leandro Paredes", position: "CM" },
          { number: 7, name: "Rodrigo De Paul", position: "CM" },
          { number: 8, name: "Enzo Fernández", position: "CM" },
          { number: 9, name: "Julián Álvarez", position: "ST" },
          { number: 10, name: "Lionel Messi", position: "RW" },
          { number: 11, name: "Ángel Di María", position: "LW" },
        ],
        substitutes: [
          { number: 12, name: "Franco Armani", position: "GK" },
          { number: 13, name: "Lautaro Martínez", position: "FW" },
        ],
        coach: "Lionel Scaloni",
      },
    },
  },
  {
    id: "m2",
    homeTeam: "Frankrike",
    awayTeam: "Tyskland",
    date: "12 april 2026",
    time: "Live",
    venue: "Lincoln Financial Field, Philadelphia",
    status: "live",
    homeScore: 0,
    awayScore: 0,
    minute: 34,
    broadcast: {
      tv: ["TV4", "Viaplay Sports"],
      streaming: ["TV4 Play", "Viaplay"],
    },
    stats: {
      possession: [58, 42],
      shots: [8, 5],
      shotsOnTarget: [3, 2],
      corners: [4, 2],
      fouls: [8, 10],
      yellowCards: [1, 2],
      redCards: [0, 0],
      offsides: [2, 1],
      saves: [2, 3],
      passAccuracy: [89, 84],
    },
    odds: {
      betsson: { home: 2.10, draw: 3.40, away: 3.20 },
      unibet: { home: 2.15, draw: 3.35, away: 3.15 },
      svenskaspel: { home: 2.05, draw: 3.45, away: 3.25 },
      comeon: { home: 2.12, draw: 3.38, away: 3.18 },
      leovegas: { home: 2.08, draw: 3.42, away: 3.22 },
    },
  },
  {
    id: "m4",
    homeTeam: "England",
    awayTeam: "Portugal",
    date: "14 april 2026",
    time: "18:00",
    venue: "Hard Rock Stadium, Miami",
    status: "upcoming",
    broadcast: {
      tv: ["TV4", "C More"],
      streaming: ["TV4 Play", "C More Play"],
    },
    odds: {
      betsson: { home: 2.30, draw: 3.35, away: 3.15 },
      unibet: { home: 2.25, draw: 3.40, away: 3.20 },
      svenskaspel: { home: 2.35, draw: 3.30, away: 3.10 },
      comeon: { home: 2.28, draw: 3.37, away: 3.17 },
      leovegas: { home: 2.32, draw: 3.33, away: 3.13 },
    },
  },
  {
    id: "m5",
    homeTeam: "Nederländerna",
    awayTeam: "Belgien",
    date: "14 april 2026",
    time: "21:00",
    venue: "Gillette Stadium, Boston",
    status: "upcoming",
    broadcast: {
      tv: ["TV4", "SVT2"],
      streaming: ["TV4 Play", "SVT Play"],
    },
    odds: {
      betsson: { home: 2.60, draw: 3.20, away: 2.80 },
      unibet: { home: 2.55, draw: 3.25, away: 2.85 },
      svenskaspel: { home: 2.65, draw: 3.15, away: 2.75 },
      comeon: { home: 2.58, draw: 3.22, away: 2.82 },
      leovegas: { home: 2.62, draw: 3.18, away: 2.78 },
    },
  },
  {
    id: "m6",
    homeTeam: "Italien",
    awayTeam: "Kroatien",
    date: "15 april 2026",
    time: "18:00",
    venue: "Mercedes-Benz Stadium, Atlanta",
    status: "upcoming",
    broadcast: {
      tv: ["TV4", "C More"],
      streaming: ["TV4 Play", "C More Play"],
    },
    odds: {
      betsson: { home: 2.40, draw: 3.10, away: 3.00 },
      unibet: { home: 2.35, draw: 3.15, away: 3.05 },
      svenskaspel: { home: 2.45, draw: 3.05, away: 2.95 },
      comeon: { home: 2.38, draw: 3.12, away: 3.02 },
      leovegas: { home: 2.42, draw: 3.08, away: 2.98 },
    },
  },
];

export function getMatchById(id: string): MatchDetails | undefined {
  return matchesData.find(match => match.id === id);
}
