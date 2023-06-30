//document code | comment it out for further console testing because node.js hates dom
const inputBox = document.querySelector(".inputBox")
const textBox = document.querySelector(".textBox")
const mapLocation = document.querySelector(".mapLocation")

// need to figure out how to move this `<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-people-symbol-5.png&f=1&nofb=1&ipt=5467de4e1a012e89de2fc93499d5e6bca2befc38aea594fe4c6bd9d89f44c578&ipo=images" alt="" class="player">`

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
    description: "You stand in a completely white room. There is no beginning, and no end. You aren't sure if you are dead.",

}

let room2 =
{
    name: "Second Room",
    description: "You stand in a completely red room.",

}

let room3 =
{
    name: "Third Room",
    description: "You stand in a completely blue room.",

}

let room4 =
{
    name: "Fourth Room",
    description: "You stand in a completely green room.",

}

let room5 =
{
    name: "Fifth Room",
    description: "You stand in a completely yellow room.",

}

let room6 =
{
    name: "Sixth Room",
    description: "You stand in a completely orange room.",
    occupant: enemy
}

let map =
[
        [room1, room2],
        [room3, room4],
        [room5, room6],
]

// 0,0 | 0,1 
// 1,0 | 1,1 
// 2,0 | 2,1 

let verticalMove = 0;
let horizontalMove = 0;
let currentRoom = map[verticalMove][horizontalMove];

//START
const start = () =>
{
    {
    textBox.innerHTML = `You wake up in ${currentRoom.name}. What would you like to do?`;
    mapLocation.innerHTML = `${currentRoom.name}`;
    clearBtns();
    inputBox.innerHTML = 
                        `<button class="button" onclick="look()"> Look Around </button>
                        <button class="button" onclick="moveRoomUp()">  Move North </button>
                        <button class="button" onclick="moveRoomDown()"> Move South </button>
                        <button class="button" onclick="moveRoomRight()"> Move East </button>
                        <button class="button" onclick="moveRoomLeft()"> Move West </button>`
    }
    
}


//MOVEMENT 
//Step 2. Checks if you can move to a room, if you can, do so
    //Problem: Want to check what direction you can move to successfully.
    //Solution: Do not go greater than or equal to the array.
const moveRoomUp = () => 
{
    if (verticalMove-1 < 0)
    {
        textBox.innerHTML = "You try to go further North. You can't move here.";
    }
    else
    {
        verticalMove--
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML = `You go North. You are now in ${currentRoom.name}`;
        mapLocation.innerHTML = `${currentRoom.name}`;
    }
}

const moveRoomDown = () => 
{
    if (verticalMove+1 > 2)
    {
        textBox.innerHTML = "You try to go further. You can't move here.";
    }
    else
    {
        verticalMove++
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML = `You go South. You are now in ${currentRoom.name}`;
        mapLocation.innerHTML = `${currentRoom.name}`;
    }
}

const moveRoomLeft = () => 
{
    if (horizontalMove-1 < 0)
    {
        textBox.innerHTML = "You try to go further. You can't move here.";
    }
    else
    {
        horizontalMove--
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML =`You are now in ${currentRoom.name}`;
        mapLocation.innerHTML = `${currentRoom.name}`;
    }
}

const moveRoomRight = () => 
{
    if (horizontalMove+1 > 1)
    {
        textBox.innerHTML ="You try to go further. You can't move here.";
    }
    else
    {
        horizontalMove++
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML =`You are now in ${currentRoom.name}`;
        mapLocation.innerHTML = `${currentRoom.name}`;
    }
}


//INTERACTIONS
const look = () =>
{
    textBox.innerHTML = `${currentRoom.description}`
}

//Clear functions
const clearPage = () => 
{
    textBox.innerHTML = ""
}

const clearBtns = () => 
{
    inputBox.innerHTML = ""
}






//EXTRAS 1
//Have Inventory and use button to open inventory, which is list
//Pick up [object.name] / Adds item to list
//Use [object.name] / If it has a function, it will do it, and then remove itself from list if needed







//Step 4. Encounter enemy in room, and fight. 
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


