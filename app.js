const els = {
  btnES: document.getElementById("btnES"),
  btnEN: document.getElementById("btnEN"),

  topBadge: document.getElementById("topBadge"),
  heroKicker: document.getElementById("heroKicker"),
  name: document.getElementById("name"),

  whoLabel: document.getElementById("whoLabel"),
  whoText: document.getElementById("whoText"),
  whoMicro: document.getElementById("whoMicro"),

  whatLabel: document.getElementById("whatLabel"),
  whatText: document.getElementById("whatText"),

  sig1: document.getElementById("sig1"),
  sig2: document.getElementById("sig2"),
  sig3: document.getElementById("sig3"),

  ctaTitle: document.getElementById("ctaTitle"),
  ctaNote: document.getElementById("ctaNote"),
  ctaEmail: document.getElementById("ctaEmail"),
  ctaWhats: document.getElementById("ctaWhats"),
  ctaLinkedIn: document.getElementById("ctaLinkedIn"),

  railTitle: document.getElementById("railTitle"),
  railHint: document.getElementById("railHint"),

  miTitle: document.getElementById("miTitle"),
  miSub: document.getElementById("miSub"),
  oeTitle: document.getElementById("oeTitle"),
  oeSub: document.getElementById("oeSub"),
  rlTitle: document.getElementById("rlTitle"),
  rlSub: document.getElementById("rlSub"),

  detailKicker: document.getElementById("detailKicker"),
  detailTitle: document.getElementById("detailTitle"),
  detailValue: document.getElementById("detailValue"),
  detailText: document.getElementById("detailText"),
  detailOutcomes: document.getElementById("detailOutcomes"),

  footerLine: document.getElementById("footerLine"),
};

const cards = Array.from(document.querySelectorAll(".card"));

let lang = "es";
let activeKey = "mi";

/**
 * Slot pro: pega aquí 1 línea real de tu "About" para que deje de sonar a plantilla.
 * Si no lo cambias, igual funciona.
 */
const PRO_LINKEDIN_SLOT_ES = "Especialista en ejecución: conecto estrategia, diseño organizacional y tecnología para resultados sostenibles.";
const PRO_LINKEDIN_SLOT_EN = "Execution specialist: I connect strategy, organizational design and technology for durable outcomes.";

