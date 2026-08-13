// Bloco de copy da Dobra 1 — troque HERO_ATIVO para testar os ângulos.
// TODO: definir o ângulo vencedor após o teste de tráfego frio.

export type HeroCopy = {
  id: string;
  eyebrow: string;
  headline: string[];
  subheadline: string[];
  cta: string;
  microcopy: string;
};

export const HERO_VARIANTS: Record<string, HeroCopy> = {
  dor: {
    id: "angulo-1-dor",
    eyebrow: "Aula Semente • online e ao vivo",
    headline: ["Comprar empolgado. Vender com medo.", "Dá para sair desse ciclo."],
    subheadline: [
      "Você não chegou aqui por falta de inteligência.",
      "Faltou uma coisa que quase ninguém ensinou: **um sistema antes da emoção aparecer.**",
      "Na Aula Semente, você vai entender o erro e começar a enxergar suas decisões no mercado com mais clareza.",
    ],
    cta: "QUERO ENTENDER O QUE ESTÁ FALTANDO",
    microcopy: "Aula online e ao vivo",
  },
  verdade: {
    id: "angulo-3-verdade-proibida",
    eyebrow: "Aula Semente • online e ao vivo",
    headline: [
      "A próxima moeda não resolve o seu problema.",
      "Porque o problema não é o ativo. É o jogo.",
    ],
    subheadline: [
      "Existe um padrão que faz até quem entra certo sair cedo demais.",
      "Ele tem nome: **FOSI.**",
      "Na Aula Semente, você vai entender como esse padrão aparece — e por que método pesa mais que palpite.",
    ],
    cta: "QUERO ENTENDER ESSE JOGO",
    microcopy: "Aula online e ao vivo",
  },
  resultado: {
    id: "angulo-2-resultado",
    eyebrow: "Aula Semente • online e ao vivo",
    headline: [
      "Entenda por que suas decisões dão errado — sem sinais, sem depender de sorte e sem viver grudado no gráfico.",
    ],
    subheadline: [
      "No formato de 1 dia, em cerca de 2 horas, você vai reconhecer o padrão, entender o FOSI e conhecer o primeiro princípio do Método M.E.S.T.R.E.",
    ],
    cta: "QUERO PARTICIPAR DA AULA",
    microcopy: "Aula online e ao vivo",
  },
};

export const HERO_ATIVO: HeroCopy = HERO_VARIANTS.dor;
