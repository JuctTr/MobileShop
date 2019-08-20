// pages/shopping_cart/shopping_cart.js
var Temp = require('../template/contract.js');
Page(Object.assign({}, Temp.Quantity, {
  data: {
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        pic: "../shopping_cart/images/book0.jpg",
        name: "书的名称",
        price: 20,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        },
      },
      {
        pic: '../shopping_cart/images/book1.jpg',
        name: "书的名称",
        price: 34,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: '../shopping_cart/images/book2.jpg',
        name: "书的名称",
        price: 39,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 3,
          min: 1,
          max: 20
        },
      },
      {
        pic: '../shopping_cart/images/book3.jpg',
        name: "书的名称",
        price: 49,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: '../shopping_cart/images/book4.jpg',
        name: "书的名称",
        price: 28,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 5,
          min: 1,
          max: 20
        },
      },
      {
        pic: "../shopping_cart/images/book5.jpg",
        name: "书的名称",
        price: 23,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
    ],
  },
// 商品前面的单项选择器
  //勾选事件处理函数  
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,

      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price * this.data.carts[index].count.quantity;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price * this.data.carts[index].count.quantity;
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price*this.data.carts[i].count.quantity;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选按钮
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    this.data.totalMoney = 0;
    if (!this.data.isAllSelect) {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price * this.data.carts[i].count.quantity;
      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算按钮
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  },
  // addNumber(e){
  //   let id = e.target.dataset.id, N = parseInt(e.target.dataset.index);
  //   var num = this.data.carts[N].count.quantity;
  //   if(num != 0){
  //     num++;
  //   }else{
  //     num = 0;
  //   }
  // },
  // reduceNumber(e){
  //   let id = e.target.dataset.id, N = parseInt(e.target.dataset.index);
  //   var num = this.data.carts[N].count.quantity;
  //   if (num != 0) {
  //     num--;
  //   } else {
  //     num = 0;
  //   }
  // }
}));