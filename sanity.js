//document code | comment it out for further console testing because node.js hates dom
let inputBox = document.querySelector(".inputBox")
let textBox = document.querySelector(".textBox")
let mapLocation = document.querySelector(".mapLocation")
let inventorylist = document.querySelector(".inventory")
let playerName = document.querySelector(".playerName")
let playerHP = document.querySelector(".playerStatHP")
let playerDamage = document.querySelector(".playerStatDamage")
let playerAcc = document.querySelector(".playerStatAccuracy")
let playerWeapon = document.querySelector(".playerWeapon")

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

class Weapon
{
    constructor(name, adjective, damage, minDmg, maxDmg)
    {
        this.name = name,
        this.adjective = adjective,
        this.damage = damage,
        this.minDmg = minDmg,
        this.maxDmg = maxDmg
    }
}

const claws = new Weapon("Small Claws", "shreds", randomStat(1,2))
const claws2 = new Weapon("Dire Claws","shreds", randomStat(3,5))
const claws3 = new Weapon("Ripper Claws","shreds", randomStat(5,10))
const fists = new Weapon ("Fists","punches", randomStat(2,4), 2, 4)
const sword = new Weapon ("Sword","slashes", randomStat(6,9), 6, 9)


//Entities

class Entity
{
    constructor(name, hp, weapon, accuracy, speed)
    {
        this.name = name,
        this.hp = hp,
        this.weapon = weapon,
        this.accuracy = accuracy,
        this.speed = speed
        this.weapon = weapon
    }
}

//Player
const player = new Entity("", 100, fists, 8, 3)


//Enemy
const rat = new Entity("Rat", 5, claws, 5, 1)
const biggerRat = new Entity("Bigger Rat", 20, claws2, 6, 3)
const biggestRat = new Entity("Rat Supreme", 50, claws3, 7, 4)


//NPC
class NPC
{
    constructor(greeting, questionA, dialogueA, questionB, dialogueB, questionC, dialogueC, goodbye, visited, returnvisit)
    {
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
`<p>
Ah, yewr fin'lly awake. My name es Gerret. Been stuck here a lot long'r ten yew ah reckon. A'm sure yewr jus' absolutely rife wit' questions. Ask away, lad.
</p>`,
'Where am I?',
`<p>
Must've 'ad one helluva night din't yew. Dis here es tha' jail undeh Lord Worchestershiresons-on-the-moor's castle. Dis es where awl tha' threats to tha' overarching antagonist plot go. Tat's ta' say...we are threats ta' tha' Demon Lord Emperor uv' Kinging's reign uv' terror an' mus' be locked up so 'e can rule tha' lan' wit' an iron fist un'bated by hero types like yew an' meself.
</p>`,
"The who, what, why?",
`<p>
Aye, da Demon Lord Emperor of Kinging. Or Jeff. Either works ah s'pose. Fella came here from down awn Northingtonshire uv' Southoverportington wit' a chip uv' tha' Great Power Crystal en hees shouldah an' no one 'as been able ta' stop 'im, but maybe thing'll change. He did only start 'is reign awn Porridge Day. Jus' us down 'ere now awn account uv' da' new world order an' awl dat nonsense.
</p>`,
"What is...Porridge Day???",
`<p>
Porridge Day es tha' day we get Porridge o' course!. So...Toosday or summtin. Dis is all ah know sadly. Been stuck 'ere since Porridge Day meself. But ah haven't lef' awn account uv da rats. We could leave if ya' take care uv dose tings. Ef dey was smaller, woulda kept 'em as pets ah wooduv.
</p>`,
`<p>
Good luck an' all that. Maybe yew can be tha' pest exterminator we need.
</p>`,
false,
`</p>
Back 'gain are we? Needy lil' fella aren't yew. Ah got answahs ef ye gawt questions.
</p>`
)

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
    constructor(name, description, occupied, hostile, occupier)
    {
        this.name = name,
        this.description = description,
        this.occupied = occupied,
        this.hostile = hostile,
        this.occupier = occupier

    }
}

let room1 = new Room("The Gaol", `<p>You stand in a dank, square room with little light trickling in via an iron grate. Unsavoury pungent odors waft through the chamber and you hear chittering past a large metal bars that have been thrown open.</p>`, true, false, gerret)
// room1.inventory = [item]

let room2 = new Room("Second Room", "You stand in a completely red room.", false, false)
// room2.inventory = [item2]

let room3 = new Room("Third Room", "You stand in a completely blue room.", true, true, rat)
// room3.inventory = [item3]

let room4 = new Room("Fourth Room", "You stand in a completely green room.", true, false)
// room4.inventory = [item4]

let room5 = new Room("Fifth Room", "You stand in a completely yellow room.", false, false)
// room5.inventory = [item5]

let room6 = new Room("Sixth Room", "You stand in a completely orange room.", false, false)
// room6.inventory = [item6]

//Global Variables
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
let nameChoice = prompt(`${player.name}`)

let danger = 3;

const win = () =>
{
    if(danger === 0)
    {
        textBox.innerHTML = `<p>
                            You have cleared the castle dungeon! Why are you still here? Get Gerret and go!
                            </p>`
    }
}

