/*StartupEvents.registry('item', event => {
event.create('ring_of_the_elves')
.texture('kubejs:item/ring_of_the_elves')
.maxStackSize(1)
.tag('curios:trinkets')
.rarity('epic')
.attachCapability(CuriosCapabilityBuilder.CURIOS.itemstack()
.canEquip(()=> true)
.onEquip((itemFrom,ctx,itemTo)=>{
global.abilitiesFlyOnUnequip(itemFrom, ctx,itemTo)
})
.onUnequip((itemFrom,ctx,itemTo)=>{
global.abilitiesFlyonUnequip(itemFrom,ctx,itemTo)
})
)})*/

StartupEvents.registry('minecraft:item', event => {
    event.create('ring_of_the_elves', 'basic')
        .texture('kubejs:item/ring_of_the_elves')
        .maxStackSize(1)
        .tag('curios:head')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
            .onEquip((itemFrom, ctx, itemTo) => {
                if (ctx.entity().level.isClientSide()) return
                global.abilitiesFlyOnEquip(itemFrom, ctx, itemTo)
            })
            .onUnequip((itemFrom, ctx, itemTo) => {
                if (ctx.entity().level.isClientSide()) return
                global.abilitiesFlyOnUnequip(itemFrom, ctx, itemTo)
            }))})
