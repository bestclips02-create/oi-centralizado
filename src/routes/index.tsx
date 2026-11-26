import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChefHat,
  Gift,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const asset = "/images/natal/";

const recipes: [string, string, string, string][] = [
  ["🎄 Pinheirinhos de Baunilha", "Baunilha em delicadas árvores de Natal.", "BISCOITOS", "receita-01-pinheirinhos-de-baunilha.webp"],
  ["🔔 Sinos de Canela", "Biscoitos de canela em formato de sino.", "BISCOITOS", "receita-02-sinos-de-canela.webp"],
  ["🎀 Guirlandas de Coco", "Guirlandas de coco para suas caixinhas.", "BISCOITOS", "receita-03-guirlandas-de-coco.webp"],
  ["🍫 Guirlandas de Chocolate com Laranja", "Chocolate com um toque de laranja.", "BISCOITOS", "receita-04-guirlandas-de-chocolate-com-laranja.webp"],
  ["❄️ Flocos de Neve de Limão com Açúcar", "Limão e açúcar em flocos de neve.", "BISCOITOS", "receita-05-flocos-de-neve-de-limao-com-acucar.webp"],
  ["🥥 Guirlandas de Laranja com Coco", "Laranja e coco para variar os sabores.", "BISCOITOS", "receita-06-guirlandas-de-laranja-com-coco.webp"],
  ["✨ Guirlandas de Coco e Gengibre", "Coco e gengibre com sabor de Natal.", "BISCOITOS", "receita-07-guirlandas-de-coco-e-gengibre.webp"],
  ["🍫 Brigadeiros: Bolinhas de Chocolate com Confeitos", "Brigadeiros de chocolate com confeitos.", "BRIGADEIROS", "receita-08-brigadeiros-bolinhas-de-chocolate-com-confeitos.webp"],
  ["🌰 Brigadeiros: Cubinhos de Nozes", "Docinhos de nozes em formato de cubinhos.", "BRIGADEIROS", "receita-09-brigadeiros-cubinhos-de-nozes.webp"],
  ["☕ Brigadeiros: Gotinhas de Café", "Gotinhas de brigadeiro com sabor de café.", "BRIGADEIROS", "receita-10-brigadeiros-gotinhas-de-cafe.webp"],
  ["🤍 Trufas: Bolinhas de Chocolate Branco e Cranberry", "Trufas de chocolate branco com cranberry.", "TRUFAS", "receita-11-trufas-bolinhas-de-chocolate-branco-e-cranberry.webp"],
  ["☕ Trufas: Disquinhos de Café", "Trufas de café em formato de disquinhos.", "TRUFAS", "receita-12-trufas-disquinhos-de-cafe.webp"],
  ["🎁 Trufas: Bolinhas de Chocolate e Avelã", "Chocolate e avelã para servir ou presentear.", "TRUFAS", "receita-13-trufas-bolinhas-de-chocolate-e-avela.webp"],
];

const bonuses: [string, string, string, string][] = [
  ["Guia de Biscoitos Perfeitos", "Orientações ilustradas sobre forno, glacê e secagem.", "19,90", "bonus-01-guia-biscoitos-perfeitos.webp"],
  ["Embalagens Natalinas", "6 embalagens, 8 tags e 6 etiquetas para seus doces.", "24,90", "bonus-02-embalagens-natalinas.webp"],
  ["10 Kits para Vender", "10 sugestões com quantidades, montagem e fichas de custos.", "14,90", "bonus-03-kits-para-vender.webp"],
  ["Lista de Compras Inteligente", "Mapa de ingredientes, 4 listas e fichas de estoque.", "19,90", "bonus-04-lista-compras-inteligente.webp"],
  ["Guia de Substituições", "Alternativas e orientações para testar pequenas porções.", "20,40", "bonus-05-guia-substituicoes.webp"],
];

