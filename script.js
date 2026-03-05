// =======================
// DATA (with rarity weights)
// =======================
//=======================
const rarityWeights = {
    Common: 35,
    Rare: 30,
    Epic: 20,
    Legendary: 10,
    Mythic: 5
};
//============
const heroes = [
 { name: "Aamon", rarity: "Epic", img: "assets/heroes/aamon.png"},
{ name: "Akai", rarity: "Rare", img: "assets/heroes/akai.png"},
{ name: "Aldous", rarity: "Legendary", img: "assets/heroes/aldous.png"},
{ name: "Alice", rarity: "Epic", img: "assets/heroes/alice.png"},
{ name: "Alpha", rarity: "Mythic", img: "assets/heroes/alpha.png"},
{ name: "Angela", rarity: "Legendary", img: "assets/heroes/angela.png"},
{ name: "Argus", rarity: "Legendary", img: "assets/heroes/argus.png"},
{ name: "Atlas", rarity: "Epic", img: "assets/heroes/atlas.png"},
{ name: "Aulus", rarity: "Rare", img: "assets/heroes/aulus.png"},
{ name: "Aurora", rarity: "Epic", img: "assets/heroes/aurora.png"},
{ name: "Badang", rarity: "Epic", img: "assets/heroes/badang.png"},
{ name: "Balmond", rarity: "Common", img: "assets/heroes/balmond.png"},
{ name: "Barats", rarity: "Epic", img: "assets/heroes/barats.png"},
{ name: "Baxia", rarity: "Mythic", img: "assets/heroes/baxia.png"},
{ name: "Beatrix", rarity: "Mythic", img: "assets/heroes/beatrix.png"},
{ name: "Belerick", rarity: "Rare", img: "assets/heroes/belerick.png"},
{ name: "Benedetta", rarity: "Legendary", img: "assets/heroes/benedetta.png"},
{ name: "Brody", rarity: "Epic", img: "assets/heroes/brody.png"},
{ name: "Bruno", rarity: "Rare", img: "assets/heroes/bruno.png"},
{ name: "Carmilla", rarity: "Rare", img: "assets/heroes/carmilla.png"},
{ name: "Cecilion", rarity: "Legendary", img: "assets/heroes/cecilion.png"},
{ name: "Change", rarity: "Rare", img: "assets/heroes/change.png"},
{ name: "Chip", rarity: "Epic", img: "assets/heroes/chip.png"},
{ name: "Chou", rarity: "Epic", img: "assets/heroes/chou.png"},
{ name: "Cici", rarity: "Legendary", img: "assets/heroes/cici.png"},
{ name: "Claude", rarity: "Rare", img: "assets/heroes/claude.png"},
{ name: "Clint", rarity: "Epic", img: "assets/heroes/clint.png"},
{ name: "Cyclops", rarity: "Mythic", img: "assets/heroes/cyclops.png"},
{ name: "Diggie", rarity: "Epic", img: "assets/heroes/diggie.png"},
{ name: "Dyrroth", rarity: "Epic", img: "assets/heroes/dyrroth.png"},
{ name: "Edith", rarity: "Epic", img: "assets/heroes/edith.png"},
{ name: "Esmeralda", rarity: "Epic", img: "assets/heroes/esmeralda.png"},
{ name: "Estes", rarity: "Rare", img: "assets/heroes/estes.png"},
{ name: "Eudora", rarity: "Rare", img: "assets/heroes/eudora.png"},
{ name: "Fanny", rarity: "Epic", img: "assets/heroes/fanny.png"},
{ name: "Faramis", rarity: "Rare", img: "assets/heroes/faramis.png"},
{ name: "Floryn", rarity: "Mythic", img: "assets/heroes/floryn.png"},
{ name: "Franco", rarity: "Epic", img: "assets/heroes/franco.png"},
{ name: "Fredrinn", rarity: "Rare", img: "assets/heroes/fredrinn.png"},
{ name: "Freya", rarity: "Rare", img: "assets/heroes/freya.png"},
{ name: "Gatotkaca", rarity: "Epic", img: "assets/heroes/gatotkaca.png"},
{ name: "Gloo", rarity: "Epic", img: "assets/heroes/gloo.png"},
{ name: "Gord", rarity: "Epic", img: "assets/heroes/gord.png"},
{ name: "Granger", rarity: "Legendary", img: "assets/heroes/granger.png"},
{ name: "Grock", rarity: "Epic", img: "assets/heroes/grock.png"},
{ name: "Guinevere", rarity: "Legendary", img: "assets/heroes/guinevere.png"},
{ name: "Hanabi", rarity: "Epic", img: "assets/heroes/hanabi.png"},
{ name: "Hanzo", rarity: "Legendary", img: "assets/heroes/hanzo.png"},
{ name: "Harith", rarity: "Mythic", img: "assets/heroes/harith.png"},
{ name: "Hayabusa", rarity: "Legendary", img: "assets/heroes/hayabusa.png"},
{ name: "Helcurt", rarity: "Rare", img: "assets/heroes/helcurt.png"},
{ name: "Hylos", rarity: "Rare", img: "assets/heroes/hylos.png"},
{ name: "Irithel", rarity: "Legendary", img: "assets/heroes/irithel.png"},
{ name: "Ixia", rarity: "Rare", img: "assets/heroes/ixia.png"},
{ name: "Jawhead", rarity: "Epic", img: "assets/heroes/jawhead.png"},
{ name: "Johnson", rarity: "Common", img: "assets/heroes/johnson.png"},
{ name: "Joy", rarity: "Rare", img: "assets/heroes/joy.png"},
{ name: "Julian", rarity: "Epic", img: "assets/heroes/julian.png"},
{ name: "Kadita", rarity: "Epic", img: "assets/heroes/kadita.png"},
{ name: "Kagura", rarity: "Legendary", img: "assets/heroes/kagura.png"},
{ name: "Karina", rarity: "Rare", img: "assets/heroes/karina.png"},
{ name: "Karrie", rarity: "Epic", img: "assets/heroes/karrie.png"},
{ name: "Khaleed", rarity: "Mythic", img: "assets/heroes/khaleed.png"},
{ name: "Khufra", rarity: "Mythic", img: "assets/heroes/khufra.png"},
{ name: "Kimmy", rarity: "Legendary", img: "assets/heroes/kimmy.png"},
{ name: "Lancelot", rarity: "Epic", img: "assets/heroes/lancelot.png"},
{ name: "Layla", rarity: "Common", img: "assets/heroes/layla.png"},
{ name: "Leomord", rarity: "Mythic", img: "assets/heroes/leomord.png"},
{ name: "Lesley", rarity: "Mythic", img: "assets/heroes/lesley.png"},
{ name: "Ling", rarity: "Mythic", img: "assets/heroes/ling.png"},
{ name: "Lolita", rarity: "Legendary", img: "assets/heroes/lolita.png"},
{ name: "Lunox", rarity: "Legendary", img: "assets/heroes/lunox.png"},
{ name: "Luo Yi", rarity: "Epic", img: "assets/heroes/uo-yi.png"},
{ name: "Lylia", rarity: "Rare", img: "assets/heroes/lylia.png"},
{ name: "Marcel", rarity: "Epic", img: "assets/heroes/marcel.png"},
{ name: "Mathilda", rarity: "Rare", img: "assets/heroes/mathilda.png"},
{ name: "Melissa", rarity: "Epic", img: "assets/heroes/melissa.png"},
{ name: "Minsitthar", rarity: "Rare", img: "assets/heroes/minsitthar.png"},
{ name: "Miya", rarity: "Common", img: "assets/heroes/miya.png"},
{ name: "Moskov", rarity: "Rare", img: "assets/heroes/moskov.png"},
{ name: "Nana", rarity: "Common", img: "assets/heroes/nana.png"},
{ name: "Natalia", rarity: "Mythic", img: "assets/heroes/natalia.png"},
{ name: "Natan", rarity: "Mythic", img: "assets/heroes/natan.png"},
{ name: "Nolan", rarity: "Legendary", img: "assets/heroes/nolan.png"},
{ name: "Novaria", rarity: "Rare", img: "assets/heroes/novaria.png"},
{ name: "Odette", rarity: "Mythic", img: "assets/heroes/odette.png"},
{ name: "Paquito", rarity: "Epic", img: "assets/heroes/paquito.png"},
{ name: "Phoveus", rarity: "Epic", img: "assets/heroes/phoveus.png"},
{ name: "Popol and Kupa", rarity: "Rare", img: "assets/heroes/popol-and-kupa.png"},
{ name: "Rafaela", rarity: "Common", img: "assets/heroes/rafaela.png"},
{ name: "Roger", rarity: "Epic", img: "assets/heroes/roger.png"},
{ name: "Ruby", rarity: "Epic", img: "assets/heroes/ruby.png"},
{ name: "Saber", rarity: "Common", img: "assets/heroes/saber.png"},
{ name: "Selena", rarity: "Legendary", img: "assets/heroes/selena.png"},
{ name: "Silvanna", rarity: "Rare", img: "assets/heroes/silvanna.png"},
{ name: "Sun", rarity: "Legendary", img: "assets/heroes/sun.png"},
{ name: "Thamuz", rarity: "Epic", img: "assets/heroes/thamuz.png"},
{ name: "Tigreal", rarity: "Common", img: "assets/heroes/tigreal.png"},
{ name: "Uranus", rarity: "Legendary", img: "assets/heroes/uranus.png"},
{ name: "Valentina", rarity: "Epic", img: "assets/heroes/valentina.png"},
{ name: "Valir", rarity: "Epic", img: "assets/heroes/valir.png"},
{ name: "Vexana", rarity: "Rare", img: "assets/heroes/vexana.png"},
{ name: "Wanwan", rarity: "Legendary", img: "assets/heroes/wanwan.png"},
{ name: "Yve", rarity: "Mythic", img: "assets/heroes/yve.png"},
{ name: "Zhask", rarity: "Legendary", img: "assets/heroes/zhask.png"},
{ name: "Zhuxin", rarity: "Legendary", img: "assets/heroes/zhuxin.png"},
{ name: "Zetian", rarity: "Mythic", img: "assets/heroes/zetian.png"}
]

