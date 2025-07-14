"use client"

import * as React from "react"
import { UploadCloud, type File, X, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  onFileChange?: (file: File | null) => void
  className?: string
  buttonVariant?: "default" | "outline" | "secondary"
  buttonSize?: "default" | "sm" | "lg"
  showSelectedFile?: boolean
}

export function FileInput({
  onFileChange,
  className,
  buttonVariant = "outline",
  buttonSize = "lg",
  showSelectedFile = true,
  accept = ".pdf,.doc,.docx,.md,.txt",
  disabled = false,
  ...props
}: FileInputProps) {
  const [file, setFile] = React.useState<File | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    handleFile(selectedFile)
  }

  const handleFile = (selectedFile: File | null) => {
    if (!selectedFile) {
      setFile(null)
      if (onFileChange) onFileChange(null)
      return
    }

    // Validate file type
    const fileType = selectedFile.type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
      "text/markdown",
    ]

    if (!validTypes.includes(fileType) && !fileType.startsWith("application/")) {
      setError("Formato de arquivo não suportado. Use PDF, DOC, DOCX, TXT ou MD.")
      return
    }

    // Validate file size (5MB max)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Arquivo muito grande. O tamanho máximo é 5MB.")
      return
    }

    setFile(selectedFile)
    setError(null)
    if (onFileChange) onFileChange(selectedFile)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files?.[0] || null
    handleFile(droppedFile)
  }

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation() // Evita que o clique dispare o fileInputRef.current.click()
    setFile(null)
    setError(null)
    if (inputRef.current) inputRef.current.value = ""
    if (onFileChange) onFileChange(null)
  }

  const triggerFileInput = () => {
    inputRef.current?.click()
  }

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative rounded-md border-2 border-dashed transition-colors",
          isDragging
            ? "border-primary/50 bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5",
          file && !showSelectedFile ? "p-0" : "p-2",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={disabled ? undefined : triggerFileInput}
      >
        <input type="file" ref={inputRef} className="sr-only" onChange={handleFileChange} accept={accept} disabled={disabled} {...props} />

        {(!file || showSelectedFile) && (
          <Button
            type="button"
            variant={buttonVariant}
            size={buttonSize}
            className={cn(
              "w-full gap-2 relative",
              file && showSelectedFile
                ? "border-green-500 bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-950/20 dark:text-green-400 dark:hover:bg-green-950/30"
                : "",
            )}
            onClick={triggerFileInput}
          >
            {file ? (
              <>
                <CheckCircle className="h-4 w-4" />
                <span className="truncate max-w-[200px] sm:max-w-[300px]">{file.name}</span>
                <button
                  type="button"
                  className="absolute right-2 rounded-full p-1 hover:bg-muted/80"
                  onClick={clearFile}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remover arquivo</span>
                </button>
              </>
            ) : (
              <>
                <UploadCloud className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Enviar currículo</span>
              </>
            )}
          </Button>
        )}

        {!file && (
          <div className="mt-2 text-center text-xs text-muted-foreground">
            <p>Arraste e solte seu arquivo aqui ou clique para selecionar</p>
            <p className="mt-1">Formatos aceitos: PDF, DOC, DOCX, TXT, MD (máx. 5MB)</p>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-2 flex items-center text-sm text-red-600 dark:text-red-500">
          <AlertCircle className="mr-1 h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
