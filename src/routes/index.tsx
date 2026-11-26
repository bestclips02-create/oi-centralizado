import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  ChefHat,
  Gift,
  Heart,
  MessageCircle,
  Printer,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const asset = "/images/natal/";

const recipes: [string, string, string][] = [
  ["Pinheirinhos de baunilha", "BISCOITOS", "receita-01-pinheirinhos-de-baunilha.webp"],
  ["Sinos de canela", "BISCOITOS", "receita-02-sinos-de-canela.webp"],
  ["Guirlandas de coco", "BISCOITOS", "receita-03-guirlandas-de-coco.webp"],
  ["Guirlandas de chocolate com laranja", "BISCOITOS", "receita-04-guirlandas-de-chocolate-com-laranja.webp"],
  ["Flocos de neve de limão", "BISCOITOS", "receita-05-flocos-de-neve-de-limao-com-acucar.webp"],
  ["Guirlandas de laranja e coco", "BISCOITOS", "receita-06-guirlandas-de-laranja-com-coco.webp"],
  ["Guirlandas de coco e gengibre", "BISCOITOS", "receita-07-guirlandas-de-coco-e-gengibre.webp"],
  ["Brigadeiros com confeitos", "BRIGADEIROS", "receita-08-brigadeiros-bolinhas-de-chocolate-com-confeitos.webp"],
  ["Brigadeiros de nozes", "BRIGADEIROS", "receita-09-brigadeiros-cubinhos-de-nozes.webp"],
  ["Brigadeiros com café", "BRIGADEIROS", "receita-10-brigadeiros-gotinhas-de-cafe.webp"],
  ["Trufas de chocolate branco e cranberry", "TRUFAS", "receita-11-trufas-bolinhas-de-chocolate-branco-e-cranberry.webp"],
  ["Trufas de café", "TRUFAS", "receita-12-trufas-disquinhos-de-cafe.webp"],
  ["Trufas de chocolate e avelã", "TRUFAS", "receita-13-trufas-bolinhas-de-chocolate-e-avela.webp"],
];

const bonuses: [string, string, string][] = [
  ["Guia de Biscoitos Perfeitos", "Orientações ilustradas sobre forno, glacê e secagem.", "bonus-01-guia-biscoitos-perfeitos.webp"],
  ["Embalagens Natalinas", "6 embalagens, 8 tags e 6 etiquetas para seus doces.", "bonus-02-embalagens-natalinas.webp"],
  ["10 Kits para Vender", "10 sugestões com quantidades, montagem e fichas de custos.", "bonus-03-kits-para-vender.webp"],
  ["Lista de Compras Inteligente", "Mapa de ingredientes, 4 listas e fichas de estoque.", "bonus-04-lista-compras-inteligente.webp"],
  ["Guia de Substituições", "Alternativas e orientações para testar pequenas porções.", "bonus-05-guia-substituicoes.webp"],
];

const conversations: [string, string][] = [
  ["Mariana Costa", "depoimento-01-mariana-costa.webp"],
  ["Juliana Alves", "depoimento-02-juliana-alves.webp"],
  ["Patrícia Lima", "depoimento-03-patricia-lima.webp"],
  ["Renata Martins", "depoimento-04-renata-martins.webp"],
];

