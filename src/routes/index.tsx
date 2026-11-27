import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Award, Check, Clock3, Gift, MessageCircle,
  Shield, ShieldCheck, ShoppingCart, Sparkles, X,
} from "lucide-react";

const projects = [
  ["🎅", "Papai Noel", "e seus ajudantes", "pink"],
  ["🦌", "Renas", "e bonecos de neve", "blue"],
  ["🏠", "Casinhas", "e vilas natalinas", "mint"],
  ["🎄", "Árvores", "e enfeites de Natal", "yellow"],
  ["🎁", "Presentinhos", "e caixinhas", "lilac"],
  ["🍪", "Biscoitos", "e doces natalinos", "peach"],
];

const steps = [
  ["Escolha seu molde natalino favorito.", "pink"],
  ["Imprima em uma folha de papel comum.", "blue"],
  ["Pinte com lápis de cor ou canetinhas.", "yellow"],
  ["Recorte, dobre e monte seguindo as instruções.", "lilac"],
  ["Crie seu próprio universo natalino e divirta-se!", "mint"],
];

const audiences = [
  ["👨‍👩‍👧", "Mamães e Papais", "Uma alternativa econômica para as férias e para criar momentos especiais em família.", "pink"],
  ["🧑‍🏫", "Professores e Educadores", "Atividades prontas para oficinas, confraternizações e os últimos dias de aula.", "mint"],
  ["🎨", "Crianças que adoram criar", "Personagens, brinquedos e cenários para montar, personalizar e colecionar.", "blue"],
  ["🏡", "Famílias que desejam reduzir o tempo de tela", "Uma opção divertida para incentivar brincadeiras manuais durante as férias.", "lilac"],
];

const bonuses = [
  ["📘", "BÔNUS 1", "Guia de Montagem Fácil", "Passo a passo ilustrado com dicas para montar brinquedos de papel mais resistentes.", "yellow"],
  ["🏘️", "BÔNUS 2", "Minha Vila Mágica de Natal", "Casinhas, lojas, árvores e personagens para construir uma pequena vila natalina.", "blue"],
  ["🧸", "BÔNUS 3", "Coleção de Paper Squishies Natalinos", "Moldes fofinhos de personagens, doces e presentes para criar brinquedos macios e divertidos.", "mint"],
];

const questions: [string, string][] = [
  ["Como vou receber os moldes?", "Você receberá o material em PDF pelo WhatsApp e e-mail após a confirmação do pagamento."],
  ["Preciso comprar materiais especiais?", "Não. Os modelos utilizam principalmente papel, tesoura, cola e materiais para colorir. Os Paper Squishies também utilizam fita adesiva e enchimento."],
  ["Posso imprimir quantas vezes quiser?", "Sim, para uso pessoal e em suas atividades escolares, conforme os termos de utilização."],
  ["Os moldes já vêm coloridos?", "O Kit Completo inclui versões coloridas e para colorir."],
  ["Crianças pequenas conseguem montar?", "Sim, com a ajuda e supervisão de um adulto, especialmente durante o uso da tesoura."],
  ["Vou receber algum produto físico?", "Não. Todo o material é digital, em formato PDF."],
  ["Preciso pagar mensalidade?", "Não. O pagamento é único e o acesso ao material é vitalício."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natal de Papel — +200 Moldes para Imprimir e Montar" },
      { name: "description", content: "Mais de 200 brinquedos natalinos de papel para imprimir, pintar, montar e brincar em casa." },
      { property: "og:title", content: "Natal de Papel — +200 Moldes para Imprimir e Montar" },
      { property: "og:description", content: "Transforme papel em diversão criativa para as férias. Acesso imediato pelo WhatsApp e e-mail." },
    ],
  }),
  component: Home,
});

