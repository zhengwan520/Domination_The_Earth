// priority: 0

ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:diamond_helmet', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套钻甲给予伤害吸收和灵视').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:diamond_chestplate', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套钻甲给予伤害吸收和灵视').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:diamond_leggings', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套钻甲给予伤害吸收和灵视').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:diamond_boots', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套钻甲给予伤害吸收和灵视').bold(true))
    }
  })
  })