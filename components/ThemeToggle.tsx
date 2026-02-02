"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !dark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
