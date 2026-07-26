import Image from "next/image";
import {
  ArrowDownRight,
  Check,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";
import { Header } from "./Header";
import { HeroScene } from "./HeroScene";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { WhatsApp } from "./WhatsApp";
import { modalities, site } from "@/lib/site";

const reviewImages = [
  {
    src: "/avaliacao-moby-2.png",
    alt: "Avaliação de Lindson Lima sobre a Moby Fitness"
  },
  {
    src: "/avaliacao-moby-3.png",
    alt: "Avaliação de Fabio Meneses sobre a piscina da Moby Fitness"
  },
  {
    src: "/avaliacao-moby-4.png",
    alt: "Avaliação de Barbara Soares sobre a natação da Moby Fitness"
  },
  {
    src: "/avaliacao-moby-1.png",
    alt: "Comentários de alunos sobre professores, natação e ambiente da Moby Fitness"
  }
];

export function Landing() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative overflow-hidden bg-deep pt-[88px] text-white">
          <div className="blueprint-grid absolute inset-0 opacity-25" />
          <div className="absolute right-0 top-24 hidden font-display text-[22vw] font-bold leading-none text-white/[.025] lg:block">MOBY</div>
          <div className="container-site relative grid min-h-[750px] items-center gap-12 py-12 lg:grid-cols-[.92fr_1.08fr] lg:py-16">
            <Reveal className="relative z-10 py-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-blue" />
                <p className="eyebrow !text-[#55B7FF]">Saúde, esporte e qualidade de vida</p>
              </div>
              <h1 className="display mt-7 text-[clamp(4rem,8vw,8.1rem)] leading-[.8]">
                Todo corpo
                <br />
                <span className="outline-title">pede</span>{" "}
                <span className="text-blue">movimento.</span>
              </h1>
              <p className="mt-8 max-w-lg border-l border-white/20 pl-5 text-base leading-7 text-white/70">
                Musculação, natação, karatê e jiu-jítsu em uma academia feita para
                quem quer cuidar de si e viver melhor, em qualquer idade.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsApp subject="conhecer os planos e agendar uma aula" className="btn btn-blue">
                  Quero começar agora
                </WhatsApp>
                <a href="#modalidades" className="btn border border-white/25 text-white hover:bg-white/5">
                  Explorar a Moby <ArrowDownRight size={17} />
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
                {[
                  ["02", "unidades"],
                  ["04", "modalidades"],
                  ["TP+ / Basic+", "benefícios"]
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 px-3 first:pl-0 last:border-0">
                    <strong className="display block text-2xl text-white">{value}</strong>
                    <span className="text-[9px] font-extrabold uppercase tracking-[.16em] text-white/40">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <HeroScene />
          </div>
        </section>

        <section id="modalidades" className="section relative overflow-hidden">
          <div className="absolute -right-16 top-8 font-display text-[18vw] font-bold leading-none text-[#087bea]/[.035]">MOVE</div>
          <div className="container-site">
            <Reveal className="mb-9 grid gap-4 md:grid-cols-[1fr_.55fr] md:items-end">
              <div>
                <p className="eyebrow">01 — Modalidades</p>
                <h2 className="display mt-3 text-5xl leading-[.92] md:text-7xl">Quatro caminhos.<br />Um só objetivo: <span className="text-blue">viver melhor.</span></h2>
              </div>
              <p className="text-sm leading-6 text-ink/60">
                Consulte a equipe para confirmar turmas, horários e disponibilidade em cada unidade.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {modalities.map((item, index) => (
                <Reveal
                  key={item.name}
                  delay={(index % 2) * 0.05}
                  className={`group grid min-h-[390px] overflow-hidden border border-line bg-white shadow-[0_16px_60px_rgba(7,29,56,.06)] sm:grid-cols-[1.08fr_.92fr] ${index % 2 ? "md:translate-y-8" : ""}`}
                >
                  <div className="relative min-h-[310px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} na Moby Fitness`}
                      fill
                      loading="lazy"
                      sizes="(max-width:768px) 100vw, 32vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="relative flex flex-col justify-end p-7">
                    <span className="absolute right-5 top-3 font-display text-7xl font-bold text-blue/[.07]">0{index + 1}</span>
                    <span className="text-[10px] font-extrabold tracking-[.18em] text-blue">0{index + 1}</span>
                    <h3 className="display mt-3 text-4xl">{item.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/60">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="estrutura" className="relative overflow-hidden bg-[#eaf5fc] py-20 md:py-28">
          <div className="blueprint-grid absolute inset-0 opacity-35" />
          <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <Reveal className="relative min-h-[520px] overflow-visible">
              <div className="absolute inset-y-0 left-0 right-12 overflow-hidden shadow-[0_24px_70px_rgba(7,29,56,.16)]">
              <Image
                fill
                loading="lazy"
                sizes="(max-width:1024px) 100vw, 52vw"
                className="object-cover"
                src="/706831572_18437592124187774_9082687483295946707_n.jpg"
                alt="Profissionais e equipe da Moby Fitness"
              />
              </div>
              <div className="absolute bottom-8 right-0 border-l-4 border-blue bg-deep px-5 py-4 text-white">
                <span className="display text-3xl">Gente que inspira</span>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <p className="eyebrow">02 — A Moby</p>
              <h2 className="display mt-4 text-5xl leading-[.95] md:text-7xl">Gente que cuida de gente.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-ink/65">
                A Moby Fitness reúne esporte, saúde e convivência em um ambiente para adultos e crianças.
                Aqui, cada aluno encontra uma atividade para começar, continuar e evoluir.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Profissionais atenciosos", "Atividades para diferentes idades", "Natação e artes marciais", "Musculação no seu ritmo"].map((item) => (
                  <p key={item} className="flex gap-2 border-t border-line pt-4 text-sm font-bold">
                    <Check className="shrink-0 text-blue" size={17} />
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-8 border-l-4 border-blue bg-white p-6 shadow-[0_12px_40px_rgba(7,29,56,.08)]">
                <p className="text-xs font-extrabold uppercase tracking-[.14em] text-blue">Benefícios aceitos</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <p className="border-r-0 text-lg font-extrabold sm:border-r sm:border-line">TotalPass <span className="text-blue">TP+</span></p>
                  <p className="text-lg font-extrabold sm:pl-4">Wellhub <span className="text-blue">Basic+</span></p>
                </div>
                <p className="mt-3 text-xs text-ink/55">Aceitos a partir dos planos indicados. Consulte as condições diretamente com a unidade.</p>
              </div>
              <WhatsApp subject="conhecer as modalidades e o TotalPass TP+" className="btn btn-blue mt-7">
                Falar com a equipe
              </WhatsApp>
            </Reveal>
          </div>
        </section>

        <section id="instagram" className="section">
          <Reveal className="container-site">
            <div className="relative overflow-hidden bg-blue px-6 py-12 text-white md:px-14 md:py-20">
              <div className="lane-lines absolute inset-0 opacity-50" />
              <div className="absolute -bottom-20 -right-8 font-display text-[13rem] font-bold leading-none text-white/[.08]">@</div>
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-white/65">03 — Acompanhe a Moby</p>
                  <h2 className="display mt-3 max-w-4xl text-5xl leading-none md:text-7xl">
                    Novidades, treinos e a rotina da academia.
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-6 text-white/65">
                    Siga a Moby Fitness no Instagram e acompanhe de perto as aulas,
                    modalidades, horários especiais e novidades das unidades.
                  </p>
                </div>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-white self-start whitespace-nowrap shadow-[0_16px_40px_rgba(0,0,0,.18)] md:self-center"
                  aria-label={`Seguir a Moby Fitness no Instagram ${site.instagram}`}
                >
                  <Instagram size={19} className="text-blue" />
                  Seguir {site.instagram}
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="avaliacoes" className="section relative overflow-hidden bg-deep text-white">
          <div className="blueprint-grid absolute inset-0 opacity-20" />
          <div className="container-site">
            <Reveal className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow !text-[#55B7FF]">04 — Quem conhece, recomenda</p>
                <h2 className="display mt-3 text-5xl md:text-7xl">O que os alunos dizem.</h2>
              </div>
              <p className="max-w-sm text-xs leading-5 text-white/50">
                Comentários públicos enviados pela Moby Fitness. Os textos foram mantidos como publicados.
              </p>
            </Reveal>
            <div className="grid items-start gap-4 md:grid-cols-2">
              {reviewImages.map((review, index) => (
                <Reveal
                  key={review.src}
                  delay={(index % 2) * 0.05}
                  className="overflow-hidden border-t-4 border-blue bg-white p-3 shadow-[0_18px_55px_rgba(0,0,0,.22)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[12/7] w-full overflow-hidden bg-white">
                    <Image
                    src={review.src}
                    alt={review.alt}
                    width={1200}
                    height={700}
                    loading="lazy"
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="h-full w-full object-contain"
                  />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="unidades" className="section bg-[#fbfaf7]">
          <div className="container-site grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <Reveal>
              <p className="eyebrow">05 — Unidades e horários</p>
              <h2 className="display mt-3 text-5xl leading-none md:text-7xl">Encontre a Moby mais perto de você.</h2>
              <p className="mt-5 text-sm leading-6 text-ink/60">
                Fale com a equipe antes da visita para confirmar em qual unidade sua modalidade está disponível.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {site.addresses.map((unit, index) => (
                <Reveal key={unit.name} delay={index * 0.05} className="group border border-line bg-white p-6 shadow-[0_16px_50px_rgba(7,29,56,.06)] transition-transform duration-300 hover:-translate-y-1 md:p-8">
                  <MapPin className="text-blue" size={24} />
                  <h3 className="mt-5 text-xl font-extrabold">{unit.name}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-ink/60">{unit.address}</p>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.12em]">
                      <Clock3 size={16} className="text-blue" />
                      Funcionamento
                    </p>
                    {site.hours.map(([day, time]) => (
                      <div key={day} className="flex justify-between gap-5 py-1.5 text-xs">
                        <span className="text-ink/55">{day}</span>
                        <strong>{time}</strong>
                      </div>
                    ))}
                  </div>
                  <WhatsApp subject={`conhecer a ${unit.name}`} className="btn btn-blue mt-6 w-full">
                    Falar com a unidade
                  </WhatsApp>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-[#086fd2] py-20 text-white md:py-28">
          <div className="lane-lines absolute inset-0 opacity-50" />
          <Reveal className="container-site relative grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.15em] text-white/65">Comece agora</p>
              <h2 className="display mt-3 text-5xl leading-none md:text-7xl">Venha fazer parte da família Moby.</h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/80">
                Chame no WhatsApp para consultar planos, modalidades, horários e aula experimental.
              </p>
            </div>
            <div className="bg-white p-6 text-ink md:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[.1em] text-blue">Atendimento</p>
              <p className="mt-4 text-xl font-extrabold">{site.whatsappDisplay}</p>
              <WhatsApp subject="planos, horários e aula experimental" className="btn btn-blue mt-6 w-full">
                Chamar no WhatsApp
              </WhatsApp>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center border border-line hover:text-blue" aria-label="Instagram">
                  <Instagram size={19} />
                </a>
                <a href={site.facebookUrl} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center border border-line hover:text-blue" aria-label="Facebook">
                  <Facebook size={19} />
                </a>
                <span className="text-xs font-bold text-ink/60">{site.instagram}</span>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-ink py-8 text-white">
        <div className="container-site">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Logo light />
            <p className="text-xs text-white/45">Moby Fitness • A primeira em saúde e qualidade de vida.</p>
          </div>
          <p className="mt-6 border-t border-white/10 pt-5 text-center text-[10px] text-white/35">
            Site desenvolvido por RG Creatives •{" "}
            <a
              href="https://wa.me/5513996051540?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Moby%20Fitness%20e%20gostaria%20de%20conhecer%20o%20trabalho%20da%20RG%20Creatives."
              target="_blank"
              rel="noreferrer"
              className="font-bold text-white/55 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white"
            >
              Fale conosco
            </a>
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-2 md:hidden">
        <WhatsApp subject="planos e aula experimental" className="btn btn-blue w-full">Agendar pelo WhatsApp</WhatsApp>
      </div>
    </>
  );
}
