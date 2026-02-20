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
  detailLink: document.getElementById("detailLink"),
  detailOutcomes: document.getElementById("detailOutcomes"),

  evidenceToggle: document.getElementById("evidenceToggle"),
  evidenceToggleLabel: document.getElementById("evidenceToggleLabel"),
  evidence: document.getElementById("evidence"),
  evidenceInner: document.getElementById("evidenceInner"),

  footerLine: document.getElementById("footerLine"),
};

const cards = Array.from(document.querySelectorAll(".card"));

let lang = "es";
let activeKey = "oe";
let evidenceOpen = false;

/* =========================
   COPY (con evidence incluido)
========================= */

const COPY = {
  es: {
    evidence: {
      open: {
        oe: "4x capacidad · +70% velocidad →",
        mi: "Complejidad → sistema gobernable →",
        rl: "+1.300 líderes · reinvención real →",
      },
      close: "Cerrar evidencia ←"
    },

    detail: {
      oe: {
        title: "Orquestación de ejecución estratégica",
        value: "<b>Resultado:</b> que la estrategia ocurra sin distorsión ni deriva.",
        text: "Mantengo integridad estratégica en el cascadeo y en el tiempo.",
        outcomes: [],
        evidenceBlocks: [
          {
            title: "BCI — Capacidad enterprise instalada",
            lines: [
              "4x más capacidad por persona",
              "3,8x producción anual",
              "+70% velocidad",
              "−50% costo core"
            ],
            insight: "La ejecución escala cuando el sistema protege la capacidad estratégica."
          }
        ]
      },

      mi: {
        title: "MicroInnovación tecnológica",
        value: "<b>Resultado:</b> complejidad convertida en sistema operable.",
        text: "Diseño soluciones que convierten fricción estructural en gobernabilidad.",
        link: { label: "Ver OneMind", url: "https://www.onemind.works" },
        outcomes: [],
        evidenceBlocks: [
          {
            title: "Complejidad estructurada",
            lines: [
              "Mayor previsibilidad",
              "Menos fricción decisional",
              "Escalabilidad sin colapso"
            ],
            insight: "Muchos problemas humanos son arquitectura mal diseñada."
          }
        ]
      },

      rl: {
        title: "Reinvención y liderazgo organizacional",
        value: "<b>Resultado:</b> reinvención estructural, no narrativa.",
        text: "Trabajo con líderes en decisiones estructurales reales.",
        outcomes: [],
        evidenceBlocks: [
          {
            title: "Lean Management BCI 2.0",
            lines: [
              "+1.300 líderes formados",
              "Prácticas estructuradas instaladas"
            ],
            insight: "El liderazgo cambia cuando cambia el método de decisión."
          }
        ]
      }
    }
  },

  en: {
    evidence: {
      open: {
        oe: "4x Capacity · +70% Speed →",
        mi: "Engineering Complexity →",
        rl: "1,300+ Leaders · Structural Reinvention →",
      },
      close: "Hide Evidence ←"
    },
    detail: {}
  }
};

/* =========================
   CORE FUNCTIONS
========================= */

function setEvidenceOpen(open) {
  evidenceOpen = open;
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

  els.detailOutcomes.innerHTML = "";

  if (d.link) {
    els.detailLink.hidden = false;
    els.detailLink.innerHTML =
      `<a href="${d.link.url}" target="_blank">${d.link.label} →</a>`;
  } else {
    els.detailLink.hidden = true;
  }

  setEvidenceOpen(false);

  els.evidenceInner.innerHTML = d.evidenceBlocks.map(b => `
    <div class="evCard">
      <p class="evTitle">${b.title}</p>
      <ul class="evLines">
        ${b.lines.map(l => `<li>${l}</li>`).join("")}
      </ul>
      <div class="evFoot">${b.insight}</div>
    </div>
  `).join("");
}

function setActive(key) {
  activeKey = key;
  cards.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.key === key);
  });
  renderDetail();
}

/* =========================
   EVENTS
========================= */

cards.forEach(btn => {
  btn.addEventListener("click", () => setActive(btn.dataset.key));
});

els.evidenceToggle.addEventListener("click", () => {
  setEvidenceOpen(!evidenceOpen);
});

/* =========================
   INIT
========================= */

setActive("oe");