//START
const start = () =>
{
    {
    textBox.innerHTML = 
                            `<p>
                            ${nameChoice} wakes up in ${currentRoom.name}. What would you like to do?
                            </p>`;
    mapLocation.innerHTML = 
                            `<p>
                            ${currentRoom.name}
                            </p>`;
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
    playerName.innerHTML = `${nameChoice}`
    playerHP.innerHTML = `${player.hp}`
    playerDamage.innerHTML = `${player.weapon.minDmg} - ${player.weapon.maxDmg}`
    playerAcc.innerHTML = `${player.accuracy}`
    playerWeapon.innerHTML = `${player.weapon.name}`
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
        textBox.innerHTML = 
                            `<p>
                            You try to go further North. You can't move here.
                            </p>`;
    }
    else
    {
        verticalMove--
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML = 
                            `<p>
                            You go North. You are now in ${currentRoom.name}
                            </p>`;

        mapLocation.innerHTML = 
                                `<p>
                                ${currentRoom.name}
                                </p>`;
        encounter();
    }
}

const moveRoomDown = () => 
{
    if (verticalMove+1 > 2)
    {
        textBox.innerHTML = 
                            `<p>
                            You try to go further South. You can't move here.
                            </p>`;
    }
    else
    {
        verticalMove++
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML = 
                            `<p>
                            You go South. You are now in ${currentRoom.name}
                            </p>`;

        mapLocation.innerHTML = 
                                `<p>
                                ${currentRoom.name}
                                </p>`;
        encounter();
    }
}

const moveRoomLeft = () => 
{
    if (horizontalMove-1 < 0)
    {
        textBox.innerHTML = 
                            `<p>
                            You try to go further West. You can't move here.
                            </p>`;
    }
    else
    {
        horizontalMove--
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML =
                            `<p>
                            You are now in ${currentRoom.name}
                            </p>`;

        mapLocation.innerHTML = 
                                `<p>
                                ${currentRoom.name}
                                </p>`;
        encounter();
    }
}

const moveRoomRight = () => 
{
    if (horizontalMove+1 > 1)
    {
        textBox.innerHTML = 
                            `<p>
                            You try to go further East. You can't move here.
                            </p>`;
    }
    else
    {
        horizontalMove++
        currentRoom = map[verticalMove][horizontalMove]
        textBox.innerHTML =
                            `<p>
                            You are now in ${currentRoom.name}
                            </p>`;

        mapLocation.innerHTML = 
                                `<p>
                                ${currentRoom.name}
                                </p>`;
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
    if(currentRoom.hostile === true)
    {
        if(player.speed > currentRoom.occupier.speed)
        {
            textBox.innerHTML = `A ${currentRoom.occupier.name} approaches!`
            checkPlayerHP()
        }
        else
        {
            enemyTurn();
        }
    }
    else
    {
        console.log("No fights here.");
    }
}

//random
function randomStat(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let currentWeapon = player.weapon

//COMBAT
//NOTE: IF THE DISTANCE BETWEEN THE OBJECTS ATTACK AND DEFENSE IS GREATER 4, CAUSES LOOP
//MAYBE FIX IT TO SOMETHING DIFFERENT???
//Player Turn
const attack = () =>
{
    if (randomStat(1, 10) < player.accuracy)
    {
        currentRoom.occupier.hp -= currentWeapon.damage
        textBox.innerHTML += 
        `<p>
        ${nameChoice} ${currentWeapon.adjective} the ${currentRoom.occupier.name} with their ${currentWeapon.name} and deals ${currentWeapon.damage} damage.
        </p>`;
        checkEnemyHP();
    }
    else
    {
        textBox.innerHTML += ` ${nameChoice} misses their attack!`
        checkEnemyHP();
    }
}

//Check Enemy Life
const checkEnemyHP = () =>
{
    if (currentRoom.occupier.hp <= 0)
    {
        textBox.innerHTML += 
        `<p>
        The ${currentRoom.occupier.name} is defeated! You feel like you would have gained some experience for this and money would have mysteriously materialized. You aren't sure why.
        </p>`;
        danger--;
        currentRoom.hostile = false;
        currentRoom.occupied = false;
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
    else 
    {
        enemyTurn();
    }
}

//Enemy Turn
const enemyTurn = () => 
{
    if (randomStat(1, 10) < currentRoom.occupier.accuracy)
    {    
        player.hp -= currentRoom.occupier.weapon.damage  
        textBox.innerHTML += 
        `<p> 
        ${currentRoom.occupier.name} ${currentRoom.occupier.weapon.adjective} ${nameChoice} for ${currentRoom.occupier.weapon.damage} damage!
        </p>`;
        playerHP.innerHTML = `${player.hp}`
        checkPlayerHP();
    }
    else
    {
        textBox.innerHTML += 
        `<p> 
        ${currentRoom.occupier.name} misses their attack!
        </p>`;
        checkPlayerHP();
    }
}

//Check Player Life
const checkPlayerHP = () =>
{
    if (player.hp <= 0)
    {
        textBox.innerHTML += 
        `<p>
        You have perished in battle!.
        </p>`;
    }
    else {
        textBox.innerHTML += 
        `<p>
        It is your turn! The enemy has ${currentRoom.occupier.hp} HP remaining. What will you do?
        </p>`
        inputBox.innerHTML =
        `
        <div class = "input">
            <button class="button" onclick="attack()">Attack</button>
            <button class="button" onclick="run()">Run</button>
        </div>
        `
    }
}

//Escape
const run = () =>
{
    if(player.speed === randomStat(1,10))
    {
        textBox.innerHTML +=
        `<p>
        You have escaped combat. For now.
        </p>`
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
    else
    {
        
        textBox.innerHTML =
        `<p>
        You have failed to escape combat! Time to fight!
        </p>`
        enemyTurn();
    }
}


//encounter start
//Encounter rolls to see what happens first.

//Enemy goes first?
//Textbox fills with the stuff
//check for player alive
//if player alive, start player turn

//Player goes first
//Player turn
//Player can Attack or Run
//Attack starts the loop
//Run attempts to end combat.


