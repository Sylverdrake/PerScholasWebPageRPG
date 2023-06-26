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
class Weapon
{
    constructor(name, damage, attack, cost, sellval, onehand, twohand, equipped, canbeused)
    {
        this.name = name;
        this.damage = damage;
        this.attack = attack;
        this.cost = cost;
        this.sellval = sellval;
        this.onehand = onehand;
        this.twohand = twohand;
        this.equipped = equipped;
        this.canbeused = canbeused
    }
}

//----
//Melee Weapons
//----
const testsword = new Weapon("Sword of Testing", 5, 5, 0, 0, true, false, false, false)

//----
//Ranged Weapons
//----

//----
//Magic Weapons
//----


//-----------------------------------------------------------------------------------
class Equipable
{
    constructor(name, pdefense, mdefense, evade, effect, cost, sellval, equipped, canbeused)
    {
        this.name = name
        this.pdefense = pdefense;
        this.mdefense = mdefense;
        this.evade = evade;
        this.effect = effect;
        this.cost = cost;
        this.sellval = sellval;
        this.equipped = equipped;
        this.canbeused = canbeused
    }
}

//----
//Armor
//----

//----
//Accessories
//----

//Notes: 
//Equip Item
//Unequip Item

//-----------------------------------------------------------------------------------
class Item
{
    constructor(name, examine, cost, sellval, canbeused)
{
    this.name = name,
    this.examine = examine,
    this.cost = cost,
    this.sellval = sellval
    this.canbeused = canbeused
}
    useItem = () =>
    { 
    if (this.canbeused === true)
        {
    console.log(`${this.name} is used.`);
        } 
        else
        {
    console.log(`${this.name} is not a usable item.`);
        }
    }
}

const testitem = new Item("Item of Testing", "If you are seeing this, I messed up somewhere.", 0, 0, true)

//Notes: the function shows up but doesn't work. Add Discard, Buy, Sell


//-----------------------------------------------------------------------------------
//Character Object
let char = {
    name: "",
    level: 10,
    hp: 100,
    mp: 100,
    str: 10,
    dex: 10,
    vit: 10,
    spt: 10,
    wil: 10,
    skillPoints: 0,
    skills: [],

    equipd: [testsword],
    physAtk: 10,
    physDef: 10,
    mageAtk: 10,
    mageDef: 10,
    evasion: 10,

    bag: ["stuff"],
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

//Inventory Full


//-----------------------------------------------------------------------------------
//Tests
// console.log(char);


