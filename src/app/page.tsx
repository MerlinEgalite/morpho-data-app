import { DuneGrid } from "@/components/DuneGrid";

export default function Home() {
  return (
    <div className="brand-container py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Morpho Data Dashboards</h1>
      </header>
      <DuneGrid />
      <footer className="mt-10 text-xs text-[var(--neutral-300)]">
        <a className="underline" href="https://dune.com/morpho/gmorpho-dashboard" target="_blank" rel="noreferrer">Dune: GMorpho Dashboard</a>
      </footer>
    </div>
  );
}
