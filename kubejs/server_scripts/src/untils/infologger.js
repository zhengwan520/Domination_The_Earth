ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(//附魔装置
            [
                'curseofpandora:spellbound_orb',
                'curseofpandora:mini_beacon_base',
                'l2hostility:dementor',
                'enigmaticlegacy:evil_ingot',
                'simplyswords:runefused_gem',
                'undergarden:forgotten_ingot',
                'botania:terrasteel_ingot',
                'amethyst_imbuement:sardonyx',
            ], // 输入物品
            "l2hostility:miracle_ingot", // 反应物
        'summoningrituals:altar', 
        8000, //魔源消耗
        // false // 是否保持nbt，就像锻造台那样
    );
})