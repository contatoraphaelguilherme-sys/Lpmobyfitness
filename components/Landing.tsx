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
          <div className="lane-lines absolute inset-0 opacity-60" />
          <div className="container-site relative grid min-h-[680px] items-center gap-10 py-10 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal className="relative z-10 py-6">
              <p className="eyebrow !text-[#55B7FF]">A primeira em saúde e qualidade de vida</p>
              <h1 className="display mt-5 text-[clamp(3.2rem,7.5vw,7rem)] leading-[.88]">
                Movimento para você.
                <br />
                <span className="text-blue">Espaço para a família.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/72">
                Musculação, natação, karatê e jiu-jítsu em um ambiente próximo,
                acolhedor e preparado para diferentes idades.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsApp subject="conhecer os planos e agendar uma aula">Quero conhecer a Moby</WhatsApp>
                <a href="#modalidades" className="btn border border-white/35 text-white">
                  Ver modalidades <ArrowDownRight size={17} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-white/65">
                {["Duas unidades", "Para diferentes idades", "TotalPass TP+ e Wellhub Basic+"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-blue" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="relative min-h-[480px] overflow-hidden lg:translate-x-8">
              <Image
                fill
                priority
                sizes="(max-width:1024px) 100vw, 54vw"
                className="object-cover object-center"
                src="/704751844_18437592055187774_5767273397684912022_n.jpg"
                alt="Equipe da Moby Fitness reunida dentro da academia"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 bg-blue px-6 py-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/70">Moby Fitness</p>
                <p className="mt-1 text-sm font-extrabold">Saúde, esporte e convivência</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="modalidades" className="section">
          <div className="container-site">
            <Reveal className="mb-9 grid gap-4 md:grid-cols-[1fr_.55fr] md:items-end">
              <div>
                <p className="eyebrow">Modalidades</p>
                <h2 className="display mt-3 text-5xl leading-none md:text-7xl">Escolha a sua forma de se movimentar.</h2>
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
                  className="group grid min-h-[360px] overflow-hidden border border-line bg-white sm:grid-cols-[1fr_.82fr]"
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
                  <div className="flex flex-col justify-end p-6">
                    <span className="text-[10px] font-extrabold tracking-[.18em] text-blue">0{index + 1}</span>
                    <h3 className="display mt-3 text-4xl">{item.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/60">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="estrutura" className="bg-ice py-16 md:py-24">
          <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <Reveal className="relative min-h-[480px] overflow-hidden">
              <Image
                fill
                loading="lazy"
                sizes="(max-width:1024px) 100vw, 52vw"
                className="object-cover"
                src="/706831572_18437592124187774_9082687483295946707_n.jpg"
                alt="Profissionais e equipe da Moby Fitness"
              />
            </Reveal>
            <Reveal delay={0.07}>
              <p className="eyebrow">Um espaço para a família</p>
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
              <div className="mt-8 border-l-4 border-blue bg-white p-5">
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
            <div className="relative overflow-hidden bg-deep px-6 py-12 text-white md:px-12 md:py-16">
              <div className="lane-lines absolute inset-0 opacity-50" />
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="eyebrow !text-[#55B7FF]">Acompanhe a Moby</p>
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
                  className="btn btn-white self-start whitespace-nowrap md:self-center"
                  aria-label={`Seguir a Moby Fitness no Instagram ${site.instagram}`}
                >
                  <Instagram size={19} className="text-blue" />
                  Seguir {site.instagram}
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="avaliacoes" className="section bg-deep text-white">
          <div className="container-site">
            <Reveal className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow !text-[#55B7FF]">Quem conhece, recomenda</p>
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
                  className="overflow-hidden border-t-4 border-blue bg-white p-3"
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

        <section id="unidades" className="section bg-white">
          <div className="container-site grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <Reveal>
              <p className="eyebrow">Unidades e horários</p>
              <h2 className="display mt-3 text-5xl leading-none md:text-7xl">Encontre a Moby mais perto de você.</h2>
              <p className="mt-5 text-sm leading-6 text-ink/60">
                Fale com a equipe antes da visita para confirmar em qual unidade sua modalidade está disponível.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {site.addresses.map((unit, index) => (
                <Reveal key={unit.name} delay={index * 0.05} className="border border-line bg-ice p-6 md:p-8">
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

        <section id="contato" className="relative overflow-hidden bg-blue py-16 text-white md:py-20">
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
