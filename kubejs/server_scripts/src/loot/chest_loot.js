LootJS.modifiers((event) => {
    event
    .addLootTableModifier('minecraft:chests/end_city_treasure')//末地城箱子添加物品
    .randomChance(0.1)//概率
    .addLoot('skilltree:amnesia_scroll');
});