const conversations: [string, string][] = [
  ["Mariana Costa", "depoimento-01-mariana-costa.webp"],
  ["Juliana Alves", "depoimento-02-juliana-alves.webp"],
  ["Patrícia Lima", "depoimento-03-patricia-lima.webp"],
  ["Renata Martins", "depoimento-04-renata-martins.webp"],
];

const reviewCards: [string, string, string, string, string][] = [
  ["PR", "Patrícia Rocha", "Biscoitos Amanteigados", "Eu achava que precisava comprar aqueles cortadores caros para fazer biscoitos bonitinhos de Natal. Fiz os amanteigados usando um copo e decorei com chocolate derretido. Ficaram uma gracinha! Minha filha adorou ajudar. ❤️", "avaliacao-01-biscoitos-amanteigados.webp"],
  ["MO", "Marta Oliveira", "Cookies Natalinos", "Minha primeira tentativa de fazer cookies decorados tinha sido um desastre kkk. Dessa vez segui as medidas e o passo a passo direitinho. Ficaram crocantes por fora e macios por dentro. Já quero fazer mais para o Natal! 🎅🍪", "avaliacao-02-cookies-natalinos.webp"],
  ["SA", "Sônia Almeida", "Trufas de Natal", "Fiz as trufinhas para montar umas caixinhas de presente e fiquei apaixonada! Não precisei comprar quase nada além dos ingredientes. Ficaram tão bonitas que até me perguntaram onde eu tinha comprado. 😍", "avaliacao-03-trufas-de-natal.webp"],
  ["CF", "Cláudia Ferreira", "Biscoitos de Gengibre", "Sempre via aqueles biscoitinhos de Natal na internet e pensava que eram muito difíceis. Consegui fazer os meus sem ter nenhum molde especial. A casa ficou com aquele cheirinho maravilhoso de canela e gengibre! 🎄", "avaliacao-04-biscoitos-de-gengibre.webp"],
];

