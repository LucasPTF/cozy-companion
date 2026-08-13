import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/ze-hero.jpg";
import portraitImg from "@/assets/ze-portrait.jpg";
import { HERO_ATIVO } from "@/components/landing/hero-variants";
import {
  Card,
  CTAButton,
  Chip,
  Eyebrow,
  GoldRule,
  Rich,
  Section,
} from "@/components/landing/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aula Semente — Não é o ativo. É o jogo. | Zé do Bilhão" },
      {
        name: "description",
        content:
          "Aula online e ao vivo para entender por que você compra empolgado e vende com medo. Reconheça o FOSI e o primeiro princípio do Método M.E.S.T.R.E.",
      },
      { property: "og:title", content: "Aula Semente — Não é o ativo. É o jogo." },
      {
        property: "og:description",
        content:
          "Entenda o padrão que faz até quem entra certo sair cedo demais. Conteúdo educacional, sem sinais e sem promessa de rentabilidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AulaSemente,
});

const ANTES_DEPOIS = [
  {
    hoje: "A decisão começa quando o preço mexe.",
    depois: "Você entende o que deveria existir antes disso.",
  },
  {
    hoje: "Medo parece informação.",
    depois:
      "Você começa a reconhecer quando emoção e processo estão se misturando.",
  },
  {
    hoje: "O erro parece azar.",
    depois: "Ele passa a ter nome, causa e um ponto claro para trabalhar.",
  },
];

const ENTENDIMENTOS = [
  "A “moeda certa” não corrige uma decisão sem método.",
  "Sardinha reage ao movimento. Tubarão lê o tabuleiro.",
  "Existe um medo pouco falado: FOSI.",
  "Decisão estruturada começa antes da emoção.",
];

const CRENCAS = [
  "Uma moeda boa não corrige uma decisão ruim.",
  "Informação não é a mesma coisa que método.",
  "Sair cedo também pode ser emoção.",
  "Um erro fica mais fácil de enxergar quando ganha um nome.",
];

// TODO: remover uma das opções depois da validação final do cliente.
const FORMATOS = [
  {
    nome: "Aula Semente — 1 dia",
    detalhe: "Aproximadamente 2 horas.",
    preco: "R$47",
    cta: "QUERO MEU INGRESSO",
    destaque: true,
  },
  {
    nome: "Aula Semente — 2 dias",
    detalhe: "2 encontros de 1h30–2h.",
    preco: "R$97",
    cta: "QUERO PARTICIPAR",
    destaque: false,
  },
];

const BONUS = [
  {
    titulo: "Quiz FOSI",
    sub: "8 perguntas.",
    texto:
      "Um autodiagnóstico para enxergar como o padrão aparece nas suas decisões.",
  },
  {
    titulo: "Guia",
    sub: "Os 3 Erros Que Fazem Você Perder Dinheiro no Cripto",
    texto:
      "Material rápido para revisar os principais comportamentos abordados na aula.",
  },
  {
    titulo: "Replay + Checklist",
    sub: "Acesso temporário ao replay.",
    texto:
      "Checklist simples do que observar antes de entrar numa operação.",
  },
];

