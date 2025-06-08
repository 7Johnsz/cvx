'use client'

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Github, FileSymlink, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white dark:bg-background border fixed top-0 left-0 right-0 z-50 shadow-sm dark:shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-6 md:px-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FileSymlink className="h-6 w-6" />
            <span className="font-bold text-lg">CVx</span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm ml-6">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Início</Link>
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Em breve</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded hover:bg-accent/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="https://github.com/7johnsz"
            className="hidden md:inline-flex p-2 rounded hover:bg-accent/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </Link>

          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="outline"
            className="flex items-center gap-1 border-0"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-background border-t px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-gray-600 dark:hover:text-gray-300">Início</Link>
          <Link href="/" className="block hover:text-gray-600 dark:hover:text-gray-300">Em breve</Link>
          <Link
            href="https://github.com/7johnsz"
            className="block hover:text-gray-600 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github: OpenSource
          </Link>
        </nav>
      )}
    </header>
  );
}
