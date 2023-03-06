import React from "react";

export function useTheme() {
  // Create a function that controls the prefered theme and keep the selection on the local storage
  const [theme, setTheme] = React.useState("dark");
  const docRef = React.useRef<Document | null>(null);

  React.useEffect(() => {
    if (document) {
      docRef.current = document;
    }
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
}
