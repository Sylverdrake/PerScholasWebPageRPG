Text Adventure RPG
KISS -> KEEP IT SUPER SIMPLE
Game must have:
Buttons
Flexbox
Reset/Lose/Win
Responsive mobile design

Layer it like a cake, have solid foundations scripts

How does it Look?
Sidebar for Current Location & Player Info: Name, Class, Level | Tabs for: HP/MP,  Stats, Skills
Main Screen for display of text and interact with the world
2nd Sidebar for Quest Log, Tabs for Inventory, Equipped Items

How does it Play?
WIN CONDITION: COMPLETE THE ADVENTURE (DEFEAT THE FINAL BOSS)

Primary STATS: Level, HP, MP, STR, DEX, VIT, SPT, WIL | SKILL POINTS given instead of XP
Secondary STATS: Physical ATK/DEF, Magic ATK/DEF, Evasion 

Level increases every X skill points, difficulty increases exponentially f(x) = 2x. Max Level is 10
Skill points can be spent on new abilities

IF HP HITS 0, YOU LOSE | HP increases every level + 1/2 currentVit. Replenished with Rest, Skills, Items

MP is used for skills | MP increases every level + 1/2 currentSpirit. Replenished with Rest, Skills, Items

Strength (STR) is used to calculate physical atk/def and resolve situations that require strength (str greater than or equal to random number between x and y, larger difficulty, larger #s)

Dexterity (DEX) is used to calculate physical atk and evasion and resolve situations that require movement/precision (dex greater than or equal to random number between x and y, larger difficulty, larger #s)

Vitality (VIT) is used to calculate HP and resolve situations that require resisting physical status effects (vit greater than or equal to random number between x and y, larger difficulty, larger #s)

Spirit (SPT) is used to calculate MP and resolve situations that require resisting magical status effects (spirit greater than or equal to random number between x and y, larger difficulty, larger #s)

Will (WIL) is used to calculate defense and resolve situdations that require resisting mental status effects (Will greater than or equal to random number between x and y, larger difficulty, larger #s)

Physical Stats increased by equipment, skills, and levels
Magical Stats increased by equipment, skills, and levels
Evasion Stat increased by equipment, skills

Inventory - 
Gold is accumulated during adventure, used to buy things, does not take up an inventory slot
Items stored in slots until used (if consumable), sold, or discarded (gotta figure out how to do this)

Equipment: Weapon, Shield, Armor, Accessory1, Accessory2
Weapon - 1/2hand - increases attack stats, has effects
Shield - increases defense stats, has effects
Armor - increases defense stats, has effects
Accessory1 - increases some stats, has effects
Accessory2 - increases some stats, has effects

Need shop system, shop button accessible in towns?
Buying items removes item from shop, places item in inventory, removes gold
Monsters drop loot and gold, RANDOM NUMBERS!!!!

Skills 
Bought with Skill Points, which are given from bosses and sidequests
Buy Passive Skills, which increase stats, or random chance to do a thing
Buy Active Skills which can be used to do a thing
Reset skills, remove all skills, reimburse skill points

---GAMEPLAY PLAN---

Choose your name, and insert that into the starting prompt. 
Use Buttons to move around world
Use Text for some prompts??

Player creates character and is tasked with defeating the Final Boss.
Player starts in Location. Buttons can be used to access different scenes, and can talk with different NPCs.
NPCs will give Quests, which will be added to 'Quest Log'
Completion of Quests grants money and Skill Points when the goal is met.
Player does this until they reach the location to defeat the Final Boss
Defeating Final Boss wins the game
if HP hits 0 at any time, you lose, and must restart (or restart from a save point if I can figure that out)


//Extras
// !!! = Want to have | !! = Like to have | ! = Cool to have
//!!!Save Game
//!!!Sprites
//!!!More Skills
//!!!More Enemies
//!!More Equipment
//!!More Quests
//!!Bosses
//!!Post Game!
//!!Better Level up System
//!!Music!

//!!!Town

//Town needs a name, a shop location, an Inn, and 3 NPCs to talk to
//Town Name: Port Scholas
//Shop Name: Stuff and Things - Guy Holdings 
//Inn Name: Rest and Such - Sleep King
//NPC 1: Distressed Man 
    //- Gives Sidequest 'Find McGuffin!` - Player is tasked with going to Overworld Location 2 and looking for something called a McGuffin.
    // McGuffin is an item that will drop from Overworld Location 2 