const COPY = {
  es: {
    topBadge: "DEEP-TECH · BOARD LEVEL · EJECUCIÓN",
    heroKicker: "Perfil",
    name: "Ricardo Ross",

    whoLabel: "Quién soy",
    whoText: "Ing. Civil Industrial · MSc · MBA. 20+ años trabajando en empresas líderes (BCI, Walmart, Banco de Chile), liderando transformación, agilidad y ejecución en contextos de alta complejidad.",
    whoMicro: PRO_LINKEDIN_SLOT_ES,

    whatLabel: "Qué hago",
    // EXACTO como lo pediste:
    whatText: "Convierto complejidad en ejecución: solución a problemas complejos, preservo la estrategia en su bajada a la operación y habilito reinvención organizacional con criterio y realidad",

    sig1: "Pensamiento sistémico + palanca tecnológica",
    sig2: "Integridad de ejecución estratégica",
    sig3: "Reinvención bajo restricciones reales",

    ctaTitle: "Contacto",
    ctaNote: "Respuesta rápida por WhatsApp o email. LinkedIn para trayectoria.",
    ctaEmail: "Email",
    ctaWhats: "WhatsApp",
    ctaLinkedIn: "LinkedIn",

    railTitle: "Áreas de impacto",
    railHint: "Hover / Tap",
    detailKicker: "Qué logro",

    cards: {
      mi: { title:"MicroInnovación tecnológica", sub:"Problemas complejos → resolubles & escalables" },
      oe: { title:"Orquestación de ejecución estratégica", sub:"Estrategia íntegra → acción sostenida" },
      rl: { title:"Reinvención y liderazgo organizacional", sub:"Cambios profundos → decisiones con criterio" },
    },

    detail: {
      mi: {
        title: "MicroInnovación tecnológica",
        value: "<b>Resultado:</b> resolver problemas complejos y restaurar escalabilidad.",
        text: "Convierto problemas complejos (proceso + tecnología + estructura + decisión) en soluciones implementables. Tecnología como palanca para recuperar gobernabilidad, elevar calidad de decisión y sostener crecimiento sin colapso.",
        outcomes: [
          "<b>Gobernabilidad:</b> <span>sistemas predecibles bajo crecimiento.</span>",
          "<b>Decisión:</b> <span>menos fricción, más velocidad y precisión.</span>",
          "<b>Escala:</b> <span>crecer sin degradación operativa.</span>"
        ]
      },
      oe: {
        title: "Orquestación de ejecución estratégica",
        value: "<b>Resultado:</b> que la estrategia ocurra sin distorsión ni deriva.",
        text: "Mantengo integridad estratégica a través del cascadeo y en el tiempo. Conecto prioridades, decisiones, procesos críticos y métricas para evitar dilución y sostener coherencia bajo presión.",
        outcomes: [
          "<b>Fidelidad:</b> <span>menos deriva, más alineamiento.</span>",
          "<b>Coherencia:</b> <span>prioridades, procesos y métricas conectados a la intención.</span>",
          "<b>Sostén:</b> <span>acción consistente, no campañas de corto plazo.</span>"
        ]
      },
      rl: {
        title: "Reinvención y liderazgo organizacional",
        value: "<b>Resultado:</b> reinvención real: decisiones visibles, no cambio superficial.",
        text: "Como speaker y facilitador, trabajo con organizaciones y líderes en reinvención (modelo, estrategia, cultura). Pongo lenguaje y estructura a tensiones inevitables —legado, poder, trade-offs— y foco en decisiones que separan adaptación real de narrativa de cambio.",
        outcomes: [
          "<b>Claridad:</b> <span>menos ruido, más decisiones explícitas.</span>",
          "<b>Fricción:</b> <span>anticipar tensiones en vez de negarlas.</span>",
          "<b>Dirección:</b> <span>cambios con secuencia y criterio.</span>"
        ]
      }
    },

    footer: ["Resolver problemas complejos","Escalar con coherencia","Ejecutar estrategia con fidelidad"]
  },

  en: {
    topBadge: "DEEP-TECH · BOARD LEVEL · EXECUTION",
    heroKicker: "Profile",
    name: "Ricardo Ross",

    whoLabel: "Who I am",
    whoText: "Industrial Civil Engineer · MSc · MBA. 20+ years across leading companies (BCI, Walmart, Banco de Chile), leading transformation, agility and execution in high-complexity environments.",
    whoMicro: PRO_LINKEDIN_SLOT_EN,

    whatLabel: "What I do",
    whatText: "I turn complexity into execution: I solve complex problems, keep strategy intact as it hits operations, and enable organizational reinvention with rigor and reality.",

    sig1: "Systems thinking + tech leverage",
    sig2: "Strategic execution integrity",
    sig3: "Reinvention under real constraints",

    ctaTitle: "Contact",
    ctaNote: "Fast reply via WhatsApp or email. LinkedIn for full track record.",
    ctaEmail: "Email",
    ctaWhats: "WhatsApp",
    ctaLinkedIn: "LinkedIn",

    railTitle: "Impact domains",
    railHint: "Hover / Tap",
    detailKicker: "What I deliver",

    cards: {
      mi: { title:"Technology micro-innovation", sub:"Complex problems → solvable & scalable" },
      oe: { title:"Strategic execution orchestration", sub:"Strategy integrity → sustained action" },
      rl: { title:"Organizational reinvention & leadership", sub:"Deep change → decisions with rigor" },
    },

    detail: {
      mi: {
        title: "Technology micro-innovation",
        value: "<b>Outcome:</b> make complex problems solvable and restore scalability.",
        text: "I turn complex problems (process + tech + structure + decision-making) into implementable solutions. Technology becomes the lever to regain governability, improve decision quality, and sustain growth without operational collapse.",
        outcomes: [
          "<b>Governability:</b> <span>predictable systems under growth.</span>",
          "<b>Decision:</b> <span>less friction, more speed and accuracy.</span>",
          "<b>Scale:</b> <span>grow without operational degradation.</span>"
        ]
      },
      oe: {
        title: "Strategic execution orchestration",
        value: "<b>Outcome:</b> strategy happens—without distortion or drift.",
        text: "I keep strategy intact through the cascade and over time. I connect priorities, decision mechanisms, critical processes and metrics so execution stays coherent under pressure and doesn’t dissolve into disconnected initiatives.",
        outcomes: [
          "<b>Integrity:</b> <span>less drift, more alignment.</span>",
          "<b>Coherence:</b> <span>priorities, processes and metrics tied to intent.</span>",
          "<b>Durability:</b> <span>consistent action, not short-term campaigns.</span>"
        ]
      },
      rl: {
        title: "Organizational reinvention & leadership",
        value: "<b>Outcome:</b> real reinvention—visible choices, not superficial change.",
        text: "As a speaker and facilitator, I work with organizations and leaders in real reinvention (model, strategy, culture). I give language and structure to inevitable tensions—legacy, power, trade-offs—and focus attention on the decisions that separate real adaptation from change narratives.",
        outcomes: [
          "<b>Clarity:</b> <span>less noise, more explicit choices.</span>",
          "<b>Friction:</b> <span>anticipate tensions instead of denying them.</span>",
          "<b>Direction:</b> <span>sequenced change with rigor.</span>"
        ]
      }
    },

    footer: ["Solve complex problems","Scale with coherence","Execute strategy with integrity"]
  }
};

