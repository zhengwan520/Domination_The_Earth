ItemEvents.armorTierRegistry(e => {
	e.add('defense', tier => {
		tier.durabilityMultiplier = 128 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [8, 10, 12, 8] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.toughness = 3 // 韧性
		tier.knockbackResistance = 0.75  // 防击退,钻石0.3,同时代表着每件各0.3(30%)
		tier.enchantmentValue = 15  // 附魔等级
		tier.repairIngredient = '#kubejs:halberd'  // 修复材料(填写#Tag)
		tier.equipSound = 'minecraft:item.armor.equip_iron'  // 穿戴音效
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层 
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	// 织魔套
	Item('defense_helmet', 'helmet', 'legendary', 'defense', false)
	Item('defense_chestplate', 'chestplate', 'legendary', 'defense', false)
	Item('defense_leggings', 'leggings', 'legendary', 'defense', false)
	Item('defense_boots', 'boots', 'legendary', 'defense', false)
})


ItemEvents.armorTierRegistry(e => {
	e.add('arcane', tier => {
		tier.durabilityMultiplier = 48 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [4, 7, 9, 4] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.toughness = 2.5 // 韧性
		tier.knockbackResistance = 0.5  // 防击退,钻石0.3,同时代表着每件各0.3(30%)
		tier.enchantmentValue = 10  // 附魔等级
		tier.repairIngredient = '#kubejs:halberd'  // 修复材料(填写#Tag)
		tier.equipSound = 'minecraft:item.armor.equip_iron'  // 穿戴音效
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层 
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	// 奥术套
	Item('arcane_helmet', 'helmet', 'legendary', 'arcane', false)
	Item('arcane_chestplate', 'chestplate', 'legendary', 'arcane', false)
	Item('arcane_leggings', 'leggings', 'legendary', 'arcane', false)
	Item('arcane_boots', 'boots', 'legendary', 'arcane', false)
})

