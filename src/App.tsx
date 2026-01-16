import { useState } from "react";
import { type PageKey } from "./types";
import DocsSidebar from "./components/DocsSidebar";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import TokensPage from "./pages/TokensPage";
import "./App.css";

function App() {
  const [page, setPage] = useState<PageKey>("overview");

  return (
    <div className="w-[80vw] mx-auto text-slate-900 mt-6">
      <header className="h-32 border-b border-slate-200">
        <div className="w-full px-6 h-full flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Component Library
            </h1>
          </div>
        </div>
      </header>

      <main className="w-full">
        <div className="w-full px-6 py-8">
          <div className="flex gap-8 w-full">
            <aside className="w-[22%] min-w-[220px] flex-shrink-0 self-start">
              <DocsSidebar current={page} onNavigate={setPage} />
            </aside>

            <section className="w-[78%]">
              {page === "overview" && <HomePage />}
              {page === "button" && <ButtonPage />}
              {page === "card" && <CardPage />}
              {page === "tokens" && <TokensPage />}
            </section>
          </div>
        </div>
      </main>
      <footer className="border-t border-slate-700/50 mt-16">
        <div className="w-full px-6 py-6 text-center text-slate-500 text-sm">
          <p>Built with React + Tailwind CSS • Design System v1.0</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
