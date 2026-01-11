import { useState } from "react";
import DocsSidebar from "./components/DocsSidebar";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import StepperPage from "./pages/StepperPage";
import TokensPage from "./pages/TokensPage";
import "./App.css";

function App() {
  const [page, setPage] = useState<
    "overview" | "button" | "card" | "stepper" | "tokens"
  >("overview");

  return (
    <div className="w-[80vw] mx-auto text-slate-900 mt-6">
      {/* Header */}
      <header className="h-32 border-b border-slate-700/50">
        <div className="w-full px-6 h-full flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Design System</h1>
            <p className="text-slate-600 text-sm">
              Interactive Component Documentation
            </p>
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
              {page === "stepper" && <StepperPage />}
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
