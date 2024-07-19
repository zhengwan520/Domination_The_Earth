ServerEvents.recipes(event => {
    event.custom({
            "type": "alloy_forgery:forging",
            "inputs": [
              {
                "item": 'mythicmetals:celestium_ingot'
              },
              {
                "item": 'mythicmetals:metallurgium_ingot'
              },
              {
                "item": 'l2hostility:miracle_ingot'
              },
              {
                "item": 'kubejs:heart'
              },
              {
                "item": 'kubejs:halberd'
              },
              {
                "item": 'kubejs:fox'
              },
              {
                "item": 'cataclysm:witherite_ingot'
              }
            ],
            "output": {
              "id": 'kubejs:kruscle',
              "count": 1
            },
            "min_forge_tier": 3,
            "fuel_per_tick": 30
          })//艾斯塔尔丙酸锡

          event.custom({
            "type": "alloy_forgery:forging",
            "inputs": [
              {
                "item": 'twilightforest:knightmetal_ingot'
              },
              {
                "item": 'l2complements:totemic_gold_ingot'
              },
              {
                "item": 'l2complements:poseidite_ingot'
              },
              {
                "item": 'iceandfire:silver_ingot'
              },
              {
                "item": 'l2complements:shulkerate_ingot'
              },
              {
                "item": 'twilightforest:fiery_ingot'
              },
              {
                "item": 'l2hostility:chaos_ingot'
              },
              {
                "item": 'amethyst_imbuement:celestine'
              },
              {
                "item": 'celestisynth:celestial_netherite_ingot'
              }
            ],
            "output": {
              "id": 'l2complements:eternium_ingot',
              "count": 2
            },
            "min_forge_tier": 3,
            "fuel_per_tick": 30
          })//永恒锭

          event.custom({
            "type": "alloy_forgery:forging",
            "inputs": [
              {
                "item": 'aquaculture:neptunium_ingot'
              },
              {
                "item": 'iceandfire:silver_ingot'
              },
              {
                "item": 'enigmaticlegacy:evil_ingot'
              },
              {
                "item": 'l2complements:shulkerate_ingot'
              },
              {
                "item": 'twilightforest:knightmetal_ingot'
              }
            ],
            "output": {
              "id": 'kubejs:heart',
              "count": 1
            },
            "min_forge_tier": 2,
            "fuel_per_tick": 15
          })//星陨锭
        })