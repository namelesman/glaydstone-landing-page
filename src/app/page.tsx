"use client";

import { useState } from "react";
import RadialRevealButton from "@/components/RadialRevealButton";
import Image from "next/image";
import { Check, Phone, Mail, CheckCircle2, HelpCircle, X, User, AtSign } from "lucide-react";

const WHATSAPP_NUMBER = "5581994071330";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+gostaria+de+falar+com+o+escrit%C3%B3rio+sobre+uma+quest%C3%A3o+jur%C3%ADdica.`;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const nome = (target.elements.namedItem('modal_nome') as HTMLInputElement).value;
    const telefone = (target.elements.namedItem('modal_telefone') as HTMLInputElement).value;
    const msg = `Olá, sou ${nome}. Meu telefone/WhatsApp é ${telefone}. Solicito uma ligação.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 py-5 text-white">
        <div className="container mx-auto px-5 max-w-6xl flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 border border-white/40 flex items-center justify-center font-serif font-bold text-lg tracking-tighter">
              GD
            </div>
            <div>
              <strong className="block text-sm tracking-[3px] leading-none">GLAYDSTONE</strong>
              <small className="block mt-1 text-[8px] tracking-[4px] opacity-70">ADVOCACIA</small>
            </div>
          </a>

          <nav className="hidden md:flex gap-7 text-sm text-white/80">
            <a href="#atuacao" className="hover:text-white transition-colors">Atuação</a>
            <a href="#vantagens" className="hover:text-white transition-colors">Vantagens</a>
            <a href="#escritorio" className="hover:text-white transition-colors">O escritório</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>

          <div className="hidden md:block">
            <RadialRevealButton 
              label="Falar com o escritório" 
              link={WHATSAPP_LINK} 
              colors={{ fill: "#ffffff", textColor: "#0d1b2a", hoverFill: "#b9975b", hoverTextColor: "#ffffff" }}
              border={{ borderWidth: 0 }}
              font={{ fontSize: 13, fontWeight: 700 }}
              padding="12px 22px"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-[760px] flex items-center text-white pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="https://www.glaydstoneadvocacia.com.br/wp-content/uploads/2024/02/capa-escritorio.jpg" alt="Background" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e17eb] via-[#081522bf] to-[#08152240] md:bg-gradient-to-r from-[#050e17eb] via-[#081522bf] to-[#08152240]" />
        </div>
        
        <div className="container mx-auto px-5 max-w-6xl relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] tracking-[2.3px] font-bold text-gold-light mb-4">GLAYDSTONE DANIEL • OAB/PE 34.574</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] leading-tight tracking-tight mb-6">
              Orientação jurídica para questões <em className="not-italic text-[#d7c091]">trabalhistas e previdenciárias.</em>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Atendimento individualizado para compreender sua situação, analisar as possibilidades jurídicas e orientar os próximos passos.
            </p>
            <div className="flex flex-wrap gap-4">
              <RadialRevealButton 
                label="Falar com o escritório" 
                link={WHATSAPP_LINK}
                colors={{ fill: "#b9975b", textColor: "#ffffff", hoverFill: "#a8874f", hoverTextColor: "#ffffff" }}
                border={{ borderWidth: 0 }}
                font={{ fontSize: 13, fontWeight: 700 }}
              />
              <RadialRevealButton 
                label="Conhecer áreas de atuação" 
                link="#atuacao"
                newTab={false}
                colors={{ fill: "transparent", textColor: "#ffffff", hoverFill: "rgba(255,255,255,0.08)", hoverTextColor: "#ffffff" }}
                border={{ borderWidth: 1, borderColor: "rgba(255,255,255,0.35)", borderStyle: "solid" }}
                font={{ fontSize: 13, fontWeight: 700 }}
              />
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-xs text-white/70">
              <span className="flex items-center gap-1"><Check size={14} /> Atendimento presencial</span>
              <span className="flex items-center gap-1"><Check size={14} /> Atendimento online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-cream py-8 border-b border-line">
        <div className="container mx-auto px-5 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="block text-[#8d6d35] text-[10px] font-bold tracking-[2px]">ATENDIMENTO</span>
            <strong className="block font-serif text-2xl mt-1">Converse com o escritório</strong>
            <p className="text-muted text-sm mt-1">Apresente sua situação e saiba como funciona o atendimento.</p>
          </div>
          <RadialRevealButton 
            label="Enviar mensagem pelo WhatsApp" 
            link={WHATSAPP_LINK}
            colors={{ fill: "#0d1b2a", textColor: "#ffffff", hoverFill: "#12263a", hoverTextColor: "#ffffff" }}
            border={{ borderWidth: 0 }}
            font={{ fontSize: 13, fontWeight: 700 }}
          />
        </div>
      </section>

      {/* Atuação */}
      <section id="atuacao" className="py-24">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="max-w-2xl mb-12">
            <span className="text-[#8d6d35] text-[11px] tracking-[2.3px] font-bold mb-4 block">ÁREAS DE ATUAÇÃO</span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4 text-navy">Atuação jurídica focada em duas áreas.</h2>
            <p className="text-muted">Uma abordagem objetiva para quem precisa entender sua situação e buscar orientação jurídica.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white border border-line shadow-sm group overflow-hidden">
              <div className="aspect-[1.55] overflow-hidden relative">
                <Image src="https://www.glaydstoneadvocacia.com.br/wp-content/uploads/2024/02/direito-traalhista-435x290.jpg" alt="Direito Trabalhista" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <span className="text-gold text-[11px] font-bold tracking-[2px]">01</span>
                <h3 className="font-serif text-3xl mt-2 mb-3 text-navy">Direito Trabalhista</h3>
                <p className="text-muted text-sm mb-6">Orientação em questões relacionadas à relação de trabalho, contrato, rescisão e demais situações trabalhistas.</p>
                <button onClick={() => setIsModalOpen(true)} className="text-[#8d6d35] text-[13px] font-bold hover:underline">Falar sobre minha situação →</button>
              </div>
            </article>

            <article className="bg-white border border-line shadow-sm group overflow-hidden">
              <div className="aspect-[1.55] overflow-hidden relative">
                <Image src="https://www.glaydstoneadvocacia.com.br/wp-content/uploads/2024/02/direito-previdenciario-435x290.jpg" alt="Direito Previdenciário" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <span className="text-gold text-[11px] font-bold tracking-[2px]">02</span>
                <h3 className="font-serif text-3xl mt-2 mb-3 text-navy">Direito Previdenciário</h3>
                <p className="text-muted text-sm mb-6">Orientação em questões relacionadas a benefícios previdenciários, aposentadoria e situações perante o INSS.</p>
                <button onClick={() => setIsModalOpen(true)} className="text-[#8d6d35] text-[13px] font-bold hover:underline">Falar sobre minha situação →</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Vantagens (Tabela) */}
      <section id="vantagens" className="py-24 bg-white border-t border-line">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[38px] text-navy font-sans mb-4">
              Entenda as PRINCIPAIS VANTAGENS<br/>
              <span className="text-2xl font-normal">em contratar a</span><br/>
              <strong>GLAYDSTONE ADVOGADOS</strong>
            </h2>
          </div>
          
          {/* Mobile view */}
          <div className="md:hidden space-y-6">
            {[
              {
                title: "Atendimento online",
                desc: "Nosso atendimento pode ser online. Você pode falar com a gente de onde estiver e quando precisar. Nossa equipe de advogados está pronta para lhe atender.",
              },
              {
                title: "Advocacia especializada",
                desc: "Somos um Escritório Especializado e Pós-graduado em Direito Trabalhista e Direito Previdenciário.",
              },
              {
                title: "Agilidade",
                desc: "Conte com nossa experiência para uma maior agilidade na resolução de seu processo.",
              },
              {
                title: "Foco no cliente",
                desc: "Foco e dedicação na causa do nosso cliente. Proporcionando-lhe maior segurança e evolução da sua causa.",
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-line shadow-sm p-6">
                <strong className="block text-navy text-lg mb-2">{item.title}</strong>
                <p className="text-muted text-sm mb-6">{item.desc}</p>
                <div className="flex border-t border-line pt-4 gap-4">
                  <div className="flex-1 text-center border-r border-line pr-4">
                    <span className="block text-[10px] font-bold text-navy mb-3 uppercase tracking-wider">Nosso Escritório</span>
                    <CheckCircle2 className="mx-auto text-green-400" size={28} strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-center bg-gray-50/50 rounded-sm pb-2">
                    <span className="block text-[10px] font-bold text-navy mb-3 uppercase tracking-wider pt-2">Outros Escritórios</span>
                    <HelpCircle className="mx-auto text-red-300" size={28} strokeWidth={2} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <div className="hidden md:block overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse border border-line min-w-[700px]">
              <thead>
                <tr className="bg-white">
                  <th className="p-6 border border-line text-sm uppercase tracking-wider font-bold w-1/2 text-navy">ENTENDA OS DIFERENCIAIS PARA AVALIAR</th>
                  <th className="p-6 border border-line text-sm font-bold text-center w-1/4 text-navy">Nosso Escritório</th>
                  <th className="p-6 border border-line text-sm font-bold text-center w-1/4 text-navy">Outros Escritórios</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-6 border border-line">
                    <strong className="block mb-1 text-navy">Atendimento online</strong>
                    <span className="text-muted">Nosso atendimento pode ser online. Você pode falar com a gente de onde estiver e quando precisar. Nossa equipe de advogados está pronta para lhe atender.</span>
                  </td>
                  <td className="p-6 border border-line text-center">
                    <CheckCircle2 className="mx-auto text-green-400" size={26} strokeWidth={2} />
                  </td>
                  <td className="p-6 border border-line text-center bg-gray-50/50">
                    <HelpCircle className="mx-auto text-red-300" size={26} strokeWidth={2} />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border border-line">
                    <strong className="block mb-1 text-navy">Advocacia especializada</strong>
                    <span className="text-muted">Somos um Escritório Especializado e Pós-graduado em Direito Trabalhista e Direito Previdenciário.</span>
                  </td>
                  <td className="p-6 border border-line text-center">
                    <CheckCircle2 className="mx-auto text-green-400" size={26} strokeWidth={2} />
                  </td>
                  <td className="p-6 border border-line text-center bg-gray-50/50">
                    <HelpCircle className="mx-auto text-red-300" size={26} strokeWidth={2} />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border border-line">
                    <strong className="block mb-1 text-navy">Agilidade</strong>
                    <span className="text-muted">Conte com nossa experiência para uma maior agilidade na resolução de seu processo.</span>
                  </td>
                  <td className="p-6 border border-line text-center">
                    <CheckCircle2 className="mx-auto text-green-400" size={26} strokeWidth={2} />
                  </td>
                  <td className="p-6 border border-line text-center bg-gray-50/50">
                    <HelpCircle className="mx-auto text-red-300" size={26} strokeWidth={2} />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border border-line">
                    <strong className="block mb-1 text-navy">Foco no cliente</strong>
                    <span className="text-muted">Foco e dedicação na causa do nosso cliente. Proporcionando-lhe maior segurança e evolução da sua causa.</span>
                  </td>
                  <td className="p-6 border border-line text-center">
                    <CheckCircle2 className="mx-auto text-green-400" size={26} strokeWidth={2} />
                  </td>
                  <td className="p-6 border border-line text-center bg-gray-50/50">
                    <HelpCircle className="mx-auto text-red-300" size={26} strokeWidth={2} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
             <div className="inline-block" onClick={() => setIsModalOpen(true)}>
               <RadialRevealButton 
                  label="FALAR COM UM ADVOGADO" 
                  colors={{ fill: "#543949", textColor: "#ffffff", hoverFill: "#3e2935", hoverTextColor: "#ffffff" }}
                  border={{ borderWidth: 0 }}
                  font={{ fontSize: 13, fontWeight: 700, letterSpacing: '1px' }}
                  padding="18px 36px"
                />
             </div>
          </div>
        </div>
      </section>

      {/* O Escritório */}
      <section id="escritorio" className="grid md:grid-cols-2 bg-navy text-white">
        <div className="min-h-[360px] md:min-h-[620px] relative">
          <Image src="https://www.glaydstoneadvocacia.com.br/wp-content/uploads/2024/02/capa-escritorio.jpg" alt="Escritório" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center p-10 md:p-20 lg:px-24">
          <span className="text-[#8d6d35] text-[11px] tracking-[2.3px] font-bold mb-4">O ESCRITÓRIO</span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-6 text-white">Experiência, atendimento e proximidade.</h2>
          <p className="text-white/70 mb-4 max-w-lg leading-relaxed">
            A Glaydstone Daniel Advocacia atua nas áreas Trabalhista e Previdenciária, com atendimento pensado para compreender cada situação de forma individualizada.
          </p>
          <p className="text-white/70 mb-6 max-w-lg leading-relaxed">
            O escritório oferece atendimento presencial e online, permitindo que você converse com a equipe de onde estiver.
          </p>
          <div className="border-l-2 border-gold pl-4 py-1 mb-8">
            <strong className="block font-serif text-xl">Glaydstone Daniel</strong>
            <span className="block text-white/60 text-xs mt-1">Advogado • OAB/PE 34.574</span>
          </div>
          <div className="self-start">
            <RadialRevealButton 
              label="Conversar com o escritório" 
              link={WHATSAPP_LINK}
              colors={{ fill: "#b9975b", textColor: "#ffffff", hoverFill: "#a8874f", hoverTextColor: "#ffffff" }}
              border={{ borderWidth: 0 }}
              font={{ fontSize: 13, fontWeight: 700 }}
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-navy-2 py-24 text-center text-white">
        <div className="container mx-auto px-5 max-w-3xl">
          <span className="block font-serif text-[90px] leading-[0.5] text-gold">“</span>
          <blockquote className="font-serif text-2xl md:text-4xl leading-snug my-6">
            Entender a situação é o primeiro passo para saber quais possibilidades jurídicas podem ser avaliadas.
          </blockquote>
          <p className="text-gold-light text-xs tracking-[2px] uppercase">Glaydstone Daniel Advocacia</p>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 bg-cream border-b border-line">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#8d6d35] text-[11px] tracking-[2.3px] font-bold mb-4 block">DEPOIMENTOS</span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-navy">O que falam nossos clientes?</h2>
            <p className="text-muted mt-4">É por causa disso que trabalhamos forte diariamente.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Muita eficiência e bom atendimento. O escritório tem pluralidade, atuando nas diversas áreas do direito.",
                name: "Sheilla Silveira"
              },
              {
                text: "Profissional exemplar, dedicado e que conseguiu resolver meu problema. Muito bem atendida, indico para quem estiver precisando de um advogado com um vasto conhecimento.",
                name: "Yannara Daniel"
              },
              {
                text: "Excelente advogado muito competente está de parabéns obrigado pela atenção!",
                name: "Elisabete Marques"
              }
            ].map((d, i) => (
              <div key={i} className="bg-white border border-line p-8 shadow-sm">
                <p className="text-muted text-sm italic mb-6">"{d.text}"</p>
                <div>
                  <strong className="block font-serif text-navy">{d.name}</strong>
                  <span className="text-xs text-gold">Cliente</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-5 max-w-6xl grid md:grid-cols-[1fr_480px] gap-16 items-start">
          <div>
            <span className="text-[#8d6d35] text-[11px] tracking-[2.3px] font-bold mb-4 block">FALE COM O ESCRITÓRIO</span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-navy mb-6">Apresente sua situação.</h2>
            <p className="text-muted max-w-lg mb-8">
              Envie uma mensagem pelo WhatsApp ou preencha o formulário. A equipe entrará em contato para entender o seu caso e orientar sobre o atendimento.
            </p>

            <div className="space-y-6">
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex flex-col group">
                <span className="text-[#8d6d35] text-[10px] tracking-[2px] font-bold uppercase flex items-center gap-2"><Phone size={12} /> Telefone / WhatsApp</span>
                <strong className="text-navy text-lg group-hover:underline">(81) 9 9407-1330</strong>
              </a>
              <a href="mailto:glaydstonedaniel@gmail.com" className="flex flex-col group">
                <span className="text-[#8d6d35] text-[10px] tracking-[2px] font-bold uppercase flex items-center gap-2"><Mail size={12} /> E-mail</span>
                <strong className="text-navy text-lg group-hover:underline">glaydstonedaniel@gmail.com</strong>
              </a>
              <a href="https://www.instagram.com/glaydstone_daniel/" target="_blank" rel="noopener noreferrer" className="flex flex-col group">
                <span className="text-[#8d6d35] text-[10px] tracking-[2px] font-bold uppercase flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Instagram
                </span>
                <strong className="text-navy text-lg group-hover:underline">@glaydstone_daniel</strong>
              </a>
            </div>
          </div>

          <form 
            className="bg-white p-8 border border-line shadow-lg rounded-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as HTMLFormElement;
              const nome = (target.elements.namedItem('nome') as HTMLInputElement).value;
              const telefone = (target.elements.namedItem('telefone') as HTMLInputElement).value;
              const assunto = (target.elements.namedItem('assunto') as HTMLSelectElement).value;
              const msg = `Olá, sou ${nome}. Meu WhatsApp é ${telefone}. Gostaria de falar sobre ${assunto}.`;
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
            }}
          >
            <div className="mb-4">
              <label htmlFor="nome" className="block text-xs font-bold text-navy mb-2">Nome *</label>
              <input id="nome" name="nome" type="text" required placeholder="Seu nome" className="w-full h-12 px-4 border border-[#d9d6cf] rounded-[3px] focus:border-gold outline-none text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="telefone" className="block text-xs font-bold text-navy mb-2">WhatsApp *</label>
              <input id="telefone" name="telefone" type="tel" required placeholder="(00) 00000-0000" className="w-full h-12 px-4 border border-[#d9d6cf] rounded-[3px] focus:border-gold outline-none text-sm" />
            </div>

            <div className="mb-6">
              <label htmlFor="assunto" className="block text-xs font-bold text-navy mb-2">Como podemos ajudar?</label>
              <select id="assunto" name="assunto" className="w-full h-12 px-4 border border-[#d9d6cf] rounded-[3px] focus:border-gold outline-none text-sm bg-white">
                <option value="Direito Trabalhista">Direito Trabalhista</option>
                <option value="Direito Previdenciário">Direito Previdenciário</option>
                <option value="Outro assunto">Outro assunto</option>
              </select>
            </div>

            <div className="w-full" onClick={(e) => {
              const form = e.currentTarget.closest('form');
              if (form && form.checkValidity()) {
                form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
              } else if (form) {
                form.reportValidity();
              }
            }}>
               <RadialRevealButton 
                  label="Enviar pelo WhatsApp" 
                  colors={{ fill: "#b9975b", textColor: "#ffffff", hoverFill: "#a8874f", hoverTextColor: "#ffffff" }}
                  border={{ borderWidth: 0 }}
                  font={{ fontSize: 13, fontWeight: 700 }}
                  style={{ width: '100%' }}
                />
            </div>
            <small className="block text-center text-[#7a8186] text-[10px] mt-4">Ao enviar, você será direcionado para o WhatsApp do escritório.</small>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#091520] text-white pt-14 pb-5">
        <div className="container mx-auto px-5 max-w-6xl grid md:grid-cols-2 gap-10">
          <div>
            <a href="#inicio" className="flex items-center gap-3 text-white mb-4">
              <div className="w-10 h-10 border border-white/40 flex items-center justify-center font-serif font-bold text-lg tracking-tighter">GD</div>
              <div>
                <strong className="block text-sm tracking-[3px] leading-none">GLAYDSTONE</strong>
                <small className="block mt-1 text-[8px] tracking-[4px] opacity-70">ADVOCACIA</small>
              </div>
            </a>
            <p className="text-white/55 text-xs">Direito Trabalhista e Previdenciário.</p>
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <strong className="font-serif text-lg">Glaydstone Daniel</strong>
            <span className="text-white/55 text-xs">OAB/PE 34.574</span>
            <a href="/politica-de-privacidade.html" className="text-white/55 text-xs hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
        <div className="container mx-auto px-5 max-w-6xl mt-10 pt-4 border-t border-white/10 text-white/40 text-[10px]">
          © 2026 Glaydstone Daniel Advocacia. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-[#1aa65b] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform" aria-label="Falar com o escritório pelo WhatsApp">
        <Phone size={24} fill="currentColor" />
      </a>

      {/* Modal - Fale Conosco Agora */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-[500px] p-8 md:p-12 relative shadow-2xl rounded-sm" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-sans text-navy mb-4 text-center">FALE CONOSCO AGORA</h3>
            <p className="text-sm text-muted mb-8 text-center leading-relaxed">
              Estamos à disposição para conversar e entender um pouco sobre a sua causa. Mande uma mensagem agora mesmo sem compromisso. Vamos te ligar assim que possível.
            </p>
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input id="modal_nome" name="modal_nome" type="text" placeholder="Nome *" required className="w-full h-12 pl-12 pr-4 border border-line rounded-sm focus:border-[#d97736] outline-none text-sm placeholder:text-gray-400" />
              </div>
              <div className="relative">
                <AtSign className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input id="modal_email" name="modal_email" type="email" placeholder="E-mail" className="w-full h-12 pl-12 pr-4 border border-line rounded-sm focus:border-[#d97736] outline-none text-sm placeholder:text-gray-400" />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input id="modal_telefone" name="modal_telefone" type="tel" placeholder="Telefone ou WhatsApp *" required className="w-full h-12 pl-12 pr-4 border border-line rounded-sm focus:border-[#d97736] outline-none text-sm placeholder:text-gray-400" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input id="modal_mensagem" name="modal_mensagem" type="text" placeholder="Sua Mensagem" className="w-full h-12 pl-12 pr-4 border border-line rounded-sm focus:border-[#d97736] outline-none text-sm placeholder:text-gray-400" />
              </div>
              
              <button type="submit" className="w-full mt-2 bg-[#d97736] text-white font-bold h-12 rounded-sm hover:bg-[#c2662c] transition-colors text-sm uppercase tracking-wide">
                Solicite uma ligação grátis
              </button>
            </form>
            
            <div className="text-center my-6 text-gray-400 text-sm">-- OU --</div>
            
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-[#00c896] text-white font-bold h-12 rounded-sm hover:bg-[#00b084] transition-colors text-sm uppercase tracking-wide">
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
