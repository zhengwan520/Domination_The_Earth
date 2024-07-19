/*LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.ENTITY)
        .weatherCheck({
            raining: true,
        })
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 2);
            return itemStack;
        });
});*/

ServerEvents.entityLootTables((event) => {
    event.modifyEntity('mowziesmobs:wroughtnaut',Loot =>{
        Loot.addPool(pool =>{
            pool.killedByPlayer()
            pool.addItem('enigmaticlegacy:golem_heart')
            .weight(100)
            .count([1,1])
        })
    })
})

ServerEvents.entityLootTables((event) => {
    event.modifyEntity('twilightforest:snow_queen',Loot =>{
        Loot.addPool(pool =>{
            pool.killedByPlayer()
            pool.addItem('enigmaticaddons:forgotten_ice')
            .weight(100)
            .count([1,1])
        })
    })
})

ServerEvents.entityLootTables((event) => {
    event.modifyEntity('mokels_rpg_two:blessingsun',Loot =>{
        Loot.addPool(pool =>{
            pool.killedByPlayer()
            pool.addItem('enigmaticlegacy:angel_blessing')
            .weight(100)
            .count([1,1])
        })
    })
})

ServerEvents.entityLootTables((event) => {
    event.modifyEntity('cataclysm:ender_guardian',Loot =>{
        Loot.addPool(pool =>{
            pool.killedByPlayer()
            pool.addItem('enigmaticlegacy:void_pearl')
            .weight(100)
            .count([1,1])
        })
    })
})