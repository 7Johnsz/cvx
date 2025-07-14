"use client"

import { useState } from "react"
import { DynamicSidebar } from "@/components/sidebar"
import { sidebarData } from "@/data/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { 
  Header, 
  ResumeUpload, 
  ActionDivider, 
  ActionButton, 
  FeaturesList 
} from "./components"

export default function ResumeStartPage() {
  const [isUploading, setIsUploading] = useState(false)
  
  const handleUploadComplete = (file: File) => {
    // Lógica para processar o arquivo após upload completo
    console.log("Upload completo do arquivo:", file.name)
  }

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <DynamicSidebar data={sidebarData} />

        <main className="flex-1 overflow-auto bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
            {/* Header Section */}
            <Header />

            {/* Upload Section */}
            <div className="gap-6 mb-12">
              <ResumeUpload onUploadComplete={handleUploadComplete} />
            </div>

            {/* Divider */}
            <ActionDivider />

            {/* Action Button */}
            <ActionButton disabled={isUploading} />

            {/* Features Section */}
            <FeaturesList />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
