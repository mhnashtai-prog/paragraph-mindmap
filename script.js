// ------------------------------
// Data: cards, paragraphs, linkers, clauses
// ------------------------------

const cards = [
  {
    id: 1,
    label: "Card 1",
    central: "Tom has recently resigned from his post.",
    paragraphHTML: `
      Tom has recently resigned from his post,
      <span class="link-pill inline">although</span> he will dearly miss his colleagues.
      <span class="link-pill inline">Apart from</span> changing his job, he is also rethinking his long-term plans.
      <span class="link-pill inline">For example</span>, he no longer attends the weekly staff meetings
      <span class="link-pill inline">due to</span> the long working hours and constant stress that influenced his decision.
      <span class="link-pill inline">By contrast</span>, his wife would love to take on a second job.
      <span class="link-pill inline">Therefore</span>, he is currently looking for an alternative position
      <span class="link-pill inline">so as to</span> dedicate more time to his family.
      <span class="link-pill inline">This means</span> he has even put his house up for sale.
    `,
    links: [
      {
        word: "ALTHOUGH",
        clause: "he will dearly miss his colleagues.",
        position: "pos-top-left",
      },
      {
        word: "APART FROM",
        clause: "changing his job, he is also rethinking his long-term plans.",
        position: "pos-top",
      },
      {
        word: "FOR EXAMPLE",
        clause: "he no longer attends the weekly staff meetings.",
        position: "pos-top-right",
      },
      {
        word: "DUE TO",
        clause:
          "the long working hours and constant stress that influenced his decision.",
        position: "pos-mid-top-left",
      },
      {
        word: "BY CONTRAST",
        clause: "his wife would love to take on a second job.",
        position: "pos-mid-top-right",
      },
      {
        word: "THEREFORE",
        clause: "he is currently looking for an alternative position.",
        position: "pos-bottom-left",
      },
      {
        word: "SO AS TO",
        clause: "dedicate more time to his family.",
        position: "pos-bottom",
      },
      {
        word: "THIS MEANS",
        clause: "he has even put his house up for sale.",
        position: "pos-bottom-right",
      },
    ],
  },
  {
    id: 2,
    label: "Card 2",
    central: "The school has introduced a new after-class programme.",
    paragraphHTML: `
      The school has introduced a new after-class programme,
      <span class="link-pill inline">even though</span> a few parents were sceptical at first.
      Many students welcome the change; <span class="link-pill inline">on the other hand</span>,
      some worry about the extra workload. The programme was created
      <span class="link-pill inline">in order to</span> support learners who need additional help,
      <span class="link-pill inline">owing to</span> the growing number of students who struggle with homework.
      <span class="link-pill inline">For instance</span>, there are weekly science workshops and reading sessions.
      <span class="link-pill inline">Besides</span>, the school has opened more clubs for sports and music.
      Participation has increased; <span class="link-pill inline">consequently</span>, many students now stay longer on campus.
      <span class="link-pill inline">In other words</span>, the programme is designed to offer practical help to anyone who needs it.
    `,
    links: [
      {
        word: "EVEN THOUGH",
        clause: "a few parents were sceptical at first.",
        position: "pos-top-left",
      },
      {
        word: "ON THE OTHER HAND",
        clause: "some worry about the extra workload.",
        position: "pos-top",
      },
      {
        word: "IN ORDER TO",
        clause: "support learners who need additional help.",
        position: "pos-top-right",
      },
      {
        word: "OWING TO",
        clause:
          "the growing number of students who struggle with homework.",
        position: "pos-right",
      },
      {
        word: "FOR INSTANCE",
        clause: "there are weekly science workshops and reading sessions.",
        position: "pos-mid-bottom-right",
      },
      {
        word: "BESIDES",
        clause: "the school has opened more clubs for sports and music.",
        position: "pos-bottom-right",
      },
      {
        word: "CONSEQUENTLY",
        clause: "many students now stay longer on campus.",
        position: "pos-bottom-left",
      },
      {
        word: "IN OTHER WORDS",
        clause:
          "the programme is designed to offer practical help to anyone who needs it.",
        position: "pos-mid-bottom-left",
      },
    ],
  },
  {
    id: 3,
    label: "Card 3",
    central: "Online learning has become a normal part of many students’ lives.",
    paragraphHTML: `
      Online learning has become a normal part of many students’ lives,
      <span class="link-pill inline">given that</span> most homes now have reliable internet access.
      It offers flexibility; <span class="link-pill inline">not only</span> can students join live lessons,
      <span class="link-pill inline">but also</span> they can rewatch recordings at any time.
      Many continue to attend classes <span class="link-pill inline">despite</span> occasional technical problems.
      The format is convenient, <span class="link-pill inline">especially</span> for students who live far from school.
      Teachers have adapted; <span class="link-pill inline">this implies</span> they now need stronger digital skills.
      Preferences vary; <span class="link-pill inline">while</span> some students still enjoy traditional classrooms,
      others prefer learning from home <span class="link-pill inline">so as not to</span> spend hours commuting.
      More schools now use video conferencing; <span class="link-pill inline">hence</span>, online learning has become increasingly common.
    `,
    links: [
      {
        word: "GIVEN THAT",
        clause: "most homes now have reliable internet access.",
        position: "pos-top",
      },
      {
        word: "NOT ONLY ... BUT ALSO",
        clause:
          "students can join live lessons, but also they can rewatch recordings at any time.",
        position: "pos-top-right",
      },
      {
        word: "DESPITE",
        clause: "occasional technical problems.",
        position: "pos-mid-top-right",
      },
      {
        word: "ESPECIALLY",
        clause: "for students who live far from school.",
        position: "pos-right",
      },
      {
        word: "THIS IMPLIES",
        clause: "teachers now need stronger digital skills.",
        position: "pos-bottom-right",
      },
      {
        word: "WHILE",
        clause: "some students still enjoy traditional classrooms.",
        position: "pos-bottom",
      },
      {
        word: "SO AS NOT TO",
        clause: "spend hours commuting.",
        position: "pos-mid-bottom-left",
      },
      {
        word: "HENCE",
        clause: "online learning has become increasingly common.",
        position: "pos-top-left",
      },
    ],
  },
  {
    id: 4,
    label: "Card 4",
    central: "The city council has started making changes to reduce traffic in the centre.",
    paragraphHTML: `
      The city council has started making changes to reduce traffic in the centre,
      <span class="link-pill inline">in spite of</span> strong opposition from some local businesses.
      Opinions differ; <span class="link-pill inline">whereas</span> many pedestrians support the idea,
      a number of drivers are unhappy about it. The council introduced the plan
      <span class="link-pill inline">considering that</span> pollution levels have been rising every year.
      They hope to improve the environment <span class="link-pill inline">so that</span> the air will be cleaner.
      Several improvements are planned; <span class="link-pill inline">moreover</span>, engineers will build more cycle lanes and wider pavements.
      Safety is a key focus; <span class="link-pill inline">thus</span>, pedestrians should feel more comfortable crossing the streets.
      The redesign concentrates on <span class="link-pill inline">a particular</span> area near the main square,
      and parking will be reduced <span class="link-pill inline">so that</span> traffic can flow more smoothly.
    `,
    links: [
      {
        word: "IN SPITE OF",
        clause: "strong opposition from some local businesses.",
        position: "pos-top-left",
      },
      {
        word: "WHEREAS",
        clause:
          "many pedestrians support the idea, a number of drivers are unhappy about it.",
        position: "pos-top",
      },
      {
        word: "CONSIDERING THAT",
        clause: "pollution levels have been rising every year.",
        position: "pos-top-right",
      },
      {
        word: "SO THAT",
        clause: "the air will be cleaner.",
        position: "pos-right",
      },
      {
        word: "MOREOVER",
        clause:
          "engineers will build more cycle lanes and wider pavements.",
        position: "pos-mid-bottom-right",
      },
      {
        word: "THUS",
        clause:
          "pedestrians should feel more comfortable crossing the streets.",
        position: "pos-bottom",
      },
      {
        word: "A PARTICULAR",
        clause: "area near the main square has been targeted.",
        position: "pos-bottom-left",
      },
      {
        word: "SO THAT (2)",
        clause: "traffic can flow more smoothly.",
        position: "pos-mid-top-left",
      },
    ],
  },
  {
    id: 5,
    label: "Card 5",
    central: "Our neighbourhood has launched a new environmental project.",
    paragraphHTML: `
      Our neighbourhood has launched a new environmental project,
      <span class="link-pill inline">since</span> residents have shown strong interest in reducing waste.
      The organisers run events <span class="link-pill inline">as well as</span> share practical tips online.
      Participation has grown; <span class="link-pill inline">as a result</span>, more volunteers now help with weekly clean-ups.
      The team designed the project <span class="link-pill inline">with the aim of</span> lowering plastic use in local shops.
      This year’s plans are bigger <span class="link-pill inline">compared to</span> last year’s smaller pilot version.
      Progress is steady; <span class="link-pill inline">nevertheless</span>, the overall problem remains challenging.
      The project focuses <span class="link-pill inline">particularly</span> on young people by involving schools and youth groups.
    `,
    links: [
      {
        word: "SINCE",
        clause:
          "residents have shown strong interest in reducing waste.",
        position: "pos-top-left",
      },
      {
        word: "AS WELL AS",
        clause: "sharing practical tips online, the organisers run events.",
        position: "pos-top",
      },
      {
        word: "AS A RESULT",
        clause:
          "more volunteers now help with weekly clean-ups.",
        position: "pos-top-right",
      },
      {
        word: "WITH THE AIM OF",
        clause: "lowering plastic use in local shops.",
        position: "pos-right",
      },
      {
        word: "COMPARED TO",
        clause:
          "last year’s smaller pilot version, this year’s plans are bigger.",
        position: "pos-bottom-right",
      },
      {
        word: "NEVERTHELESS",
        clause: "the overall problem remains challenging.",
        position: "pos-bottom",
      },
      {
        word: "PARTICULARLY",
        clause:
          "on young people by involving schools and youth groups.",
        position: "pos-bottom-left",
      },
    ],
  },
  {
    id: 6,
    label: "Card 6",
    central: "The company has recently decided to expand its online services.",
    paragraphHTML: `
      The company has recently decided to expand its online services,
      <span class="link-pill inline">as</span> more customers now prefer digital options.
      Some employees are uncertain about the changes; <span class="link-pill inline">yet</span>, most agree that the move is necessary.
      The new services include features <span class="link-pill inline">such as</span> live chat and video support.
      Competitors are moving in the same direction; <span class="link-pill inline">similarly</span>, this company hopes to improve accessibility.
      Management reviewed the situation <span class="link-pill inline">taking into consideration</span> recent market trends before making a final decision.
      Their goal is clear; <span class="link-pill inline">in short</span>, they want to reach customers more quickly and easily.
      Their strategy differs <span class="link-pill inline">unlike</span> that of smaller businesses which rely mainly on local shops.
      Staff training will increase; <span class="link-pill inline">in consequence</span>, more employees will gain digital skills.
    `,
    links: [
      {
        word: "AS",
        clause: "more customers now prefer digital options.",
        position: "pos-top-left",
      },
      {
        word: "YET",
        clause:
          "most employees agree that the move is necessary, even if some are uncertain.",
        position: "pos-mid-top-left",
      },
      {
        word: "SUCH AS",
        clause: "live chat and video support.",
        position: "pos-top",
      },
      {
        word: "SIMILARLY",
        clause:
          "this company hopes to improve accessibility, just as its competitors do.",
        position: "pos-top-right",
      },
      {
        word: "TAKING INTO CONSIDERATION",
        clause: "recent market trends before making a final decision.",
        position: "pos-mid-top-right",
      },
      {
        word: "IN SHORT",
        clause:
          "they want to reach customers more quickly and easily.",
        position: "pos-left",
      },
      {
        word: "UNLIKE",
        clause:
          "smaller businesses which rely mainly on local shops.",
        position: "pos-bottom",
      },
      {
        word: "IN ADDITION",
        clause:
          "they will improve customer support and response times.",
        position: "pos-bottom-left",
      },
      {
        word: "IN CONSEQUENCE",
        clause:
          "more employees will gain digital skills through training.",
        position: "pos-bottom-right",
      },
    ],
  },
];

