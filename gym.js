const GYMS = [

{
id:1,
name:"Pewter Gym",
leader:"Brock",
badge:"Stone Badge",
city:"Pewter City",
pokemon:[
"Geodude",
"Onix"
]
},

{
id:2,
name:"Cerulean Gym",
leader:"Misty",
badge:"Cascade Badge",
city:"Cerulean City",
pokemon:[
"Staryu",
"Starmie"
]
},

{
id:3,
name:"Vermilion Gym",
leader:"Lt. Surge",
badge:"Thunder Badge",
city:"Vermilion City",
pokemon:[
"Voltorb",
"Raichu"
]
},

{
id:4,
name:"Celadon Gym",
leader:"Erika",
badge:"Rainbow Badge",
city:"Celadon City",
pokemon:[
"Tangela",
"Vileplume"
]
},

{
id:5,
name:"Fuchsia Gym",
leader:"Koga",
badge:"Soul Badge",
city:"Fuchsia City",
pokemon:[
"Koffing",
"Weezing"
]
},

{
id:6,
name:"Saffron Gym",
leader:"Sabrina",
badge:"Marsh Badge",
city:"Saffron City",
pokemon:[
"Kadabra",
"Alakazam"
]
},

{
id:7,
name:"Cinnabar Gym",
leader:"Blaine",
badge:"Volcano Badge",
city:"Cinnabar Island",
pokemon:[
"Growlithe",
"Arcanine"
]
},

{
id:8,
name:"Viridian Gym",
leader:"Giovanni",
badge:"Earth Badge",
city:"Viridian Gym",
pokemon:[
"Nidoqueen",
"Rhydon"
]
}

];

let playerBadges = [];

function earnBadge(badge){

if(!playerBadges.includes(badge)){

playerBadges.push(badge);

updateBadgeDisplay();

}

}

function updateBadgeDisplay(){

const badgeElement =
document.getElementById("badges");

if(badgeElement){

badgeElement.textContent =
"Badges: " +
playerBadges.length +
"/8";

}

}

function challengeGym(gymId){

const gym =
GYMS.find(g=>g.id===gymId);

if(!gym) return;

const win =
confirm(
"Challenge " +
gym.leader +
" for the " +
gym.badge +
"?"
);

if(win){

earnBadge(gym.badge);

alert(
"You defeated " +
gym.leader +
" and earned the " +
gym.badge +
"!"
);

}

}
