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

  storyCtaKicker: document.getElementById("storyCtaKicker"),
  storyCtaBody: document.getElementById("storyCtaBody"),
  openStory: document.getElementById("openStory"),

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

  evidenceToggle: document.getElementById("evidenceToggle"),
  evidenceToggleLabel: document.getElementById("evidenceToggleLabel"),
  evidence: document.getElementById("evidence"),
  evidenceInner: document.getElementById("evidenceInner"),

  footerLine: document.getElementById("footerLine"),

  storyModal: document.getElementById("storyModal"),
  closeStory: document.getElementById("closeStory"),
  storyTitle: document.getElementById("storyTitle"),
  storyBody: document.getElementById("storyBody"),
};

const cards = Array.from(document.querySelectorAll(".card"));

let lang = "es";
let activeKey = "oe";
let evidenceOpen = false;

const COPY = {
  es: {
    topBadge: "DEEP-TECH · BOARD LEVEL · EJECUCIÓN",
    heroKicker: "Perfil",
    name: "Ricardo Ross",

    whoLabel: "Quién soy",
    whoText:
      "Ingeniero Civil Industrial · MSc · MBA. 20+ años trabajando en empresas líderes (BCI, Walmart, Banco de Chile), liderando transformación, agilidad y ejecución en contextos de alta complejidad.",
    whoMicro: "",

    whatLabel: "Qué hago",
    whatText:
      "Aseguro que la estrategia se ejecute con integridad, convierto complejidad en resultados, resuelvo problemas complejos y habilito procesos reales de reinvención organizacional.",

    sig1: "Pensamiento sistémico + palanca tecnológica",
    sig2: "Integridad de ejecución estratégica",
    sig3: "Reinvención bajo restricciones reales",

    story: {
      kicker: "Nota personal",
      ctaBody:
        "La decisión más importante de mi carrera no fue un cargo. Fue abandonar la estructura.",
      button: "Leer",
      title: "Una decisión estructural",
      body: `
        <p>Había estabilidad.<br>
        Había ingreso fijo.<br>
        Había estructura.<br>
        Había reconocimiento.</p>

        <p>También había una pregunta incómoda.</p>

        <p>¿Estoy viviendo coherentemente con lo que sostengo sobre transformación, decisiones y diseño de sistemas?</p>

        <p>La decisión no fue cambiar de empresa.</p>

        <p>Fue rediseñar el sistema completo.</p>

        <p>En 2022 nos fuimos a vivir a un velero en Europa con mi familia.<br>
        Tres hijas de 3, 5 y 7 años cuando comenzamos.</p>

        <p>No fue una aventura romántica.<br>
        Fue una decisión estructural.</p>

        <p>Cuando vives en un velero, el sistema se vuelve visible.</p>

        <p>La energía es limitada.<br>
        El espacio es finito.<br>
        El clima no negocia.<br>
        Las decisiones tienen consecuencias inmediatas.</p>

        <p>No puedes esconder complejidad innecesaria.<br>
        No puedes postergar lo importante.<br>
        No puedes operar con ilusión de abundancia.</p>

        <p class="modalAnchor">Cuando desaparece la estructura, aparece el criterio.</p>

        <p>El sistema te obliga a algo muy simple.</p>

        <p>Diseñar con claridad.<br>
        Priorizar con disciplina.<br>
        Decidir bajo restricción real.</p>

        <p>En muchas organizaciones hablamos de transformación como si fuera una iniciativa.</p>

        <p>Pero transformarse de verdad significa atravesar incertidumbre, aceptar pérdidas y rediseñar el sistema completo.</p>

        <p>Tal vez por eso el aprendizaje más importante no tiene que ver con navegar.</p>

        <p>Tiene que ver con entender algo más simple.</p>

        <p>El criterio no aparece cuando todo funciona.<br>
        Aparece cuando el sistema deja de protegerte.</p>
      `,
    },

    ctaTitle: "Contacto",
    ctaNote: "Respuesta rápida por WhatsApp o email. LinkedIn para trayectoria.",
    ctaEmail: "Email",
    ctaWhats: "WhatsApp",
    ctaLinkedIn: "LinkedIn",

    railTitle: "Áreas de impacto",
    railHint: "Hover / Tap",
    detailKicker: "Qué logro",

    evidence: {
      open: {
        oe: "4x capacidad real · foco recuperado →",
        mi: "Escala sostenible · sistema gobernable →",
        rl: "+1.300 líderes · método instalado →",
      },
      close: "Cerrar evidencia ←",
    },

    cards: {
      oe: {
        title: "Orquestación de ejecución estratégica",
        sub: "Estrategia íntegra → acción sostenida",
      },
      mi: {
        title: "MicroInnovación tecnológica",
        sub: "Problemas complejos → resolubles & escalables",
      },
      rl: {
        title: "Reinvención y liderazgo organizacional",
        sub: "Cambios profundos → decisiones con criterio",
      },
    },

    detail: {
      oe: {
        title: "Orquestación de ejecución estratégica",
        value: "<b>Resultado:</b> que la estrategia ocurra sin distorsión ni deriva.",
        text:
          "Mantengo integridad estratégica a través del cascadeo y en el tiempo. Conecto prioridades, decisiones, procesos críticos y métricas para evitar dilución y sostener coherencia bajo presión.",
        outcomes: [
          "<b>Fidelidad:</b> <span>menos deriva, más alineamiento.</span>",
          "<b>Coherencia:</b> <span>prioridades, procesos y métricas conectados a la intención.</span>",
          "<b>Sostén:</b> <span>acción consistente, no campañas de corto plazo.</span>",
        ],
        evidenceBlocks: [
          {
            title: "Capacidad enterprise instalada — BCI",
            lines: [
              "4x más capacidad por persona · 3,8x producción anual · +70% velocidad · −50% costo core.",
              "Sistema operativo enterprise: gobierno, cadencias ejecutivas, métricas de integridad estratégica y arquitectura de células.",
            ],
            insight:
              "La ejecución escala cuando el sistema protege la capacidad estratégica.",
          },
          {
            title: "Capacidad estratégica recuperada — Retail / WSB / Inversiones",
            lines: [
              "Capacidad liberada en equipos críticos · mayor velocidad en apuestas clave · visibilidad real BAU vs Estrategia.",
              "Separación cuantificable BAU/Estrategia + trazabilidad de dedicación + trade-offs explícitos.",
            ],
            insight:
              "La estrategia compite contra el propio diseño interno del sistema.",
          },
          {
            title: "Habilitadores integrados — Finanzas / Riesgo / Contraloría",
            lines: [
              "3x más velocidad interna · menor fricción estructural · mayor previsibilidad.",
              "Integración temprana en decisiones estratégicas + reglas claras de validación + equipos multidisciplinarios.",
            ],
            insight:
              "Cuando habilitadores se diseñan como parte del sistema, la velocidad deja de ser frágil.",
          },
        ],
      },

      mi: {
        title: "MicroInnovación tecnológica",
        value:
          "<b>Resultado:</b> resolver problemas complejos y restaurar escalabilidad.",
        text:
          "Convierto problemas complejos (proceso + tecnología + estructura + decisión) en soluciones implementables. Tecnología como palanca para recuperar gobernabilidad, elevar calidad de decisión y sostener crecimiento sin colapso.",
        link: {
          label: "Ver OneMind — plataforma de microinnovación",
          url: "https://www.onemind.works",
        },
        outcomes: [
          "<b>Gobernabilidad:</b> <span>sistemas predecibles bajo crecimiento.</span>",
          "<b>Decisión:</b> <span>menos fricción, más velocidad y precisión.</span>",
          "<b>Escala:</b> <span>crecer sin degradación operativa.</span>",
        ],
        evidenceBlocks: [
          {
            title: "Complejidad convertida en sistema operable",
            lines: [
              "Reducción de fricción · decisiones más rápidas y consistentes · mayor gobernabilidad.",
              "Modelado sistémico (flujo + reglas + datos + decisiones) + diseño tecnológico mínimo viable.",
            ],
            insight:
              "Lo que se percibe como problema humano suele ser arquitectura mal diseñada.",
          },
          {
            title: "Escalabilidad sin colapso operativo",
            lines: [
              "Mayor previsibilidad · menos excepciones · crecimiento sin degradación proporcional.",
              "Simplificación estructural + automatización de puntos críticos + diseño de flujo por defecto robusto.",
            ],
            insight:
              "Escalar exige reducir complejidad, no añadir control.",
          },
        ],
      },

      rl: {
        title: "Reinvención y liderazgo organizacional",
        value:
          "<b>Resultado:</b> reinvención real: decisiones visibles, no cambio superficial.",
        text:
          "Como speaker y facilitador, trabajo con organizaciones y líderes en reinvención (modelo, estrategia, cultura). Pongo lenguaje y estructura a tensiones inevitables —legado, poder, trade-offs— y foco en decisiones que separan adaptación real de narrativa de cambio.",
        outcomes: [
          "<b>Claridad:</b> <span>menos ruido, más decisiones explícitas.</span>",
          "<b>Fricción:</b> <span>anticipar tensiones en vez de negarlas.</span>",
          "<b>Dirección:</b> <span>cambios con secuencia y criterio.</span>",
        ],
        evidenceBlocks: [
          {
            title: "Lean Management BCI 2.0",
            lines: [
              "+1.300 líderes formados · prácticas estructuradas instaladas.",
              "Transferencia de método formal de resolución de problemas complejos y liderazgo basado en evidencia.",
            ],
            insight:
              "El liderazgo cambia cuando cambia el método de decisión.",
          },
          {
            title: "Transformación Ágil BCI",
            lines: [
              "+50 equipos formados en Chile · transferencia internacional (City National Bank, Miami).",
              "Rediseño organizacional que conecta estrategia, gobierno, métricas y equipos.",
            ],
            insight: "La agilidad es arquitectura organizacional, no narrativa.",
          },
          {
            title: "Presencia y diálogo en foros internacionales de agilidad",
            lines: [
              "Expositor Agile Consortium · diálogo con David Anderson (Kanban), Jurgen Appelo (Unfix) y Sally Elatta (Agility Health).",
              "Desarrollo y contraste de marcos prácticos sobre complejidad organizacional.",
            ],
            insight:
              "La reinvención exige contraste entre práctica local y pensamiento global.",
          },
        ],
      },
    },

    footer: [
      "Resolver problemas complejos",
      "Escalar con coherencia",
      "Ejecutar estrategia con fidelidad",
    ],
  },

  en: {
    topBadge: "DEEP-TECH · BOARD LEVEL · EXECUTION",
    heroKicker: "Profile",
    name: "Ricardo Ross",

    whoLabel: "Who I am",
    whoText:
      "Industrial Civil Engineer · MSc · MBA. 20+ years across leading companies (BCI, Walmart, Banco de Chile), leading transformation, agility and execution in high-complexity environments.",
    whoMicro: "",

    whatLabel: "What I do",
    whatText:
      "I ensure strategy keeps its integrity in execution, turn complexity into results, solve complex problems, and enable real organizational reinvention.",

    sig1: "Systems thinking + tech leverage",
    sig2: "Strategic execution integrity",
    sig3: "Reinvention under real constraints",

    story: {
      kicker: "Personal note",
      ctaBody:
        "The most important decision in my career was not a title. It was leaving structure behind.",
      button: "Read",
      title: "A structural decision",
      body: `
        <p>There was stability.<br>
        There was a steady income.<br>
        There was structure.<br>
        There was recognition.</p>

        <p>And there was also an uncomfortable question.</p>

        <p>Am I living coherently with what I claim about transformation, decision-making, and system design?</p>

        <p>The decision was not to change companies.</p>

        <p>It was to redesign the system entirely.</p>

        <p>In 2022 we moved to live on a sailboat in Europe with my family.<br>
        Three daughters, aged 3, 5 and 7 when we started.</p>

        <p>It was not a romantic adventure.<br>
        It was a structural decision.</p>

        <p>When you live on a sailboat, the system becomes visible.</p>

        <p>Energy is limited.<br>
        Space is finite.<br>
        The weather does not negotiate.<br>
        Decisions have immediate consequences.</p>

        <p>You cannot hide unnecessary complexity.<br>
        You cannot postpone what really matters.<br>
        You cannot operate under the illusion of abundance.</p>

        <p class="modalAnchor">When structure disappears, judgment emerges.</p>

        <p>The system forces something very simple.</p>

        <p>Design with clarity.<br>
        Prioritize with discipline.<br>
        Make decisions under real constraints.</p>

        <p>Many organizations talk about transformation as if it were an initiative.</p>

        <p>But real transformation means crossing uncertainty, accepting losses, and redesigning the system entirely.</p>

        <p>Maybe that is why the most important learning has nothing to do with sailing.</p>

        <p>It has to do with something simpler.</p>

        <p>Judgment does not appear when everything works.<br>
        It appears when the system stops protecting you.</p>
      `,
    },

    ctaTitle: "Contact",
    ctaNote: "Fast reply via WhatsApp or email. LinkedIn for full track record.",
    ctaEmail: "Email",
    ctaWhats: "WhatsApp",
    ctaLinkedIn: "LinkedIn",

    railTitle: "Impact domains",
    railHint: "Hover / Tap",
    detailKicker: "What I deliver",

    evidence: {
      open: {
        oe: "4x Real Capacity · Focus Restored →",
        mi: "Sustainable Scale · Governable System →",
        rl: "1,300+ Leaders · Method Installed →",
      },
      close: "Hide Evidence ←",
    },

    cards: {
      oe: {
        title: "Strategic execution orchestration",
        sub: "Strategy integrity → sustained action",
      },
      mi: {
        title: "Technology micro-innovation",
        sub: "Complex problems → solvable & scalable",
      },
      rl: {
        title: "Organizational reinvention & leadership",
        sub: "Deep change → decisions with rigor",
      },
    },

    detail: {
      oe: {
        title: "Strategic execution orchestration",
        value: "<b>Outcome:</b> strategy happens—without distortion or drift.",
        text:
          "I keep strategy intact through the cascade and over time. I connect priorities, decision mechanisms, critical processes and metrics so execution stays coherent under pressure and doesn’t dissolve into disconnected initiatives.",
        outcomes: [
          "<b>Integrity:</b> <span>less drift, more alignment.</span>",
          "<b>Coherence:</b> <span>priorities, processes and metrics tied to intent.</span>",
          "<b>Durability:</b> <span>consistent action, not short-term campaigns.</span>",
        ],
        evidenceBlocks: [
          {
            title: "Enterprise capability installed — BCI",
            lines: [
              "4x capacity per person · 3.8x annual output · +70% release speed · −50% core team cost.",
              "Enterprise operating system: governance, executive cadence, strategy integrity metrics, and cell architecture.",
            ],
            insight:
              "Execution scales when the system protects strategic capacity.",
          },
          {
            title: "Strategic capacity recovered — Retail / WSB / Investments",
            lines: [
              "Strategic capacity freed in critical teams · faster key bets · real visibility of BAU vs Strategy.",
              "Quantified BAU/Strategy split + allocation traceability + explicit trade-offs.",
            ],
            insight:
              "Strategy competes against the system’s own internal design.",
          },
          {
            title: "Enablers integrated — Finance / Risk / Controllership",
            lines: [
              "3x internal delivery speed · lower structural friction · higher predictability.",
              "Early integration into strategic decisions + clear validation rules + cross-functional teams.",
            ],
            insight:
              "When enablers are part of the system design, speed stops being fragile.",
          },
        ],
      },

      mi: {
        title: "Technology micro-innovation",
        value:
          "<b>Outcome:</b> make complex problems solvable and restore scalability.",
        text:
          "I turn complex problems (process + technology + structure + decision-making) into implementable solutions. Technology becomes the lever to regain governability, improve decision quality, and sustain growth without operational collapse.",
        link: {
          label: "Explore OneMind — micro-innovation platform",
          url: "https://www.onemind.works",
        },
        outcomes: [
          "<b>Governability:</b> <span>predictable systems under growth.</span>",
          "<b>Decision:</b> <span>less friction, more speed and accuracy.</span>",
          "<b>Scale:</b> <span>grow without operational degradation.</span>",
        ],
        evidenceBlocks: [
          {
            title: "Complexity turned into an operable system",
            lines: [
              "Less friction · faster, more consistent decisions · higher governability.",
              "Systems modeling (flow + rules + data + decisions) + minimum viable tech design.",
            ],
            insight:
              "What looks like a people problem is often an architecture problem.",
          },
          {
            title: "Scalability without operational collapse",
            lines: [
              "Higher predictability · fewer exceptions · growth without proportional degradation.",
              "Structural simplification + automation of critical points + robust default flow.",
            ],
            insight:
              "Scaling requires reducing complexity—not adding control.",
          },
        ],
      },

      rl: {
        title: "Organizational reinvention & leadership",
        value:
          "<b>Outcome:</b> real reinvention—visible choices, not superficial change.",
        text:
          "As a speaker and facilitator, I work with organizations and leaders in real reinvention (model, strategy, culture). I give language and structure to inevitable tensions—legacy, power, trade-offs—and focus attention on the decisions that separate real adaptation from change narratives.",
        outcomes: [
          "<b>Clarity:</b> <span>less noise, more explicit choices.</span>",
          "<b>Friction:</b> <span>anticipate tensions instead of denying them.</span>",
          "<b>Direction:</b> <span>sequenced change with rigor.</span>",
        ],
        evidenceBlocks: [
          {
            title: "BCI Lean Management 2.0",
            lines: [
              "1,300+ leaders trained · structured practices installed.",
              "Transfer of formal complex problem-solving methods and evidence-based leadership.",
            ],
            insight: "Leadership changes when the decision method changes.",
          },
          {
            title: "BCI Agile transformation",
            lines: [
              "50+ teams trained in Chile · international transfer (City National Bank, Miami).",
              "Organizational redesign connecting strategy, governance, metrics and teams.",
            ],
            insight: "Agility is organizational architecture—not a narrative.",
          },
          {
            title: "International presence & dialogue in agility forums",
            lines: [
              "Agile Consortium speaker · dialogue with David Anderson, Jurgen Appelo and Sally Elatta.",
              "Developing and testing practical frames for organizational complexity.",
            ],
            insight:
              "Reinvention requires continuous contrast between local practice and global thinking.",
          },
        ],
      },
    },

    footer: [
      "Solve complex problems",
      "Scale with coherence",
      "Execute strategy with integrity",
    ],
  },
};

