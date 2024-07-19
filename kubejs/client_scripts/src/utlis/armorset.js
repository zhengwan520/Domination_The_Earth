ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:iron_helmet', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套铁甲给予骨甲药水效果').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:iron_chestplate', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套铁甲给予骨甲药水效果').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:iron_leggings', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套铁甲给予骨甲药水效果').bold(true))
    }
  })
  })

  ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:iron_boots', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('查看套装效果').gold()])
      } else {
        text.add(1, Text.green('全套铁甲给予骨甲药水效果').bold(true))
    }
  })
  })