'use client'

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Github, FileSymlink } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-transparent border">
      <div className="container mx-auto flex items-center justify-between h-16 px-10">
        <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
                <FileSymlink className="h-6 w-6" />
                <span className="font-bold text-lg">CVx</span>
            </div>

            <div>
                <nav className="hidden md:flex gap-6 text-sm">
                    <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
                    <Link href="/docs" className="hover:text-gray-600 dark:hover:text-gray-300">About</Link>
                </nav>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <Link href="https://github.com/7johnsz"
            className="p-2 rounded hover:bg-accent/50"
            target="_blank" 
            rel="noopener noreferrer"
            >
                <Github className="h-5 w-5"></Github>
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
    </header>
  );
}