const questions: [string, string][] = [
  ["São 150 receitas mesmo?", "Sim: são 120 receitas de biscoitos, 15 de brigadeiros e 15 de trufas. Todas têm medidas e preparo em 8 etapas ilustradas."],
  ["Preciso ter experiência em confeitaria?", "Não precisa ser profissional. Acompanhe as imagens e comece pelas decorações mais simples. Alguns acabamentos exigem prática e respeito aos tempos indicados."],
  ["Preciso de moldes caros ou equipamentos profissionais?", "Não precisa de uma cozinha profissional. Algumas receitas usam cortadores simples, saco de confeitar e corantes. Confira os itens antes de começar."],
  ["O glacê precisa ser comprado pronto?", "Não. Algumas receitas ensinam o preparo com açúcar de confeiteiro, pó de merengue e água. Siga as medidas e as instruções do fabricante."],
  ["A lista de compras calcula as 150 receitas de uma vez?", "Não de uma vez. Você recebe o mapa dos ingredientes, 4 listas para seleções de receitas e fichas para planejar seus lotes."],
  ["Posso trocar qualquer ingrediente com o Guia de Substituições?", "Não. Algumas trocas mudam a textura, o sabor e o formato. O guia explica os limites e orienta testes em pequenas porções."],
  ["Posso usar as receitas para preparar doces para vender?", "Sim. Os bônus Premium ajudam a organizar kits, embalagens e custos. O material digital é para uso pessoal e não deve ser revendido ou distribuído."],
  ["Como recebo o material?", "Após a confirmação do pagamento, siga as orientações da compra para acessar os PDFs. O material é digital; não há envio de livro físico."],
  ["Consigo acessar pelo celular?", "Sim. Você pode abrir o material digital no celular, tablet ou computador e também imprimir as páginas para acompanhar na cozinha."],
  ["Qual é a diferença entre Básica e Premium?", "A edição Básica inclui as 150 receitas. A Premium inclui as receitas e os cinco bônus: guias, embalagens, kits para vender e materiais de organização."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia. Se não gostar, solicite o reembolso pelo canal indicado na compra, dentro desse prazo."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "150 Receitas de Biscoitos e Doces Natalinos" },
      {
        name: "description",
        content:
          "Receitas de Natal práticas e deliciosas para preparar, presentear e compartilhar. Escolha sua coleção.",
      },
      { property: "og:title", content: "150 Receitas de Biscoitos e Doces Natalinos" },
      {
        property: "og:description",
        content: "Um Natal mais gostoso começa com receitas simples e cheias de carinho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [checkoutNotice, setCheckoutNotice] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState<{ name: string; image: string } | null>(null);

  useEffect(() => {
    if (!upgradeOpen && !checkoutNotice && !activeRecipe) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setUpgradeOpen(false);
        setCheckoutNotice(false);
        setActiveRecipe(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [upgradeOpen, checkoutNotice, activeRecipe]);

  const startCheckout = () => {
    setUpgradeOpen(false);
    setCheckoutNotice(true);
  };

  return (
    <main>
      <div className="announcement">
        <Sparkles size={14} aria-hidden="true" />
        <span>Esta promoção acaba hoje · 26/11/2026</span>
        <Sparkles size={14} aria-hidden="true" />
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="150 receitas de Natal — início">
          <span className="brand-mark"><ChefHat size={20} /></span>
          <span>150 Receitas <i>de Natal</i></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#receitas">As receitas</a>
          <a href="#bonus">Os bônus</a>
          <a href="#colecoes">Escolha sua edição</a>
        </nav>
        <a className="header-cta" href="#colecoes">Quero minhas receitas <ArrowRight size={15} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><span /> LIVRO DIGITAL · MATERIAL EM PDF</span>
          <h1>150 biscoitos e doces natalinos <em>com utensílios simples.</em></h1>
          <p className="hero-lede">
            <strong>Seu guia para um Natal cheio de sabor.</strong><br />
            Biscoitos, brigadeiros e trufas com passo a passo ilustrado.
          </p>
          <div className="hero-offer">
            <span className="hero-old-price">De R$ 97,00</span>
            <span className="hero-price-label">POR APENAS</span>
            <span className="hero-price"><small>R$</small>14<sup>,90</sup></span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#colecoes">
              Quero minhas receitas de Natal <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#receitas"><ArrowDown size={15} /> Ver algumas receitas</a>
          </div>
          <div className="hero-proof">
            <span className="proof-item"><ShieldCheck size={15} /><strong>Acesso imediato</strong></span>
            <span className="proof-item"><ShieldCheck size={15} /><strong>Compra 100% segura</strong></span>
            <span className="proof-item"><ShieldCheck size={15} /><strong>7 dias de garantia</strong></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src={`${asset}banner-principal-receitas-natalinas.webp`}
              alt="Prévia ilustrada do guia de receitas de Natal em livro, notebook e celular"
              fetchPriority="high"
            />
          </div>
          <div className="image-note"><span>receitas ilustradas</span><Heart size={15} fill="currentColor" /></div>
          <div className="hero-stamp"><strong>150</strong><span>receitas<br />de Natal</span></div>
        </div>
      </section>

      <section className="recipes-section section-wrap" id="receitas">
        <div className="section-heading">
          <span className="eyebrow">SEU NATAL COMEÇA NA COZINHA</span>
          <h2>Seu Natal começa <em>na cozinha.</em></h2>
          <p>Escolha a receita e acompanhe o preparo pelas imagens.</p>
        </div>
        <div className="recipe-benefit-grid">
          <article><span>🍪</span><p>150 receitas de Natal</p></article>
          <article><span>📖</span><p>8 etapas com imagens</p></article>
          <article><span>🎄</span><p>Formatos para presentear</p></article>
          <article><span>⏱️</span><p>Tempo e rendimento</p></article>
          <article><span>✨</span><p>Dicas de decoração</p></article>
          <article><span>📱</span><p>PDF no celular ou computador</p></article>
        </div>
        <div className="recipe-section-cta"><a className="button button-outline" href="#colecoes">Quero preparar meu Natal <ArrowRight size={16} /></a></div>
        <div className="recipe-grid">
          {recipes.map(([name, description, category, image], index) => (
            <article className={`recipe-card recipe-card-${index + 1}`} key={name}>
              <button className="recipe-image recipe-image-button" onClick={() => setActiveRecipe({ name, image })} aria-label={`Ampliar ${name}`}>
                <img src={`${asset}${image}`} alt={name} loading="lazy" />
                <span>Toque para ampliar</span>
              </button>
              <div className="recipe-caption"><span>{category}</span><h3>{name}</h3></div>
              <p className="recipe-description">{description}</p>
            </article>
          ))}
        </div>
        <div className="recipe-count"><Sparkles size={16} /> Essas são algumas das 150 receitas do livro.</div>
        <div className="recipe-section-cta"><a className="button button-primary" href="#colecoes">Quero as 150 receitas <ArrowRight size={16} /></a></div>
      </section>

      <section className="testimonials-section">
        <div className="section-heading">
          <span className="eyebrow">VEJA O QUE NOSSAS CLIENTES DIZEM</span>
          <h2>Veja o que nossas clientes <em>dizem.</em></h2>
          <p>Depoimentos ilustrativos. Serão substituídos por relatos reais.</p>
        </div>
        <div className="conversation-grid">
          {conversations.map(([name, image]) => (
            <figure className="conversation-card" key={name}>
              <div className="conversation-image"><img src={`${asset}${image}`} alt={`Print ilustrativo de conversa sobre receitas natalinas, ${name}`} loading="lazy" /></div>
              <figcaption><MessageCircle size={14} /> Exemplo ilustrativo · {name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="testimonial-disclaimer">As conversas exibidas são ilustrativas e devem ser substituídas por relatos reais antes da publicação como depoimentos de clientes.</p>
      </section>
      <div className="midpage-cta"><a className="button button-primary" href="#colecoes">Quero minhas receitas de Natal <ArrowRight size={16} /></a></div>

      <section className="benefits-section">
        <div className="benefits-title">
          <span className="eyebrow">DO FORNO PARA A MESA</span>
          <h2>Para fazer, <em>presentear e vender.</em></h2>
        </div>
        <div className="benefits-grid">
          <article><span className="benefit-icon">🍪</span><div><h3>Para fazer</h3><p>Receitas para preparar com utensílios simples e passo a passo ilustrado.</p></div></article>
          <article><span className="benefit-icon">🎁</span><div><h3>Para presentear</h3><p>Doces natalinos que ficam lindos na mesa e nas embalagens.</p></div></article>
          <article><span className="benefit-icon">✨</span><div><h3>Para vender</h3><p>Na Premium, organize kits, embalagens, compras e custos.</p></div></article>
        </div>
      </section>

      <section className="bonus-section section-wrap" id="bonus">
        <div className="bonus-intro">
          <span className="eyebrow">NA EDIÇÃO PREMIUM</span>
          <h2>Você leva <em>5 bônus exclusivos!</em></h2>
          <p>Adquira hoje e garanta esses materiais de apoio essenciais sem pagar nada a mais.</p>
        </div>
        <div className="bonus-grid">
          {bonuses.map(([name, description, value, image], index) => (
            <article className="bonus-card" key={name}>
              <div className="bonus-image"><img src={`${asset}${image}`} alt={name} loading="lazy" /></div>
              <span className="bonus-number">BÔNUS {index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="bonus-value"><del>R$ {value}</del><span><Check size={13} /> GRÁTIS HOJE</span></div>
            </article>
          ))}
        </div>
        <div className="bonus-cta"><a className="button button-primary" href="#colecoes">Quero a edição Premium <ArrowRight size={16} /></a></div>
      </section>

      <section className="plans-section" id="colecoes">
        <div className="section-heading">
          <span className="eyebrow">ESCOLHA SUA EDIÇÃO DE NATAL</span>
          <h2>Escolha sua <em>edição de Natal.</em></h2>
          <p>Pagamento único · Garantia de 7 dias</p>
        </div>
        <div className="plans-grid">
          <article className="plan-card plan-card-featured">
            <div className="plan-ribbon"><Sparkles size={13} /> MAIS RECOMENDADA</div>
            <span className="plan-kicker">A EDIÇÃO PREMIUM</span>
            <span className="pricing-badge">SUPER OFERTA</span>
            <h3>150 Receitas Natalinas COMPLETO</h3>
            <p className="plan-description">Livro digital + versão para imprimir.</p>
            <span className="plan-old-price">De R$ 197,00</span>
            <div className="price"><small>R$</small>27<sup>,90</sup></div>
            <span className="payment-note">Pagamento único</span>
            <ul>
              <li><Check size={16} /> 150 receitas em 8 etapas ilustradas</li>
              <li><Check size={16} /> Acesso vitalício após a confirmação</li>
              <li><Gift size={15} /> Bônus 1 · Guia de Biscoitos Perfeitos</li>
              <li><Gift size={15} /> Bônus 2 · Embalagens Natalinas</li>
              <li><Gift size={15} /> Bônus 3 · 10 Kits para Vender</li>
              <li><Gift size={15} /> Bônus 4 · Lista de Compras Inteligente</li>
              <li><Gift size={15} /> Bônus 5 · Guia de Substituições</li>
            </ul>
            <button className="button button-primary plan-button" onClick={startCheckout}>
              Quero a edição Premium <ArrowRight size={16} />
            </button>
            <span className="plan-footnote"><ShieldCheck size={14} /> Compra segura · Acesso imediato</span>
          </article>

          <article className="plan-card plan-card-basic">
            <span className="plan-kicker">OFERTA BÁSICA</span>
            <h3>150 Receitas Natalinas</h3>
            <p className="plan-description">Livro digital com 150 receitas.</p>
            <span className="plan-old-price">De R$ 97,00</span>
            <div className="price"><small>R$</small>14<sup>,90</sup></div>
            <span className="payment-note">Pagamento único</span>
            <ul>
              <li><Check size={16} /> 150 receitas de Natal</li>
              <li><Check size={16} /> 8 etapas ilustradas por receita</li>
              <li><Check size={16} /> Acesso vitalício ao material</li>
              <li><Check size={16} /> Acesso após a confirmação do pagamento</li>
            </ul>
            <button className="button button-outline plan-button" onClick={() => setUpgradeOpen(true)}>
              Quero a edição Básica <ArrowRight size={16} />
            </button>
            <span className="plan-footnote"><ShieldCheck size={14} /> Compra segura · Acesso imediato</span>
          </article>
        </div>
        <div className="guarantee-panel">
          <ShieldCheck size={30} />
          <span className="eyebrow">GARANTIA DE 7 DIAS</span>
          <h2>E se eu não gostar?</h2>
          <p>Você tem 7 dias de garantia. Se não gostar, solicite o reembolso pelo canal indicado na compra, dentro desse prazo.</p>
          <small>Garantia de 7 dias · Material digital em PDF</small>
        </div>
      </section>

      <section className="review-section">
        <div className="review-section-heading">
          <div className="review-count"><strong>150</strong><span>receitas de Natal para preparar e compartilhar</span></div>
          <div className="review-counts"><span><strong>120</strong> biscoitos</span><span><strong>15</strong> brigadeiros</span><span><strong>15</strong> trufas</span></div>
          <span className="eyebrow">RELATOS E FOTOS ILUSTRATIVOS</span>
          <p>Os cards abaixo são exemplos de apresentação. Substitua por depoimentos reais antes de divulgar como avaliações de clientes.</p>
        </div>
        <div className="review-grid">
          {reviewCards.map(([initials, name, title, quote, image]) => (
            <article className="review-card" key={name}>
              <div className="review-author"><span>{initials}</span><div><strong>🎄 {name}</strong><small>{title}</small></div></div>
              <blockquote>“{quote}”</blockquote>
              <img src={`${asset}${image}`} alt={`Imagem ilustrativa de ${title.toLowerCase()}`} loading="lazy" />
              <div className="review-actions"><span>♡ Curtir</span><span>Comentar</span></div>
              <small className="review-illustrative">Exemplo ilustrativo</small>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <span className="eyebrow">UM NATAL FEITO COM CARINHO</span>
        <h2>Neste Natal, presenteie com <em>o que você faz.</em></h2>
        <p>Escolha sua receita e comece com carinho.</p>
        <a className="button button-light" href="#colecoes">Quero começar minhas receitas <ArrowRight size={17} /></a>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <span className="eyebrow">TIRE SUAS DÚVIDAS</span>
          <h2>Perguntas <em>frequentes.</em></h2>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary><span>{question}</span><span className="faq-plus">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio"><span className="brand-mark"><ChefHat size={20} /></span><span>150 Receitas <i>de Natal</i></span></a>
        <p>Livro digital em PDF · Acesso após o pagamento · Garantia de 7 dias<br />© 2026 — MPW COMPANY LTDA. Todos os direitos reservados.</p>
        <a href="https://docesnatalinosoficial.online/privacidade/" target="_blank" rel="noreferrer">Política de Privacidade</a>
        <a href="#inicio">Voltar ao início ↑</a>
      </footer>

      {upgradeOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setUpgradeOpen(false)}>
          <section className="upgrade-modal" role="dialog" aria-modal="true" aria-labelledby="upgrade-title">
            <button className="modal-close" aria-label="Fechar oferta" onClick={() => setUpgradeOpen(false)}><X size={20} /></button>
            <div className="modal-icon"><Gift size={25} /></div>
            <span className="eyebrow">UMA OFERTA ESPECIAL PARA VOCÊ</span>
            <h2 id="upgrade-title">Leve a edição Premium por apenas <em>mais R$ 13,00.</em></h2>
            <p>Você já escolheu as 150 receitas. Adicione os cinco bônus e leve o material completo.</p>
            <div className="modal-price-row"><span>Básica <small>R$ 14,90</small></span><ArrowRight size={16} /><span>Premium <strong>R$ 27,90</strong></span></div>
            <button className="button button-primary modal-main-cta" onClick={startCheckout}>Sim, quero a edição Premium <ArrowRight size={17} /></button>
            <button className="modal-secondary" onClick={startCheckout}>Continuar com a Básica por R$ 14,90</button>
            <span className="modal-footnote"><ShieldCheck size={14} /> Pagamento único · garantia de 7 dias</span>
          </section>
        </div>
      )}

      {checkoutNotice && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setCheckoutNotice(false)}>
          <section className="upgrade-modal checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
            <button className="modal-close" aria-label="Fechar aviso" onClick={() => setCheckoutNotice(false)}><X size={20} /></button>
            <div className="modal-icon"><ShieldCheck size={25} /></div>
            <span className="eyebrow">SUA ESCOLHA ESTÁ PRONTA</span>
            <h2 id="checkout-title">Falta conectar o pagamento.</h2>
            <p>Os links de pagamento do arquivo original têm outros preços. Para cobrar R$ 14,90 e R$ 27,90 com segurança, precisamos trocar aqueles links pelos novos.</p>
            <button className="button button-primary modal-main-cta" onClick={() => setCheckoutNotice(false)}>Entendi <Check size={17} /></button>
          </section>
        </div>
      )}

      {activeRecipe && (
        <div className="modal-backdrop recipe-lightbox" onMouseDown={(event) => event.target === event.currentTarget && setActiveRecipe(null)}>
          <section className="recipe-lightbox-panel" role="dialog" aria-modal="true" aria-label={activeRecipe.name}>
            <button className="modal-close" aria-label="Fechar imagem" onClick={() => setActiveRecipe(null)}><X size={20} /></button>
            <img src={`${asset}${activeRecipe.image}`} alt={activeRecipe.name} />
            <h2>{activeRecipe.name}</h2>
            <p>Uma das 150 receitas ilustradas do livro digital.</p>
          </section>
        </div>
      )}
    </main>
  );
}


