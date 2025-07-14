import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 p-10">
      <div className="container mx-auto px-6 max-w-7xl text-center text-xs text-white/50">
        Feito com 💙 por{" "} 
        <Link href="https://github.com/7johnsz" target="_blank" rel="noopener noreferrer">
            <span className="text-white hover:text-blue-400 transition">devjohn</span>
        </Link>. <br />
        © {new Date().getFullYear()} CVx. Todos os direitos reservados.
      </div>
    </footer>
  );
}
