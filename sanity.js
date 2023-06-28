//Character
let player = 
{
    name: "Testman",
    hp: 100,
    damage: randomStat(1,5),
    attack: 8,
    defense: 12,
}

//Enemy

let enemy =
{
    name: "Test Demon",
    hp: 50,
    damage: randomStat(1,5),
    attack: 8,
    defense: 12,
}

//ROOMS

let room1 =
{
    name: "Starting Room",
    occupied: false,
    description: "You stand in a completely white room. There is no beginning, and no end. You aren't sure if you are dead.",

}

let room2 =
{
    name: "Second Room",
    occupied: false,
    description: "You stand in a completely red room.",

}

let room3 =
{
    name: "Third Room",
    occupied: false,
    description: "You stand in a completely blue room.",

}

let room4 =
{
    name: "Fourth Room",
    occupied: false,
    description: "You stand in a completely green room.",

}

let room5 =
{
    name: "Fifth Room",
    occupied: false,
    description: "You stand in a completely yellow room.",

}

let room6 =
{
    name: "Sixth Room",
    occupied: false,
    description: "You stand in a completely orange room.",
}


let map=
[

        [room1, room2],
        [room3, room4],
        [room5, room6],
]

// 0,0 | 0,1 
// 1,0 | 1,1 
// 2,0 | 2,1 

let currentRoom = map[0][0];
let verticalMove = 0;
let horizontalMove = 0;


const beginGame = () =>
{
    console.log(`You wake up in ${currentRoom.name}`);
    console.log(`Look Around: ${currentRoom.description}`);
}



//MOVEMENT 

const moveRoomUp = () => 
{
    if (currentRoom.occupied === false)
    {
    verticalMove--
    let currentRoom = map[verticalMove][horizontalMove]
    console.log(`You are now in ${currentRoom.name}`);
    }
    else
    {
        console.log("You can't move here.");
    }
}

const moveRoomDown = () => 
{
    if (currentRoom.occupied === false)
    {
    verticalMove++
    let currentRoom = map[verticalMove][horizontalMove]
    console.log(`You are now in ${currentRoom.name}`);
    }
}

const moveRoomLeft = () => 
{
    if (currentRoom.occupied === false)
    {
    horizontalMove--
    let currentRoom = map[verticalMove][horizontalMove]
    console.log(`You are now in ${currentRoom.name}`);
    }
}

const moveRoomRight = () => 
{
    if (currentRoom.occupied === false)
    {
    horizontalMove++
    let currentRoom = map[verticalMove][horizontalMove]
    console.log(`You are now in ${currentRoom.name}`);
    }
}

console.log(moveRoomUp());

//Step 1. Says what room you are in
//Step 2. Checks if you can move to a room, if you can, do so
    //Problem: Want to check what direction you can move to successfully.
    //Problem: How do you condense all the different directions into a easier function?
    //Solution: Or is it easier to have cardinal inputs?
    //2d matrix array!
    //New Problem
    //How do you account for walls....
//Step 3. Have input affect what you see in the room
//Step 4. Encounter enemy in room, and fight. 
//Step 5. Repeat

//random
function randomStat(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let playerAttackRoll = randomStat(1,20) + player.attack
let compAttackRoll = randomStat(1,20) + enemy.attack

//COMBAT
//NOTE: IF THE DISTANCE BETWEEN THE OBJECTS ATTACK AND DEFENSE IS GREATER 4, CAUSES LOOP
//MAYBE FIX IT TO SOMETHING DIFFERENT???
//Player Turn
const playerTurn = () => 
{
    if (playerAttackRoll >= enemy.defense)
    {      
        console.log("Player Hit");
        enemy.hp -= player.damage
        console.log(`Enemy takes ${player.damage} damage. and has ${enemy.hp} remaining`);
        checkEnemyHP();
    }
    else
    {
        console.log("Player Miss");
        checkEnemyHP();
    }
}

//Check Enemy Life
const checkEnemyHP = () =>
{
    if (enemy.hp <= 0)
    {
        console.log("The enemy is defeated.");
    }
    else {
        console.log("Enemy's turn.");
        enemyTurn();
    }
}

//Enemy Turn
const enemyTurn = () => 
{
    if (compAttackRoll >= enemy.defense)
    {      
        console.log("Enemy Hit");
        player.hp -= enemy.damage
        console.log(`Player takes ${enemy.damage} damage and has ${player.hp} remaining`);
        checkPlayerHP();
    }
    else
    {
        console.log("Enemy Miss");
        checkPlayerHP();
    }
}

//Check Player Life
const checkPlayerHP = () =>
{
    if (player.hp <= 0)
    {
        console.log("You lose.");
    }
    else {
        console.log("Your turn.");
        playerTurn();
    }
}

const start = () => {
    playerTurn();
}
