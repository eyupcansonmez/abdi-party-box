const suits = [
  { symbol: "♠", name: "Maça", color: "black" },
  { symbol: "♥", name: "Kupa", color: "red" },
  { symbol: "♦", name: "Karo", color: "red" },
  { symbol: "♣", name: "Sinek", color: "black" }
];

const rankOrder = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

const ruleBook = {
  A: {
    title: "Cümle zinciri",
    label: "Hafıza",
    text:
      "Kartı çeken bir kelimeyle başlar. Sırayla herkes tüm cümleyi doğru sırayla tekrar edip bir kelime ekler. İlk şaşıran 1 {penalty} alır."
  },
  K: {
    title: "Pas",
    label: "Nefes",
    text: "Kimse ceza almaz. Sıradaki oyuncuya geçilir."
  },
  Q: {
    title: "Soruna cevap veriyorum",
    label: "Tetik",
    text:
      "Bu karttan sonra soru sorulan kişi cevaptan önce 'Soruna cevap veriyorum' demelidir. Unutan 1 {penalty} alır."
  },
  J: {
    title: "Grup",
    label: "Kategori",
    text:
      "Kartı çeken bir kategori söyler. Herkes sırayla yeni bir örnek verir. Tekrar eden veya takılan 1 {penalty} alır."
  },
  10: {
    title: "Kural koy",
    label: "Masa",
    text:
      "Kartı çeken oyuncu yeni bir masa kuralı koyar. Kural bozulunca bozan kişi 1 {penalty} alır ve kural masadan kalkar."
  },
  9: {
    title: "Doğru / Yanlış",
    label: "Tahmin",
    text:
      "Kartı çeken bir iddia söyler. Diğerleri doğru mu yanlış mı tahmin eder. Yanlış tahmin edenler 1 {penalty} alır."
  },
  8: {
    title: "Parmak masaya",
    label: "Refleks",
    text:
      "Herkes parmağını masaya koyar. En son kalan oyuncu 1 {penalty} alır."
  },
  7: {
    title: "Ben hiç",
    label: "İtiraf",
    text:
      "Kartı çeken 'Ben hiç...' cümlesi kurar. Cümledeki şeyi yapan herkes 1 {penalty} alır."
  },
  6: {
    title: "Kızlar",
    label: "Klasik",
    text:
      "Klasik kuralda masadaki kızlar 1 {penalty} alır. İsterseniz bu kartı Takım A olarak oynayın."
  },
  5: {
    title: "Erkekler",
    label: "Klasik",
    text:
      "Klasik kuralda masadaki erkekler 1 {penalty} alır. İsterseniz bu kartı Takım B olarak oynayın."
  },
  4: {
    title: "Herkes",
    label: "Toplu",
    text: "Masadaki herkes 1 {penalty} alır."
  },
  3: {
    title: "İstediğine ver",
    label: "Seçim",
    text: "Kartı çeken bir oyuncu seçer. Seçilen oyuncu 1 {penalty} alır."
  },
  2: {
    title: "Kendin al",
    label: "Tekli",
    text: "Kartı çeken oyuncu 1 {penalty} alır."
  }
};

const penaltyLabels = {
  task: "ceza",
  sip: "yudum",
  shot: "shot"
};

const state = {
  players: [
    { id: crypto.randomUUID(), name: "Ayşe", score: 0 },
    { id: crypto.randomUUID(), name: "Mert", score: 0 },
    { id: crypto.randomUUID(), name: "Zeynep", score: 0 },
    { id: crypto.randomUUID(), name: "Can", score: 0 }
  ],
  deck: [],
  discard: [],
  history: [],
  activeRules: [],
  turnIndex: 0,
  current: null,
  mode: "task",
  started: false
};

const els = {
  form: document.querySelector("#player-form"),
  playerName: document.querySelector("#player-name"),
  playerList: document.querySelector("#player-list"),
  playerCount: document.querySelector("#player-count"),
  scoreList: document.querySelector("#score-list"),
  ruleGrid: document.querySelector("#rule-grid"),
  activeRuleList: document.querySelector("#active-rule-list"),
  emptyRules: document.querySelector("#empty-rules"),
  historyList: document.querySelector("#history-list"),
  tableTitle: document.querySelector("#table-title"),
  deckCount: document.querySelector("#deck-count"),
  currentCard: document.querySelector("#current-card"),
  actionPanel: document.querySelector("#action-panel"),
  drawCard: document.querySelector("#draw-card"),
  startGame: document.querySelector("#start-game"),
  resetDeck: document.querySelector("#reset-deck"),
  undoDraw: document.querySelector("#undo-draw"),
  ruleMaker: document.querySelector("#rule-maker"),
  ruleInput: document.querySelector("#rule-input"),
  addRule: document.querySelector("#add-rule"),
  printRules: document.querySelector("#print-rules"),
  safetyNote: document.querySelector("#safety-note"),
  installSheet: document.querySelector("#install-sheet"),
  installApp: document.querySelector("#install-app"),
  dismissInstall: document.querySelector("#dismiss-install")
};

