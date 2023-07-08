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
const direRat = new Entity("Rat Supreme", 50, claws3, 7, 4)


//NPC
class NPC
{
    constructor(greeting, questionA, dialogueA, questionB, dialogueB, questionC, dialogueC, goodbye, visited, returnvisit, winvisit)
    {
        this.greeting = greeting,
        this.questionA = questionA,
        this.dialogueA = dialogueA,
        this.questionB = questionB,
        this.dialogueB = dialogueB,
        this.questionC = questionC,
        this.dialogueC = dialogueC,
        this.goodbye = goodbye,
        this.visited = visited,
        this.returnvisit = returnvisit,
        this.winvisit = winvisit
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

    winVisit()
    {
        alert(`Garret: "Sumbody 'as been busy 'aven't dey? Well, guess dere's no use stickin' 'round dis smelly place. Let's go!" + "You have won the game! Congratulations"`)
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
`The who, what, why?`,
`<p>
Aye, da Demon Lord Emperor of Kinging. Or Jeff. Either works ah s'pose. Fella came here from down awn Northingtonshire uv' Southoverportington wit' a chip uv' tha' Great Power Crystal en hees shouldah an' no one 'as been able ta' stop 'im, but maybe thing'll change. He did only start 'is reign awn Porridge Day. Jus' us down 'ere now awn account uv' da' new world order an' awl dat nonsense.
</p>`,
`What is...Porridge Day???`,
`<p>
Porridge Day es tha' day we get Porridge o' course!. So...Toosday or summtin. Dis is all ah know sadly. Been stuck 'ere since Porridge Day meself. But ah haven't lef' awn account uv da rats. We could leave if ya' take care uv dose tings. Ef dey was smaller, woulda kept 'em as pets ah wooduv.
</p>`,
`<p>
Good luck an' all that. Maybe yew can be tha' pest exterminator we need.
</p>`,
false,
`<p>
Back 'gain are we? Needy lil' fella aren't yew. Ah got answahs ef ye gawt questions.
</p>`,
`<p>'umbody 'as been busy 'aven't dey? Well, guess dere's no use stickin' 'round dis smelly place. Let's go!</p>`
)

//ROOMS

class Room
{
    constructor(name, description, occupied, hostile, occupier, inventory)
    {
        this.name = name,
        this.description = description,
        this.occupied = occupied,
        this.hostile = hostile,
        this.occupier = occupier
        this.inventory = inventory

    }
}

let room1 = new Room("The Gaol", `<p>You stand in a dank, square room with little light trickling in via an iron grate. Unsavoury pungent odors waft through the chamber and you hear chittering past a large metal bars that have been thrown open.</p>`, true, false, gerret)

let room2 = new Room("Second Room", `test2`, false, false)

let room3 = new Room("Third Room", `test3`, true, true, rat, sword)

let room4 = new Room("Fourth Room", `test4`, false, false)

let room5 = new Room("Fifth Room", `test5`, true, true, biggerRat)

let room6 = new Room("The Exit", `test6`, true, true, direRat)


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

let nameChoice = prompt(`Choose your character's name!`)

let danger = 3;

const win = () =>
{
    if(danger === 0)
    {
        textBox.innerHTML += `<p>
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
    clearPage();
    textBox.innerHTML = `${currentRoom.description}`
    if(currentRoom.occupied === true)
    {
    textBox.append(`You spot someone!`)
    }
    if(currentRoom.inventory === sword)
    {
        textBox.innerHTML += 
                            `<p>
                            You spot something glistening in the muck...You feel like normally you would have a choice in if you wanted to pick it up or not, but your hands work faster than your mind and now you have a shiny Sword! It's almost like someone struggled really hard to make this more intuitive but as you begin to dwell on the idea, your nose begins to bleed. Best to stop thinking about it and get on with the adventuring, eh?
                            </p>`
        theSwordFunction();
    }
    
}

const approach = () => 
{
    if(currentRoom.occupied == true)
    {
        talk();
    }
    else
    {
        textBox.innerHTML = 
                            `<p>
                            The room is empty.
                            </p>`
    }
}


const talk = () =>
{
    if(danger === 0)
    {
    currentNPC.winVisit();
    }
    else
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


//random math is random
function randomStat(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//this function only exists to make the weapon a sword. Inventories are painful. I will try again when I have more XP.

const theSwordFunction = () =>
{
    player.weapon = sword;
    playerDamage.innerHTML = `${player.weapon.minDmg} - ${player.weapon.maxDmg}`
    playerWeapon.innerHTML = `${player.weapon.name}`
    room3.inventory = false
}

//COMBAT
//NOTE: IF THE DISTANCE BETWEEN THE OBJECTS ATTACK AND DEFENSE IS GREATER 4, CAUSES LOOP
//MAYBE FIX IT TO SOMETHING DIFFERENT???
//Player Turn
const attack = () =>
{
    if (randomStat(1, 10) < player.accuracy)
    {
        currentRoom.occupier.hp -= player.weapon.damage
        textBox.innerHTML += 
        `<p>
        ${nameChoice} ${player.weapon.adjective} the ${currentRoom.occupier.name} with their ${player.weapon.name} and deals ${player.weapon.damage} damage.
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
        textBox.innerHTML = 
        `<p>
        The ${currentRoom.occupier.name} is defeated! You feel like you would have gained some experience for this and money would have mysteriously materialized. You aren't sure why.
        </p>`;
        danger--;
        win();
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
        let choice = prompt("You have fallen in battle! Would you like to try again? Type `yes` to reset the world to before you woke up.")
        if(choice === "yes")
        {
            tryAgain();
        }
        else
        {
            alert("All is lost! The world is doomed! The world resets anyways!")
            tryAgain()
        }

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

const tryAgain = () =>
{
    verticalMove = 0
    horizontalMove = 0
    currentRoom = map[verticalMove][horizontalMove]
    start();
    player.hp = 100;
    playerHP.innerHTML = `${player.hp}`;
    room1.occupier.visited = false;

    rat.hp = 10;
    room3.hostile = true;
    room3.occupied = true;

    biggerRat.hp = 20;
    room5.hostile = true;
    room5.occupied = true;

    direRat.hp = 50;
    room6.hostile = true;
    room6.occupied = true;

}


