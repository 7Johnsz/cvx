import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("http://localhost:3008/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.detail || "Erro ao fazer login.")
      }
      
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="flex justify-end text-sm text-muted-foreground">
        Novo por aqui? <Link href="/signup" className="ml-1 underline">Cadastre-se</Link>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Acessar sua conta</h2>
        <p className="text-sm text-muted-foreground">
          Preencha seus dados para entrar
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="nome@exemplo.com"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Sua senha"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full">Entrar</Button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
    </>
  );
}