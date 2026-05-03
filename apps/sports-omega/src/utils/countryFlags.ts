// Map Swedish country names to ISO 3166-1 alpha-2 country codes
export const countryToISO: { [key: string]: string } = {
  "Sverige": "SE",
  "Spanien": "ES",
  "Brasilien": "BR",
  "Argentina": "AR",
  "Tyskland": "DE",
  "Frankrike": "FR",
  "England": "GB",
  "Portugal": "PT",
  "Nederländerna": "NL",
  "Belgien": "BE",
  "Italien": "IT",
  "Kroatien": "HR",
  "Mexiko": "MX",
  "USA": "US",
  "Kanada": "CA",
  "Uruguay": "UY",
  "Colombia": "CO",
  "Japan": "JP",
  "Sydkorea": "KR",
  "Schweiz": "CH",
  "Polen": "PL",
  "Danmark": "DK",
  "Norge": "NO",
  "Finland": "FI",
};

export function getCountryCode(countryName: string): string {
  return countryToISO[countryName] || "XX";
}
