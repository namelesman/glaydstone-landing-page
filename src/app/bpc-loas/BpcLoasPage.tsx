"use client";

import { useRef, useState } from "react";
import RadialRevealButton from "@/components/RadialRevealButton";

const WA_LINK =
  "https://wa.me/5581994071330?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20entender%20o%20meu%20caso%20de%20BPC%2FLOAS";

const WA_ICON = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFDF9"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.69.44 3.34 1.28 4.8L2 22l5.44-1.38a9.9 9.9 0 0 0 4.6 1.13h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2Zm0 17.9h-.01a8.3 8.3 0 0 1-4.14-1.11l-.3-.17-3.08.78.83-2.99-.19-.31a8.24 8.24 0 0 1-1.27-4.4 8.24 8.24 0 0 1 8.24-8.24 8.19 8.19 0 0 1 5.83 2.41 8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.32 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.01-.47-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z"/></svg>'
)}`;

const GREEN = { fill: "#1F4A3D", textColor: "#FFFDF9", hoverFill: "#2E5F4E", hoverTextColor: "#FFFDF9" };
const GOLD = { fill: "#B4842A", textColor: "#FFFDF9", hoverFill: "#8F6A20", hoverTextColor: "#FFFDF9" };

// Conversão: clique em qualquer botão de WhatsApp.
const reportConversion = () => {
  try {
    window.gtag?.("event", "conversion", { send_to: "AW-11039252214/_w8QCNGOpYkdEPa99o8p" });
  } catch {}
};

type WaButtonProps = {
  label: string;
  colors: typeof GOLD;
  icon?: boolean;
  small?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

function WaButton({ label, colors, icon = true, small = false, className, style }: WaButtonProps) {
  return (
    <span className={`wa-btn${className ? ` ${className}` : ""}`} onClick={reportConversion}>
      <RadialRevealButton
        label={label}
        link={WA_LINK}
        colors={colors}
        border={{ borderWidth: 0 }}
        rounded={small ? 20 : 17}
        padding={small ? "9px 16px" : "12px 22px"}
        font={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: small ? 14 : 15, lineHeight: 1.6 }}
        addIcon={icon}
        gap={8}
        icon={{ type: "image", image: WA_ICON, size: 16, side: "left" }}
        style={style}
      />
    </span>
  );
}

const FAQ = [
  {
    q: "Meu filho tem diagnóstico. Isso já garante o BPC?",
    a: "Não, sozinho não garante. O INSS avalia como aquela condição afeta a autonomia e a participação na vida diária — por isso o laudo e os relatórios precisam mostrar isso, não só o CID.",
  },
  {
    q: "O INSS já negou uma vez. Ainda vale a pena tentar?",
    a: "Em muitos casos, sim. Uma negativa não significa que não existe direito — muitas vezes significa que a prova apresentada não foi suficiente. Posso analisar o que faltou.",
  },
  {
    q: "Recebo Bolsa Família. Isso atrapalha o BPC?",
    a: "Bolsa Família, por si só, normalmente não impede o direito ao BPC. O critério de renda considera outros fatores — posso avaliar a composição familiar com você.",
  },
  {
    q: "Quanto tempo demora o processo?",
    a: "Varia conforme o caso e se é preciso ir à Justiça. Te explico um prazo realista depois de entender a sua situação — sem promessas genéricas.",
  },
];

export default function BpcLoasPage() {
  const [openFaq, setOpenFaq] = useState<{ index: number; height: number } | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      <header>
        <div className="header-inner">
          <div className="brand">Glaydstone Daniel<small>OAB/PE 34.574 · Direito Previdenciário</small></div>
          <span className="hdr-cta">
            <WaButton label="Falar no WhatsApp" colors={GREEN} small className="long" />
            <WaButton label="WhatsApp" colors={GREEN} small className="short" />
          </span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <span className="eyebrow">Pernambuco · Atendimento 100% online</span>
            <h1>O INSS negou o BPC mesmo com o diagnóstico?</h1>
            <p>Ter um diagnóstico não é a mesma coisa que provar, para o INSS, tudo o que aquela condição significa na rotina de quem cuida. É exatamente nesse ponto que o processo costuma travar — e é aí que eu entro.</p>
            <div className="cta-row">
              <WaButton label="Conversar agora sobre o meu caso" colors={GOLD} />
              <span className="cta-note">Atendimento individualizado, por WhatsApp</span>
            </div>
          </div>
        </section>

        <section className="recon">
          <div className="wrap">
            <blockquote>&quot;Eu sei o que meu filho enfrenta todos os dias, mas parece que o INSS não conseguiu enxergar isso.&quot;</blockquote>
            <p>Se essa frase parece ter saído da sua boca, você não está sozinha — e o problema não é você não ter argumentos. É que a realidade que você vive precisa ser traduzida em prova, do jeito que o INSS e a Justiça exigem. É isso que eu faço.</p>
          </div>
        </section>

        <section className="section-alt">
          <div className="wrap">
            <h2>Como eu conduzo o seu caso</h2>
            <p className="section-lead">Não trabalho com petição pronta. Cada caso é construído de trás para frente — pensando primeiro no que o INSS vai questionar.</p>
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <h3>Diagnóstico do caso</h3>
                  <p>Analiso onde está o ponto de ruptura: laudo incompleto, renda mal calculada, documentação que não descreve a real limitação.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <h3>Organização da prova</h3>
                  <p>Mostro o que falta em cada documento e como transformar a sua rotina em informação que tem peso jurídico.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <h3>Condução estratégica</h3>
                  <p>Antecipo os argumentos do INSS e do perito antes que eles apareçam no processo — não espero a negativa para agir.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap-wide">
            <h2>Para quem é esse atendimento</h2>
            <div className="perfis">
              <div className="perfil">
                <h3>Crianças com deficiência</h3>
                <p>TEA, TDAH e outras condições. Quando o diagnóstico existe, mas o INSS nega por não reconhecer o impacto na rotina.</p>
              </div>
              <div className="perfil">
                <h3>Adultos com deficiência</h3>
                <p>Doenças ou limitações que dificultam trabalhar e gerar renda, mesmo quando isso não é evidente &quot;no papel&quot;.</p>
              </div>
              <div className="perfil">
                <h3>Idosos sem renda</h3>
                <p>Quem chegou à velhice sem contribuição suficiente para aposentadoria e depende de terceiros para sobreviver.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pilar">
          <div className="wrap-wide">
            <p className="tag">O que orienta este trabalho</p>
            <h2>Direito, não favor. Estratégia, não promessa.</h2>
            <p className="pilar-sub">Não prometo causa ganha — ninguém pode prometer isso com honestidade. Prometo analisar o seu caso com método, dizer com clareza onde ele está forte e onde precisa ser fortalecido, e conduzi-lo com uma estratégia real.</p>
          </div>
        </section>

        <section className="section-alt">
          <div className="wrap">
            <h2>Perguntas frequentes</h2>
            <div className="faq-list">
              {FAQ.map((item, i) => {
                const isOpen = openFaq?.index === i;
                return (
                  <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                    <button
                      className="faq-q"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : { index: i, height: answerRefs.current[i]?.scrollHeight ?? 0 })
                      }
                    >
                      {item.q}<span className="plus">+</span>
                    </button>
                    <div
                      className="faq-a"
                      ref={(el) => { answerRefs.current[i] = el; }}
                      style={{ maxHeight: isOpen ? openFaq.height : undefined }}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contato">
          <div className="wrap">
            <h2>Vamos entender o seu caso?</h2>
            <p>Me conte o que aconteceu — se já teve negativa, se ainda não deu entrada, ou se só quer entender se há direito. Vou ouvir o seu caso e explicar, com clareza, quais são as possibilidades.</p>
            <WaButton label="Falar no WhatsApp agora" colors={GOLD} className="cta-btn" />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>Glaydstone Daniel · OAB/PE 34.574 · Direito Previdenciário — Atuação em todo o estado de Pernambuco</p>
          <p className="fnote">Este site não constitui aconselhamento jurídico definitivo. Cada caso é único e deve ser avaliado individualmente.</p>
        </div>
      </footer>

      <div className="sticky-cta">
        <WaButton label="Falar no WhatsApp agora" colors={GOLD} icon={false} className="full" style={{ width: "100%" }} />
      </div>
    </>
  );
}