function Home() {
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const openCheckout = () => { setUpgradeOpen(false); setCheckoutOpen(true); };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setUpgradeOpen(false); setCheckoutOpen(false); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="paper-site" id="inicio">
      <div className="announcement">🎄 ESPECIAL DE NATAL — ACESSO IMEDIATO NO WHATSAPP</div>
      <header className="site-header">
        <a className="brand" href="#inicio"><span className="brand-mark">🎄</span><span>Natal <i>de Papel</i></span></a>
        <nav aria-label="Navegação principal"><a href="#moldes">Os moldes</a><a href="#bonus">Presentes</a><a href="#planos">Escolha seu kit</a></nav>
        <a className="header-cta" href="#planos">Quero meu kit <ArrowRight size={15} /></a>
      </header>

      <section className="hero paper-dots" aria-labelledby="hero-title">
        <span className="hero-doodle doodle-pencil">✏️</span><span className="hero-doodle doodle-star">⭐</span>
        <div className="hero-copy">
          <span className="pill pill-yellow">🎄 ACESSO IMEDIATO NO WHATSAPP</span>
          <h1 id="hero-title">Tire as crianças das telas neste Natal: <em>+200 brinquedos natalinos de papel</em> para imprimir, pintar e montar em casa.</h1>
          <p className="hero-lede">Transforme folhas de papel em personagens natalinos, renas, casinhas, presentes e brinquedos encantadores.</p>
          <p className="hero-note">Diversão criativa para as férias, utilizando materiais que você já tem em casa.</p>
        </div>
        <div className="hero-art" aria-label="Prévia ilustrada do kit de moldes natalinos para imprimir">
          <div className="art-spark art-spark-one">✦</div><div className="art-spark art-spark-two">✧</div>
          <div className="book-mock"><span className="book-ribbon">KIT DE NATAL</span><span className="book-tree">🎄</span><strong>BRINQUEDOS<br />DE PAPEL</strong><small>+200 moldes para imprimir, pintar e montar</small><span className="book-stamp">NATAL<br />DE PAPEL</span></div>
          <div className="laptop-mock"><div className="laptop-screen"><div className="screen-top">SEU KIT DIGITAL · PDF</div><div className="mini-pages"><div>🎅<small>Papai Noel</small></div><div>🦌<small>Rena</small></div><div>🏠<small>Vila</small></div><div>🎁<small>Presente</small></div></div><div className="screen-caption">IMPRIMA · PINTE · MONTE</div></div><div className="laptop-base" /></div>
          <div className="phone-mock"><div className="phone-notch"/><span>🎄</span><strong>Meu PDF<br />natalino</strong><div className="phone-grid"><i>🎅</i><i>☃️</i><i>🎁</i><i>🏠</i></div></div>
          <span className="art-label">PRONTO PARA IMPRIMIR EM A4</span>
        </div>
        <div className="hero-purchase">
          <span className="hero-price-label">A PARTIR DE</span>
          <span className="hero-price"><small>R$</small>12<sup>,00</sup></span>
          <a className="button button-primary hero-button" href="#planos"><ShoppingCart size={22} /> QUERO MEU KIT NATALINO</a>
          <div className="hero-proof"><span className="proof-item"><Clock3 size={16} /> ACESSO IMEDIATO</span><span className="proof-item"><Shield size={16} /> COMPRA SEGURA</span><span className="proof-item"><Award size={16} /> 7 DIAS DE GARANTIA</span></div>
        </div>
      </section>

      <section className="section-wrap project-section paper-dots" id="moldes">
        <div className="section-heading"><span className="pill pill-pink">🎁 MODELOS PRONTOS</span><h2>🎅 Um mundo mágico de Natal <em>feito de papel!</em></h2><p>Veja os brinquedos que as crianças poderão construir:</p></div>
        <div className="project-grid">{projects.map(([emoji, title, subtitle, tone]) => <article className={`project-card tone-${tone}`} key={title}><span className="project-spark">✦</span><div className="toy-preview"><span>{emoji}</span></div><h3>{title}</h3><p>{subtitle}</p></article>)}</div>
        <p className="center-note">Centenas de possibilidades para criar, colecionar, brincar e decorar!</p>
      </section>

      <section className="print-section paper-stars">
        <div className="section-heading"><span className="pill pill-white">🖍️ MOLDES PRONTOS PARA IMPRIMIR</span><h2>Moldes prontos para <em>imprimir</em></h2><p>Transforme uma simples folha de papel em horas de diversão criativa.</p></div>
        <div className="print-showcase">
          <article className="print-sheet sheet-color"><div className="sheet-title">MEU PERSONAGEM DE NATAL</div><div className="sheet-drawing">🎅</div><div className="fold-lines"><span>✂ ─ ─ ─ ─ ─ ─ ─</span><span>RECORTE · DOBRE · COLE</span></div><div className="sheet-bottom">PINTE E MONTE SEU PAPAI NOEL!</div></article>
          <article className="print-sheet sheet-outline"><div className="sheet-title">PINTE E MONTE SUA VILA</div><div className="village-drawing"><span>🏠</span><span>🎄</span><span>🏠</span></div><div className="fold-lines"><span>✂ ─ ─ ─ ─ ─ ─ ─</span><span>RECORTE · DOBRE · COLE</span></div><div className="sheet-bottom">CRIE UM CENÁRIO ENCANTADO</div></article>
        </div>
        <div className="print-flow">{["MOLDE", "PINTAR", "MONTAR", "BRINCAR"].map((label, i) => <div key={label}><span>{["📄", "🎨", "✂️", "🎉"][i]}</span><strong>{label}</strong></div>)}</div>
        <p className="center-note">Não precisa de materiais caros ou equipamentos especiais.</p>
      </section>

      <section className="section-wrap how-section">
        <div className="section-heading"><span className="pill pill-mint">✏️ COMO FUNCIONA</span><h2>Simples, rápido e <em>muito divertido!</em></h2></div>
        <div className="steps-list">{steps.map(([label, tone], i) => <article className={`step-card tone-${tone}`} key={label}><span className="step-num">{i + 1}</span><p>{label}</p></article>)}</div>
        <div className="center-cta"><a className="button button-primary" href="#planos">QUERO COMEÇAR A CRIAR <ArrowRight size={17} /></a></div>
      </section>

      <section className="together-section paper-dots">
        <div className="section-heading"><span className="pill pill-pink">✨ MAIS MOMENTOS JUNTOS</span><h2>Neste Natal, troque algumas horas de tela por momentos que <em>ficarão na memória.</em></h2></div>
        <div className="together-copy"><p>Com a chegada das férias escolares, encontrar atividades para entreter as crianças pode ser um verdadeiro desafio.</p><p>Que tal transformar esse tempo em momentos de criatividade, aprendizado e diversão em família?</p><p>Com nosso kit natalino, as crianças poderão criar seus próprios brinquedos, decorar a casa e inventar histórias, utilizando materiais simples e acessíveis.</p><div className="together-mantra"><span>Mais imaginação.</span><span>Mais diversão.</span><span>Mais momentos juntos. 💚</span></div></div>
      </section>

      <section className="section-wrap audience-section">
        <div className="section-heading"><span className="pill pill-pink">🎯 PÚBLICO-ALVO</span><h2>Esse material é <em>perfeito para:</em></h2></div>
        <div className="audience-grid">{audiences.map(([icon, title, copy, tone]) => <article className={`audience-card tone-${tone}`} key={title}><span>{icon}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        <div className="center-cta"><a className="button button-pink" href="#planos">QUERO MEU KIT DE NATAL <ArrowRight size={17} /></a></div>
      </section>

      <section className="preview-section paper-dots">
        <div className="section-heading"><span className="pill pill-yellow">📄 POR DENTRO DO KIT</span><h2>Ideias para criar, pintar e <em>brincar.</em></h2><p>Um gostinho das páginas e atividades que acompanham o material digital.</p></div>
        <div className="preview-strip"><article className="preview-page preview-page-a"><span>🎅</span><strong>PERSONAGENS<br />NATALINOS</strong><small>Crie sua turma de Natal</small></article><article className="preview-page preview-page-b"><span>🏘️</span><strong>MINHA VILA<br />MÁGICA</strong><small>Monte seu cenário</small></article><article className="preview-page preview-page-c"><span>🧸</span><strong>PAPER<br />SQUISHIES</strong><small>Fofinhos e divertidos</small></article></div>
      </section>

      <section className="bonus-section section-wrap paper-confetti" id="bonus">
        <div className="section-heading"><span className="pill pill-yellow">🎁 PRESENTES EXCLUSIVOS</span><h2>E você ainda recebe <em>3 presentes especiais!</em></h2></div>
        <div className="bonus-grid">{bonuses.map(([icon, badge, title, description, tone]) => <article className={`bonus-card tone-${tone}`} key={title}><span className="bonus-icon">{icon}</span><div className="bonus-card-copy"><span className="bonus-number">{badge}</span><h3>{title}</h3><p>{description}</p><span className="free-tag">100% GRÁTIS</span></div></article>)}</div>
      </section>

      <section className="plans-section" id="planos">
        <div className="section-heading"><span className="pill pill-yellow">⚡ ESCOLHA O SEU PLANO</span><h2>Aproveite os <em>kits promocionais</em></h2><p>Acesso vitalício · Entrega digital pelo WhatsApp e e-mail.</p></div>
        <div className="plans-grid">
          <article className="plan-card plan-basic"><span className="plan-kicker">KIT NATALINO ESSENCIAL</span><div className="plan-icon">🎄</div><h3>Kit Essencial</h3><p className="plan-description">Tudo para começar a criar e brincar neste Natal.</p><div className="price"><small>R$</small>12<sup>,00</sup></div><span className="payment-note">Pagamento único</span><ul><li><Check size={16} /> +200 moldes natalinos para colorir</li><li><Check size={16} /> Brinquedos de papel em 3D</li><li><Check size={16} /> PDF pronto para impressão A4</li><li><Check size={16} /> 3 bônus exclusivos</li><li><Check size={16} /> Entrega pelo WhatsApp e e-mail</li><li><Check size={16} /> Acesso vitalício</li></ul><button className="button button-teal plan-button" onClick={() => setUpgradeOpen(true)}>COMPRAR POR R$ 12 <ArrowRight size={16} /></button></article>
          <article className="plan-card plan-featured"><div className="plan-ribbon"><Sparkles size={13} /> MAIS COMPLETO</div><span className="plan-kicker">⭐ KIT NATALINO COMPLETO</span><div className="plan-icon">🎁</div><h3>Kit Completo</h3><p className="plan-description">+100 moldes extras exclusivos!</p><div className="price"><small>R$</small>20<sup>,00</sup></div><span className="payment-note">Pagamento único</span><ul><li><Check size={16} /> Tudo do Kit Essencial</li><li><Check size={16} /> +300 moldes natalinos</li><li><Check size={16} /> Versões coloridas e para colorir</li><li><Check size={16} /> Coleção especial de enfeites natalinos</li><li><Check size={16} /> Cenários e construções exclusivas</li><li><Check size={16} /> Coleção especial de Ano-Novo</li><li><Check size={16} /> Todos os 3 bônus</li><li><Check size={16} /> Acesso vitalício</li></ul><button className="button button-pink plan-button" onClick={openCheckout}>QUERO O KIT COMPLETO POR R$ 20 <ArrowRight size={16} /></button></article>
        </div>
        <div className="delivery-note"><MessageCircle size={23} /><p>Receba o material digital pelo WhatsApp e e-mail após a confirmação do pagamento.</p></div>
      </section>

      <section className="guarantee-section"><div className="guarantee-icon"><ShieldCheck size={35} /></div><div><span className="pill pill-mint">🛡️ COMPRA SEM RISCO</span><h2>Garantia de 7 dias</h2><p>Explore os moldes e comece a diversão com as crianças. Caso o material não atenda às suas expectativas, solicite o reembolso integral dentro de 7 dias.</p></div></section>

      <section className="faq-section paper-dots"><div className="section-heading"><span className="pill pill-pink">❓ TIRE SUAS DÚVIDAS</span><h2>Dúvidas <em>frequentes</em></h2></div><div className="faq-list">{questions.map(([question, answer]) => <details className="faq-item" key={question}><summary><span>{question}</span><span className="faq-plus">⌄</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="closing-cta paper-stars"><span className="pill pill-white">🎄 NATAL DE PAPEL</span><h2>Neste Natal, a diversão começa com uma <em>folha de papel!</em></h2><p>Transforme papel, criatividade e imaginação em momentos especiais com as crianças.</p><strong>+200 brinquedos natalinos para imprimir, pintar, montar e brincar.</strong><span className="closing-price">Comece hoje por apenas R$ 12.</span><a className="button button-primary" href="#planos">QUERO MEU KIT NATALINO <ArrowRight size={17} /></a><small>Acesso imediato · Pagamento único · Garantia de 7 dias</small></section>

      <footer className="site-footer"><a className="brand" href="#inicio"><span className="brand-mark">🎄</span><span>Natal <i>de Papel</i></span></a><p>Material digital em PDF · Pagamento único · Garantia de 7 dias<br />© 2026 — Natal de Papel. Todos os direitos reservados.</p><a href="#inicio">Voltar ao início ↑</a></footer>

      {upgradeOpen && <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setUpgradeOpen(false)}><section className="upgrade-modal" role="dialog" aria-modal="true" aria-labelledby="upgrade-title"><button className="modal-close" aria-label="Fechar oferta" onClick={() => setUpgradeOpen(false)}><X size={20} /></button><div className="modal-icon"><Gift size={25} /></div><span className="pill pill-yellow">UMA OFERTA ESPECIAL PARA VOCÊ</span><h2 id="upgrade-title">Leve o Kit Completo por apenas <em>mais R$ 8.</em></h2><p>Adicione mais de 100 moldes exclusivos, versões coloridas, enfeites, cenários e a coleção especial de Ano-Novo.</p><div className="modal-price-row"><span>Essencial <small>R$ 12</small></span><ArrowRight size={16} /><span>Completo <strong>R$ 20</strong></span></div><button className="button button-pink modal-main-cta" onClick={openCheckout}>SIM, QUERO O KIT COMPLETO <ArrowRight size={17} /></button><button className="modal-secondary" onClick={openCheckout}>Continuar com o Essencial por R$ 12</button><span className="modal-footnote"><ShieldCheck size={14} /> Pagamento único · garantia de 7 dias</span></section></div>}
      {checkoutOpen && <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setCheckoutOpen(false)}><section className="upgrade-modal checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><button className="modal-close" aria-label="Fechar aviso" onClick={() => setCheckoutOpen(false)}><X size={20} /></button><div className="modal-icon"><ShieldCheck size={25} /></div><span className="pill pill-mint">SUA ESCOLHA ESTÁ PRONTA</span><h2 id="checkout-title">Falta conectar o pagamento.</h2><p>Para concluir uma compra, é necessário configurar os links de pagamento dos kits de R$ 12 e R$ 20.</p><p className="checkout-contact"><MessageCircle size={17} /> O PDF será enviado pelo WhatsApp e por e-mail após a confirmação.</p><button className="button button-primary modal-main-cta" onClick={() => setCheckoutOpen(false)}>Entendi <Check size={17} /></button></section></div>}
    </main>
  );
}
