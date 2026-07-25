export const site = {
  name: "Moby Fitness",
  whatsappDisplay: "(13) 99656-3020",
  whatsappDigits: "5513996563020",
  instagram: "@mobyfitness_academia",
  instagramUrl: "https://www.instagram.com/mobyfitness_academia/",
  facebookUrl: "https://www.facebook.com/mobyfitness",
  city: "[CIDADE / ENDEREÇO A CONFIRMAR]"
};

export function whatsappUrl(subject?: string) {
  const interest = subject ? `\n\nTenho interesse em: ${subject}.` : "";
  const message = `Olá! Vim pelo site da Moby Fitness e gostaria de conhecer melhor a academia.${interest}\n\nPodem me passar mais informações?`;
  return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const modalities = [
  {
    name: "Musculação",
    description: "Estrutura e acompanhamento para treinar no seu ritmo.",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Natação",
    description: "Movimento, aprendizado e confiança dentro d’água.",
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Jiu-jítsu",
    description: "Técnica, estratégia, disciplina e evolução.",
    image: "https://images.pexels.com/photos/7045717/pexels-photo-7045717.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Karatê",
    description: "Foco, respeito e desenvolvimento em cada aula.",
    image: "https://images.pexels.com/photos/6253307/pexels-photo-6253307.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Balé",
    description: "Expressão, equilíbrio e coordenação com leveza.",
    image: "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export const reviews = [
  {
    name: "Claytone Cilene Silva",
    text: "Eu recomendo a Moby para todos que conheço. Meu filho faz natação, vem tendo um bom desempenho e tem melhorado muito na parte respiratória. Professores super profissionais e atenciosos."
  },
  {
    name: "Claudice Cruz",
    text: "Hidroginástica muito boa, com ótima companhia."
  },
  {
    name: "Bia Silva",
    text: "Ótimo preço e profissionais atenciosos."
  },
  {
    name: "Regina Gonçalves",
    text: "Muito bom! Recomendo."
  },
  {
    name: "Ines Lopes",
    text: "Gostei dos exercícios e do professor. O preço é acessível, fiz uma aula experimental e vou me matricular."
  }
];
