import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`relative block h-16 w-[220px] overflow-hidden sm:h-[72px] sm:w-[250px] ${light ? "brightness-0 invert" : ""}`} aria-label="Moby Fitness — início">
      <Image src="/moby-logo.png" alt="Moby Fitness" fill priority sizes="250px" className="object-contain object-left" />
    </a>
  );
}
