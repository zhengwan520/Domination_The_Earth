ItemEvents.tooltip(event => {
    // 向所有这些项添加工具提示
    event.addAdvanced('kubejs:greedy', (item, advanced, text) => {
      // Shift、Alt 和 Ctrl 都是您可以检查的键！
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
      } else {
        text.add(1, Text.green('玩家需要在主世界召唤雨天后击杀娜迦即可获得').bold(true))
    }
  })
})

ItemEvents.tooltip(event => {
  // 向所有这些项添加工具提示
  event.addAdvanced('kubejs:arrogant', (item, advanced, text) => {
    // Shift、Alt 和 Ctrl 都是您可以检查的键！
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.green('玩家需要在主世界召唤雨天后击杀巫妖即可获得').bold(true))
  }
})
})

ItemEvents.tooltip(event => {
  // 向所有这些项添加工具提示
  event.addAdvanced('kubejs:eating', (item, advanced, text) => {
    // Shift、Alt 和 Ctrl 都是您可以检查的键！
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.green('玩家需要在主世界召唤雨天后击杀冰雪女王即可获得').bold(true))
  }
})
})

ItemEvents.tooltip(event => {
  // 向所有这些项添加工具提示
  event.addAdvanced('kubejs:envy', (item, advanced, text) => {
    // Shift、Alt 和 Ctrl 都是您可以检查的键！
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.green('玩家需要在主世界召唤雨天后击杀九头蛇即可获得').bold(true))
  }
})
})

ItemEvents.tooltip(event => {
  // 向所有这些项添加工具提示
  event.addAdvanced('kubejs:desire', (item, advanced, text) => {
    // Shift、Alt 和 Ctrl 都是您可以检查的键！
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.green('玩家需要在主世界召唤雨天后击杀暮初恶魂可获得').bold(true))
  }
})
})

ItemEvents.tooltip(event => {
  // 向所有这些项添加工具提示
  event.addAdvanced('kubejs:laziness', (item, advanced, text) => {
    // Shift、Alt 和 Ctrl 都是您可以检查的键！
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.green('玩家需要在主世界召唤雨天后击杀幻影骑士即可获得').bold(true))
  }
})
})

ItemEvents.tooltip(event => {
  // 向所有这些项添加工具提示
  event.addAdvanced('kubejs:cat', (item, advanced, text) => {
    // Shift、Alt 和 Ctrl 都是您可以检查的键！
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.green('玩家需要在主世界召唤雨天后击杀八云紫即可获得').bold(true))
  }
})
})

ItemEvents.tooltip(event => {
  // 向所有这些项添加工具提示
  event.addAdvanced('curseofpandora:reality', (item, advanced, text) => {
    // Shift、Alt 和 Ctrl 都是您可以检查的键！
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').red(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.green('玩家需要佩戴神秘遗物的彩蛋物品建筑师的恩宠即可击杀获得此词条').bold(true))
  }
})
})

ItemEvents.tooltip(event => {
  event.addAdvanced('paraglider:stamina_vessel', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看获取方式').gold()])
    } else {
      text.add(1, Text.red('玩家击杀钢铁守卫者获得').bold(true))
  }
})
})