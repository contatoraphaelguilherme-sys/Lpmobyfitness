import Image from "next/image";
import { ArrowDownRight, Check, Dumbbell, Facebook, Instagram, Quote, Star, Waves } from "lucide-react";
import { Header } from "./Header";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { WhatsApp } from "./WhatsApp";
import { modalities, reviews, site } from "@/lib/site";

export function Landing() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative overflow-hidden bg-deep pt-[78px] text-white">
          <div className="lane-lines absolute inset-0" />
          <div className="container-site relative grid min-h-[680px] items-center gap-10 py-12 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal className="min-w-0 overflow-hidden">
              <p className="eyebrow !text-[#55B7FF]">Moby Fitness • saúde e qualidade de vida</p>
              <h1 className="display mt-5 text-[clamp(3rem,8.4vw,7.8rem)] leading-[.84]">Seu ritmo.<br /><span className="text-blue">Seu espaço.</span><br />Sua evolução.</h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/68">Musculação, natação, artes marciais e balé em um espaço pensado para toda a família.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsApp subject="aula experimental">Quero conhecer a Moby</WhatsApp>
                <a href="#modalidades" className="btn border border-white/35 text-white">Ver modalidades <ArrowDownRight size={17} /></a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-white/60">
                {["Atendimento próximo", "Várias modalidades", "Para toda a família"].map(item => <span key={item} className="flex items-center gap-2"><Check size={14} className="text-blue" />{item}</span>)}
              </div>
            </Reveal>
            <Reveal delay={.08} className="relative min-h-[470px] overflow-hidden lg:translate-x-8">
              <Image fill priority sizes="(max-width:1024px) 100vw, 54vw" className="object-cover" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Pessoa treinando musculação em academia" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 flex gap-8 bg-blue p-5">
                <span className="flex items-center gap-2 text-xs font-extrabold uppercase"><Dumbbell size={18} /> Treine</span>
                <span className="flex items-center gap-2 text-xs font-extrabold uppercase"><Waves size={18} /> Mova-se</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="modalidades" className="section">
          <div className="container-site">
            <Reveal className="mb-9 grid gap-4 md:grid-cols-[1fr_.55fr] md:items-end">
              <div><p className="eyebrow">Modalidades</p><h2 className="display mt-3 text-5xl leading-none md:text-7xl">Um lugar. Muitas formas de evoluir.</h2></div>
              <p className="text-sm leading-6 text-ink/60">Escolha a atividade que combina com você e fale com a equipe para consultar turmas e horários.</p>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-6">
              {modalities.map((item, index) => (
                <Reveal key={item.name} delay={(index % 3) * .04} className={`group relative min-h-[360px] overflow-hidden bg-deep ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}>
                  <Image src={item.image} alt={`Aula de ${item.name} na Moby Fitness`} fill loading="lazy" sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white"><span className="text-[10px] font-bold text-blue">0{index + 1}</span><h3 className="display mt-2 text-4xl">{item.name}</h3><p className="mt-2 max-w-sm text-xs leading-5 text-white/65">{item.description}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="estrutura" className="bg-ice py-16 md:py-24">
          <div className="container-site grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <Reveal className="grid grid-cols-2 gap-3">
              <div className="relative min-h-[410px] overflow-hidden"><Image fill loading="lazy" sizes="25vw" className="object-cover" src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Piscina para aulas de natação" /></div>
              <div className="relative mt-10 min-h-[410px] overflow-hidden"><Image fill loading="lazy" sizes="25vw" className="object-cover" src="https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Área de musculação equipada" /></div>
            </Reveal>
            <Reveal delay={.07}>
              <p className="eyebrow">Para toda a família</p>
              <h2 className="display mt-4 text-5xl leading-[.95] md:text-7xl">Saúde, movimento e boas experiências.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-ink/65">Na Moby Fitness, cada pessoa encontra uma forma de se movimentar. Dos primeiros passos na piscina ao treino de força, das artes marciais ao balé.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Ambiente para diferentes idades", "Profissionais atenciosos", "Diversidade de atividades", "Loja com roupas fitness"].map(item => <p key={item} className="flex gap-2 border-t border-line pt-4 text-sm font-bold"><Check className="shrink-0 text-blue" size={17} />{item}</p>)}
              </div>
              <WhatsApp subject="conhecer a estrutura e as modalidades" className="btn btn-blue mt-8">Falar com a equipe</WhatsApp>
            </Reveal>
          </div>
        </section>

        <section id="avaliacoes" className="section bg-deep text-white">
          <div className="container-site">
            <Reveal className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div><p className="eyebrow !text-[#55B7FF]">Quem conhece, recomenda</p><h2 className="display mt-3 text-5xl md:text-7xl">A experiência de quem treina aqui.</h2></div>
              <p className="max-w-sm text-xs leading-5 text-white/45">Comentários públicos compartilhados na página da Moby Fitness no Facebook.</p>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-6">
              {reviews.map((review, index) => (
                <Reveal key={review.name} delay={(index % 3) * .04} className={`border-t-4 border-blue bg-white p-6 text-ink ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}>
                  <div className="flex gap-1 text-blue">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
                  <Quote className="mt-5 text-blue/20" size={28} />
                  <p className="mt-3 text-sm leading-6">{review.text}</p>
                  <p className="mt-6 text-xs font-extrabold">{review.name}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-blue py-16 text-white md:py-20">
          <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-[60px] border-white/10" />
          <Reveal className="container-site relative grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-center">
            <div><p className="text-xs font-extrabold uppercase tracking-[.15em] text-white/65">Comece agora</p><h2 className="display mt-3 text-5xl leading-none md:text-7xl">Venha conhecer a Moby Fitness.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-white/75">Fale pelo WhatsApp para consultar modalidades, horários e aula experimental.</p></div>
            <div className="bg-white p-6 text-ink md:p-8"><p className="text-xs font-extrabold uppercase tracking-[.1em] text-blue">Atendimento</p><p className="mt-4 text-xl font-extrabold">{site.whatsappDisplay}</p><WhatsApp subject="aula experimental" className="btn btn-blue mt-6 w-full">Chamar no WhatsApp</WhatsApp><div className="mt-6 flex gap-3 border-t border-line pt-5"><a href={site.instagramUrl} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center border border-line hover:text-blue" aria-label="Instagram"><Instagram size={19} /></a><a href={site.facebookUrl} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center border border-line hover:text-blue" aria-label="Facebook"><Facebook size={19} /></a></div></div>
          </Reveal>
        </section>
      </main>
      <footer className="bg-ink py-8 text-white"><div className="container-site flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Logo light /><p className="text-xs text-white/45">Moby Fitness • A primeira em saúde e qualidade de vida.</p></div></footer>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-2 md:hidden"><WhatsApp subject="aula experimental" className="btn btn-blue w-full">Agendar pelo WhatsApp</WhatsApp></div>
    </>
  );
}
