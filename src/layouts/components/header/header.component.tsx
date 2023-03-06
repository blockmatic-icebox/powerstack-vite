import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 py-2 border-b-1 border-b-slate-700 bg-opacity-25 dark:bg-opacity-25 bg-slate-100 dark:bg-slate-900 backdrop-blur-lg backdrop-saturate-[75%]">
      <div className="flex items-center justify-between w-full mx-auto max-w-screen-2xl">
        <Link to="/">VITE PROJECT</Link>

        <nav className="flex justify-end pt-1 gap-x-4 h-30">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
