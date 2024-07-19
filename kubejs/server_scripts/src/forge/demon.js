ServerEvents.recipes(event => {

    event.blasting('kubejs:holy_ingots','2x mythicmetals:hallowed_ingot')

    event.shaped(Item.of('enigmaticlegacy:evil_ingot',1), [
        'ABA',
        'DCD',
        'XBX'
    ],
    {
        A: 'minecraft:ghast_tear',
        B: 'amethyst_imbuement:garnet',
        C: 'minecraft:netherite_ingot',
        D: 'mythicmetals:kyber_ingot',
        X: 'enigmaticlegacy:evil_essence'

        
    })//极恶锭的合成

    event.shaped(Item.of('l2hostility:chaos_ingot',1), [
        'ABA',
        'DCE',
        'XFX'
    ],
    {
        A: 'enigmaticlegacy:evil_essence',
        B: 'l2complements:soul_flame',
        C: 'l2hostility:hostility_orb',
        D: 'l2complements:explosion_shard',
        E: 'l2complements:captured_wind',
        F: 'l2complements:hard_ice',
        X: 'l2hostility:bottle_of_curse'

    })//混沌锭的合成

    event.shaped(Item.of('enigmaticlegacy:infinimeal',1), [
        'ABC',
        'DEF',
        'GGG'
    ],
    {
        A: 'iceandfire:hydra_heart',
        B: 'iceandfire:siren_tear',
        C: 'iceandfire:hippocampus_fin',
        D: 'iceandfire:pixie_wings',
        E: 'enigmaticlegacy:twisted_heart',
        F: 'iceandfire:cockatrice_eye',
        G: 'curseofpandora:spellbound_orb'
    })//狂野生长精华的合成

    /*event.shaped(Item.of('kubejs:glowing_ingot',1), [
        'ACA',
        'DBD',
        'ACA'
    ],
    {
        A: 'minecraft:blaze_rod',
        B: 'l2complements:poseidite_ingot',
        C: 'minecraft:crying_obsidian',
        D: 'minecraft:end_crystal'
    })//闪耀锭的合成
    */


    event.shaped(Item.of('enigmaticlegacy:xp_scroll',1), [
        'BDB',
        'CAC',
        'BDB'
    ],
    {
        A: 'enigmaticlegacy:thicc_scroll',
        B: 'minecraft:experience_bottle',
        C: 'iceandfire:siren_tear',
        D: 'iceandfire:fire_dragon_blood'

    })//恒智慧卷轴的合成

    event.shaped(Item.of('curseofpandora:void_overflow',1), [
        'ABE',
        'CDC',
        'FGF'
    ],
    {
        A: 'l2hostility:corrosion',
        B: 'curseofpandora:shadow_fragment',
        C: 'l2hostility:ragnarok',
        F: 'l2complements:resonant_feather',
        E: 'l2hostility:growth',
        G: 'l2hostility:killer_aura',
        D: 'curseofpandora:plain_charm'

    })//虚空溢散的合成

    event.shaped(Item.of('minecraft:smithing_table',1), [
        'BDB',
        'CAC',
        '   '
    ],
    {
        A: 'minecraft:crafting_table',
        B: 'ars_nouveau:purple_archwood_log',
        C: 'minecraft:obsidian',
        D: 'minecraft:anvil'

    })//锻造台的合成

    event.shaped(Item.of('minecraft:enchanting_table',1), [
        ' A ',
        'BDB',
        'CCC'
    ],
    {
        A: 'minecraft:bookshelf',
        B: 'minecraft:diamond',
        C: 'minecraft:crying_obsidian',
        D: 'minecraft:lapis_block'

    })//附魔台的合成

    event.shaped(Item.of('kubejs:netherite_coin',1), [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'kubejs:diamond_coin',
        B: 'l2complements:eternium_block'
    })//神硬币的合成

    event.shaped(Item.of('sophisticatedbackpacks:xp_pump_upgrade',1), [
        'DAD',
        'BCB',
        'DAD'
    ],
    {
        A: 'fruitsdelight:hawberry_tea',
        B: 'xpbook:xp_tome',
        C: 'sophisticatedbackpacks:advanced_pump_upgrade',
        D: 'minecraft:ender_eye'

    })//经验泵升级背包插件合成


    event.shaped(Item.of('ars_nouveau:novice_spell_book',1), [
        'ABC',
        'DEF',
        'GGG'
    ],
    {
        A: 'minecraft:book',
        B: 'minecraft:iron_pickaxe',
        C: 'minecraft:iron_axe',
        D: 'minecraft:diamond',
        E: 'minecraft:white_glazed_terracotta',
        G: 'ars_elemental:yellow_archwood',
        F: 'minecraft:iron_sword'

    })//初学者魔法书的合成
    

    event.shaped(Item.of('iceandfire:dragonforge_fire_input',1), [
        'ABA',
        'B B',
        'ABA'
    ],
    {
        A: 'iceandfire:dragonforge_fire_brick',
        B: 'amethyst_imbuement:energetic_opal'

    })//龙炎煅炉孔的合成

    event.shaped(Item.of('iceandfire:dragonforge_ice_input',1), [
        'ABA',
        'B B',
        'ABA'
    ],
    {
        A: 'iceandfire:dragonforge_ice_brick',
        B: 'amethyst_imbuement:energetic_opal'

    })//龙霜煅炉孔的合成

    event.shaped(Item.of('iceandfire:dragonforge_lightning_input',1), [
        'ABA',
        'B B',
        'ABA'
    ],
    {
        A: 'iceandfire:dragonforge_lightning_brick',
        B: 'amethyst_imbuement:energetic_opal'

    })//龙霆煅炉孔的合成

    event.shaped(Item.of('iceandfire:ambrosia',1), [
        '   ',
        'ACB',
        '   '
    ],
    {
        A: 'minecraft:golden_carrot',
        B: 'iceandfire:pixie_dust',
        C: 'minecraft:bowl'

    })//神肴的合成


    event.shaped(Item.of('enigmaticlegacy:enchantment_transposer',1), [
        'ACA',
        'EBE',
        'DFD'
    ],
    {
        B: 'minecraft:book',
        F: 'minecraft:ender_pearl',
        D: 'minecraft:blaze_powder',
        E: 'minecraft:ender_pearl',
        C: 'twilightforest:naga_scale',
        A: 'minecraft:prismarine_crystals'
    })//添加求知之书配方 

    event.shaped(Item.of('minecraft:beacon',1), [
        'AAA',
        'BCB',
        'BBB'
    ],
    {
        A: 'minecraft:diamond',
        B: 'minecraft:crying_obsidian',
        C: 'minecraft:nether_star'

    })//信标的合成

    event.shaped(Item.of('l2complements:sculkium_ingot',1), [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        A: 'l2complements:warden_bone_shard',
        B: 'minecraft:echo_shard',
        C: 'minecraft:diamond',
        D: 'twilightforest:fiery_ingot',
        E: 'minecraft:blaze_rod',
        F: 'iceandfire:dragonsteel_fire_ingot',
        G: 'l2complements:poseidite_ingot',
        H: 'ars_nouveau:source_gem_block',
        I: 'minecraft:pufferfish'
    })//添加幽匿锭配方

    event.shaped(Item.of('l2archery:sculkium_arrow',16), [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        B: 'l2complements:sculkium_ingot',
        A: 'l2archery:starter_arrow'
    })//添加穿甲箭配方

    event.shaped(Item.of('l2complements:sculkium_nugget',9), [
        '   ',
        ' B ',
        '   '
    ],
    {
        B: 'l2complements:sculkium_ingot'
    })//添加配方



    event.shaped(Item.of('sophisticatedbackpacks:backpack',1), [
        'ACA',
        'BDB',
        'AEA'
    ],
    {
        A: 'minecraft:leather',
        B: 'minecraft:iron_ingot',
        D: 'ars_nouveau:archwood_chest',
        E: 'toolbelt:belt',
        C: 'minecraft:white_wool'

    })//精妙背包合成


    event.shaped(Item.of('ars_nouveau:apprentice_spell_book',1), [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        A: 'ars_nouveau:novice_spell_book',
        B: 'ars_nouveau:red_archwood_log',
        C: 'enigmaticlegacy:earth_heart',
        D: 'ars_nouveau:purple_archwood_log',
        E: 'ars_nouveau:blue_archwood_log',
        F: 'enigmaticlegacy:evil_ingot',
        G: 'twilightforest:lich_trophy',
        H: 'ars_nouveau:green_archwood_log',
        I: 'ars_elemental:yellow_archwood_log'

    })//添加法师的书配方

    event.shaped(Item.of('ars_nouveau:archmage_spell_book',1), [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        A: 'ars_nouveau:apprentice_spell_book',
        B: 'ars_nouveau:wilden_tribute',
        C: 'l2complements:sculkium_ingot',
        D: 'iceandfire:dragonsteel_fire_ingot',
        E: 'iceandfire:dragonsteel_lightning_ingot',
        F: 'iceandfire:dragonsteel_ice_ingot',
        G: 'enigmaticlegacy:twisted_heart',
        H: 'enigmaticlegacy:evil_ingot',
        I: 'iceandfire:siren_tear'

    })//添加大法师的书配方

})
