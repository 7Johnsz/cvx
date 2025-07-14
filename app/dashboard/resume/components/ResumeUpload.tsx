import { Card, CardContent } from "@/components/ui/card";
import { FileInput } from "@/components/ui/file-input";
import { CheckCircle, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface ResumeUploadProps {
  onUploadComplete?: (file: File) => void;
}

export function ResumeUpload({ onUploadComplete }: ResumeUploadProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (file: File | null) => {
    setResumeFile(file);
    setUploadComplete(false);

    if (file) {
      // Simular upload do arquivo
      setIsUploading(true);

      // Simulação de upload - em produção, substitua por uma chamada real à API
      setTimeout(() => {
        setIsUploading(false);
        setUploadComplete(true);
        toast.success("Arquivo enviado com sucesso!", {
          description: `${file.name} foi carregado e está pronto para análise.`,
          duration: 4000,
        });
        
        if (onUploadComplete) {
          onUploadComplete(file);
        }
      }, 1500);
    }
  };

  return (
    <Card className="overflow-hidden border-2 border-muted hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <CardContent className="p-6 pt-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
            <UploadCloud className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Envie seu currículo</h2>
            <p className="text-sm text-muted-foreground">Formato PDF ou Word</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          Envie seu currículo atual para análise. Nossa IA identificará pontos fortes e oportunidades de
          melhoria para destacar suas habilidades.
        </p>

        <div className="space-y-4">
          {/* Use div wrapper to avoid button nesting issues */}
          <div className="file-input-wrapper">
            <FileInput onFileChange={handleFileChange} disabled={isUploading} />
          </div>

          {uploadComplete && (
            <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-500 mt-2">
              <CheckCircle className="h-4 w-4" />
              <span>Currículo enviado com sucesso!</span>
            </div>
          )}

          {isUploading && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
              <span>Enviando arquivo...</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
