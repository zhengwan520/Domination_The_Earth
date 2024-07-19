ServerEvents.recipes(event => {
        event.shaped(Item.of('curseofpandora:curse_of_spell',1), [
          'ABA',
          'DCD',
          'XBX'
      ],
      {
          A: 'moonstone:ectoplasmball',
          B: 'minecraft:gold_ingot',
          C: 'minecraft:nether_star',
          D: 'chromaticarsenal:chroma_shard',
          X: 'enigmaticlegacy:evil_essence'
  
      })//第七诅咒囚笼的合成
})

ServerEvents.recipes(event => {
          event.shaped(Item.of('curseofpandora:curse_of_proximity',1), [
            'ABB',
            'BCD',
            'BDX'
        ],
        {
            A: 'kubejs:greedy',
            B: 'celestial_core:ocean_essence',
            C: 'curseofpandora:curse_of_spell',
            D: 'mythicmetals:aquarium_ingot',
            X: 'kubejs:arrogant'
    
        })//第二诅咒囚笼的合成
        .keepIngredient('curseofpandora:curse_of_spell')//保留第七诅咒
})

ServerEvents.recipes(event => {
            event.shaped(Item.of('curseofpandora:curse_of_inertia',1), [
              'ABA',
              'DCD',
              'AXA'
          ],
          {
              A: 'kubejs:fox',
              B: 'aquamirae:abyssal_amethyst',
              C: 'curseofpandora:curse_of_prudence',
              X: 'bosses_of_mass_destruction:obsidian_heart',
              D: 'minecraft:crying_obsidian'
      
          })//第一诅咒咒缚的合成
          .keepIngredient('curseofpandora:curse_of_prudence')//保留第六诅咒
})

ServerEvents.recipes(event => {
            event.shaped(Item.of('curseofpandora:curse_of_tension',1), [
                'ABA',
                'DCD',
                'EXE'
            ],
            {
                A: 'l2complements:sculkium_ingot',
                B: 'amethyst_imbuement:crystalline_heart',
                C: 'curseofpandora:curse_of_metabolism',
                X: 'kubejs:cat',
                E: 'kubejs:glowing_ingot',
                D: 'l2hostility:witch_droplet'
        
            })//第五诅咒的合成
            .keepIngredient('curseofpandora:curse_of_metabolism')//保留第四诅咒
})

ServerEvents.recipes(event => {
  event.shaped(Item.of('curseofpandora:curse_of_prudence',1), [
      'ABA',
      'DCD',
      'EXE'
  ],
  {
      A: 'mythicmetals:kyber_ingot',
      B: 'bosses_of_mass_destruction:blazing_eye',
      C: 'curseofpandora:curse_of_tension',
      X: 'kubejs:heart',
      E: 'celestial_core:fire_essence',
      D: 'amethyst_imbuement:witches_orb'

  })//第六诅咒的合成
  .keepIngredient('curseofpandora:curse_of_tension')//保留第五诅咒
})  

ServerEvents.recipes(event => {
  event.shaped(Item.of('curseofpandora:curse_of_metabolism',1), [
      'ABS',
      'DCD',
      'EXE'
  ],
  {
      A: 'kubejs:envy',
      B: 'bosses_of_mass_destruction:ancient_anima',
      C: 'curseofpandora:curse_of_flesh',
      X: 'kubejs:heart',
      S: 'kubejs:eating',
      E: 'mythicmetals:prometheum_ingot',
      D: 'amethyst_imbuement:witches_orb'

  })//第四诅咒的合成
  .keepIngredient('curseofpandora:curse_of_flesh')//保留第三诅咒
})

ServerEvents.recipes(event => {
  event.shaped(Item.of('curseofpandora:curse_of_flesh',1), [
      'ABS',
      'DCD',
      'EXE'
  ],
  {
      A: 'paraglider:heart_container',
      B: 'kubejs:laziness',
      C: 'curseofpandora:curse_of_proximity',
      X: 'ars_elemental:fire_focus',
      S: 'paraglider:stamina_vessel',
      E: 'undergarden:utherium_crystal',
      D: 'celestisynth:wintereis_shard'

  })//第三诅咒的合成
  .keepIngredient('curseofpandora:curse_of_proximity')//保留第二诅咒
})

ServerEvents.recipes(event => {
  event.shaped(Item.of('curseofpandora:plain_charm',1), [
      'ABS',
      'BCB',
      'EBD'
  ],
  {
      A: 'l2complements:cursed_droplet',
      B: 'l2hostility:miracle_powder',
      C: 'kubejs:holy_ingots',
      S: 'l2complements:storm_core',
      E: 'l2complements:soul_flame',
      D: 'l2complements:hard_ice'

  })//平凡的吊坠的合成
})