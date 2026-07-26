"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsApp } from "./WhatsApp";

const links = [["Modalidades", "#modalidades"], ["A Moby", "#estrutura"], ["Instagram", "#instagram"], ["Avaliações", "#avaliacoes"], ["Unidades", "#unidades"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${compact ? "border-line bg-white/95 py-0 shadow-[0_8px_30px_rgba(7,29,56,.08)] backdrop-blur-md" : "border-transparent bg-white py-1"}`}>
      <div className="container-site flex items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-extrabold uppercase tracking-[.1em] hover:text-blue">{label}</a>)}
        </nav>
        <div className="hidden xl:block"><WhatsApp subject="aula experimental">Agendar uma aula</WhatsApp></div>
        <button className="grid h-11 w-11 place-items-center xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="container-site border-t border-line pb-4 xl:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-sm font-bold">{label}</a>)}<WhatsApp subject="aula experimental" className="btn btn-blue mt-4 w-full">Agendar uma aula</WhatsApp></nav>}
    </header>
  );
}
