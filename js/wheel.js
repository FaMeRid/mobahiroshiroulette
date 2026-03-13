// Глобальные переменные (должны быть доступны из index.html)
let stage = 0;
let buildData = {};
let winner = null;
let spinning = false;
let rotation = 0;
let speed = 0;
let lastTick = -1;
let finalRotation = 0;

// Звуки и canvas уже определены в index.html

function generateWheel() {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  visibleItems = shuffled.slice(0, MAX_VISIBLE);
}

function draw() {
  // твой текущий draw() — оставь как есть, или улучши iconSize как предлагал раньше
  const iconSize = radius / 4;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const sectors = visibleItems.length;
  if (!sectors) return;
  const angle = (Math.PI * 2) / sectors;

  for (let i = 0; i < sectors; i++) {
    const a = i * angle + rotation;
    const item = visibleItems[i];
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, a, a + angle);
    ctx.closePath();

    switch (item.rarity) {
      case "Common": ctx.fillStyle = "#444"; break;
      case "Rare": ctx.fillStyle = "#3f6f88"; break;
      case "Epic": ctx.fillStyle = "#6a4b7a"; break;
      case "Legendary": ctx.fillStyle = "#8a7a2f"; break;
      case "Mythic": ctx.fillStyle = "#7a3b3b"; break;
      default: ctx.fillStyle = "#333";
    }
    ctx.fill();
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 3;
    ctx.stroke();

    const icon = imageCache[item.img];
    if (icon && icon.complete) {
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(a + angle / 2);
      const dist = radius - 200;
      ctx.translate(dist, 0);
      ctx.rotate(-(a + angle / 2));
      ctx.drawImage(icon, -50, -50, 100, 100);
      ctx.restore();
    }
  }
}

function animate() {
  if (spinning) {
    rotation += speed;

    const sectors = visibleItems.length;
    const angle = (Math.PI * 2) / sectors;

    // Тики
    const pointerAngle = (Math.PI - rotation + Math.PI * 2) % (Math.PI * 2); // стрелка в Math.PI
    const currentSector = Math.floor(pointerAngle / angle);

    if (currentSector !== lastTick && speed > 0.01) {
      tickSound.currentTime = 0;
      tickSound.play().catch(() => {});
      lastTick = currentSector;
    }

    speed *= 0.985;

    // Остановка
    if (speed < 0.002) {
      spinning = false;

      // Финальный snap и определение победителя
      const normalized = (rotation % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      const winnerSector = Math.floor((Math.PI - normalized + Math.PI * 2) % (Math.PI * 2) / angle) % sectors;
      winner = visibleItems[winnerSector];

      rotation = rotation % (Math.PI * 2); // нормализация
      showWinner();
    }
  }

  draw();
  requestAnimationFrame(animate); // ← всегда продолжаем анимацию!
}

// Показ победителя + сохранение
function showWinner() {
  if (!winner) return;

  const stageMap = ["hero", "spell", "lane", "emblem"];
  const key = stageMap[stage]; // используем текущий stage до увеличения

  buildData[key] = winner;
  localStorage.setItem("mlbb_build", JSON.stringify(buildData));

  const centerEl = document.getElementById("centerWinner");
  centerEl.innerHTML = `
    <img src="${winner.img}" alt="${winner.name}" style="width:260px; filter:drop-shadow(0 0 30px gold);">
    <div style="color:gold; font-size:2rem; margin-top:15px;">${winner.name}</div>
  `;
}

// Запуск следующего спина
function spinNext() {
  // Устанавливаем items по текущему stage
  if (stage === 0) items = heroes;
  else if (stage === 1) items = spells;
  else if (stage === 2) items = lanes;
  else if (stage === 3) items = emblems;

  generateWheel();
  draw(); // сразу показываем новое колесо

  spinning = true;
  speed = 0.4 + Math.random() * 0.3;
  lastTick = -1;

  spinSound?.currentTime = 0;
  spinSound?.play().catch(() => {});

  // stage увеличиваем ПОСЛЕ спина (чтобы showWinner использовал правильный key)
  setTimeout(() => {
    stage = (stage + 1) % 4;
  }, 3000); // примерно через время спина — подстрой под себя
}

function pullLever() {
  const lever = document.getElementById("lever");
  lever.classList.add("pull");
  setTimeout(() => lever.classList.remove("pull"), 400);
  spinNext();
}

function loadBuild() {
  const saved = localStorage.getItem("mlbb_build");
  if (saved) {
    buildData = JSON.parse(saved);
  } else {
    buildData = {};
  }

  const buildContent = document.getElementById("buildContent");
  buildContent.innerHTML = `
    <div style="display:flex; gap:40px; flex-wrap:wrap; justify-content:center; color:gold; font-family:Orbitron;">
      <div style="text-align:center; flex:1; min-width:160px;">
        <h3 style="border-bottom: 2px solid gold; padding-bottom:8px;">Hero</h3>
        ${buildData.hero ? `<img src="${buildData.hero.img}" alt="${buildData.hero.name}" style="width:150px; border-radius: 12px;"><div style="margin-top:10px;">${buildData.hero.name}</div>` : '<div>No hero selected</div>'}
      </div>
      <div style="text-align:center; flex:1; min-width:160px;">
        <h3 style="border-bottom: 2px solid gold; padding-bottom:8px;">Spell</h3>
        ${buildData.spell ? `<img src="${buildData.spell.img}" alt="${buildData.spell.name}" style="width:150px; border-radius: 12px;"><div style="margin-top:10px;">${buildData.spell.name}</div>` : '<div>No spell selected</div>'}
      </div>
      <div style="text-align:center; flex:1; min-width:160px;">
        <h3 style="border-bottom: 2px solid gold; padding-bottom:8px;">Lane</h3>
        ${buildData.lane ? `<img src="${buildData.lane.img}" alt="${buildData.lane.name}" style="width:150px; border-radius: 12px;"><div style="margin-top:10px;">${buildData.lane.name}</div>` : '<div>No lane selected</div>'}
      </div>
      <div style="text-align:center; flex:1; min-width:160px;">
        <h3 style="border-bottom: 2px solid gold; padding-bottom:8px;">Emblem</h3>
        ${buildData.emblem ? `<img src="${buildData.emblem.img}" alt="${buildData.emblem.name}" style="width:150px; border-radius: 12px;"><div style="margin-top:10px;">${buildData.emblem.name}</div>` : '<div>No emblem selected</div>'}
      </div>
    </div>
  `;

  document.getElementById("buildOverlay").classList.add("visible");
}

// Инициализация
requestAnimationFrame(animate);           // запускаем вечный цикл анимации
loadBuild();                              // загружаем сохранённый билд при старте
setWheel('heroes');                       // стартуем с героев (если setWheel определён в index.html)