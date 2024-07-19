// 在客户端脚本文件中（例如：kubejs/client_scripts/jei.js）

// 初始隐藏配方
JEIEvents.hideItems(event => {
    event.hide('kubejs:special_diamond_sword')
  })
  
  // 处理服务器发送的数据
  NetworkEvents.dataReceived('reload_jei', event => {
    // 当收到服务器的消息时，重新加载 JEI
    if (event.data.reload) {
      Client.reloadJEI()
    }
  })
  
  // JEI 信息刷新事件
  JEIEvents.information(event => {
    // 如果配方已解锁，显示它
    if (global.recipeUnlocked) {
      event.addItem('kubejs:special_diamond_sword', ['配方已解锁！'])
    }
  })