let deferredInstallPrompt = null;

function createDeck() {
  return suits.flatMap((suit) =>
    rankOrder.map((rank) => ({
      id: `${rank}-${suit.name}`,
      rank,
      suit
    }))
  );
}

function shuffle(cards) {
  const deck = [...cards];
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
  }
  return deck;
}

function penaltyWord() {
  return penaltyLabels[state.mode];
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function taskText(rank) {
  return ruleBook[rank].text.replaceAll("{penalty}", penaltyWord());
}

function touchPulse(pattern = 18) {
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

function nextPlayer() {
  return state.players[state.turnIndex] || state.players[0];
}

function clampTurn() {
  if (state.players.length === 0) {
    state.turnIndex = 0;
    return;
  }
  state.turnIndex %= state.players.length;
}

function saveSnapshot() {
  localStorage.setItem(
    "abdi-party-box",
    JSON.stringify({
      players: state.players,
      activeRules: state.activeRules,
      mode: state.mode
    })
  );
}

function loadSnapshot() {
  const saved = localStorage.getItem("abdi-party-box");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed.players) && parsed.players.length >= 2) {
      state.players = parsed.players.slice(0, 8).map((player) => ({
        id: player.id || crypto.randomUUID(),
        name: String(player.name || "Oyuncu").slice(0, 18),
        score: Number(player.score) || 0
      }));
    }
    if (Array.isArray(parsed.activeRules)) {
      state.activeRules = parsed.activeRules;
    }
    if (parsed.mode && penaltyLabels[parsed.mode]) {
      state.mode = parsed.mode;
    }
  } catch {
    localStorage.removeItem("abdi-party-box");
  }
}

function startGame() {
  if (state.players.length < 2) return;
  touchPulse(12);
  state.players.forEach((player) => {
    player.score = 0;
  });
  state.deck = shuffle(createDeck());
  state.discard = [];
  state.history = [];
  state.current = null;
  state.activeRules = [];
  state.turnIndex = 0;
  state.started = true;
  saveSnapshot();
  render();
}

function resetDeck() {
  touchPulse(12);
  state.deck = shuffle(createDeck());
  state.discard = [];
  state.history = [];
  state.current = null;
  state.turnIndex = 0;
  state.started = true;
  render();
}

function drawCard() {
  if (state.players.length < 2) return;
  touchPulse(20);
  if (!state.started || state.deck.length === 0) {
    resetDeck();
  }

  const player = nextPlayer();
  const card = state.deck.pop();
  if (!card || !player) return;

  state.discard.push(card);
  state.current = {
    card,
    playerId: player.id,
    playerName: player.name,
    time: new Date().toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit"
    })
  };
  state.history.unshift(state.current);
  state.history = state.history.slice(0, 10);
  state.turnIndex = (state.turnIndex + 1) % state.players.length;
  render();
}

function undoDraw() {
  const last = state.discard.pop();
  if (!last) return;

  touchPulse(8);
  state.deck.push(last);
  state.history.shift();
  state.current = state.history[0] || null;
  state.turnIndex = (state.turnIndex - 1 + state.players.length) % state.players.length;
  render();
}

function addPlayer(name) {
  const cleanName = name.trim().slice(0, 18);
  if (!cleanName || state.players.length >= 8) return;
  state.players.push({ id: crypto.randomUUID(), name: cleanName, score: 0 });
  clampTurn();
  saveSnapshot();
  render();
}

function removePlayer(id) {
  if (state.players.length <= 2) return;
  state.players = state.players.filter((player) => player.id !== id);
  clampTurn();
  saveSnapshot();
  render();
}

function renamePlayer(id, name) {
  const player = state.players.find((item) => item.id === id);
  if (!player) return;
  player.name = name.trim() || "Oyuncu";
  saveSnapshot();
  renderScoreboard();
}

