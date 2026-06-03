let currentWildPokemon = null;
let playerPokemon = null;

function startBattle(){

    currentWildPokemon = getWildPokemon();

    document
        .getElementById("battleScreen")
        .classList.remove("hidden");

    document
        .getElementById("enemyName")
        .textContent =
        "Wild " + currentWildPokemon.name;

    document
        .getElementById("enemyHp")
        .textContent =
        "HP: " + currentWildPokemon.hp;

    document
        .getElementById("playerPokemon")
        .textContent =
        playerPokemon.name +
        " HP: " +
        playerPokemon.hp;

    document
        .getElementById("battleText")
        .textContent =
        "A wild " +
        currentWildPokemon.name +
        " appeared!";
}

function attack(){

    const damage =
        Math.floor(
            playerPokemon.attack / 5
        ) + 5;

    currentWildPokemon.hp -= damage;

    if(currentWildPokemon.hp <= 0){

        document
            .getElementById("battleText")
            .textContent =
            currentWildPokemon.name +
            " fainted!";

        setTimeout(endBattle,1000);

        return;
    }

    document
        .getElementById("enemyHp")
        .textContent =
        "HP: " +
        currentWildPokemon.hp;

    enemyAttack();
}

function enemyAttack(){

    const damage =
        Math.floor(
            currentWildPokemon.attack / 8
        ) + 2;

    playerPokemon.hp -= damage;

    if(playerPokemon.hp < 0)
        playerPokemon.hp = 0;

    document
        .getElementById("playerPokemon")
        .textContent =
        playerPokemon.name +
        " HP: " +
        playerPokemon.hp;

    document
        .getElementById("battleText")
        .textContent =
        currentWildPokemon.name +
        " attacked!";
}

function throwBall(){

    const chance = Math.random();

    if(chance < 0.5){

        document
            .getElementById("battleText")
            .textContent =
            "Gotcha! " +
            currentWildPokemon.name +
            " was caught!";

        setTimeout(endBattle,1000);

    }else{

        document
            .getElementById("battleText")
            .textContent =
            "The Pokémon broke free!";

        enemyAttack();
    }
}

function runBattle(){

    document
        .getElementById("battleText")
        .textContent =
        "Got away safely!";

    setTimeout(endBattle,500);
}

function endBattle(){

    document
        .getElementById("battleScreen")
        .classList.add("hidden");

    currentWildPokemon = null;
}
