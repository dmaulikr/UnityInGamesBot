module.exports = {info};

function info(message, msgl, cmd) {

    if (cmd == "glossary") {
        message.reply("Thanks to HandheldBrando for this data!\n(Art of Battle, Bleed, Block, Chain/Combo, Chain/Combo finisher, Counter Guardbreak, Dash/Dodge, Dash/Dodge attacks, Deflect, Displacement, Exhausted/Exhaustion, Feints/Cancels, Guard Stance, Guardbreak, Guardbreak throw, Heavy attack, Light attack, Perfect Defence, Unblockable, Uninterruptible status, Hyper Armour, Super Armour, Dazed, Wall Stun, Superior Block, Chip damage/block damage, Command Grab, Poke, Safe, Punish, Priority, Reading, Recovery, Neutral, Neutral stance, Whiff, Zoning, Tracking, Weapon effects)")
    }
    if (cmd == "info") {
        if (msgl == "art of battle") {
            message.channel.sendMessage("**Art of Battle:**\nThe combat system unique to For Honor. It incorporates 3 stances to both attack and defends on.");
            return;
        }
        if (msgl == "bleed") {
            message.channel.sendMessage("**Bleed:**\nDamage over time effect.");
            return;
        }
        if (msgl == "block") {
            message.channel.sendMessage("**Block:**\nTo prevent your enemy from successfully hitting you.\nBlocking a light attack will stop a chain/combo (Aka Superior Block)\nBlocking a heavy attack will not stop the enemy from chain/combo attacks (unless the hero possesses Superior Block) and will also result in a very small amount of block damage/chip damage.");
            return;
        }
        if (msgl == "Chain/Combo") {
            message.channel.sendMessage("**Chain/Combo:**\nAttacks that link directly into other attacks and allow you to perform unique attacks or abilities when done in a specific order.");
            return;
        }
        if (msgl == "Chain/Combo finisher") {
            message.channel.sendMessage("**Chain/Combo finisher:**\nAttacks that usually end a chain/combo. Some combo/chain finishers will do extra damage.");
            return;
        }
        if (msgl == "Counter Guardbreak") {
            message.channel.sendMessage("**Counter Guardbreak:**\nUsing your own guard break to prevent the enemy from guard breaking you. This is done by pressing the guard breaks within a specific window during the enemies guard break animation.");
            return;
        }
        if (msgl == "dash" || msgl == "dodge" || msgl == "dash/dodge") {
            message.channel.sendMessage("**Dash/Dodge:**\nTo evade an attack or to lunge in a direction.\nUsually done to avoid an attack or to close the gap between you and your opponent.");
            return;
        }
        if (msgl == "dash attack" || msgl == "dodge attack" || msgl == "dash/dodge attack") {
            message.channel.sendMessage("**Dash/Dodge attacks:**\nAttacks that are initiated when dashing/dodging (I.E Orochi dashing side attacks or Kensei dashing forward light attack)");
            return;
        }
        if (msgl == "deflect") {
            message.channel.sendMessage("**Deflect:**\nDeflect is a unique mechanic given to the Assassin heroes which allows them to prevent damage from an enemy attack and retaliate in some way. Each deflect follow up is unique to the character performing it.\nThis is done by dashing/dodging into an attack at the same time you would parry an attack. You do not need your guard in the same direction as an attack to successfully deflect.");
            return;
        }
        if (msgl == "displacement") {
            message.channel.sendMessage("**Displacement:**\nAn attack or ability which repositions the enemy character or creates space between you and your opponent.");
            return;
        }
        if (msgl == "guard stance") {
            message.channel.sendMessage("**Guard Stance:**\nEvery character (except assassins) have a static guard stance which is done by locking onto the opponent. In the guard stance, you have 3 different stances (top stance, left stance and right stance). You use these 3 stances to determine which side you will block and attack on.\n\nExample, If an opponent attacks your left side then you will want to be in the left stance to block them. If your opponents stance is in the top stance then you want to attack him on the left or right stance.\nAssassins are different, they have a Neutral stance because they do not have a static block and can only block for short durations. After that duration, they go back to a neutral stance.");
            return;
        }
        if (msgl == "exhausted" || msgl == "exhaustion" || msgl == "exhausted/exhaustion") {
            message.channel.sendMessage("**Exhausted/Exhaustion:**\nWhen you run out of stamina.");
            return;
        }
        if (msgl == "feints" || msgl == "cancels" || msgl == "feints/cancels" || msgl == "feint" || msgl == "cancel") {
            message.channel.sendMessage("**Feints/Cancels:**\nFeints: Feints are done by pressing the Feint button and this is characterized by outright canceling the attack and going back into a neutral stance.\nCancels: This is where things get tricky. A cancel is a feint except it does not require you to press the feint button and instead, it will always lead to a specific action afterward (I.E Raider heavy attack then pressing the light attack button to cancel into Pommel strike). ");
            return;
        }
        if (msgl == "guardbreak") {
            message.channel.sendMessage("**GuardBreak:**\nThe act of grabbing your opponent and temporarily disabling his defences.");
            return;
        }
        if (msgl == "guardbreak throw") {
            message.channel.sendMessage("**GuardBreak throw:**\nGuardBreak throws are initiated by successfully landing a GuardBreak and then pressing the GuardBreak button again while pressing one of the movement directions to throw your opponent in that direction (this can lead to Wall stuns/Environmental kills).");
            return;
        }
        if (msgl == "heavy attack") {
            message.channel.sendMessage("**Heavy attack:**\nHard hitting but slow attacks. If blocked staggers the opponent (unless they possess Superior Block) and allows you to continue your chain");
            return;
        }
        if (msgl == "light attack") {
            message.channel.sendMessage("**Light attack:**\nAttacks that are meant to be quick and do small amounts of damage but if it is blocked then you are staggered briefly and can no longer continue a chain.");
            return;
        }
        if (msgl == "perfect defence" || msgl == "perfect defense") {
            message.channel.sendMessage("**Perfect Defence:** Omni-directional block (blocking all sides simultaneously) that constantly drains Stamina while preventing the user from counter guard breaking. Unique to Conqueror and Warlord.");
            return;
        }
        if (msgl == "unblockable") {
            message.channel.sendMessage("**Unblockable:**\nVery powerful attacks that are usually very slow.They cannot be blocked through normal means and must be parried or dodged. Some abilities also have the unblockable status (I.E Raider sprinting grab/Warden Shoulder charge) and these abilities have to be dodged as there is no way to block abilities.");
            return;
        }
        if (msgl == "Uninterruptible status" || msgl == "uninterruptible") {
            message.channel.sendMessage("**Uninterruptible status:**\nThis has 2 subtypes. Hyper armor and Super armor. Uninterruptible does not mean you do not take damage it only means your animation cannot be interrupted by attacks.");
            return;
        }
        if (msgl == "hyper armour" || msgl == "hyper armor") {
            message.channel.sendMessage("**Hyper Armor:**\nCan withstand multiple hits without being interrupted (I.E Kensei would have hyper armor on a side heavy chain finisher). There are exceptions to this rule as some specific attacks and abilities will forcibly bypass uninterruptible status(I.E Orochi Storm Rush/Raider sprinting grab/Warden shoulder Charge)");
            return;
        }
        if (msgl == "super armour" || msgl == "super armor") {
            message.channel.sendMessage("**Super Armor:**\nCan only withstand 1 attack without being interrupted (I.E Shugoki has passive super armor and loses it on being hit).");
            return;
        }
        if (msgl == "dazed" || msgl == "daze") {
            message.channel.sendMessage("**Dazed:**\nAttacks and abilities that cause the dazed status cause your screen to flash white and they temporarily lose your HUD which makes it more difficult to block a follow-up attack.");
            return;
        }
        if (msgl == "wall stun") {
            message.channel.sendMessage("**Wall Stun:**\nThis effect requires you to throw an opponent into a wall using the GuardBreak throw ability (or other specific abilities). The Wall Stun temporarily staggers your opponent against the wall for a long period of time. Usually enough for someone to capitalize with a powerful attack. ");
            return;
        }
        if (msgl == "superior") {
            message.channel.sendMessage("**Superior Block:**\nYour character's block stops all attacks from being able to chain into other attacks. This will not block unblockable attacks.");
            return;
        }
        if (msgl == "chip damage" || msgl == "block damage" || msgl == "chip damage/block damage") {
            message.channel.sendMessage("**Chip Damage/block damage:**\nDamage you take when you block a heavy attack.");
            return;
        }
        if (msgl == "command grab") {
            message.channel.sendMessage("**Command Grab:**\nA command a player can input with certain characters that moves/damages another player without them being able to defend against or react if hit. These moves are usually unblockable.");
            return;
        }
        if (msgl == "poke") {
            message.channel.sendMessage("**Poke:** A generally quick attack that's used at your character's maximum range too; Create distance between two players; Stuff an opponent's current attack (Or counter poke); or deal \"Safe\" damage");
            return;
        }
        if (msgl == "safe") {
            message.channel.sendMessage("**Safe:** Attacks that are considered safe usually don't have long recovery times, meaning you can take actions very soon after the animation completes. Attacks that are \"Unsafe\" usually have long recovery times and leave you very open to attacks.");
            return;
        }
        if (msgl == "punish") {
            message.channel.sendMessage("**Punish:**\nAttacking an opponent who is in a recovery animation from performing an attack or whiffing an attack.");
            return;
        }
        if (msgl == "priority" || msgl == "priority low" || msgl == "priority medium" || msgl == "piority high" || msgl == "priority(high/medium/low)") {
            message.channel.sendMessage("**Priority(High/Medium/Low):**\nAttacks that can outright beat other attacks or actions being performed by another character. Example: A character who's in the middle of a light attack will always take priority over a character trying to guard break.");
            return;
        }
        if (msgl == "read" || msgl == "reading") {
            message.channel.sendMessage("**Read/Reading:**\nReading is when you understand your opponent's playstyle and patterns so you're better able to guess their next move, and counter it.");
            return;
        }
        if (msgl == "recovery") {
            message.channel.sendMessage("**Recovery:**\nThe time it takes for you to recover from the animation so you can take another.");
            return;
        }
        if (msgl == "neutral") {
            message.channel.sendMessage("**Neutral:**\nThe part of a fight in which no one fighter is taking definitive actions against the other. It's generally referred to as \"feeling out\" the fight.");
            return;
        }
        if (msgl == "neutral stance") {
            message.channel.sendMessage("**Neutral stance:**\nThis is unique to assassin heroes and is the stance they ");
            return;
        }
        if (msgl == "whiff") {
            message.channel.sendMessage("**Whiff:**\nA move that misses completely. Can be intentional to bait an opponent into a chain that doesn't require a hit.");
            return;
        }
        if (msgl == "zoning") {
            message.channel.sendMessage("**Zoning:**\nA tactic, usually used by characters with weapons with more range than their opponents to keep them at bay, and also to take higher priority with their attacks. Example: A Kensei keeping distance from a Warden by Poking, and using his range to his advantage.");
            return;
        }
        if (msgl == "tracking") {
            message.channel.sendMessage("**Tracking:** Attacks that \"follow\" the opponents movement. Attacks with tracking must be dodged at the correct time otherwise, they will still hit you.\nExample: Orochi's Hurricane Blast will track and move along with opponents, making it harder to side-step, or back away from.");
            return;
        }
        if (msgl == "weapon effects") {
            message.channel.sendMessage("**Weapon effects:**\nThese are colors used to indicate what each attack does or can do.\n\n**Blue** means the attack can be chained into another attack\n**Yellow** means the attack is a counter attack or has the block property (I.E Crushing counter or Warlord counter light attacks)\n**Orange and fiery** means the attack or ability is unblockable.\n**Purple** means that the attack will apply the bleed effect.");
            return;
        }
        if (["peacekeeper", "peacekeepers", "class peacekeeper", "class peacekeepers"].includes(msgl)) {
            message.channel.sendMessage("__**Peacekeeper**__\n**Difficulty**: Medium\n**Fighting Style** Counter Attacker\nShort Range, High Mobility\nVery fast attacks. Use dagger to cancel or confirm attacks into bleed damage and a deflect ability");
            return;
        }
        if (["conqueror", "conquerors", "class conqueror", "class conquerors"].includes(msgl)) {
            message.channel.sendMessage("__**Conqueror**__\n**Difficulty**: Medium\n**Fighting Style** Defensive\nAuto Blocking Defense Mode\nInterrupts attacks with standard block. Highly effective defensive mode and unblockable shield based attacks.");
            return;
        }
        if (["warden", "wardens", "class warden", "class wardens"].includes(msgl)) {
            message.channel.sendMessage("__**Warden**__\n**Difficulty**: Easy\n**Fighting Style** Adaptable\nStraight Forward Strategy\nUnblockable shoulder bash attacks and strong interruption abilities and throws.");
            return;
        }

        if (["orochi", "orochies", "class orochi", "class orochies"].includes(msgl)) {
            message.channel.sendMessage("__**Orochi**__\n**Difficulty**: Hard\n**Fighting Style** Assassin\nCounter Attacker\nVery fast light attacks. Can dodge into faster attacks and has deflect abilities");
            return;
        }
        if (["shugoki", "shugokis", "class shugoki", "class shugokis"].includes(msgl)) {
            message.channel.sendMessage("__**Shugoki**__\n**Difficulty**: Easy\n**Fighting Style** Disabler\nHard Hitter\nPassive uninterruptible stance. Charging heavy attacks and light attacks can't be interrupted");
            return;
        }
        if (["kensei", "kenseis", "class kensei", "class kenseis"].includes(msgl)) {
            message.channel.sendMessage("__**Kensei**__\n**Difficulty**: Medium\n**Fighting Style** Adaptable\nGood Melee Range\nHigh heavy attacks are unblockable. Has many maneuvers and attacks initate chain attacks.");
            return;
        }

        if (["berserker", "berserkers", "class berserker", "class berserkers"].includes(msgl)) {
            message.channel.sendMessage("__**Berserker**__\n**Difficulty**: Hard\n**Fighting Style** Harasser\nShort Ranged Fast Attacks\nSome attacks can hit multiple targets in a row. Charging attacks to harass opponents and a deflect ability.");
            return;
        }
        if (["warlord", "warlords", "class warlord", "class warlords"].includes(msgl)) {
            message.channel.sendMessage("__**Warlord**__\n**Difficulty**: Medium\n**Fighting Style** Counter Attacker\nShort Range\nDefensive properties on light and heavy attacks. A defensive mode and an unblockable headbutt.");
            return;
        }
        if (["raider", "raiders", "class raider", "class raiders"].includes(msgl)) {
            message.channel.sendMessage("__**Raider**__\n**Difficulty**: Easy\n**Fighting Style** Disabling\nHigh Damage Attacks\nRaider has unblockable zone attacks that it can use in all chain attacks. Stun attacks and throws. Strong, versatile throw attacks");
            return;
        }
        if (["lawbringer", "lawbringers", "class lawbringer", "class lawbringers"].includes(msgl)) {
            message.channel.sendMessage("__**Lawbringer**__\n**Difficulty**: Hard\n**Fighting Style** Counter Attacker\nGood At Disabling Enemies\nLawbringers attacks can stun, he keeps enemies off balance.");
            return;
        }
        if (["nobushi", "nobushis", "class nobushi", "class nobushis"].includes(msgl)) {
            message.channel.sendMessage("__**Raider**__\n**Difficulty**: Hard\n**Fighting Style** Zone Control\nLongest Attack Range\nNobushi has the capability to revive allies swiftly and many other support feats.\n");
            return;
        }
        if (["valkyrie", "valkyries", "class valkyrie", "class valkyries"].includes(msgl)) {
            message.channel.sendMessage("__**Raider**__\n**Difficulty**: Medium\n**Fighting Style** Keeps Enemies At Bay\nComplex combos\nValkyrie is excellent at takedowns and can use their shield to attack.");
            return;
        }

        if (["change faction", "faction change"].includes(msgl)) {
            message.channel.sendMessage("You are able to change your faction allegiance at any time but doing so during a season will disqualify you from any rewards.");
            return;
        }
        if (["knights", "the knights", "faction knights"].includes(msgl)) {
            message.channel.sendMessage("Sent by the iron legions with the object to pacify the land. Knights have acquired the taste of freedom and made ashfeld their home. They believe that the ancient ruins covering their lands were build by the great empire, the precursor of the iron legion.\n\nDisorganized for centuries, ashfeld's knights have mostly been a collection of petty warlords and bands of roving mercenary knights. The last decade however, the knights have corralled under a single banner, ofter at sword point, by Ashfeld's Blackston Legion, led by Apollyon.\n\nSo far, the Knights have managed to defend ashfeld from viking and samurai attacks. Apollyon argues that a threat of war is imminent and tells stragglers that joining her legion is the only guarantee they will hold onto their landss.");
            return;
        }
        if (["samurai", "the samurai", "faction samurai"].includes(msgl)) {
            message.channel.sendMessage("Originally from a land far away across the seas, the samurai tell a tale of an Emperor and a homeland lost to sea and fire. Nearly a millennium later, the nomadic nation has ceased its wandering and build a new empire near the reclaimed homelands of the vikings and the contested lands of the knights.\n\nHaving spent the last decades acclimating to the marshy hills known as the Myre, they flourish but remain vastly outnumbered by their neighbors. They have to rely on greater marial skill, cunning, and devotion to their culture in order to survive... For they may be the last of their kind.");
            return;
        }
        if (["vikings", "the vikings", "faction vikings"].includes(msgl)) {
            message.channel.sendMessage("The vikings vanished centuries ago, fleeing their crumbling homelands for shores unknown. Those left behind were conquered by the knights and assimilated into their cultures.\n\nThe Vikings returned in great numbers a few centuries ago. They came from far across the sea to where they have established a new homeland. They returned for mayn reasons, but mostly to reclaim their ancient homeland in the north: Valkeinheim. Hundreds of viking clans now coexist in relative peace in the frozen tundra. To the outside observer, however, they seem to exist in a state of perpetual civil war.\n\nVikings are the undisputed masters of the sea and fresh water. When this raucous nation gathers together in massive armadas of dragon-headed ships, they are fearsome of behold and nigh unstoppable.");
            return;
        }
    }
}