function renderStatic() {
  const c = COPY[lang];
  document.documentElement.lang = lang;

  els.topBadge.textContent = c.topBadge;
  els.heroKicker.textContent = c.heroKicker;
  els.name.textContent = c.name;

  els.whoLabel.textContent = c.whoLabel;
  els.whoText.textContent = c.whoText;
  els.whoMicro.textContent = c.whoMicro || "";

  els.whatLabel.textContent = c.whatLabel;
  els.whatText.textContent = c.whatText;

  els.sig1.querySelector("span").textContent = c.sig1;
  els.sig2.querySelector("span").textContent = c.sig2;
  els.sig3.querySelector("span").textContent = c.sig3;

  els.storyCtaKicker.textContent = c.story.kicker;
  els.storyCtaBody.textContent = c.story.ctaBody;
  els.openStory.textContent = c.story.button;

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
}

function setEvidenceOpen(open) {
  evidenceOpen = open;
  els.evidenceToggle.setAttribute("aria-expanded", open ? "true" : "false");
  els.evidence.hidden = !open;
  els.evidenceToggleLabel.textContent = open
    ? COPY[lang].evidence.close
    : COPY[lang].evidence.open[activeKey];
}

function renderDetail() {
  const d = COPY[lang].detail[activeKey];

  els.detailTitle.textContent = d.title;
  els.detailValue.innerHTML = d.value;
  els.detailText.textContent = d.text;
  els.detailOutcomes.innerHTML = d.outcomes
    .map((x) => `<li>${x}</li>`)
    .join("");

  if (d.link) {
    els.detailLink.hidden = false;
    els.detailLink.innerHTML = `<a href="${d.link.url}" target="_blank" rel="noopener">${d.link.label} →</a>`;
  } else {
    els.detailLink.hidden = true;
    els.detailLink.innerHTML = "";
  }

  setEvidenceOpen(false);
  els.evidenceToggleLabel.textContent = COPY[lang].evidence.open[activeKey];

  const blocks = d.evidenceBlocks || [];
  els.evidenceInner.innerHTML = blocks
    .map(
      (b) => `
      <div class="evCard">
        <p class="evTitle">${b.title}</p>
        <ul class="evLines">
          ${b.lines.map((ln) => `<li><span>${ln}</span></li>`).join("")}
        </ul>
        <div class="evFoot">${b.insight}</div>
        ${
          activeKey === "mi"
            ? `<div class="evFoot" style="margin-top:8px;"><a href="https://www.onemind.works" target="_blank" rel="noopener">www.onemind.works →</a></div>`
            : ``
        }
      </div>
    `
    )
    .join("");
}