const spells = [
  {name: "Flicker", img: "assets/spells/flicker.png", rarity: "Common"},
  {name: "Execute", img: "assets/spells/execute.png", rarity: "Rare"},
  {name: "Retribution", img: "assets/spells/retribution.png", rarity: "Epic"},
  {name: "Inspire", img: "assets/spells/inspire.png", rarity: "Legendary"},
  {name: "Purify", img: "assets/spells/purify.png", rarity: "Mythic"},
  {name: "Sprint", img: "assets/spells/sprint.png", rarity: "Common"},
  {name: "Aegis", img: "assets/spells/aegis.png", rarity: "Rare"},
  {name: "Petrify", img: "assets/spells/petrify.png", rarity: "Epic"},
  {name: "Flameshot", img: "assets/spells/flameshot.png", rarity: "Legendary"},
  {name: "Arrival", img: "assets/spells/arrival.png", rarity: "Mythic"},
  {name: "Vengeance", img: "assets/spells/vengeance.png", rarity: "Epic"}
];

const lanes = [
  {name: "Gold Lane", img: "assets/lanes/gold.png", rarity: "Common"},
  {name: "EXP Lane", img: "assets/lanes/exp.png", rarity: "Rare"},
  {name: "Mid Lane", img: "assets/lanes/mid.png", rarity: "Epic"},
  {name: "Jungle", img: "assets/lanes/jungle.png", rarity: "Legendary"},
  {name: "Roam", img: "assets/lanes/roam.png", rarity: "Mythic"}
];
 const emblems = [
          {name: "Common", rarity: "Common", img: "assets/emblems/common.png"},
      {name: "Mage", rarity: "Rare", img: "assets/emblems/mage.png"},
      {name: "Assassin", rarity: "Epic", img: "assets/emblems/assasin.png"},
      {name: "Fighter", rarity: "Legendary", img: "assets/emblems/fighter.png"},
      {name: "Marksman", rarity: "Mythic", img: "assets/emblems/marksman.png"},
      {name: "Support", rarity: "Legendary", img: "assets/emblems/support.png"},
      {name: "Tank", rarity: "Mythic", img: "assets/emblems/tank.png"}
 ]
