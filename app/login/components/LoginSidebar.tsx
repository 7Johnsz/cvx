import { FileSymlink } from "lucide-react";
import Link from "next/link";

export function LoginSidebar() {
  return (
    <div className="hidden md:flex w-1/2 flex-col justify-between bg-muted p-8 relative">
      <Link href="/" className="text-foreground font-bold text-xl z-10">
        <FileSymlink className="h-6 w-6 inline mr-2" />
        CVx
      </Link>

      <div className="absolute inset-0 opacity-40 z-0">
        <img
          src="/martin.jpg"
          alt="Ilustração inspiradora"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-foreground text-sm z-10 mt-auto">
        <p className="mb-2 italic">"O tempo é sempre certo para fazer o que está certo."</p>
        <p className="text-muted-foreground">Martin Luther King Jr.</p>
      </div>
    </div>
  );
}
