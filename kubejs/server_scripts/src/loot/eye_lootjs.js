LootJS.modifiers((event) => {
    event.removeGlobalModifier('@endrem')
});

// 定义boss和对应掉落物的映射
const bossDropPairs = [
  ["minecraft:wither", "endrem:wither_eye"],
  ["twilightforest:naga", "endrem:old_eye"],
  ["twilightforest:hydra", "endrem:cryptic_eye"],
  ["twilightforest:ur_ghast", "endrem:evil_eye"],
  ["twilightforest:knight_phantom", "endrem:undead_eye"],
  ["twilightforest:snow_queen", "endrem:cold_eye"],
  ["twilightforest:lich", "endrem:black_eye"],
  ["aquamirae:eel", "endrem:exotic_eye"],
  ["twilightforest:alpha_yeti", "endrem:nether_eye"],
  ["bosses_of_mass_destruction:gauntlet", "endrem:cursed_eye"],
  ["bosses_of_mass_destruction:void_blossom", "endrem:rogue_eye"]
];

EntityEvents.death(event => {
  const {
    entity,
    entity: { x, y, z, level }
  } = event;

  // 查找匹配的boss和掉落物
  const bossPair = bossDropPairs.find(pair => pair[0] === entity.type);

  if (bossPair) {
    console.log(`Boss ${bossPair[0]} defeated`);
    let item = level.createEntity("item");
    item.item = Item.of(bossPair[1], 1);
    item.setPos(x, y + 1, z);
    item.setNoGravity(true);
    item.addMotion(0, 0.1, 0);
    item.spawn();

    // 添加发光效果
    item.glowing = true;

    // 设置自定义名称标签
    item.customName = Text.of(bossPair[1]).getDisplayName().yellow();
    item.customNameVisible = true;

    // 可选：添加粒子效果
    level.addParticle("minecraft:end_rod", x, y + 1, z, 0, 0, 0);
  }
});