// =======================
// DATA (with rarity weights) - Добавил больше items в spells/lanes для разнообразия
// =======================

// =======================
// SETTINGS - Уменьшил DUPLICATES для оптимизации
// =======================

const ITEM_WIDTH = 280;
const DUPLICATES = 5; // Было 8, уменьшил для производительности
const SPIN_DURATION = 8000;
const OVERSHOOT = 80;

// Sounds (предполагаю файлы в assets/sounds/)
const spinSound = new Audio('assets/sounds/spin.mp3');
const winSound = new Audio('assets/sounds/win.mp3');

// Проверка autoplay (браузеры могут блокировать)
document.body.addEventListener('click', () => {
  spinSound.muted = false;
  winSound.muted = false;
}, { once: true });

// =======================
// GENERATE ROULETTE - Добавил loading="lazy"
// =======================

function generate(track, items) {
    track.innerHTML = "";
    track.style.transition = "none";
    track.style.transform = "translateX(0px)";

    for (let i = 0; i < DUPLICATES; i++) {
        items.forEach(item => {
            const img = document.createElement("img");
            img.src = item.img;
            img.alt = `${item.name} (${item.rarity})`;
            img.loading = "lazy"; // Lazy loading
            img.onerror = () => img.src = `https://via.placeholder.com/240?text=${item.name.substring(0,2)} (${item.rarity})`;
            track.appendChild(img);
        });
    }
}

