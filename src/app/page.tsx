import { DuneGrid } from "@/components/DuneGrid";

export default function Home() {
  return (
    <div className="brand-container py-10">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <img src="/logo.svg" alt="Morpho" className="h-7 w-auto" />
          <a
            href="https://app.morpho.org/"
            target="_blank"
            rel="noreferrer"
            className="brand-button launch-button text-sm font-light hover:opacity-90"
          >
            Launch App
          </a>
        </div>
      </header>
      <DuneGrid />
      <footer className="mt-10 text-xs text-[var(--neutral-300)]">
        <a className="underline" href="https://dune.com/morpho/gmorpho-dashboard" target="_blank" rel="noreferrer">Dune: GMorpho Dashboard</a>
      </footer>
    </div>
  );
}
