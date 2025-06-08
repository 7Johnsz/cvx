import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3008/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, email, password }),
        credentials: "include",
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || data.error || "Erro ao cadastrar.");
      }

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={user}
        onChange={e => setUser(e.target.value)}
        placeholder="Seu nome"
        required
      />
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="nome@exemplo.com"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Crie uma senha"
        required
      />
      <Button type="submit" className="w-full">
        Cadastrar
      </Button>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </form>
  );
}