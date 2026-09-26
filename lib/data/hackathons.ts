export type BuildLogEntry = {
  name: string;
  note: string;
};

export const buildLog: BuildLogEntry[] = [
  {
    name: "Smart India Hackathon",
    note: "Built AgriGuard AI's crop-disease detection and monitoring workflow under hackathon constraints.",
  },
  {
    name: "NASA Space Apps Challenge",
    note: "Applied AI and data-driven problem solving to a challenge track within a fixed build window.",
  },
  {
    name: "Hacktimus / Fynd",
    note: "Worked through a technical challenge track, iterating on a build under time pressure.",
  },
];

export const buildStages = ["PROBLEM", "BUILD", "ITERATE", "PRESENT"];
