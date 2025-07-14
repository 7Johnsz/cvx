import { OrDivider } from "@/app/signup/components";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export function SocialLogin() {
  return (
    <>
      <OrDivider />

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
