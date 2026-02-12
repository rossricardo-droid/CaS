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

  openStory: document.getElementById("openStory"),
  openStoryLabel: document.getElementById("openStoryLabel"),

  storyModal: document.getElementById("storyModal"),
  storyKicker: document.getElementById("storyKicker"),
  storyTitle: document.getElementById("storyTitle"),
  storyBody: document.getElementById("storyBody"),
  storyQuestion: document.getElementById("storyQuestion"),
  closeStory: document.getElementById("closeStory"),

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
  detailLink: document.getElementById("detailLink"),
  detailOutcomes: document.getElementById("detailOutcomes"),

  footerLine: document.getElementById("footerLine"),
};

const cards = Array.from(document.querySelectorAll(".card"));

let lang = "es";
let activeKey = "oe";

// Slot “pro” para afinar con tu About real
const PRO_LINKEDIN_SLOT_ES = "Especialista en ejecución: conecto estrategia, diseño organizacional y tecnología para resultados sostenibles.";
const PRO_LINKEDIN_SLOT_EN = "Execution specialist: I connect strategy, organizational design and technology for durable outcomes.";

const STORY = {
  es: {
    openLabel: "Una decisión estructural",
    kicker: "Nota personal",
    title: "Una decisión estructural",
    bodyHtml: `
      <p class="lead">Vivir y trabajar desde un velero no fue un cambio de estilo. Fue una decisión de transformación consciente.</p>

      <p>Después de más de 20 años trabajando en grandes organizaciones —liderando agilidad, ejecución estratégica y procesos de cambio en empresas como BCI, Walmart y Banco de Chile— decidí, junto a mi familia, dejar una forma de vida que funcionaba.</p>

      <p>Había estabilidad. Había ingreso fijo. Había estructura. Había reconocimiento.</p>

      <p class="em">También había una pregunta incómoda: ¿estoy viviendo coherentemente con lo que sostengo profesionalmente sobre transformación, riesgo y diseño de sistemas?</p>

      <p>Transformarse implica pérdidas reales: perder estructura conocida, perder validación externa, perder certezas; aceptar incertidumbre no teórica.</p>

      <p>La transición no fue romántica. Hubo miedo, fricción y momentos de duda. Pero ahí está el punto.</p>

      <p>La mayoría de los procesos de transformación organizacional fracasan porque se diseñan desde la teoría, no desde la experiencia vivida de pérdida y tensión.</p>

      <p>En un velero, el sistema es visible: energía limitada, recursos finitos, espacio reducido y consecuencias inmediatas. No puedes ocultar ineficiencia, no puedes postergar decisiones estructurales, no puedes sostener complejidad innecesaria.</p>

      <p>Ese entorno obliga a:</p>
      <ul>
        <li>Diseñar con claridad. <span>(sin ilusión de abundancia)</span></li>
        <li>Priorizar con disciplina. <span>(lo esencial gana)</span></li>
        <li>Ejecutar con coherencia. <span>(decisión → acción)</span></li>
        <li>Tomar decisiones bajo restricción real. <span>(no teórica)</span></li>
      </ul>

      <p>Transformarse no es cambiar discurso. Es atravesar incertidumbre y rediseñar el sistema completo.</p>

      <p>Esa experiencia personal no es anecdótica. Es la base desde la cual intervengo organizaciones que necesitan reinventarse sin destruirse en el proceso.</p>

      <p class="em">No hablo de cambio desde afuera. Lo he vivido estructuralmente.</p>
    `,
    question: "¿Puede una organización transformarse de verdad sin aceptar pérdidas reales y rediseñar su sistema completo?"
  },

  en: {
    openLabel: "A structural decision",
    kicker: "Personal note",
    title: "A structural decision",
    bodyHtml: `
      <p class="lead">Living and working from a sailboat wasn’t a lifestyle change. It was a deliberate transformation decision.</p>

      <p>After 20+ years in large organizations—leading agility, strategic execution and change across companies like BCI, Walmart and Banco de Chile—I decided, together with my family, to leave a way of life that “worked”.</p>

      <p>There was stability. Predictable income. Structure. External validation.</p>

      <p class="em">And there was an uncomfortable question: am I living consistently with what I claim about transformation, risk and systems design?</p>

      <p>Transformation carries real losses: letting go of known structure, external validation and certainty—embracing non-theoretical uncertainty.</p>

      <p>The transition wasn’t romantic. There was fear, friction and doubt. That’s the point.</p>

      <p>Many organizational transformations fail because they are designed from theory, not from lived experience of loss and tension.</p>

      <p>On a sailboat, the system is visible: limited energy, finite resources, constrained space and immediate consequences. You can’t hide inefficiency, postpone structural choices, or sustain unnecessary complexity.</p>

      <p>That environment forces you to:</p>
      <ul>
        <li>Design with clarity. <span>(no illusion of abundance)</span></li>
        <li>Prioritize with discipline. <span>(the essential wins)</span></li>
        <li>Execute with coherence. <span>(decision → action)</span></li>
        <li>Make choices under real constraints. <span>(not theoretical)</span></li>
      </ul>

      <p>Transformation isn’t a narrative shift. It’s crossing uncertainty and redesigning the whole system.</p>

      <p>This isn’t anecdotal. It’s the foundation of how I intervene in organizations that need reinvention without breaking themselves in the process.</p>

      <p class="em">I don’t speak about change from the outside. I’ve lived it structurally.</p>
    `,
    question: "Can an organization truly transform without accepting real losses—and redesigning the whole system?"
  }
};

