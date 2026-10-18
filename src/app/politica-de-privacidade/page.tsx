import type { Metadata } from "next";
import RadialRevealButton from "@/components/RadialRevealButton";
import "./privacidade.css";

export const metadata: Metadata = {
  title: "Política de Privacidade | Glaydstone Daniel – OAB/PE 34.574",
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="privacy-page">
      <main>
        <h1>Política de Privacidade</h1>
        <p className="upd">Última atualização: outubro de 2026</p>

        <p>Esta Política explica como o site <strong>gdadvocacias.com.br</strong> trata dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).</p>

        <h2>1. Quem é o responsável pelo tratamento</h2>
        <p>
          O responsável é <strong>Glaydstone Daniel</strong>, advogado inscrito na OAB/PE sob o nº 34.574, com atuação em Direito Trabalhista e Previdenciário no estado de Pernambuco. O canal de contato para assuntos de privacidade é o WhatsApp{" "}
          <RadialRevealButton
            label="(81) 99407-1330"
            link="https://wa.me/5581994071330"
            colors={{ fill: "#1F4A3D", textColor: "#FFFDF9", hoverFill: "#2E5F4E", hoverTextColor: "#FFFDF9" }}
            border={{ borderWidth: 0 }}
            font={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}
            padding="4px 12px"
            rounded={20}
            style={{ verticalAlign: "middle" }}
          />
          .
        </p>

        <h2>2. Quais dados são coletados</h2>
        <ul>
          <li><strong>Dados que você nos envia voluntariamente:</strong> nome, telefone/WhatsApp e as informações que você escolher compartilhar ao entrar em contato, por exemplo ao clicar nos botões de WhatsApp ou preencher o formulário de solicitação de ligação.</li>
          <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador e dispositivo, páginas visitadas, origem do acesso e interações com botões, coletados por cookies e tecnologias semelhantes.</li>
        </ul>
        <p>O site não solicita documentos, laudos ou dados de saúde. Se você optar por enviar esse tipo de informação por WhatsApp, ela será usada apenas para a análise do seu caso, com o sigilo profissional próprio da advocacia.</p>

        <h2>3. Para que usamos os dados</h2>
        <ul>
          <li>Responder ao seu contato e avaliar a possibilidade de atendimento;</li>
          <li>Melhorar o funcionamento do site;</li>
          <li>Medir o desempenho de anúncios e do site (por exemplo, quantas pessoas clicam para falar no WhatsApp);</li>
          <li>Cumprir obrigações legais e regulatórias, inclusive as da OAB.</li>
        </ul>

        <h2>4. Base legal</h2>
        <p>O tratamento ocorre com base no seu <strong>consentimento</strong> (art. 7º, I, da LGPD), na <strong>execução de procedimentos preliminares</strong> relacionados à contratação de serviços, a seu pedido (art. 7º, V), no <strong>legítimo interesse</strong> de medir e melhorar o site e os anúncios (art. 7º, IX) e no <strong>cumprimento de obrigação legal</strong> (art. 7º, II).</p>

        <h2>5. Cookies e ferramentas de terceiros</h2>
        <p>Este site utiliza a <strong>tag do Google (Google Ads)</strong> para medir conversões e a eficácia de anúncios. Essa ferramenta usa cookies e identificadores para registrar, de forma agregada, visitas e cliques em botões. O Google atua como operador/controlador independente conforme a sua própria política de privacidade, disponível em <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">policies.google.com/privacy</a>.</p>
        <p>Você pode bloquear ou apagar cookies nas configurações do seu navegador. Também pode gerenciar a personalização de anúncios em <a href="https://adssettings.google.com" rel="noopener" target="_blank">adssettings.google.com</a>. Bloquear cookies pode afetar algumas funções do site.</p>

        <h2>6. WhatsApp</h2>
        <p>Ao clicar em um botão de WhatsApp, você é direcionado ao aplicativo, que é operado pela Meta Platforms e possui política de privacidade própria. A conversa passa a ser regida também pelos termos dessa plataforma.</p>

        <h2>7. Compartilhamento</h2>
        <p>Não vendemos seus dados. Eles podem ser compartilhados apenas com prestadores que viabilizam o site e a medição de anúncios (como hospedagem e Google), e com autoridades, quando exigido por lei.</p>

        <h2>8. Por quanto tempo guardamos os dados</h2>
        <p>Mantemos os dados pelo tempo necessário para as finalidades descritas, e pelos prazos exigidos em lei ou pelas normas da advocacia. Depois disso, eles são eliminados ou anonimizados.</p>

        <h2>9. Seus direitos</h2>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar: confirmação de que tratamos seus dados; acesso; correção; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; informação sobre compartilhamento; e a revogação do consentimento a qualquer momento. Para exercer esses direitos, fale conosco pelo WhatsApp indicado na seção 1.</p>

        <h2>10. Segurança</h2>
        <p>Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda ou alteração. Nenhum sistema é totalmente imune a riscos, mas tratamos qualquer incidente conforme a legislação.</p>

        <h2>11. Alterações</h2>
        <p>Esta Política pode ser atualizada. A data da última revisão aparece no topo desta página.</p>

        <footer>
          Glaydstone Daniel · OAB/PE 34.574 · Direito Trabalhista e Previdenciário · Pernambuco<br />
          Este site não constitui aconselhamento jurídico definitivo. Cada caso é único e deve ser avaliado individualmente.
        </footer>
      </main>
    </div>
  );
}