function renderStatic() {
  const c = COPY[lang];

  document.documentElement.lang = lang;

  els.topBadge.textContent = c.topBadge;
  els.heroKicker.textContent = c.heroKicker;
  els.name.textContent = c.name;

  els.whoLabel.textContent = c.whoLabel;
  els.whoText.textContent = c.whoText;
  els.whoMicro.textContent = c.whoMicro;

  els.whatLabel.textContent = c.whatLabel;
  els.whatText.textContent = c.whatText;

  els.sig1.querySelector("span").textContent = c.sig1;
  els.sig2.querySelector("span").textContent = c.sig2;
  els.sig3.querySelector("span").textContent = c.sig3;

  els.ctaTitle.textContent = c.ctaTitle;
  els.ctaNote.textContent = c.ctaNote;
  els.ctaEmail.textContent = c.ctaEmail;
  els.ctaWhats.textContent = c.ctaWhats;
  els.ctaLinkedIn.textContent = c.ctaLinkedIn;

  els.railTitle.textContent = c.railTitle;
  els.railHint.textContent = c.railHint;

  els.detailKicker.textContent = c.detailKicker;

  els.miTitle.textContent = c.cards.mi.title;
  els.miSub.textContent = c.cards.mi.sub;
  els.oeTitle.textContent = c.cards.oe.title;
  els.oeSub.textContent = c.cards.oe.sub;
  els.rlTitle.textContent = c.cards.rl.title;
  els.rlSub.textContent = c.cards.rl.sub;

  els.footerLine.innerHTML = `
    <span>${c.footer[0]}</span><span class="sep">•</span>
    <span>${c.footer[1]}</span><span class="sep">•</span>
    <span>${c.footer[2]}</span>
  `;
}

function renderDetail() {
  const d = COPY[lang].detail[activeKey];
  els.detailTitle.textContent = d.title;
  els.detailValue.innerHTML = d.value;
  els.detailText.textContent = d.text;
  els.detailOutcomes.innerHTML = d.outcomes.map(x => `<li>${x}</li>`).join("");
}

function setActive(key){
  activeKey = key;
  cards.forEach(btn => {
    const on = btn.dataset.key === key;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
  renderDetail();
}

function setLang(next){
  lang = next;
  els.btnES.classList.toggle("active", lang === "es");
  els.btnEN.classList.toggle("active", lang === "en");
  els.btnES.setAttribute("aria-pressed", lang === "es" ? "true" : "false");
  els.btnEN.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  renderStatic();
  renderDetail();
}

/* Events */
cards.forEach(btn => {
  btn.addEventListener("mouseenter", () => setActive(btn.dataset.key));
  btn.addEventListener("click", () => setActive(btn.dataset.key));
});

els.btnES.addEventListener("click", () => setLang("es"));
els.btnEN.addEventListener("click", () => setLang("en"));

/* Init */
renderStatic();
setActive("mi");
