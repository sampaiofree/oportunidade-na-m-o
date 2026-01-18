import { useSearchParams } from "react-router-dom";

const formatProgramName = (value: string | null) => {
  if (!value) return "Qualifica Brasil";
  const normalized = value.replace(/[-_]/g, " ").trim();
  if (!normalized) return "Qualifica Brasil";
  return normalized
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const useProgramName = () => {
  const [searchParams] = useSearchParams();
  const programName = formatProgramName(searchParams.get("programa"));

  return { programName };
};
