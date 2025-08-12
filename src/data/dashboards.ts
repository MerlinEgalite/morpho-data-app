export type DashboardItem = {
  title: string;
  embedUrl: string;
  height?: number;
};

// TODO: Replace these placeholders with real embed links copied from
// the Dune "Embed" button for each visualization in
// https://dune.com/morpho/gmorpho-dashboard
export const gmorphoDashboards: DashboardItem[] = [
  {
    title: "GMorpho Dashboard",
    embedUrl: "https://dune.com/embeds/5238239/8609428?darkMode=true",
    height: 700,
  },
  {
    title: "Dune Query 5510289",
    embedUrl: "https://dune.com/embeds/5510289/8979954?darkMode=true",
    height: 700,
  },
  {
    title: "Dune Query 5494671",
    embedUrl: "https://dune.com/embeds/5494671/8952087?darkMode=true",
    height: 700,
  },
  {
    title: "Dune Query 5332891",
    embedUrl: "https://dune.com/embeds/5332891/8942021?darkMode=true",
    height: 700,
  },
  {
    title: "Dune Query 5488133",
    embedUrl: "https://dune.com/embeds/5488133/8942189?darkMode=true",
    height: 700,
  },
];