// ------------------------------
// DOM references
// ------------------------------

const mindmapModeEl = document.getElementById("mindmap-mode");
const textModeEl = document.getElementById("text-mode");

const mindmapBtn = document.getElementById("mindmap-btn");
const textBtn = document.getElementById("text-btn");

const cloudTitleEl = document.getElementById("cloud-title");
const cloudSentenceEl = document.getElementById("cloud-sentence");
const nodesLayerEl = document.getElementById("nodes-layer");

const cardLabelEl = document.getElementById("card-label");
const prevCardBtn = document.getElementById("prev-card");
const nextCardBtn = document.getElementById("next-card");

const textCardSelect = document.getElementById("text-card-select");
const fullParagraphEl = document.getElementById("full-paragraph");

// ------------------------------
// State
// ------------------------------

let currentCardIndex = 0;

// ------------------------------
// Draggable helper
// ------------------------------

function makeDraggable(el) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let activePointerId = null;

  el.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    activePointerId = e.pointerId;
    el.setPointerCapture(activePointerId);
    isDragging = true;
    el.classList.add("dragging");

    const parentRect = nodesLayerEl.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    startX = rect.left - parentRect.left;
    startY = rect.top - parentRect.top;
    offsetX = e.clientX;
    offsetY = e.clientY;

    el.style.transform = "translate(0, 0)";
    el.style.left = startX + "px";
    el.style.top = startY + "px";
    el.style.right = "auto";
    el.style.bottom = "auto";
  });

  el.addEventListener("pointermove", (e) => {
    if (!isDragging || e.pointerId !== activePointerId) return;

    const parentRect = nodesLayerEl.getBoundingClientRect();
    const dx = e.clientX - offsetX;
    const dy = e.clientY - offsetY;

    const newX = startX + dx;
    const newY = startY + dy;

    el.style.left = newX + "px";
    el.style.top = newY + "px";
  });

  const stopDrag = (e) => {
    if (!isDragging || e.pointerId !== activePointerId) return;
    isDragging = false;
    el.classList.remove("dragging");
    try {
      el.releasePointerCapture(activePointerId);
    } catch (err) {
      // ignore
    }
  };

  el.addEventListener("pointerup", stopDrag);
  el.addEventListener("pointercancel", stopDrag);
}

