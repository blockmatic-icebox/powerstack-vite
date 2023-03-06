import { Route, Routes } from "react-router-dom";

import { RootLayout } from "~/layouts/root";
import "~/styles/global.css";

import { AboutPage } from "./views/about/about-page";
import { ErrorPage } from "./views/error/error-page";
import { HomePage } from "./views/home/home-page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