function AulaSemente() {
  return (
    <main className="bg-background">
      {/* DOBRA 1 — HERO */}
      <header className="relative overflow-hidden border-b border-border px-5 pb-14 pt-12 sm:px-8 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>{HERO_ATIVO.eyebrow}</Eyebrow>
            <h1 className="text-[36px] leading-[1.05] sm:text-[46px] md:text-[60px]">
              {HERO_ATIVO.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-6 space-y-3">
              {HERO_ATIVO.subheadline.map((line, i) => (
                <Rich
                  key={i}
                  text={line}
                  className="text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]"
                />
              ))}
            </div>
            <CTAButton microcopy={HERO_ATIVO.microcopy} className="mt-8 sm:max-w-md">
              {HERO_ATIVO.cta}
            </CTAButton>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>Conteúdo educacional</Chip>
              <Chip>Sem sinais</Chip>
              <Chip>Sem promessa de rentabilidade</Chip>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-gold/25 shadow-premium">
              <img
                src={heroImg}
                alt="Zé do Bilhão, tubarão de terno navy e gravata dourada, analisando um tabuleiro de xadrez"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* DOBRA 2 — ANTES x DEPOIS */}
      <Section alt>
        <h2 className="max-w-3xl text-[28px] sm:text-[38px] md:text-[44px]">
          <span className="block">O mercado não muda quando você entra.</span>
          <span className="block text-gold">
            Quem precisa mudar é a forma de decidir.
          </span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ANTES_DEPOIS.map((item) => (
            <Card key={item.hoje}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-alert">
                Hoje
              </p>
              <p className="mt-2 text-[16px] text-muted-foreground sm:text-[17px]">
                {item.hoje}
              </p>
              <GoldRule className="my-5" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
                Depois
              </p>
              <p className="mt-2 text-[16px] text-foreground sm:text-[17px]">
                {item.depois}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* DOBRA 3 — O QUE VOCÊ VAI ENTENDER */}
      <Section>
        <h2 className="text-[30px] sm:text-[40px] md:text-[46px]">
          O erro começa antes do clique.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ENTENDIMENTOS.map((texto, i) => (
            <Card key={texto} className="flex gap-5">
              <span className="font-display text-[34px] leading-none text-gold/70">
                0{i + 1}
              </span>
              <p className="text-[17px] font-medium leading-snug text-foreground sm:text-[19px]">
                {texto}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* DOBRA 5 — QUEM É O ZÉ DO BILHÃO */}
      <Section alt>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold/25 shadow-premium">
            <img
              src={portraitImg}
              alt="Retrato do personagem Zé do Bilhão"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>O personagem</Eyebrow>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px]">
              Um personagem para falar de um problema muito real.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
              <Rich text="O Zé do Bilhão existe para traduzir um mercado cheio de ruído numa linguagem simples." />
              <Rich text="Aqui você não encontra a próxima “moeda mágica”. Você encontra: **tabuleiro, processo e decisão.**" />
              <Rich text="Porque copiar alguém pode até parecer mais fácil. Mas entender o jogo cria algo muito mais importante: **autonomia.**" />
            </div>
          </div>
        </div>
      </Section>

      {/* DOBRA 6 — QUEBRAS DE CRENÇA */}
      <Section>
        <h2 className="max-w-3xl text-[28px] sm:text-[36px] md:text-[42px]">
          Quatro coisas que você precisa entender antes da próxima decisão
        </h2>
        <div className="mt-10 space-y-4">
          {CRENCAS.map((texto) => (
            <div
              key={texto}
              className="rounded-xl border border-border border-l-2 border-l-gold bg-card px-6 py-6 sm:px-8"
            >
              <p className="font-display text-[22px] leading-snug text-foreground sm:text-[28px]">
                {texto}
              </p>
            </div>
          ))}
        </div>
        <CTAButton microcopy="Aula online e ao vivo" className="mx-auto mt-10 sm:max-w-md">
          QUERO ENTENDER ESSE JOGO
        </CTAButton>
      </Section>

      {/* DOBRA 7 — O QUE É A AULA SEMENTE */}
      <Section alt>
        <h2 className="max-w-3xl text-[28px] sm:text-[38px] md:text-[44px]">
          <span className="block">Você não precisa de mais um palpite.</span>
          <span className="block text-gold">Precisa entender o processo.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
          A Aula Semente é um encontro online e ao vivo para quem quer entender por
          que continua tomando decisões no impulso.
        </p>
        <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
          Durante a aula você vai
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "enxergar o jogo;",
            "reconhecer o FOSI;",
            "conhecer o primeiro princípio do M.E.S.T.R.E.;",
            "entender a diferença entre reação e processo.",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[16px] text-muted-foreground sm:text-[18px]"
            >
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2">
          <Chip>Sem sinais</Chip>
          <Chip>Sem promessa de lucro</Chip>
          <Chip>Conteúdo educacional</Chip>
        </div>
      </Section>

      {/* DOBRA 8 — CONTEÚDO */}
      <Section>
        <h2 className="text-[30px] sm:text-[40px] md:text-[46px]">
          Do impulso ao tabuleiro
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="p-8">
            <Eyebrow>Bloco 01</Eyebrow>
            <h3 className="text-[22px] sm:text-[28px]">Do impulso ao tabuleiro</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
              Por que a sardinha reage ao que acabou de acontecer — e o que muda
              quando a decisão começa antes do movimento.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Sardinha", "Gráfico", "Xadrez", "Reação", "Plano"].map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </Card>
          <Card className="p-8">
            <Eyebrow>Bloco 02</Eyebrow>
            <h3 className="text-[22px] sm:text-[28px]">Do medo ao método</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
              O que é FOSI e como o primeiro princípio do M.E.S.T.R.E. começa a
              organizar uma decisão antes do momento de pressão.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["FOSI", "Método", "Pressão", "Processo"].map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* DOBRA 9 — BÔNUS */}
      <Section alt>
        <h2 className="text-[30px] sm:text-[40px] md:text-[46px]">
          Você também recebe
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {BONUS.map((b) => (
            <Card key={b.titulo}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
                {b.titulo}
              </p>
              <h3 className="mt-3 text-[20px] sm:text-[24px]">{b.sub}</h3>
              <GoldRule className="my-5" />
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                {b.texto}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* DOBRA 4 — PREÇO */}
      <Section id="precos">
        <h2 className="text-center text-[30px] sm:text-[40px] md:text-[46px]">
          Escolha do formato
        </h2>
        {/* TODO: remover uma das opções depois da validação final do cliente. */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
          {FORMATOS.map((f) => (
            <Card
              key={f.nome}
              className={
                f.destaque
                  ? "border-gold/50 text-center shadow-gold"
                  : "text-center"
              }
            >
              <h3 className="text-[22px] sm:text-[26px]">{f.nome}</h3>
              <p className="mt-2 text-[15px] text-subtle">{f.detalhe}</p>
              <p className="my-7 font-display text-[52px] leading-none text-gold sm:text-[60px]">
                {f.preco}
              </p>
              <CTAButton>{f.cta}</CTAButton>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-subtle">
          Conteúdo estritamente educacional. Não há recomendação de compra ou venda
          de ativos, sinais ou qualquer promessa de rentabilidade.
        </p>
      </Section>

      {/* DOBRA 10 — DESVALIDAÇÃO */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Antes de decidir</Eyebrow>
          <h2 className="text-[28px] sm:text-[38px] md:text-[44px]">
            Trocar a moeda não troca a forma de decidir.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
            Se você procura a próxima oportunidade quente, um sinal pronto ou alguém
            para copiar, esta aula não é para você.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
            Se você quer parar de decidir no impulso e começar a enxergar o
            tabuleiro, é aqui que começa.
          </p>
          <CTAButton
            microcopy="Aula online e ao vivo"
            className="mx-auto mt-10 sm:max-w-md"
          >
            QUERO ENTENDER O QUE ESTÁ FALTANDO
          </CTAButton>
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-[20px] text-gold">Zé do Bilhão</p>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-subtle">
            Zé do Bilhão é um personagem de comunicação. Todo o conteúdo é
            educacional e não constitui recomendação de investimento. Resultados
            passados não garantem resultados futuros.
          </p>
          <p className="mt-6 text-[13px] text-subtle">
            © {new Date().getFullYear()} Aula Semente. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
