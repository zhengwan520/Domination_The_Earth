PlayerEvents.tick(event =>{
    let player = event.player;
    let health = player.health;
    let maxHealth = player.maxHealth;
    let head = player.headArmorItem;
    let chestplate = player.chestArmorItem;
    let leggings = player.legsArmorItem;
    let boots = player.feetArmorItem;
    let mainHandItem = player.mainHandItem;//获取玩家生命值、装备栏和主手物品等
    let attacker = player.lastAttacker;//获取攻击玩家的对象
    if(head.id =='minecraft:iron_helmet'&&chestplate.id =='minecraft:iron_chestplate'&&leggings.id =='minecraft:iron_leggings'&&boots.id =='minecraft:iron_boots')
    {
        player.potionEffects.add('amethyst_imbuement:bone_armor',15,0);//穿全套铁甲给予骨甲药水效果
    }
    if(head.id =='minecraft:golden_helmet'&&chestplate.id =='minecraft:golden_chestplate'&&leggings.id =='minecraft:golden_leggings'&&boots.id =='minecraft:golden_boots')
    {
        player.potionEffects.add('minecraft:luck',15,0);//穿着全套金甲时幸运加1
        player.potionEffects.add('minecraft:haste',15,1);//穿着全套金甲时急迫II
        player.potionEffects.add('fruitsdelight:suspicious_smell',15,0);//穿着全套金甲时获得嗅觉 
    }
    if(head.id =='minecraft:diamond_helmet'&&chestplate.id =='minecraft:diamond_chestplate'&&leggings.id =='minecraft:diamond_leggings'&&boots.id =='minecraft:diamond_boots')
    {
        player.potionEffects.add('minecraft:absorption',30,0);
        player.potionEffects.add('amethyst_imbuement:spectral_vision',10,0);//穿钻套给予伤害吸收和灵视
    }
    if(head.id =='iceandfire:armor_silver_metal_helmet'&&chestplate.id =='iceandfire:armor_silver_metal_chestplate'&&leggings.id =='iceandfire:armor_silver_metal_leggings'&&boots.id =='iceandfire:armor_silver_metal_boots')
    {
        if(!player.potionEffects.isActive('minecraft:regeneration'))
        player.potionEffects.add('minecraft:regeneration',65,0);//穿银套给生命恢复2 
    }
})