function updateScore(id, delta) {
  const player = state.players.find((item) => item.id === id);
  if (!player) return;
  touchPulse(delta > 0 ? 14 : 6);
  player.score = Math.max(0, player.score + delta);
  saveSnapshot();
  renderScoreboard();
}

function addCurrentPlayerScore() {
  if (!state.current) return;
  updateScore(state.current.playerId, 1);
}

function addEveryoneScore() {
  state.players.forEach((player) => {
    player.score += 1;
  });
  saveSnapshot();
  renderScoreboard();
}

function addActiveRule() {
  const text = els.ruleInput.value.trim();
  if (!text) return;
  touchPulse(10);
  state.activeRules.unshift({
    id: crypto.randomUUID(),
    text
  });
  els.ruleInput.value = "";
  saveSnapshot();
  renderActiveRules();
}

function removeActiveRule(id) {
  state.activeRules = state.activeRules.filter((rule) => rule.id !== id);
  saveSnapshot();
  renderActiveRules();
}

function setMode(mode) {
  state.mode = mode;
  touchPulse(8);
  saveSnapshot();
  render();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Local file previews and private modes can block service workers.
    });
  });
}

function setupInstallPrompt() {
  if (!els.installSheet || !els.installApp || !els.dismissInstall) return;
  if (window.matchMedia("(display-mode: standalone)").matches || navigator.standalone) return;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    els.installSheet.hidden = false;
  });

  els.installApp.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    els.installSheet.hidden = true;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
  });

  els.dismissInstall.addEventListener("click", () => {
    els.installSheet.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    els.installSheet.hidden = true;
  });
}

function renderPlayers() {
  els.playerList.innerHTML = "";
  els.playerCount.textContent = `${state.players.length}/8`;

  state.players.forEach((player) => {
    const row = document.createElement("div");
    row.className = "player-row";

    const input = document.createElement("input");
    input.value = player.name;
    input.maxLength = 18;
    input.setAttribute("aria-label", `${player.name} adı`);
    input.addEventListener("change", () => renamePlayer(player.id, input.value));

    const removeButton = document.createElement("button");
    removeButton.className = "icon-button danger";
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `${player.name} oyuncusunu sil`);
    removeButton.innerHTML = '<span aria-hidden="true">−</span>';
    removeButton.disabled = state.players.length <= 2;
    removeButton.addEventListener("click", () => removePlayer(player.id));

    row.append(input, removeButton);
    els.playerList.append(row);
  });
}

function renderScoreboard() {
  els.scoreList.innerHTML = "";

  state.players.forEach((player) => {
    const row = document.createElement("div");
    row.className = "score-row";

    const name = document.createElement("strong");
    name.textContent = player.name;

    const controls = document.createElement("div");
    controls.className = "score-controls";

    const minus = document.createElement("button");
    minus.className = "mini-button";
    minus.type = "button";
    minus.setAttribute("aria-label", `${player.name} cezasını azalt`);
    minus.textContent = "−";
    minus.addEventListener("click", () => updateScore(player.id, -1));

    const score = document.createElement("span");
    score.textContent = player.score;

    const plus = document.createElement("button");
    plus.className = "mini-button";
    plus.type = "button";
    plus.setAttribute("aria-label", `${player.name} cezasını artır`);
    plus.textContent = "+";
    plus.addEventListener("click", () => updateScore(player.id, 1));

    controls.append(minus, score, plus);
    row.append(name, controls);
    els.scoreList.append(row);
  });
}

function renderCard() {
  const { current } = state;
  els.deckCount.textContent = state.started ? state.deck.length : 52;
  els.drawCard.disabled = state.players.length < 2;

  if (!current) {
    els.tableTitle.textContent = state.started ? `${nextPlayer().name} hazır` : "Oyunu başlat";
    els.currentCard.className = "playing-card card-back";
    els.currentCard.innerHTML = `
      <span class="card-rank">?</span>
      <span class="card-suit">?</span>
      <strong>ABDI</strong>
      <small>${state.started ? "kart çek" : "kart bekleniyor"}</small>
    `;
    els.ruleMaker.hidden = true;
    renderActionIntro();
    return;
  }

  const { card } = current;
  els.tableTitle.textContent = `${nextPlayer().name} sırada`;
  els.currentCard.className = `playing-card ${card.suit.color === "red" ? "is-red" : "is-black"}`;
  els.currentCard.innerHTML = `
    <span class="card-rank">${card.rank}</span>
    <span class="card-suit">${card.suit.symbol}</span>
    <strong>${card.rank}</strong>
    <small>${card.suit.name}</small>
  `;
  els.ruleMaker.hidden = card.rank !== "10";
  renderAction(card.rank, current.playerName);
}