// ------------------------------
// Rendering
// ------------------------------

function renderCard() {
  const card = cards[currentCardIndex];

  // Update label
  cardLabelEl.textContent = card.label;

  // Update select in text mode
  if (textCardSelect.value !== String(card.id)) {
    textCardSelect.value = String(card.id);
  }

  // Cloud
  cloudTitleEl.textContent = card.label.toUpperCase();
  cloudSentenceEl.textContent = card.central;

  // Nodes (mind-map)
  nodesLayerEl.innerHTML = "";
  card.links.forEach((link) => {
    const wrapper = document.createElement("div");
    wrapper.className = `node-wrapper ${link.position}`;

    const clauseDiv = document.createElement("div");
    clauseDiv.className = "clause-bubble";
    clauseDiv.textContent = link.clause;

    const wordBtn = document.createElement("button");
    wordBtn.type = "button";
    wordBtn.className = "link-pill";
    wordBtn.textContent = link.word;

    wordBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      wrapper.classList.toggle("active");
    });

    wrapper.appendChild(clauseDiv);
    wrapper.appendChild(wordBtn);
    nodesLayerEl.appendChild(wrapper);

    makeDraggable(wrapper);
  });

  // Text mode paragraph
  fullParagraphEl.innerHTML = card.paragraphHTML;
}

