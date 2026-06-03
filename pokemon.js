const POKEMON = [

{
id:1,
name:"Bulbasaur",
type:"Grass",
hp:45,
attack:49,
level:5
},

{
id:4,
name:"Charmander",
type:"Fire",
hp:39,
attack:52,
level:5
},

{
id:7,
name:"Squirtle",
type:"Water",
hp:44,
attack:48,
level:5
},

{
id:16,
name:"Pidgey",
type:"Normal",
hp:40,
attack:45,
level:3
},

{
id:19,
name:"Rattata",
type:"Normal",
hp:30,
attack:56,
level:3
},

{
id:10,
name:"Caterpie",
type:"Bug",
hp:45,
attack:30,
level:2
},

{
id:13,
name:"Weedle",
type:"Bug",
hp:40,
attack:35,
level:2
},

{
id:25,
name:"Pikachu",
type:"Electric",
hp:35,
attack:55,
level:5,
rare:true
}

];

function getStarter(choice){

if(choice===1)
return structuredClone(POKEMON[0]);

if(choice===2)
return structuredClone(POKEMON[1]);

if(choice===3)
return structuredClone(POKEMON[2]);

return structuredClone(POKEMON[0]);

}

function getWildPokemon(){

const wild = POKEMON.slice(3);

return structuredClone(

wild[
Math.floor(
Math.random()*wild.length
)
]

);

}