function renderActionIntro() {
  els.actionPanel.innerHTML = `
    <p class="overline">Görev</p>
    <h3>Masayı kurup ilk kartı çek.</h3>
    <p>En az iki oyuncu yeterli. Ceza kelimesini sol panelden değiştirebilirsin.</p>
  `;
}

function renderAction(rank, playerName) {
  const rule = ruleBook[rank];
  let actionMarkup = "";

  if (rank === "4") {
    actionMarkup =
      '<button class="tool-button compact" type="button" data-action="everyone">Herkese +1</button>';
  } else if (rank !== "K") {
    const options = state.players
      .map((player) => {
        const selected = state.current?.playerId === player.id ? " selected" : "";
        return `<option value="${player.id}"${selected}>${escapeHTML(player.name)}</option>`;
      })
      .join("");
    actionMarkup = `
      <div class="penalty-picker">
        <label for="target-player">Ceza alan</label>
        <select id="target-player">${options}</select>
        <button class="tool-button compact" type="button" data-action="selected">+1 yaz</button>
      </div>
    `;
  }

  els.actionPanel.innerHTML = `
    <p class="overline">${escapeHTML(playerName)} çekti</p>
    <h3>${escapeHTML(rank)} - ${rule.title}</h3>
    <p>${taskText(rank)}</p>
    ${actionMarkup ? `<div class="inline-actions">${actionMarkup}</div>` : ""}
  `;

  els.actionPanel.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "everyone") {
        addEveryoneScore();
      } else {
        const selectedPlayer = els.actionPanel.querySelector("#target-player");
        if (selectedPlayer) {
          updateScore(selectedPlayer.value, 1);
        }
      }
    });
  });
}

function renderActiveRules() {
  els.activeRuleList.innerHTML = "";
  els.emptyRules.hidden = state.activeRules.length > 0;

  state.activeRules.forEach((rule) => {
    const item = document.createElement("li");
    item.className = "active-rule-item";

    const text = document.createElement("span");
    text.textContent = rule.text;

    const done = document.createElement("button");
    done.className = "mini-button";
    done.type = "button";
    done.setAttribute("aria-label", "Kuralı kaldır");
    done.textContent = "✓";
    done.addEventListener("click", () => removeActiveRule(rule.id));

    item.append(text, done);
    els.activeRuleList.append(item);
  });
}

function renderRuleGrid() {
  els.ruleGrid.innerHTML = "";

  rankOrder.forEach((rank) => {
    const rule = ruleBook[rank];
    const card = document.createElement("article");
    card.className = "rule-card";
    card.innerHTML = `
      <div class="rule-card-head">
        <span class="rank-badge">${rank}</span>
        <span>${rule.label}</span>
      </div>
      <h3>${rule.title}</h3>
      <p>${taskText(rank)}</p>
    `;
    els.ruleGrid.append(card);
  });
}

function renderHistory() {
  els.historyList.innerHTML = "";

  if (state.history.length === 0) {
    els.historyList.innerHTML = '<div class="empty-state">Kart çekilince burası dolar.</div>';
    return;
  }

  state.history.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <span class="mini-card ${entry.card.suit.color === "red" ? "is-red" : ""}">
        ${entry.card.rank}${entry.card.suit.symbol}
      </span>
      <strong>${entry.playerName}</strong>
      <span>${ruleBook[entry.card.rank].title}</span>
      <small>${entry.time}</small>
    `;
    els.historyList.append(item);
  });
}

function renderMode() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  els.safetyNote.hidden = state.mode !== "shot";
}

function render() {
  clampTurn();
  renderPlayers();
  renderScoreboard();
  renderCard();
  renderActiveRules();
  renderRuleGrid();
  renderHistory();
  renderMode();
  els.startGame.disabled = state.players.length < 2;
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  addPlayer(els.playerName.value);
  els.playerName.value = "";
  els.playerName.focus();
});

els.drawCard.addEventListener("click", drawCard);
els.startGame.addEventListener("click", startGame);
els.resetDeck.addEventListener("click", resetDeck);
els.undoDraw.addEventListener("click", undoDraw);
els.addRule.addEventListener("click", addActiveRule);
els.ruleInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addActiveRule();
  }
});
els.printRules.addEventListener("click", () => window.print());

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

loadSnapshot();
state.deck = shuffle(createDeck());
registerServiceWorker();
setupInstallPrompt();
render();
