//index.js

Page({
  data: {
    array: [],
    imgUrls: [
      'images/shopping-cart-swiper0.jpg',
      'images/online-store-swiper1.jpg',
      'images/shopping-swiper2.jpg'
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(options){
    var array = this.initData();
    this.setData({
      array: array
      });
      // 页面刚渲染，连接到登录页面
    // wx:wx.navigateTo({
    //   url: '../login/login',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  },
  initData:function(){
    var array = [];
    var object1 = new Object();
    object1.img = "images/book-bg.png";
    object1.title = "爱心早餐";
    object1.type = "商品描述";
    object1.brower = "525642浏览";
    object1.moments = "评论区";
    array[0] = object1;

    var object2 = new Object();
    object2.img = "images/book-bg.png";
    object2.title = "书籍";
    object2.type = "商品描述";
    object2.brower = "525642浏览";
    object2.moments = "评论区";
    array[1] = object2;

    var object3 = new Object();
    object3.img = "images/book-bg.png";
    object3.title = "购物车";
    object3.type = "商品描述";
    object3.brower = "525642浏览";
    object3.moments = "评论区";
    array[2] = object3;

    var object4 = new Object();
    object4.img = "images/book-bg.png";
    object4.title = "书籍";
    object4.type = "商品描述";
    object4.brower = "525642浏览";
    object4.moments = "评论区";
    array[3] = object4;

    var object5 = new Object();
    object5.img = "images/book-bg.png";
    object5.title = "书籍";
    object5.type = "商品描述";
    object5.brower = "525642浏览";
    object5.moments = "评论区";
    array[4] = object5;

    return array;
  },
  handlerDetailPage: function() {
    console.log('我被店家了')
    wx.navigateTo({
      url: '../product-details/product-details'
    })
  },

  onReady: function(){
    
  },
  onShow: function(){

  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){
    console.log("下拉刷新");
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://URL',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })
  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){
    return {
      title: "希卡有限公司",
      desc: "公司描述",
      path: ""
    }
  }  
})