// ------------------------------
// Mode toggle
// ------------------------------

function setMode(mode) {
  if (mode === "mindmap") {
    mindmapModeEl.classList.remove("hidden");
    textModeEl.classList.add("hidden");
    mindmapBtn.classList.add("active");
    textBtn.classList.remove("active");
  } else {
    mindmapModeEl.classList.add("hidden");
    textModeEl.classList.remove("hidden");
    mindmapBtn.classList.remove("active");
    textBtn.classList.add("active");
  }
}

mindmapBtn.addEventListener("click", () => setMode("mindmap"));
textBtn.addEventListener("click", () => setMode("text"));

// ------------------------------
// Navigation
// ------------------------------

function goToCard(index) {
  if (index < 0) {
    currentCardIndex = cards.length - 1;
  } else if (index >= cards.length) {
    currentCardIndex = 0;
  } else {
    currentCardIndex = index;
  }
  renderCard();
}

prevCardBtn.addEventListener("click", () => {
  goToCard(currentCardIndex - 1);
});

nextCardBtn.addEventListener("click", () => {
  goToCard(currentCardIndex + 1);
});

// Dropdown inside text mode
textCardSelect.addEventListener("change", (e) => {
  const id = Number(e.target.value);
  const idx = cards.findIndex((c) => c.id === id);
  if (idx !== -1) {
    currentCardIndex = idx;
    renderCard();
  }
});

// ------------------------------
// Initialisation
// ------------------------------

function init() {
  // Populate select
  cards.forEach((card) => {
    const opt = document.createElement("option");
    opt.value = String(card.id);
    opt.textContent = card.label;
    textCardSelect.appendChild(opt);
  });

  currentCardIndex = 0;
  textCardSelect.value = String(cards[0].id);

  renderCard();
  setMode("mindmap");
}

init();
