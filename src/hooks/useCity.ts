import { useParams } from "react-router-dom";

// Helper function to format city name from URL param
const formatCityName = (name: string | undefined): string => {
  if (!name) {
    return "Sua Cidade"; // Default value
  }
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const useCity = () => {
  const { nomeDaCidade } = useParams<{ nomeDaCidade: string }>();
  const cityName = formatCityName(nomeDaCidade);

  return { 
    cityParam: nomeDaCidade,
    cityName,
  };
};
