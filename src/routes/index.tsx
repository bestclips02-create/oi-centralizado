import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChefHat,
  Clock3,
  Gift,
  Heart,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const asset = "/images/natal/";

const recipes = [
  {
    name: "Pinheirinhos de baunilha",
    category: "BISCOITOS",
    image: "receita-01-pinheirinhos-de-baunilha.webp",
  },
  {
    name: "Sinos de canela",
    category: "BISCOITOS",
    image: "receita-02-sinos-de-canela.webp",
  },
  {
    name: "Guirlandas de coco",
    category: "ESPECIAIS",
    image: "receita-03-guirlandas-de-coco.webp",
  },
  {
    name: "Guirlandas de chocolate e laranja",
    category: "PARA PRESENTEAR",
    image: "receita-04-guirlandas-de-chocolate-com-laranja.webp",
  },
];

const bonuses = [
  ["Guia dos biscoitos perfeitos", "bonus-01-guia-biscoitos-perfeitos.webp"],
  ["Ideias de embalagens natalinas", "bonus-02-embalagens-natalinas.webp"],
  ["10 kits para vender", "bonus-03-kits-para-vender.webp"],
  ["Lista de compras inteligente", "bonus-04-lista-compras-inteligente.webp"],
  ["Guia de substituições", "bonus-05-guia-substituicoes.webp"],
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
        <a className="brand" href="#inicio" aria-label="Natal à mesa — início">
          <span className="brand-mark"><ChefHat size={20} /></span>
          <span>Natal <i>à mesa</i></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#receitas">As receitas</a>
          <a href="#colecoes">Escolha sua coleção</a>
        </nav>
        <a className="header-cta" href="#colecoes">Quero conhecer <ArrowRight size={15} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><span /> 150 receitas para celebrar</span>
          <h1>O Natal fica mais gostoso quando começa <em>no forno.</em></h1>
          <p className="hero-lede">
            Biscoitos, brigadeiros e trufas fáceis de preparar, lindos para presentear e deliciosos para dividir.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#colecoes">
              Encontrar minha coleção <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#receitas"><ArrowDown size={15} /> Ver algumas receitas</a>
          </div>
          <div className="hero-proof">
            <span className="proof-icon"><Clock3 size={16} /></span>
            <span><strong>Ingredientes simples</strong><small>e passos descomplicados</small></span>
            <span className="proof-separator" />
            <span className="proof-icon"><Heart size={16} /></span>
            <span><strong>Feitas para compartilhar</strong><small>ou transformar em renda extra</small></span>
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
          <div className="image-note"><span>feito com carinho</span><Heart size={15} fill="currentColor" /></div>
          <div className="hero-stamp"><strong>150</strong><span>ideias para<br />seu Natal</span></div>
        </div>
      </section>

      <section className="intro-strip" aria-label="O que você encontra">
        <span><Check size={16} /> Receitas ilustradas</span>
        <span><Check size={16} /> Utensílios simples</span>
        <span><Check size={16} /> Acesso digital</span>
        <span><Check size={16} /> Pagamento único</span>
      </section>

      <section className="recipes-section section-wrap" id="receitas">
        <div className="section-heading">
          <span className="eyebrow">UMA AMOSTRA DO QUE VEM POR AÍ</span>
          <h2>Pequenas delícias, <em>grandes memórias.</em></h2>
          <p>Receitas com ingredientes acessíveis e instruções para deixar cada preparo mais leve.</p>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <article className={`recipe-card recipe-card-${index + 1}`} key={recipe.name}>
              <div className="recipe-image"><img src={`${asset}${recipe.image}`} alt={recipe.name} loading="lazy" /></div>
              <div className="recipe-caption"><span>{recipe.category}</span><h3>{recipe.name}</h3></div>
            </article>
          ))}
        </div>
        <div className="recipe-count"><Sparkles size={16} /> E estas são só 4 das 150 receitas do guia.</div>
      </section>

      <section className="video-section">
        <div className="video-copy">
          <span className="eyebrow">UM CONVITE PARA A SUA COZINHA</span>
          <h2>Preparar também faz parte da celebração.</h2>
          <p>Receitas ilustradas, instruções claras e ingredientes do dia a dia para aproveitar cada momento na cozinha.</p>
          <a className="button button-light" href="#colecoes">Ver as coleções <ArrowRight size={17} /></a>
        </div>
        <div className="video-frame" aria-label="Guirlandas de coco decoradas para o Natal">
          <img src={`${asset}receita-03-guirlandas-de-coco.webp`} alt="Guirlandas de coco decoradas para o Natal" loading="lazy" />
          <div className="video-overlay">
            <span className="poster-note"><Sparkles size={14} /> Feito para compartilhar</span>
          </div>
        </div>
      </section>

      <section className="bonus-section section-wrap">
        <div className="bonus-intro">
          <span className="eyebrow">SÓ NA COLEÇÃO COMPLETA</span>
          <h2>Um pouco mais de carinho em cada detalhe.</h2>
          <p>Além das receitas, materiais digitais para planejar, presentear e até vender suas criações.</p>
        </div>
        <div className="bonus-grid">
          {bonuses.map(([name, image], index) => (
            <article className="bonus-card" key={name}>
              <div className="bonus-image"><img src={`${asset}${image}`} alt={name} loading="lazy" /></div>
              <span className="bonus-number">0{index + 1}</span>
              <h3>{name}</h3>
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
            <span className="plan-kicker">PARA COMEÇAR</span>
            <h3>Coleção Essencial</h3>
            <p className="plan-description">As 150 receitas para adoçar a sua celebração.</p>
            <div className="price"><small>R$</small>14<sup>,90</sup></div>
            <span className="payment-note">Pagamento único</span>
            <ul>
              <li><Check size={16} /> 150 receitas natalinas</li>
              <li><Check size={16} /> Biscoitos, brigadeiros e trufas</li>
              <li><Check size={16} /> Ingredientes simples</li>
              <li><Check size={16} /> Acesso digital</li>
            </ul>
            <button className="button button-outline plan-button" onClick={() => setUpgradeOpen(true)}>
              Escolher Essencial <ArrowRight size={16} />
            </button>
          </article>

          <article className="plan-card plan-card-featured">
            <div className="plan-ribbon"><Sparkles size={13} /> MAIS COMPLETA</div>
            <span className="plan-kicker">PARA VIVER E COMPARTILHAR</span>
            <h3>Coleção Completa</h3>
            <p className="plan-description">O guia de receitas e 5 materiais extras para acompanhar.</p>
            <div className="price"><small>R$</small>27<sup>,90</sup></div>
            <span className="payment-note">Pagamento único</span>
            <ul>
              <li><Check size={16} /> Tudo da Coleção Essencial</li>
              <li><Check size={16} /> Guia dos biscoitos perfeitos</li>
              <li><Check size={16} /> Embalagens e kits para vender</li>
              <li><Check size={16} /> Lista de compras e substituições</li>
            </ul>
            <button className="button button-primary plan-button" onClick={startCheckout}>
              Quero a Coleção Completa <ArrowRight size={16} />
            </button>
            <span className="plan-footnote"><Gift size={14} /> 5 materiais extras incluídos</span>
          </article>
        </div>
        <div className="guarantee"><ShieldCheck size={18} /><span><strong>Você tem 7 dias para decidir.</strong> Se não for para você, é só pedir o reembolso.</span></div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio"><span className="brand-mark"><ChefHat size={20} /></span><span>Natal <i>à mesa</i></span></a>
        <p>Receitas para reunir, presentear e celebrar.</p>
        <a href="#inicio">Voltar ao início ↑</a>
      </footer>

      {upgradeOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setUpgradeOpen(false)}>
          <section className="upgrade-modal" role="dialog" aria-modal="true" aria-labelledby="upgrade-title">
            <button className="modal-close" aria-label="Fechar oferta" onClick={() => setUpgradeOpen(false)}><X size={20} /></button>
            <div className="modal-icon"><Gift size={25} /></div>
            <span className="eyebrow">UMA OFERTA ESPECIAL PARA VOCÊ</span>
            <h2 id="upgrade-title">Leve a coleção completa por apenas <em>mais R$ 13,00.</em></h2>
            <p>Você já escolheu as 150 receitas. Adicione os cinco materiais extras e tenha tudo em um só pacote.</p>
            <div className="modal-price-row"><span>Essencial <small>R$ 14,90</small></span><ArrowRight size={16} /><span>Completa <strong>R$ 27,90</strong></span></div>
            <button className="button button-primary modal-main-cta" onClick={startCheckout}>Sim, quero a coleção completa <ArrowRight size={17} /></button>
            <button className="modal-secondary" onClick={startCheckout}>Continuar com a Essencial por R$ 14,90</button>
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

