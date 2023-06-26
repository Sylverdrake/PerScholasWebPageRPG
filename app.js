//document selectors here for adding text to the screen and updating it
//-----
//-----
//-----
//-----
//-----
//-----
//-----
//-----

//-----------------------------------------------------------------------------------
//Item classes
class Equipable
{
    constructor(name, damage, pAttack, pDefense, mDefense, evade, cost, sellVal, oneHand, twoHand, equipped, canBeUsed)
    {
        this.name = name;
        this.damage = damage;
        this.pAttack = pAttack;
        this.pDefense = pDefense;
        this.mDefense = mDefense;
        this.evade = evade;
        this.cost = cost;
        this.sellVal = sellVal;
        this.oneHand = oneHand;
        this.twoHand = twoHand;
        this.equipped = equipped;
        this.canBeUsed = canBeUsed
    }
}


//Melee Weapons

const testSword = new Equipable("Sword of Testing", 5, 5, 0, 0, true, false, false, false)


//Ranged Weapons


//Magic Weapons



//Armor



//Accessories


//Notes: 
//Equip Item
//Unequip Item

//-----------------------------------------------------------------------------------
class Item
{
    constructor(name, examine, cost, sellVal, canBeUsed)
{
    this.name = name,
    this.examine = examine,
    this.cost = cost,
    this.sellVal = sellVal
    this.canBeUsed = canBeUsed
}
    useItem = () =>
    { 
    if (this.canBeUsed === true)
        {
    console.log(`${this.name} is used.`);
        } 
        else
        {
    console.log(`${this.name} is not a usable item.`);
        }
    }
}

const testItem = new Item("Item of Testing", "If you are seeing this, I messed up somewhere.", 0, 0, true)

//Notes: the function shows up but doesn't work. Add Discard, Buy, Sell

class Monster
{
    constructor(name, health, skill1, skill2, pAttack, pDefense, mAtk, mDef, evade, spDrop, itemDrop, goldDrop)
    {
        this.name = name,
        this.health = health,
        this.skill1 = skill1,
        this.skill2 = skill2,
        this.pattack = pAttack,
        this.pdefense = pDefense,
        this.matk = mAtk,
        this.mdef = mDef,
        this.evade = evade,
        this.spdrop = spDrop,
        this.itemdrop = itemDrop,
        this.golddrop = goldDrop
    }
}

const testMonster = new Monster("Monster of The Seven Tests", 50, 10, 10, 10, 10, 10, 10, 10, 2, false, 5)


//-----------------------------------------------------------------------------------
//Character Object
let char = 
{
    name: "",
    level: 1,
    hp: 100,
    mp: 100,
    str: 10,
    dex: 10,
    vit: 10,
    spt: 10,
    wil: 10,
    skillPoints: 0,
    skills: [],

    physAtk: 10,
    physDef: 10,
    mageAtk: 10,
    mageDef: 10,
    evasion: 10,

    equipd: [testSword],
    bag: [testItem],
    gold: 0,
}

//-----------------------------------------------------------------------------------
//LEVEL UP FUNCTIONS
let newHP = char.vit / 3 * 10 + char.hp
let newMP = char.spt / 3 * 10 + char.mp

let skillPointstoLevel = 2 * char.level

const checkLevel = () =>
{
    if(char.level === 10)
    {
        console.log("You have reached the max level.");
    }
    else 
    {
        levelUp();
    }
}

    const levelUp = () => 
{
    if(char.skillPoints === skillPointstoLevel){
    
    char.level++;
    char.hp = Math.round(newHP)
    char.mp = Math.round(newMP)
    console.log(`You've gained a level! You are now Level ${char.level}.`)
    }
}

//-----------------------------------------------------------------------------------
//Spend Skill Points

//Buy Skill

//Reset Skills w/o Deleveling?


//-----------------------------------------------------------------------------------
//Inventory Functions
let inventory =  char.inventory
//Inventory Full


//-----------------------------------------------------------------------------------
//


