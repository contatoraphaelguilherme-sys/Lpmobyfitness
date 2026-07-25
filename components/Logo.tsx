import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`relative block h-14 w-[190px] overflow-hidden ${light ? "brightness-0 invert" : ""}`} aria-label="Moby Fitness — início">
      <Image src="/moby-logo.png" alt="Moby Fitness" fill priority sizes="190px" className="object-contain" />
    </a>
  );
}
