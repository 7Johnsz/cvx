'use client'

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Github, FileSymlink, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 dark:bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 md:px-6 h-16 grid grid-cols-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <FileSymlink className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">CVx</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center justify-center">
          <div className="flex gap-8 text-sm font-medium">
            <Link href="/" className="py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200">Início</Link>
            <Link href="/features" className="py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200">Recursos</Link>
            <Link href="/pricing" className="py-2 border-b-2 border-transparent hover:border-primary transition-all duration-200">Preços</Link>
          </div>
        </nav>

        <div className="hidden md:flex items-center justify-end gap-3">
          <Link 
            href="https://github.com/7Johnsz/cvx"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="font-medium">
              <Link href="/login">Login</Link>
            </Button>
            
            <Button asChild className="font-medium">
              <Link href="/signup">Começar agora</Link>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className="py-3 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="/features" 
              className="py-3 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link 
              href="/pricing" 
              className="py-3 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              href="https://github.com/7Johnsz/cvx"
              rel="noopener noreferrer"
              target="_blank"
              className="py-3 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-5 w-5" /> GitHub
            </Link>
            
            <hr className="my-2 border-gray-100 dark:border-gray-800" />
            
            <div className="grid grid-cols-2 gap-3 mt-2">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>Cadastrar</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
