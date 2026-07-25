export const site = {
  name: "Moby Fitness",
  whatsappDisplay: "(13) 99656-3020",
  whatsappDigits: "5513996563020",
  instagram: "@mobyfitness_academia",
  instagramUrl: "https://www.instagram.com/mobyfitness_academia?igshid=MzRlODBiNWFlZA%3D%3D",
  facebookUrl: "https://www.facebook.com/mobyfitness",
  addresses: [
    {
      name: "Unidade Centro",
      address: "Rua Buenos Aires, 107 — Vila Maia, Guarujá"
    },
    {
      name: "Unidade Vicente de Carvalho",
      address: "Rua Monteiro Lobato, 365 — Vicente de Carvalho, Guarujá"
    }
  ],
  hours: [
    ["Segunda a sexta", "06:00–22:00"],
    ["Sábado", "08:00–12:00"],
    ["Domingo", "Fechado"]
  ]
};

export function whatsappUrl(subject?: string) {
  const interest = subject ? `\n\nTenho interesse em: ${subject}.` : "";
  const message = `Olá! Vim pelo site da Moby Fitness e gostaria de conhecer melhor a academia.${interest}\n\nPodem me passar mais informações?`;
  return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const modalities = [
  {
    name: "Musculação",
    description: "Treinos para cuidar da saúde, ganhar força e evoluir no seu ritmo.",
    image: "/731022954_18445064254187774_3322276301743420675_n.jpg"
  },
  {
    name: "Natação",
    description: "Aprendizado, confiança e movimento dentro d’água para diferentes idades.",
    image: "/747346300_18446959477187774_255519686253795559_n.jpg"
  },
  {
    name: "Jiu-jítsu",
    description: "Estratégia, controle, técnica e evolução em cada treino.",
    image: "/729879946_18443125837187774_2135662775346322723_n.jpg"
  },
  {
    name: "Karatê",
    description: "Disciplina, respeito, foco e desenvolvimento dentro e fora do tatame.",
    image: "/unnamed.webp"
  }
];

export const reviews = [
  {
    text: "Ótimos professores ambiente tranquilo muito bom parabéns a todos o funcionários"
  },
  {
    text: "Ótimos profissionais, ensino inclusivo, ótima tratamento da água !"
  },
  {
    text: "Excelente lugar para adultos e crianças praticar esportes"
  }
];
