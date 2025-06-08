import { ReactNode } from "react";
import { DynamicSidebar } from "@/components/sidebar";
import { sidebarData } from "@/data/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <DynamicSidebar data={sidebarData} />
        <main className="flex-1 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
