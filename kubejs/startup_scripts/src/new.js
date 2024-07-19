// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	
event.create('copper_coin').displayName('铜硬币').tooltip('Acquired through quests').rarity('Uncommon')
event.create('iron_coin').displayName('铁硬币').tooltip('Acquired through quests').rarity('Uncommon')
event.create('gold_coin').displayName('金硬币').tooltip('Acquired through quests').rarity('Rare')
event.create('diamond_coin').displayName('钻石硬币').tooltip('Acquired through quests').rarity('Epic')
event.create('netherite_coin').displayName('恶魔硬币').tooltip('Acquired through quests').rarity('Epic')
event.create('monster_coin').displayName('奖励硬币')
event.create('nether_coin').displayName('下界硬币').tooltip('Acquired through completing Nether chapter quests').rarity('Uncommon')

event.create('halberd').displayName('地球锭').tooltip('来自地球深处的神秘宝石')


event.create('medal').displayName('创世合金锭').glow(true)
event.create('heart').displayName('星陨锭')

event.create('fox').displayName('日耀天焚锭')
event.create('kruscle').displayName('艾斯塔尔丙酸锡')
event.create('plua').displayName('淫欲雾合金锭')
event.create('crankonator').displayName('泽普罗达锭')
event.create('lexileexx').displayName('传说级兑换券')
event.create('glowing_ingot').displayName('闪耀光明锭')
event.create('glowing_gem').displayName('闪耀光明宝石')
event.create('glowing_powder').displayName('闪耀光明粉')
event.create('bezoar').displayName('鸡胆宝')
event.create('mana_crystal').displayName('璀璨水晶')
event.create('end_coin').displayName('末地硬币')
event.create('trinket_apple_bordered').displayName('禁果').tooltip('传说出尸壳的恶魔心').rarity('Rare')
event.create('trinket_ankh_charm').displayName('安可护符').tooltip('传说出九头蛇的恶魔心').rarity('Epic')
event.create('teddy_bear_rembos').displayName('泰迪熊').tooltip('传说出自棕熊的恶魔心').rarity('Rare')
event.create('vitamins').displayName('维生素').tooltip('传说出自远古守卫者的恶魔心').rarity('Rare')
/*event.create('ring_of_the_elves').displayName('精灵之戒').tooltip('传说出自精灵王的恶魔心').rarity('Epic').maxStackSize(1)*/
event.create('ring_of_the_goblins').displayName('哥布林之戒').tooltip('传说出自哥布林的恶魔心').rarity('Epic')
event.create('ring_of_the_titans').displayName('泰坦之戒').tooltip('传说出自远古巨人的恶魔心').rarity('Epic')
event.create('ring_overclocking').displayName('超频戒指').tooltip('传说出自流髑的恶魔心').rarity('Rare')
event.create('ring_of_the_dragons').displayName('巨龙之戒').tooltip('传说出自远古龙族的恶魔心').rarity('Epic')
event.create('sea_stone_worn1').displayName('海洋之心').tooltip('传说出自利维坦的恶魔心').rarity('Epic')
event.create('shulker_heart').displayName('潜影贝之心').tooltip('传说出自潜影壳的恶魔心').rarity('Rare')
event.create('reach_chocolate').displayName('傲慢之罪').tooltip('传说来自远古七罪的傲慢').rarity('Rare')
event.create('air_chocolate').displayName('暴怒之罪').tooltip('传说来自远古七罪的暴怒').rarity('Rare')
event.create('flight_chocolate').displayName('嫉妒之罪').tooltip('传说来自远古七罪的嫉妒').rarity('Rare')
event.create('carrot_chocolate').displayName('贪婪之罪').tooltip('传说来自远古七罪的贪婪').rarity('Rare')
event.create('mending_chocolate').displayName('暴食之罪').tooltip('传说来自远古七罪的暴食').rarity('Rare')
event.create('mining_chocolate').displayName('怠惰之罪').tooltip('传说来自远古七罪的怠惰').rarity('Rare')
event.create('infinite_bauble_chocolate').displayName('色欲之罪').tooltip('传说来自远古七罪的色欲').rarity('Rare')

event.create('arrogant').displayName('巫妖的认可').rarity('legendary')
event.create('eating').displayName('冰雪女王的认可').rarity('legendary')
event.create('envy').displayName('九头蛇的认可').rarity('legendary')
event.create('desire').displayName('暮初恶魂的认可').rarity('legendary')
event.create('laziness').displayName('幻影骑士的认可').rarity('legendary')
event.create('greedy').displayName('娜迦的认可').rarity('legendary')
event.create('cat').displayName('八雲紫的认可').rarity('legendary')

event.create('abiding_alloy').displayName('粉末')
event.create('ash_ingots').displayName('灰烬锭')
event.create('dark_gold_bars').displayName('暗金锭')
event.create('starstream_phantom_bar').displayName('星流幻灵锭')
event.create('jungle_bars').displayName('丛林锭')
event.create('holy_ingots').displayName('神圣锭')
event.create('starlight_mythril').displayName('生灵锭')

event.create('elven_dust').displayName('精灵尘')
event.create('deep_sea_precipitation').displayName('深海沉淀')
event.create('mystic_dust').displayName('神秘尘')
event.create('ghost_dust').displayName('幽灵尘')
event.create('zhu_chen').displayName('朱尘')

event.create('ao_shu').displayName('奥术铜锭')
event.create('chen_ni').displayName('沉溺锭')
event.create('mo_shu').displayName('魔术锭')
event.create('wei_yang').displayName('微阳锭')
event.create('wu_ran').displayName('污染锭')
})


Platform.mods.kubejs.name = 'Plant Tech Mod'


