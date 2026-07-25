"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsApp({ children, subject, className = "btn btn-blue" }: { children: React.ReactNode; subject?: string; className?: string }) {
  return <a href={whatsappUrl(subject)} target="_blank" rel="noreferrer" className={className}><MessageCircle size={18} />{children}</a>;
}
