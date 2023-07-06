//document code | comment it out for further console testing because node.js hates dom
let inputBox = document.querySelector(".inputBox")
let textBox = document.querySelector(".textBox")
let mapLocation = document.querySelector(".mapLocation")
let inventorylist = document.querySelector(".inventory")

const one = document.getElementById("room1")
const two = document.getElementById("room2")
const three = document.getElementById("room3")
const four = document.getElementById("room4")
const five = document.getElementById("room5")
const six = document.getElementById("room6")
//one.appendChild(`<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-people-symbol-5.png&f=1&nofb=1&ipt=5467de4e1a012e89de2fc93499d5e6bca2befc38aea594fe4c6bd9d89f44c578&ipo=images" alt="" class="player">`)
//removeChild


//Clear functions
const clearPage = () => 
{
    textBox.innerHTML = ""
}

const clearBtns = () => 
{
    inputBox.innerHTML = ""
}


//Entities

class Entity
{
    constructor(name, hp, damage, attack, defense, inventory)
    {
        this.name = name,
        this.hp = hp,
        this.damage = damage,
        this.attack = attack,
        this.defense = defense,
        this.inventory = inventory
    }
}

const player = new Entity("Testman", 100, randomStat(1,5), 8, 12)
let inventory = []
let selected = 0

// let selected = 0

// let selectedItem = inventory[selected]



//Enemy
const enemy = new Entity("Test Demon", 50, randomStat(1,5), 8, 12)

//NPC
const npc = new Entity("Bob")

//Items
class Item
{
    constructor(name, examine, canBeUsed)
    {
    this.name = name,
    this.examine = examine,
    this.canBeUsed = canBeUsed
    }
}

const item = new Item("Item of Testing", "If you are seeing this, I messed up somewhere.", true)
const item2 = new Item("Sword of Testing", "How did you get this?", true)
const item3 = new Item("Shield of Testing", "Why did you get this?", true)
const item4 = new Item("Chalice of Testing", "Can you drink from this?", true)
const item5 = new Item("Cube of Testing", "Can you eat it?", true)
const item6 = new Item("Sphere of Testing", "It spheres menacingly.", true)

//ROOMS

class Room
{
    constructor(name, description, id, item, occupied, inventory)
    {
        this.name = name,
        this.description = description,
        this.id = id,
        this.item = item
        this.occupied = occupied,
        this.inventory = inventory
    }
}

let room1 = new Room("Starting Room", "You stand in a completely white room. There is no beginning, and no end. You aren't sure if you are dead.", one, true, true, 0)
room1.inventory = [item]

let room2 = new Room("Second Room", "You stand in a completely red room.", two, true, false, 0)
room2.inventory = [item2]

let room3 = new Room("Third Room", "You stand in a completely blue room.", three, true, false, 0)
room3.inventory = [item3]

let room4 = new Room("Fourth Room", "You stand in a completely green room.", four, true, false, 0)
room4.inventory = [item4]

let room5 = new Room("Fifth Room", "You stand in a completely yellow room.", five, true, false, 0)
room5.inventory = [item5]

let room6 = new Room("Sixth Room", "You stand in a completely orange room.", six, true, false, 0)
room6.inventory = [item6]


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
                        `
                        <div class = "input">
                            <button class="button" onclick="look()"> Look Around </button>
                            <button class="button" onclick="pickUpItem()"> Pick Up Item </button>
                        </div>


                        
                        <div class="moveBtn">
                            <button class="button" onclick="moveRoomUp()">Move North</button>
                        
                        <div class="moveBtn">
                            <button class="button" onclick="moveRoomLeft()">Move West</button>
                            <button class="button" onclick="moveRoomDown()">Move South</button>
                            <button class="button" onclick="moveRoomRight()">Move East</button>
                        </div>
                        </div>`
    }
    
}


//MOVEMENT 
//Step 2. Checks if you can move to a room, if you can, do so
    //Problem: Want to check what direction you can move to successfully.
    //Solution: Do not go greater than or equal to the array.

//When you move, move image of player as well. Somehow.
//
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
    if(currentRoom.item === true)
    {
    textBox.append(`You see an ${currentRoom.inventory[0].name} here.`)
    }
    {
    if(currentRoom.occupied === true)
    {
    textBox.append(`You spot someone!`)
    }
    inputBox.innerHTML = 
    `
        <div class = "input">
        <button class="button" onclick="look()">Look Around</button>
        <button class="button" onclick="pickUpItem()">Pick Up Item</button>
        <button class="button" onclick="approach()">Approach</button>
        </div>
    <div class = "moveBox">
    
    <div class="moveBtn">
        <button class="button" onclick="moveRoomUp()">Move North</button>
    
    <div class="moveBtn">
        <button class="button" onclick="moveRoomLeft()">Move West</button>
        <button class="button" onclick="moveRoomDown()">Move South</button>
        <button class="button" onclick="moveRoomRight()">Move East</button>
    </div>
    </div>
    </div>`
    }
}

//Inventory



const pickUpItem = () =>
{
    if(currentRoom.item === true)
    {
    textBox.innerHTML = `You pick up ${currentRoom.inventory[0].name} and add it to your inventory.`
    inventory.push(currentRoom.inventory[0])
    inventorylist.innerHTML += `<li>${inventory[selected].name}</li>`
    currentRoom.inventory.pop()
    console.log((`${inventory[selected].name} is now in your inventory.`))
    currentRoom.item = false
    }
    else
    {
        textBox.innerHTML = ("There is nothing here to take.")
    }
}

//selectUp
const selectUp = () =>
{

}
//selectDown
const selectDown = () =>
{

}
//move arrows between different items



//Problem: When an item is selected, it uses the last element in the array as the selected element.
//Question: How can I equate the element that is being clicked on as to what is being selected

//I want to:
//Select the item so I can:

//Examine the Item (hint where to use it)
//Place/Drop the item (place it in the room to do a thing)
//Use/Equip?? item
//Back Button


const selectItem = () =>
{
    textBox.innerHTML = `${inventory[size].examine}`
    if(inventory[size].canBeUsed === true)
    {
        textBox.innerHTML += `This item could be used for something.`
        inputBox.innerHTML = 
        `
        <div class = "input">
        <button class="button" onclick="look()"> Look Around </button>
        <button class="button" onclick="useItem()">Use Item</button>
        </div>

    <div class = "moveBox">

    <div class="moveBtn">
        <button class="button" onclick="moveRoomUp()">Move North</button>
    
    <div class="moveBtn">
        <button class="button" onclick="moveRoomLeft()">Move West</button>
        <button class="button" onclick="moveRoomDown()">Move South</button>
        <button class="button" onclick="moveRoomRight()">Move East</button>
    </div>
    </div>
    </div>`
    }
}

const dropItem = () =>
{
    textBox.innerHTML = `You place ${inventory[size]} in the room.`
}

//NPC 

//TALK TO
//I WANT TO ASK QUESTIONS
//END CONVERSATION

//IF THEY ARE ENEMY
//ENGAGE IN COMBAT
//HAVE COMBAT IN THE TEXTBOX?
//TURN BASED?
//RUN?
//USE ITEM?






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


