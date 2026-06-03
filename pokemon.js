const POKEMON = [

{id:1,name:"Bulbasaur",type:"Grass",hp:45,attack:49,level:5},
{id:2,name:"Ivysaur",type:"Grass",hp:60,attack:62,level:16},
{id:3,name:"Venusaur",type:"Grass",hp:80,attack:82,level:32},

{id:4,name:"Charmander",type:"Fire",hp:39,attack:52,level:5},
{id:5,name:"Charmeleon",type:"Fire",hp:58,attack:64,level:16},
{id:6,name:"Charizard",type:"Fire",hp:78,attack:84,level:36},

{id:7,name:"Squirtle",type:"Water",hp:44,attack:48,level:5},
{id:8,name:"Wartortle",type:"Water",hp:59,attack:63,level:16},
{id:9,name:"Blastoise",type:"Water",hp:79,attack:83,level:36},

{id:10,name:"Caterpie",type:"Bug",hp:45,attack:30,level:2},
{id:11,name:"Metapod",type:"Bug",hp:50,attack:20,level:7},
{id:12,name:"Butterfree",type:"Bug",hp:60,attack:45,level:10},

{id:13,name:"Weedle",type:"Bug",hp:40,attack:35,level:2},
{id:14,name:"Kakuna",type:"Bug",hp:45,attack:25,level:7},
{id:15,name:"Beedrill",type:"Bug",hp:65,attack:90,level:10},

{id:16,name:"Pidgey",type:"Normal",hp:40,attack:45,level:3},
{id:17,name:"Pidgeotto",type:"Normal",hp:63,attack:60,level:18},
{id:18,name:"Pidgeot",type:"Normal",hp:83,attack:80,level:36},

{id:19,name:"Rattata",type:"Normal",hp:30,attack:56,level:3},
{id:20,name:"Raticate",type:"Normal",hp:55,attack:81,level:20},

{id:21,name:"Spearow",type:"Normal",hp:40,attack:60,level:4},
{id:22,name:"Fearow",type:"Normal",hp:65,attack:90,level:20},

{id:23,name:"Ekans",type:"Poison",hp:35,attack:60,level:5},
{id:24,name:"Arbok",type:"Poison",hp:60,attack:95,level:22},

{id:25,name:"Pikachu",type:"Electric",hp:35,attack:55,level:5},
{id:26,name:"Raichu",type:"Electric",hp:60,attack:90,level:25},

{id:27,name:"Sandshrew",type:"Ground",hp:50,attack:75,level:6},
{id:28,name:"Sandslash",type:"Ground",hp:75,attack:100,level:22},

{id:37,name:"Vulpix",type:"Fire",hp:38,attack:41,level:8},
{id:38,name:"Ninetales",type:"Fire",hp:73,attack:76,level:30},

{id:39,name:"Jigglypuff",type:"Fairy",hp:115,attack:45,level:5},
{id:40,name:"Wigglytuff",type:"Fairy",hp:140,attack:70,level:22},

{id:52,name:"Meowth",type:"Normal",hp:40,attack:45,level:5},
{id:53,name:"Persian",type:"Normal",hp:65,attack:70,level:28},

{id:54,name:"Psyduck",type:"Water",hp:50,attack:52,level:8},
{id:55,name:"Golduck",type:"Water",hp:80,attack:82,level:30},

{id:58,name:"Growlithe",type:"Fire",hp:55,attack:70,level:10},
{id:59,name:"Arcanine",type:"Fire",hp:90,attack:110,level:36},

{id:74,name:"Geodude",type:"Rock",hp:40,attack:80,level:8},
{id:75,name:"Graveler",type:"Rock",hp:55,attack:95,level:25},
{id:76,name:"Golem",type:"Rock",hp:80,attack:120,level:40},

{id:92,name:"Gastly",type:"Ghost",hp:30,attack:35,level:12},
{id:93,name:"Haunter",type:"Ghost",hp:45,attack:50,level:25},
{id:94,name:"Gengar",type:"Ghost",hp:60,attack:65,level:40},

{id:129,name:"Magikarp",type:"Water",hp:20,attack:10,level:5},
{id:130,name:"Gyarados",type:"Water",hp:95,attack:125,level:30},

{id:133,name:"Eevee",type:"Normal",hp:55,attack:55,level:5},

{id:143,name:"Snorlax",type:"Normal",hp:160,attack:110,level:30},

{id:144,name:"Articuno",type:"Ice",hp:90,attack:85,level:50,legendary:true},
{id:145,name:"Zapdos",type:"Electric",hp:90,attack:90,level:50,legendary:true},
{id:146,name:"Moltres",type:"Fire",hp:90,attack:100,level:50,legendary:true},

{id:150,name:"Mewtwo",type:"Psychic",hp:106,attack:110,level:70,legendary:true},
{id:151,name:"Mew",type:"Psychic",hp:100,attack:100,level:70,legendary:true}

];

function clonePokemon(pokemon){
    return JSON.parse(JSON.stringify(pokemon));
}

function getStarter(choice){

    if(choice === 1) return clonePokemon(POKEMON[0]);
    if(choice === 2) return clonePokemon(POKEMON[3]);
    if(choice === 3) return clonePokemon(POKEMON[6]);

    return clonePokemon(POKEMON[0]);
}

function getWildPokemon(){

    const wildPool = POKEMON.filter(
        p => !p.legendary
    );

    return clonePokemon(

        wildPool[
            Math.floor(
                Math.random() * wildPool.length
            )
        ]

    );
}

function getLegendaryPokemon(){

    const legends = POKEMON.filter(
        p => p.legendary
    );

    return clonePokemon(

        legends[
            Math.floor(
                Math.random() * legends.length
            )
        ]

    );
}
