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
    constructor(name, hp, damage, accuracy, alive, hostile)
    {
        this.name = name,
        this.hp = hp,
        this.damage = damage,
        this.accuracy = accuracy
        this.alive = alive,
        this.hostile = hostile
    }
}

const player = new Entity("Testman", 100, randomStat(1,5), 5)
// let inventory = []
// let selected = 0

// // let selected = 0

// // let selectedItem = inventory[selected]


//Enemy
const rat = new Entity("Rat", 5, randomStat(1,2), 2, true, true)
console.log(rat);
const biggerRat = new Entity("Bigger Rat", 20, randomStat(3,5), 3, true, true)
const biggestRat = new Entity("Rat Supreme", 50, randomStat(5,10), 4, true, true)

//NPC

class NPC extends Entity
{
    constructor(greeting, questionA, dialogueA, questionB, dialogueB, questionC, dialogueC, goodbye, visited, returnvisit)
    {
        super()
        this.greeting = greeting,
        this.questionA = questionA,
        this.dialogueA = dialogueA,
        this.questionB = questionB,
        this.dialogueB = dialogueB,
        this.questionC = questionC,
        this.dialogueC = dialogueC
        this.goodbye = goodbye
        this.visited = visited
        this.returnvisit = returnvisit
    }
    greet()
    {
        textBox.innerHTML = this.greeting
    }

    reply1()
    {
        textBox.innerHTML = this.dialogueA
    }    
    
    reply2()
    {
        textBox.innerHTML = this.dialogueB
    }    
    
    reply3()
    {
        textBox.innerHTML = this.dialogueC
    }

    returnVisit()
    {
        textBox.innerHTML = this.returnvisit
    }

    leaveConvo()
    {
        textBox.innerHTML = this.goodbye
        inputBox.innerHTML = 
        `
        <div class = "input">
            <button class="button" onclick="look()"> Look Around </button>
            <button class="button" onclick="approach()"> Approach</button>
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

const gerret = new NPC 
( 
`Ah, yewr fin'lly awake. My name es Gerret. Been stuck here a lot long'r ten yew ah reckon. A'm sure yewr jus' absolutely rife wit' questions. Ask away, lad.`,
'Where am I?',
"Must've 'ad one helluva night din't yew. Dis here es tha' jail undeh Lord Worchestershiresons-on-the-moor's castle. Dis es where awl tha' threats to tha' overarching antagonist plot go. Tat's ta' say...we are threats ta' tha' Demon Lord Emperor uv' Kinging's reign uv' terror an' mus' be locked up so 'e can rule tha' lan' wit' an iron fist un'bated by hero types like yew an' meself.",
"The who, what, why?",
"Aye, da Demon Lord Emperor of Kinging. Or Jeff. Either works ah s'pose. Fella came here from down awn Northingtonshire uv' Southoverportington wit' a chip uv' tha' Great Power Crystal en hees shouldah an' no one 'as been able ta' stop 'im, but maybe thing'll change. He did only start 'is reign awn Porridge Day. Jus' us down 'ere now awn account uv' da' new world order an' awl dat nonsense.",
"What is...Porridge Day???",
"Porridge Day es tha' day we get Porridge o' course!. So...Toosday or summtin. Dis is all ah know sadly. Been stuck 'ere since Porridge Day meself. But ah haven't lef' awn account uv da rats. We could leave if ya' take care uv dose tings. Ef dey was smaller, woulda kept 'em as pets ah wooduv.",
"Good luck an' all that. Maybe yew can be tha' pest exterminator we need.",
false,
"Back 'gain are we? Needy lil' fella aren't yew. Ah got answahs ef ye gawt questions.")

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

// const item = new Item("Item of Testing", "If you are seeing this, I messed up somewhere.", true)
// const item2 = new Item("Sword of Testing", "How did you get this?", true)
// const item3 = new Item("Shield of Testing", "Why did you get this?", true)
// const item4 = new Item("Chalice of Testing", "Can you drink from this?", true)
// const item5 = new Item("Cube of Testing", "Can you eat it?", true)
// const item6 = new Item("Sphere of Testing", "It spheres menacingly.", true)

//ROOMS

class Room
{
    constructor(name, description, id, item, occupied, inventory, occupier, hostile)
    {
        this.name = name,
        this.description = description,
        this.id = id,
        this.item = item
        this.occupied = occupied,
        this.inventory = inventory,
        this.occupier = occupier
        this.hostile = hostile
    }
}

let room1 = new Room("The Gaol", "You stand in a dank, square room with little light trickling in via an iron grate. Unsavoury pungent odors waft through the chamber and you hear chittering past a large metal bars that have been thrown open.", one, true, true, 0, gerret)
// room1.inventory = [item]

let room2 = new Room("Second Room", "You stand in a completely red room.", two, true, false, 0)
// room2.inventory = [item2]

let room3 = new Room("Third Room", "You stand in a completely blue room.", three, true, false, 0, rat, true)
// room3.inventory = [item3]

let room4 = new Room("Fourth Room", "You stand in a completely green room.", four, true, false, 0)
// room4.inventory = [item4]

let room5 = new Room("Fifth Room", "You stand in a completely yellow room.", five, true, false, 0)
// room5.inventory = [item5]

let room6 = new Room("Sixth Room", "You stand in a completely orange room.", six, true, false, 0)
// room6.inventory = [item6]


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

let currentNPC = currentRoom.occupier


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
                            <button class="button" onclick="approach()"> Approach</button>
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
        encounter();
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
        encounter();
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
        encounter();
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
        encounter();
    }
}



