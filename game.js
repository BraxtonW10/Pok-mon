const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const TILE = 32;

let badges = 0;

playerPokemon = getStarter(

parseInt(

prompt(
"Choose Starter:\n\n1 Bulbasaur\n2 Charmander\n3 Squirtle"
)

)||1

);

const player = {
x:5,
y:5
};

const keys = {
up:false,
down:false,
left:false,
right:false
};

function hold(id,key){

const btn=document.getElementById(id);

if(!btn) return;

btn.addEventListener("touchstart",e=>{
e.preventDefault();
keys[key]=true;
});

btn.addEventListener("touchend",e=>{
e.preventDefault();
keys[key]=false;
});

}

hold("up","up");
hold("down","down");
hold("left","left");
hold("right","right");

function movePlayer(){

if(keys.up) player.y-=0.15;
if(keys.down) player.y+=0.15;
if(keys.left) player.x-=0.15;
if(keys.right) player.x+=0.15;

}

function drawWorld(){

ctx.fillStyle="#4CAF50";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#1f7a1f";

ctx.fillRect(
300,
120,
250,
200
);

}

function drawTowns(){

WORLD.towns.forEach(town=>{

ctx.fillStyle="gold";

ctx.fillRect(
town.x*TILE,
town.y*TILE,
TILE,
TILE
);

ctx.fillStyle="black";

ctx.fillText(
town.name,
town.x*TILE,
town.y*TILE-5
);

});

}

function drawPlayer(){

ctx.fillStyle="red";

ctx.fillRect(
player.x*TILE,
player.y*TILE,
TILE,
TILE
);

}

function checkLocation(){

let location="Wilderness";

WORLD.towns.forEach(town=>{

if(
Math.abs(player.x-town.x)<2 &&
Math.abs(player.y-town.y)<2
){
location=town.name;
}

});

document.getElementById(
"location"
).textContent=location;

}

let encounterTimer=0;

function checkEncounters(){

encounterTimer++;

if(encounterTimer<120)
return;

encounterTimer=0;

const px=player.x*TILE;
const py=player.y*TILE;

if(
px>300 &&
px<550 &&
py>120 &&
py<320
){

if(Math.random()<0.20){

startBattle();

}

}

}

function update(){

movePlayer();
checkLocation();
checkEncounters();

}

function draw(){

drawWorld();
drawTowns();
drawPlayer();

}

function loop(){

update();
draw();

requestAnimationFrame(loop);

}

document
.getElementById("attackBtn")
?.addEventListener("click",attack);

document
.getElementById("ballBtn")
?.addEventListener("click",throwBall);

document
.getElementById("runBtn")
?.addEventListener("click",runBattle);

loop();
