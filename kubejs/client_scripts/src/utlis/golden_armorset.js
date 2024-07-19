// priority: 0

ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:golden_helmet', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套金甲时获得嗅觉 幸运 急迫II').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:golden_chestplate', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套金甲时获得嗅觉 幸运 急迫II ').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:golden_leggings', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套金甲时获得嗅觉 幸运 急迫II').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:golden_boots', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套金甲时获得嗅觉 幸运 急迫II').bold(true))
    }
  })
  })