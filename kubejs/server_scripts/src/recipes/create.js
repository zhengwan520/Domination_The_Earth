ServerEvents.recipes(e => {
	// 地球锭
	const {
		sequenced_assembly,
		deploying,
		mixing
	} = e.recipes.create

	sequenced_assembly(
		'kubejs:halberd',
		'#forge:storage_blocks/steel', [
		deploying('kubejs:halberd', [
			'kubejs:halberd',
			'celestial_core:earth_core'
		]),
		deploying('kubejs:halberd', [
			'kubejs:halberd',
			'celestisynth:starstruck_scrap'
		]),
		deploying('kubejs:halberd', [
			'kubejs:halberd',
			'celestisynth:starstruck_feather'
		]),
		deploying('kubejs:halberd', [
			'kubejs:halberd',
			'enigmaticlegacy:earth_heart'
		]),
		deploying('kubejs:halberd', [
			'kubejs:halberd',
			'ars_elemental:yellow_archwood_log'
		])
	]).loops(2).transitionalItem('amethyst_imbuement:pyrite')

	//	日耀天焚锭
	mixing('kubejs:fox', 'enigmaticlegacy:cosmic_heart').superheated()

})