// =======================
// SELECT WEIGHTED WINNER - Добавил shuffle для fairness
// =======================

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function selectWeightedItem(items) {
    const shuffledItems = shuffle([...items]); // Shuffle для случайности
    const totalWeight = shuffledItems.reduce((sum, item) => sum + (rarityWeights[item.rarity] || 1), 0);
    let random = Math.random() * totalWeight;
    for (const item of shuffledItems) {
        random -= rarityWeights[item.rarity] || 1;
        if (random <= 0) return item;
    }
    return shuffledItems[0];
}

// =======================
// SPIN CASE - Добавил debounce для кнопки
// =======================

let isSpinning = false;
function spinCase(caseType) {
    if (isSpinning) return;
    isSpinning = true;

    const btn = document.getElementById("openBtn");
    const track = document.getElementById("roulette");
    const winnerSection = document.getElementById("winnerSection");

    btn.textContent = "ОТКРЫВАЕТСЯ...";

    let items;
    if (caseType === 'heroes') items = heroes;
    else if (caseType === 'spells') items = spells;
    else if (caseType === 'lanes') items = lanes;
    else items = heroes;

    generate(track, items);

    const winner = selectWeightedItem(items);
    const winnerIndex = items.findIndex(i => i.name === winner.name && i.rarity === winner.rarity); // Exact match
    const middleCopy = Math.floor(DUPLICATES / 2);
    const finalIndex = middleCopy * items.length + winnerIndex;
    let offset = finalIndex * ITEM_WIDTH + (Math.random() * 50 - 25);

    track.offsetHeight; // Reflow

    spinSound.loop = true;
    spinSound.play().catch(() => {}); // Обработка блокировки

    track.style.transition = `transform ${SPIN_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    track.style.transform = `translateX(-${offset + OVERSHOOT}px)`;

    setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-out';
        track.style.transform = `translateX(-${offset}px)`;
        spinSound.pause();
        spinSound.currentTime = 0;
    }, SPIN_DURATION);

    setTimeout(() => {
        showWinner(winner);
        btn.textContent = "ОТКРЫТЬ ЕЩЁ РАЗ";
        isSpinning = false;
    }, SPIN_DURATION + 500);
}

// =======================
// SHOW WINNER + CONFETTI - Уменьшил confetti до 100 для производительности
// =======================

function showWinner(item) {
    document.getElementById("winnerImg").src = item.img;
    const winnerName = document.getElementById("winnerName");
    winnerName.textContent = `${item.name} (${item.rarity})`;
    winnerName.classList.add(item.rarity.toLowerCase());

    const winnerSection = document.getElementById("winnerSection");
    winnerSection.classList.remove("hidden");
    winnerSection.classList.add("visible");

    winSound.play().catch(() => {});

    for (let i = 0; i < 100; i++) { // Уменьшил с 200
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.setProperty('--hue', Math.random() * 360);
        confetti.style.animationDuration = 1.5 + Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

// =======================
// INIT - Добавил localStorage для сохранения caseType
// =======================

window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);
    let caseType = params.get("case") || localStorage.getItem('lastCase') || "heroes";
    localStorage.setItem('lastCase', caseType);

    document.getElementById("caseTitle").textContent = {
        heroes: "MLBB Heroes Case",
        spells: "Battle Spell Case",
        lanes: "Lane Case"
    }[caseType] || "Открытие кейса";

    document.getElementById("openBtn").onclick = () => spinCase(caseType);

    let initialItems = caseType === "heroes" ? heroes : caseType === "spells" ? spells : lanes;
    generate(document.getElementById("roulette"), initialItems);
});
