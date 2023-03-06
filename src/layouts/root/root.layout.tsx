import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";

export function RootLayout() {
  return (
    <div className="flex justify-center w-screen h-screen align-middle">
      <div className="relative w-screen h-screen sm:max-w-screen-2xl max-h-[800px] content-center sm:content-start flex flex-col pt-20">
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </div>
  );
}
