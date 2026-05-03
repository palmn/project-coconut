export interface HeadToHeadMatch {
  date: string;
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  venue: string;
}

export const headToHeadData: { [key: string]: HeadToHeadMatch[] } = {
  "m3": [ // Sverige vs Spanien
    {
      date: "12 juni 2021",
      tournament: "EM 2021",
      homeTeam: "Sverige",
      awayTeam: "Spanien",
      score: "0-0",
      venue: "La Cartuja, Sevilla"
    },
    {
      date: "15 oktober 2019",
      tournament: "EM-kval",
      homeTeam: "Spanien",
      awayTeam: "Sverige",
      score: "1-1",
      venue: "Santiago Bernabéu, Madrid"
    },
    {
      date: "10 september 2019",
      tournament: "EM-kval",
      homeTeam: "Sverige",
      awayTeam: "Spanien",
      score: "1-1",
      venue: "Friends Arena, Stockholm"
    },
  ],
  "m1": [ // Brasil vs Argentina
    {
      date: "16 juli 2021",
      tournament: "Copa América Final",
      homeTeam: "Brasilien",
      awayTeam: "Argentina",
      score: "0-1",
      venue: "Maracanã, Rio de Janeiro"
    },
    {
      date: "10 juli 2021",
      tournament: "Copa América",
      homeTeam: "Brasilien",
      awayTeam: "Argentina",
      score: "1-0",
      venue: "Maracanã, Rio de Janeiro"
    },
    {
      date: "15 november 2019",
      tournament: "Vänskapsmatch",
      homeTeam: "Brasilien",
      awayTeam: "Argentina",
      score: "0-1",
      venue: "King Abdullah Stadium, Riyadh"
    },
  ],
};

export function getHeadToHead(matchId: string): HeadToHeadMatch[] {
  return headToHeadData[matchId] || [];
}
