import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignupForm() {
  return (
    <form className="space-y-4">
      <Input type="text" placeholder="Seu nome" required />
      <Input type="email" placeholder="nome@exemplo.com" required />
      <Input type="password" placeholder="Crie uma senha" required />
      <Button type="submit" className="w-full">Cadastrar</Button>
    </form>
  );
}
