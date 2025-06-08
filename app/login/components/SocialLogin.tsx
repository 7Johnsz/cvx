import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export function SocialLogin() {
  return (
    <>
      <div className="flex items-center gap-2 text-muted-foreground text-xs">
        <div className="flex-grow border-t border-border" />
        <span>OU CONTINUE COM</span>
        <div className="flex-grow border-t border-border" />
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => signIn("github")}
      >
        <Github className="w-4 h-4 mr-2" />
        Entrar com GitHub
      </Button>
    </>
  );
}
