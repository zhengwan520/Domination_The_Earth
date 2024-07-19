ServerEvents.recipes(event => {
event.recipes.summoningrituals
    .altar(Ingredient.of('kubejs:ash_ingots'))
    .itemOutput('celestial_artifacts:flight_ring')

    .input('curseofpandora:angelic_feather')
    .input('kubejs:fox')
    .input('enigmaticlegacy:fabulous_scroll')
    .input('l2hostility:miracle_ingot')
    .input('celestial_core:soaring_wings')
    .input('apotheosis:mythic_material')
    .sacrifice('mowziesmobs:naga')
    .sacrificeRegion(7, 7)
    .recipeTime(200)
    .blockBelow('l2hostility:chaos_block')
    .dayTime('day')
    .weather('thunder')
})