//INTERACTIONS
const look = () =>
{
    textBox.innerHTML = `${currentRoom.description}`
    if(currentRoom.occupied === true)
    {
    textBox.append(`You spot someone!`)
    }
}

const approach = () => 
{
    if(currentRoom.occupied === true)
    {
        talk();
    }
    else
    {
        textBox.innerHTML = "The room is empty."
    }
}


const talk = () =>
{
    if(currentNPC.visited === false)
    {
        currentNPC.greet();
    }
    else
    {
        currentNPC.returnVisit();
    }
    inputBox.innerHTML = 
    `
    <div class = "input">
        <button class="button" onclick="currentNPC.reply1()">${currentNPC.questionA}</button>
        <button class="button" onclick="currentNPC.reply2()">${currentNPC.questionB}</button>
        <button class="button" onclick="currentNPC.reply3()">${currentNPC.questionC}</button>
        <button class="button" onclick="currentNPC.leaveConvo()">Goodbye</button>
    </div>
    `
    currentNPC.visited = true
}


const encounter = () =>
{
    if(currentNPC.hostile === true)
    {
        textBox.innerHTML = "An enemy approaches!"
    }
}
//Inventory

// const pickUpItem = () =>
// {
//     if(currentRoom.item === true)
//     {
//     textBox.innerHTML = `You pick up ${currentRoom.inventory[0].name} and add it to your inventory.`
//     inventory.push(currentRoom.inventory[0])
//     inventorylist.innerHTML += `<li>${inventory[selected].name}</li>`
//     currentRoom.inventory.pop()
//     console.log((`${inventory[selected].name} is now in your inventory.`))
//     currentRoom.item = false
//     }
//     else
//     {
//         textBox.innerHTML = ("There is nothing here to take.")
//     }
// }


//Problem: When an item is selected, it uses the last element in the array as the selected element.
//Question: How can I equate the element that is being clicked on as to what is being selected

//I want to:
//Select the item so I can:

//Examine the Item (hint where to use it)
//Place/Drop the item (place it in the room to do a thing)
//Use/Equip?? item
//Back Button


// const selectItem = () =>
// {
//     textBox.innerHTML = `${inventory[size].examine}`
//     if(inventory[size].canBeUsed === true)
//     {
//         textBox.innerHTML += `This item could be used for something.`
//         inputBox.innerHTML = 
//         `
//         <div class = "input">
//         <button class="button" onclick="look()"> Look Around </button>
//         <button class="button" onclick="useItem()">Use Item</button>
//         </div>

//     <div class = "moveBox">

//     <div class="moveBtn">
//         <button class="button" onclick="moveRoomUp()">Move North</button>
    
//     <div class="moveBtn">
//         <button class="button" onclick="moveRoomLeft()">Move West</button>
//         <button class="button" onclick="moveRoomDown()">Move South</button>
//         <button class="button" onclick="moveRoomRight()">Move East</button>
//     </div>
//     </div>
//     </div>`
//     }
// }

// const dropItem = () =>
// {
//     textBox.innerHTML = `You place ${inventory[size]} in the room.`
// }

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

// let playerAttackRoll = randomStat(1,20) + player.attack
// let compAttackRoll = randomStat(1,20) + enemy.attack

// //COMBAT
// //NOTE: IF THE DISTANCE BETWEEN THE OBJECTS ATTACK AND DEFENSE IS GREATER 4, CAUSES LOOP
// //MAYBE FIX IT TO SOMETHING DIFFERENT???
// //Player Turn
// const playerTurn = () => 
// {
//     if (playerAttackRoll >= enemy.defense)
//     {      
//         console.log("Player Hit");
//         enemy.hp -= player.damage
//         console.log(`Enemy takes ${player.damage} damage. and has ${enemy.hp} remaining`);
//         checkEnemyHP();
//     }
//     else
//     {
//         console.log("Player Miss");
//         checkEnemyHP();
//     }
// }

// //Check Enemy Life
// const checkEnemyHP = () =>
// {
//     if (enemy.hp <= 0)
//     {
//         console.log("The enemy is defeated.");
//     }
//     else {
//         console.log("Enemy's turn.");
//         enemyTurn();
//     }
// }

// //Enemy Turn
// const enemyTurn = () => 
// {
//     if (compAttackRoll >= enemy.defense)
//     {      
//         console.log("Enemy Hit");
//         player.hp -= enemy.damage
//         console.log(`Player takes ${enemy.damage} damage and has ${player.hp} remaining`);
//         checkPlayerHP();
//     }
//     else
//     {
//         console.log("Enemy Miss");
//         checkPlayerHP();
//     }
// }

// //Check Player Life
// const checkPlayerHP = () =>
// {
//     if (player.hp <= 0)
//     {
//         console.log("You lose.");
//     }
//     else {
//         console.log("Your turn.");
//         playerTurn();
//     }
// }


