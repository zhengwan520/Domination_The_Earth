/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} ctx 
 * @param {Internal.ItemStack} itemTo 
 */
global.abilitiesFlyOnEquip=(itemFrom,ctx,itemTo)=>{
let player = ctx.entity()
if(!player.abilities.mayfly){
player.abilities.mayfly = true

player.onUpdateAbilities()
}

/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} ctx 
 * @param {Internal.ItemStack} itemTo 
 */
global.abilitiesFlyonUnequip = (itemFrom,ctx,itemTo)=> {
  let player = ctx.entity()
if(player.abilities.mayfly)
	{
player.abilities.mayfly = false
player.abilities.flying = false
	}
player.onUpdateAbilities()
}
}
