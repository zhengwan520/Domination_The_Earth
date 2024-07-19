ServerEvents.recipes(event => {

    event.shaped(Item.of('kubejs:mending_chocolate',1),[
    'BBB',
    'BIB',
    'BBB'
    ],
    {
        B: 'minecraft:gold_ingot',
        I: 'l2hostility:curse_of_envy'
    
    }).keepIngredient('l2hostility:curse_of_envy')//保留嫉妒诅咒
        //暴食之罪的合成
})
ServerEvents.recipes(event => {

    event.shaped(Item.of('kubejs:flight_chocolate',1),[
    'BBB',
    'BIB',
    'BBB'
    ],
    {
    B: 'l2complements:totemic_gold_nugget',
    I: 'l2hostility:chaos_ingot'
            
    })
        //嫉妒之罪的合成
})

ServerEvents.recipes(event => {

    event.shaped(Item.of('kubejs:infinite_bauble_chocolate',1),[
    'BBB',
    'BIB',
    'BBB'
    ],
    {
        B: 'l2hostility:bottle_of_curse',
        I: 'l2hostility:curse_of_gluttony'
    
    }).keepIngredient('l2hostility:curse_of_gluttony')//保留暴食诅咒
        //色欲之罪的合成
})

ServerEvents.recipes(event => {

    event.shaped(Item.of('kubejs:carrot_chocolate',1),[
    'ABC',
    'DID',
    'EFE'
    ],
    {
        A: 'l2complements:captured_shulker_bullet', 
        B: 'minecraft:wither_rose', 
        C: 'l2complements:captured_shulker_bullet',
        D: 'l2complements:shulkerate_ingot',
        E: 'enigmaticlegacy:evil_ingot',
        F: 'iceandfire:tide_purple_chestplate',
        I: 'l2hostility:curse_of_lust'
    
    }).keepIngredient('l2hostility:curse_of_lust')//保留色欲诅咒
        //贪婪之罪的合成
})