const questions: [string, string][] = [
  ["São 150 receitas mesmo?", "Sim: são 120 receitas de biscoitos, 15 de brigadeiros e 15 de trufas. Todas têm medidas e preparo em 8 etapas ilustradas."],
  ["Preciso ter experiência em confeitaria?", "Não precisa ser profissional. Acompanhe as imagens e comece pelas decorações mais simples. Alguns acabamentos exigem prática e respeito aos tempos indicados."],
  ["Preciso de moldes caros ou equipamentos profissionais?", "Não precisa de uma cozinha profissional. Algumas receitas usam cortadores simples, saco de confeitar e corantes. Confira os itens antes de começar."],
  ["O glacê precisa ser comprado pronto?", "Não. Algumas receitas ensinam o preparo com açúcar de confeiteiro, pó de merengue e água. Siga as medidas e as instruções do fabricante."],
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

  useEffect(() => {
    if (!upgradeOpen && !checkoutNotice) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setUpgradeOpen(false);
        setCheckoutNotice(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [upgradeOpen, checkoutNotice]);

  const startCheckout = () => {
    setUpgradeOpen(false);
    setCheckoutNotice(true);
  };

  return (
    <main>
      <div className="announcement">
        <Sparkles size={14} aria-hidden="true" />
        <span>Um presente para deixar seu Natal ainda mais gostoso</span>
        <Sparkles size={14} aria-hidden="true" />
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="150 receitas de Natal — início">
          <span className="brand-mark"><ChefHat size={20} /></span>
          <span>150 Receitas <i>de Natal</i></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#receitas">As receitas</a>
          <a href="#colecoes">Escolha sua coleção</a>
        </nav>
        <a className="header-cta" href="#colecoes">Quero conhecer <ArrowRight size={15} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><span /> LIVRO DIGITAL · 150 RECEITAS NATALINAS</span>
          <h1>150 biscoitos e doces natalinos com <em>utensílios simples.</em></h1>
          <p className="hero-lede">
            Seu guia para um Natal cheio de sabor: receitas ilustradas em 8 etapas para preparar, presentear e compartilhar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#colecoes">
              Escolher minha edição <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#receitas"><ArrowDown size={15} /> Ver algumas receitas</a>
          </div>
          <div className="hero-proof">
            <span className="proof-icon"><BookOpen size={16} /></span>
            <span><strong>8 etapas ilustradas</strong><small>para acompanhar o preparo</small></span>
            <span className="proof-separator" />
            <span className="proof-icon"><Printer size={16} /></span>
            <span><strong>Digital e imprimível</strong><small>acesso vitalício ao material</small></span>
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

      <section className="intro-strip" aria-label="O que você encontra">
        <span><Check size={16} /> 120 biscoitos</span>
        <span><Check size={16} /> 15 brigadeiros</span>
        <span><Check size={16} /> 15 trufas</span>
        <span><Check size={16} /> PDF para imprimir</span>
      </section>

      <section className="recipes-section section-wrap" id="receitas">
        <div className="section-heading">
          <span className="eyebrow">UM GOSTINHO DO QUE VOCÊ VAI PREPARAR</span>
          <h2>Seu Natal começa <em>na cozinha.</em></h2>
          <p>Escolha a receita e acompanhe o preparo pelas imagens.</p>
        </div>
        <div className="recipe-grid">
          {recipes.map(([name, category, image], index) => (
            <article className={`recipe-card recipe-card-${index + 1}`} key={name}>
              <div className="recipe-image"><img src={`${asset}${image}`} alt={name} loading="lazy" /></div>
              <div className="recipe-caption"><span>{category}</span><h3>{name}</h3></div>
            </article>
          ))}
        </div>
        <div className="recipe-count"><Sparkles size={16} /> Estas são só 13 das 150 receitas do guia.</div>
      </section>

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

      <section className="testimonials-section">
        <div className="section-heading">
          <span className="eyebrow">CONVERSAS SOBRE AS RECEITAS</span>
          <h2>Um gostinho de como é <em>fazer em casa.</em></h2>
          <p>Prévia visual do material de divulgação.</p>
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

      <section className="bonus-section section-wrap">
        <div className="bonus-intro">
          <span className="eyebrow">NA EDIÇÃO PREMIUM</span>
          <h2>Você leva <em>5 bônus exclusivos.</em></h2>
          <p>Materiais de apoio para acertar o preparo, montar presentes e organizar suas vendas.</p>
        </div>
        <div className="bonus-grid">
          {bonuses.map(([name, description, image], index) => (
            <article className="bonus-card" key={name}>
              <div className="bonus-image"><img src={`${asset}${image}`} alt={name} loading="lazy" /></div>
              <span className="bonus-number">BÔNUS {index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <span className="bonus-included"><Check size={13} /> Incluído na Premium</span>
            </article>
          ))}
        </div>
      </section>

      <section className="plans-section" id="colecoes">
        <div className="section-heading">
          <span className="eyebrow">ESCOLHA O QUE COMBINA COM VOCÊ</span>
          <h2>Seu Natal, do seu jeito.</h2>
          <p>As duas opções têm pagamento único e acesso digital às receitas.</p>
        </div>
        <div className="plans-grid">
          <article className="plan-card">
            <span className="plan-kicker">A EDIÇÃO ESSENCIAL</span>
            <h3>150 Receitas Natalinas</h3>
            <p className="plan-description">O livro digital completo para preparar seus doces de Natal.</p>
            <div className="price"><small>R$</small>14<sup>,90</sup></div>
            <span className="payment-note">Pagamento único</span>
            <ul>
              <li><Check size={16} /> 120 biscoitos, 15 brigadeiros e 15 trufas</li>
              <li><Check size={16} /> Livro digital em PDF + versão para imprimir</li>
              <li><Check size={16} /> 8 etapas ilustradas por receita</li>
              <li><Check size={16} /> Acesso vitalício após a confirmação</li>
            </ul>
            <button className="button button-outline plan-button" onClick={() => setUpgradeOpen(true)}>
              Quero a edição Básica <ArrowRight size={16} />
            </button>
          </article>

          <article className="plan-card plan-card-featured">
            <div className="plan-ribbon"><Sparkles size={13} /> MAIS RECOMENDADA</div>
            <span className="plan-kicker">A EDIÇÃO PREMIUM</span>
            <h3>150 Receitas Natalinas Completo</h3>
            <p className="plan-description">O livro digital com todos os materiais extras para acompanhar.</p>
            <div className="price"><small>R$</small>27<sup>,90</sup></div>
            <span className="payment-note">Pagamento único</span>
            <ul>
              <li><Check size={16} /> Tudo da edição Básica</li>
              <li><Check size={16} /> Bônus 1 · Guia de Biscoitos Perfeitos</li>
              <li><Check size={16} /> Bônus 2 · Embalagens Natalinas</li>
              <li><Check size={16} /> Bônus 3 · 10 Kits para Vender</li>
              <li><Check size={16} /> Bônus 4 · Lista de Compras Inteligente</li>
              <li><Check size={16} /> Bônus 5 · Guia de Substituições</li>
            </ul>
            <button className="button button-primary plan-button" onClick={startCheckout}>
              Quero a edição Premium <ArrowRight size={16} />
            </button>
            <span className="plan-footnote"><Gift size={14} /> 5 bônus digitais incluídos</span>
          </article>
        </div>
        <div className="guarantee"><ShieldCheck size={18} /><span><strong>Você tem 7 dias para decidir.</strong> Se não for para você, é só pedir o reembolso.</span></div>
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
        <p>Receitas para reunir, presentear e celebrar.</p>
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
    </main>
  );
}

