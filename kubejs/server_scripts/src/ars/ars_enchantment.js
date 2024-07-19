ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchantment(//附魔装置
            [
                "minecraft:amethyst_block",
                "minecraft:redstone_block",
                "ars_nouveau:source_gem_block",
                "minecraft:emerald_block",
                "minecraft:iron_block",
                "minecraft:gold_block",
                "fruitsdelight:bellini_cocktail",
                "minecraft:crying_obsidian",
            ], // 输入物品
        "x_enchantment:increment_attack_damage", 
        1,// 潜龙在渊
        1000, //魔源消耗
        // false // 是否保持nbt，就像锻造台那样
    );
})