function setActive(key) {
  activeKey = key;

  cards.forEach((btn) => {
    const on = btn.dataset.key === key;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });

  renderDetail();
}

function setLang(next) {
  lang = next;

  els.btnES.classList.toggle("active", lang === "es");
  els.btnEN.classList.toggle("active", lang === "en");
  els.btnES.setAttribute("aria-pressed", lang === "es" ? "true" : "false");
  els.btnEN.setAttribute("aria-pressed", lang === "en" ? "true" : "false");

  renderStatic();
  renderDetail();
}

function openStory() {
  const s = COPY[lang].story;
  els.storyTitle.textContent = s.title;
  els.storyBody.innerHTML = s.body;
  els.storyModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeStory() {
  els.storyModal.hidden = true;
  document.body.style.overflow = "";
}

/* Events */
cards.forEach((btn) => {
  btn.addEventListener("mouseenter", () => setActive(btn.dataset.key));
  btn.addEventListener("click", () => setActive(btn.dataset.key));
});

els.btnES.addEventListener("click", () => setLang("es"));
els.btnEN.addEventListener("click", () => setLang("en"));

els.evidenceToggle.addEventListener("click", () => {
  setEvidenceOpen(!evidenceOpen);
});

els.openStory.addEventListener("click", openStory);
els.closeStory.addEventListener("click", closeStory);

els.storyModal.addEventListener("click", (e) => {
  if (e.target === els.storyModal) closeStory();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeStory();
});

/* Init */
renderStatic();
setActive("oe");
