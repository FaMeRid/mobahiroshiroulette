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
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

let rotation = 0;
let spinSpeed = 0;
let spinning = false;
let finalRotation = 0;

const numSectors = 60;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2;

let selectedWinner = null;

/* STREAM MODE */

const streamMode = new URLSearchParams(window.location.search).has("stream");

if (streamMode) {
document.body.style.background = "transparent";
}

/* ITEMS */

let items = [
{ name:"Alucard",rarity:"Epic",img:"assets/heroes/alucard.jpg",weight:5 },
{ name:"Layla",rarity:"Common",img:"assets/heroes/layla.jpg",weight:20 },
{ name:"Gusion",rarity:"Legendary",img:"assets/heroes/gusion.jpg",weight:2 },
{ name:"Zilong",rarity:"Rare",img:"assets/heroes/zilong.jpg",weight:10 },
{ name:"Chou",rarity:"Mythic",img:"assets/heroes/chou.jpg",weight:1 }
];

/* RANDOM WITHOUT REPEAT */

let dropPool = [];

function refillPool(){
dropPool = shuffle([...items]);
}

function getNextItem(){

if(dropPool.length === 0) refillPool();

return dropPool.pop();
}

/* SHUFFLE */

function shuffle(array){

for(let i=array.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

return array;

}

/* DRAW WHEEL */

function drawWheel(){

ctx.clearRect(0,0,canvas.width,canvas.height);

const sectorAngle = (Math.PI*2)/numSectors;

for(let i=0;i<numSectors;i++){

const angle = i*sectorAngle + rotation;

const item = items[i % items.length];

ctx.beginPath();

ctx.moveTo(centerX,centerY);

ctx.arc(centerX,centerY,radius,angle,angle+sectorAngle);

ctx.closePath();

/* color */

switch(item.rarity){

case "Common":
ctx.fillStyle="#555";
break;

case "Rare":
ctx.fillStyle="#00c8ff";
break;

case "Epic":
ctx.fillStyle="#ff00ff";
break;

case "Legendary":
ctx.fillStyle="#ffd700";
break;

case "Mythic":
ctx.fillStyle="#ff4500";
break;

}

ctx.fill();

/* 3D shadow */

ctx.save();

ctx.translate(centerX,centerY);
ctx.rotate(angle+sectorAngle/2);

ctx.fillStyle="rgba(0,0,0,0.35)";
ctx.fillRect(0,-2,radius,4);

ctx.restore();

}

}

/* SPIN */

function spin(){

if(spinning) return;

spinning=true;

selectedWinner = getNextItem();

const index = items.findIndex(i=>i.name===selectedWinner.name);

const sectorAngle = (Math.PI*2)/numSectors;

const sectorIndex = Math.floor(Math.random()*(numSectors/items.length))*items.length+index;

const targetAngle = (sectorIndex+0.5)*sectorAngle;

const spins = 8+Math.random()*4;

finalRotation = spins*Math.PI*2+(Math.PI/2-targetAngle);

spinSpeed = 0.35;

document.getElementById("winnerSection").classList.remove("visible");

}

/* ANIMATE */

function animate(){

if(spinning){

rotation+=spinSpeed;

spinSpeed*=0.985;

if(rotation>=finalRotation){

rotation=finalRotation;

spinning=false;

showWinner();

}

}

drawWheel();

requestAnimationFrame(animate);

}

/* HERO DROP ANIMATION */

function showWinner(){

const winner = selectedWinner;

const section = document.getElementById("winnerSection");

const img = document.getElementById("winnerImg");

const name = document.getElementById("winnerName");

img.src = winner.img;

name.textContent = `${winner.name} (${winner.rarity})`;

name.className = "rarity-"+winner.rarity.toLowerCase();

section.classList.add("visible");

/* DROP EFFECT */

img.style.transform="scale(0) rotate(-180deg)";
img.style.opacity="0";

setTimeout(()=>{

img.style.transition="all 0.8s cubic-bezier(.2,1.8,.4,1)";
img.style.transform="scale(1) rotate(0)";
img.style.opacity="1";

},100);

/* CONFETTI */

createConfetti(150);

}

/* CONFETTI */

function createConfetti(count){

for(let i=0;i<count;i++){

const conf=document.createElement("div");

conf.style.position="fixed";
conf.style.width="8px";
conf.style.height="8px";

conf.style.background=`hsl(${Math.random()*360},100%,60%)`;

conf.style.left=Math.random()*100+"vw";

conf.style.top="-10px";

conf.style.zIndex=9999;

conf.style.transform=`rotate(${Math.random()*360}deg)`;

document.body.appendChild(conf);

const fall=4+Math.random()*3;

conf.animate([

{transform:"translateY(0)"},
{transform:"translateY(110vh)"}

],{

duration:fall*1000,

easing:"linear"

});

setTimeout(()=>conf.remove(),fall*1000);

}

}

/* EVENTS */

document.getElementById("spinBtn").addEventListener("click",spin);

/* START */

refillPool();
drawWheel();
animate();