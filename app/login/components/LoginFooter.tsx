import Link from "next/link";

export function SharedFooter() {
  return (
    <p className="text-xs text-muted-foreground text-center">
      Ao continuar, você concorda com nossos{" "}
      <Link href="/policy" className="underline">Termos de Uso</Link> e{" "}
      <Link href="/policy" className="underline">Política de Privacidade</Link>.
    </p>
  );
}
