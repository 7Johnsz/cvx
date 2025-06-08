import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

export function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-2xl animate-pulse" />
      <div className="w-full max-w-5xl bg-card shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row z-10">
        {children}
      </div>
    </main>
  );
}
