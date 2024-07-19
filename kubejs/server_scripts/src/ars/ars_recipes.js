ServerEvents.recipes(event => {
event.shaped(Item.of('kubejs:magic_clay',1), [
    'ABC',
    'C  ',
    '   '
],
{
    A: 'ars_nouveau:source_gem',
    B: 'minecraft:clay_ball',
    C: 'minecraft:glowstone_dust'

})//魔法黏土的合成

event.shaped(Item.of('kubejs:marvelous_clay',1), [
    'ABC',
    'DD ',
    '   '
],
{
    A: 'kubejs:magic_clay',
    B: 'minecraft:golden_carrot',
    C: 'ars_nouveau:source_gem',
    D: 'minecraft:iron_ingot'

})//神秘黏土的合成



event.shaped(Item.of('kubejs:arcane_clay',4), [
    'ABC',
    'DD ',
    '   '
],
{
    A: 'kubejs:marvelous_clay',
    B: 'amethyst_imbuement:celestine',
    C: 'amethyst_imbuement:brilliant_diamond',
    D: 'celestial_artifacts:the_end_dust'

})//奥术黏土的合成


event.shaped(Item.of('kubejs:defense_helmet',1), [
    'ABC',
    'DEF',
    '   '
],
{
    A: 'ars_elemental:air_focus',
    B: 'ars_elemental:fire_focus',
    C: 'ars_elemental:water_focus',
    D: 'ars_elemental:necrotic_focus',
    E: 'kubejs:arcane_clay',
    F: 'ars_elemental:earth_focus'

})//织魔的合成

event.shaped(Item.of('kubejs:defense_chestplate',1), [
    'ABC',
    'DEF',
    '   '
],
{
    A: 'ars_elemental:air_focus',
    B: 'ars_elemental:fire_focus',
    C: 'ars_elemental:water_focus',
    D: 'ars_elemental:necrotic_focus',
    E: 'kubejs:arcane_clay',
    F: 'ars_elemental:earth_focus'

})//织魔的合成

event.shaped(Item.of('kubejs:defense_leggings',1), [
    'ABC',
    'DEF',
    '   '
],
{
    A: 'ars_elemental:air_focus',
    B: 'ars_elemental:fire_focus',
    C: 'ars_elemental:water_focus',
    D: 'ars_elemental:necrotic_focus',
    E: 'kubejs:arcane_clay',
    F: 'ars_elemental:earth_focus'

})//织魔的合成

event.shaped(Item.of('kubejs:defense_boots',1), [
    'ABC',
    'DEF',
    '   '
],
{
    A: 'ars_elemental:air_focus',
    B: 'ars_elemental:fire_focus',
    C: 'ars_elemental:water_focus',
    D: 'ars_elemental:necrotic_focus',
    E: 'kubejs:arcane_clay',
    F: 'ars_elemental:earth_focus'

})//织魔的合成

})