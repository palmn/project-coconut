import { getCountryCode } from "../utils/countryFlags";

interface CountryFlagProps {
  country: string;
  size?: "sm" | "md" | "lg";
}

export function CountryFlag({ country, size = "md" }: CountryFlagProps) {
  const countryCode = getCountryCode(country);

  const sizeClasses = {
    sm: "w-5 h-4",
    md: "w-7 h-5",
    lg: "w-10 h-7",
  };

  return (
    <img
      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
      alt={`${country} flag`}
      className={`${sizeClasses[size]} object-cover rounded shadow-sm`}
    />
  );
}
