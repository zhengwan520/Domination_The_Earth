const bossDrops = [
    { entity: "twilightforest:naga", loot: "kubejs:greedy", name: "娜迦的认可" },
    { entity: "twilightforest:knight_phantom", loot: "kubejs:laziness", name: "幻影骑士的认可" },
    { entity: "twilightforest:snow_queen", loot: "kubejs:eating", name: "冰雪女王的认可" },
    { entity: "twilightforest:ur_ghast", loot: "kubejs:desire", name: "暮初恶魂的认可" },
    { entity: "twilightforest:hydra", loot: "kubejs:envy", name: "九头蛇的认可" },
    { entity: "twilightforest:lich", loot: "kubejs:arrogant", name: "巫妖的认可" },
    { entity: "youkaishomecoming:youkai", loot: "kubejs:cat", name: "八云紫的认可" },
    { entity: "mowziesmobs:ferrous_wroughtnaut", loot: "paraglider:stamina_vessel", name: "耐力容器" }
];

LootJS.modifiers((event) => {
    bossDrops.forEach(boss => {
        let modifier = event.addEntityLootModifier(boss.entity);
        
        if (boss.entity !== "sons_of_sins:curse" && boss.entity !== "mowziesmobs:ferrous_wroughtnaut") {
            modifier.weatherCheck({ raining: true });
        }
        
        modifier.randomChance(boss.chance || 1.0)
                .addLoot(boss.loot);

        console.log(`为 ${boss.entity} 添加了 ${boss.name} (${boss.loot}) 的掉落`);
    });
});