const COPY = {
  es: {
    topBadge: "DEEP-TECH · BOARD LEVEL · EJECUCIÓN",
    heroKicker: "Perfil",
    name: "Ricardo Ross",

    whoLabel: "Quién soy",
    whoText: "Ing. Civil Industrial · MSc · MBA. 20+ años trabajando en empresas líderes (BCI, Walmart, Banco de Chile), liderando transformación, agilidad y ejecución en contextos de alta complejidad.",
    whoMicro: PRO_LINKEDIN_SLOT_ES,

    whatLabel: "Qué hago",
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
      oe: { title:"Orquestación de ejecución estratégica", sub:"Estrategia íntegra → acción sostenida" },
      mi: { title:"MicroInnovación tecnológica", sub:"Problemas complejos → resolubles & escalables" },
      rl: { title:"Reinvención y liderazgo organizacional", sub:"Cambios profundos → decisiones con criterio" },
    },

    detail: {
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
      mi: {
        title: "MicroInnovación tecnológica",
        value: "<b>Resultado:</b> resolver problemas complejos y restaurar escalabilidad.",
        text: "Convierto problemas complejos (proceso + tecnología + estructura + decisión) en soluciones implementables. Tecnología como palanca para recuperar gobernabilidad, elevar calidad de decisión y sostener crecimiento sin colapso.",
        link: { label: "Ver OneMind — plataforma de microinnovación", url: "https://www.onemind.works" },
        outcomes: [
          "<b>Gobernabilidad:</b> <span>sistemas predecibles bajo crecimiento.</span>",
          "<b>Decisión:</b> <span>menos fricción, más velocidad y precisión.</span>",
          "<b>Escala:</b> <span>crecer sin degradación operativa.</span>"
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
      oe: { title:"Strategic execution orchestration", sub:"Strategy integrity → sustained action" },
      mi: { title:"Technology micro-innovation", sub:"Complex problems → solvable & scalable" },
      rl: { title:"Organizational reinvention & leadership", sub:"Deep change → decisions with rigor" },
    },

    detail: {
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
      mi: {
        title: "Technology micro-innovation",
        value: "<b>Outcome:</b> make complex problems solvable and restore scalability.",
        text: "I turn complex problems (process + technology + structure + decision-making) into implementable solutions. Technology becomes the lever to regain governability, improve decision quality, and sustain growth without operational collapse.",
        link: { label: "Explore OneMind — micro-innovation platform", url: "https://www.onemind.works" },
        outcomes: [
          "<b>Governability:</b> <span>predictable systems under growth.</span>",
          "<b>Decision:</b> <span>less friction, more speed and accuracy.</span>",
          "<b>Scale:</b> <span>grow without operational degradation.</span>"
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

  els.openStoryLabel.textContent = STORY[lang].openLabel;

  els.ctaTitle.textContent = c.ctaTitle;
  els.ctaNote.textContent = c.ctaNote;
  els.ctaEmail.textContent = c.ctaEmail;
  els.ctaWhats.textContent = c.ctaWhats;
  els.ctaLinkedIn.textContent = c.ctaLinkedIn;

  els.railTitle.textContent = c.railTitle;
  els.railHint.textContent = c.railHint;
  els.detailKicker.textContent = c.detailKicker;

  els.oeTitle.textContent = c.cards.oe.title;
  els.oeSub.textContent = c.cards.oe.sub;
  els.miTitle.textContent = c.cards.mi.title;
  els.miSub.textContent = c.cards.mi.sub;
  els.rlTitle.textContent = c.cards.rl.title;
  els.rlSub.textContent = c.cards.rl.sub;

  els.footerLine.innerHTML = `
    <span>${c.footer[0]}</span><span class="sep">•</span>
    <span>${c.footer[1]}</span><span class="sep">•</span>
    <span>${c.footer[2]}</span>
  `;

  // Modal copy
  els.storyKicker.textContent = STORY[lang].kicker;
  els.storyTitle.textContent = STORY[lang].title;
  els.storyBody.innerHTML = STORY[lang].bodyHtml;
  els.storyQuestion.textContent = STORY[lang].question;
}

function renderDetail() {
  const d = COPY[lang].detail[activeKey];

  els.detailTitle.textContent = d.title;
  els.detailValue.innerHTML = d.value;
  els.detailText.textContent = d.text;
  els.detailOutcomes.innerHTML = d.outcomes.map(x => `<li>${x}</li>`).join("");

  if (d.link) {
    els.detailLink.hidden = false;
    els.detailLink.innerHTML = `<a href="${d.link.url}" target="_blank" rel="noopener">${d.link.label} →</a>`;
  } else {
    els.detailLink.hidden = true;
    els.detailLink.innerHTML = "";
  }
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

function openModal(){
  els.storyModal.hidden = false;
  els.storyModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  els.closeStory.focus();
}

function closeModal(){
  els.storyModal.hidden = true;
  els.storyModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  els.openStory.focus();
}

/* Events */
cards.forEach(btn => {
  btn.addEventListener("mouseenter", () => setActive(btn.dataset.key));
  btn.addEventListener("click", () => setActive(btn.dataset.key));
});

els.btnES.addEventListener("click", () => setLang("es"));
els.btnEN.addEventListener("click", () => setLang("en"));

els.openStory.addEventListener("click", openModal);
els.closeStory.addEventListener("click", closeModal);

// click fuera (backdrop)
els.storyModal.addEventListener("click", (e) => {
  const t = e.target;
  if (t && t.dataset && t.dataset.close === "true") closeModal();
});

// ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !els.storyModal.hidden) closeModal();
});

/* Init */
renderStatic();
setActive("oe");
