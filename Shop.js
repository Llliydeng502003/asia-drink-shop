
const Shop = {
    name: '鳥籠e號店',
    address: '台中市霧峰區柳豐路500號I棟1樓',
    tel: '0953195080',
    items: {'紅茶': 35, '綠茶': 35, '鮮奶茶': 50 ,'巧克力可可': 60},
    addons: {'去冰': 0, '少冰': 0, '熱': 0, '微糖': 0, '半糖': 0, '加鮮奶': 20, '加珍珠':10},
    orderCount: 0,
  }
  
  Shop.html = `
  <div>
    <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
    <button class="big" onclick="Report.start()">本日報表</button><br/><br/>
    <button class="big" onclick="Setting.start()">商店公告</button><br/><br/>
  </div>
  `
  
  Shop.start = function () {
    Shop.init()
    Shop.name = localStorage.getItem('Shop.name') || Shop.name
    Shop.address = localStorage.getItem('Shop.address') || Shop.address
    Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
    Ui.id('menuShopName').innerHTML = Shop.name
    const itemsJson = localStorage.getItem('Shop.items')
    const addonsJson = localStorage.getItem('Shop.addons')
    if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
    if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
    Ui.show(Shop.html)
  }
  
  Shop.init = function () {
    Shop.orderCount = localStorage.getItem('Pos.Order.count')
    if (Shop.orderCount == null) {
      Shop.orderCount = 0
      localStorage.setItem('Pos.Order.count', Shop.orderCount)
    }
  }
  
  Shop.incCount = function () {
    // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
    localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
  }
  
  Shop.saveOrder = function (Order) {
    localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
  }
  
  Shop.getOrder = function (i) {
    let orderJson = localStorage.getItem('Pos.Order.'+i)
    if (orderJson == null) return null
    return JSON.parse(orderJson)
  }
  