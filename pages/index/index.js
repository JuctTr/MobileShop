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
    duration: 1000,
    lock: 1,
    lockText: '开锁',
    changeLock: ''
  },
  onLoad:function(options){
    var array = this.initData();
    this.setData({
      array: array
      });
  },
  initData:function(){
    var array = [];
    var object1 = new Object();
    object1.img = "images/book-bg.png";
    object1.title = "精神书铺";
    object1.type = "书，是人类的精神食粮";
    object1.brower = "525642浏览";
    object1.moments = "评论区";
    array[0] = object1;

    var object2 = new Object();
    object2.img = "images/book-bg.png";
    object2.title = "发现";
    object2.type = "为您推荐";
    object2.brower = "525642浏览";
    object2.moments = "评论区";
    array[1] = object2;

    var object3 = new Object();
    object3.img = "images/book-bg.png";
    object3.title = "故事";
    object3.type = "我有酒，你有故事吗";
    object3.brower = "525642浏览";
    object3.moments = "评论区";
    array[2] = object3;

    var object4 = new Object();
    object4.img = "images/book-bg.png";
    object4.title = "日常必读";
    object4.type = "哦豁，加油";
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
  changeLock() {
    console.log(this.data.lock, '一开始的');
    let self = this;
    if( this.data.lock === 1 ) {
      self.changeLockRequest(this.data.lock, function(res) {
        if (res.data.error === 'device not online: 540430665') {
          wx.showToast({
            title: '设备不在线！',
            image: 'images/icon_error.png'
          }) 
        } else {
          self.data.lock = 0;
          self.setData({
            lockText: '关锁',
            changeLock: 'changeLock'
          })          
          wx.showToast({
            title: '开锁成功',
            image: 'images/successed.png'
          })          
        } 
      });
    } else {
      self.changeLockRequest(self.data.lock, function() {
        self.setData({
          lockText: '开锁',
          changeLock: ''
        })
        self.data.lock = 1;
        wx.showToast({
          title: '关锁成功',
          image: 'images/successed.png'
        })        
      })
    }
  },
  // 开锁的请求方法，callback是传入的回调函数
  changeLockRequest(newLock, callback) {
    let self = this;
    wx.request({
      url: 'http://api.heclouds.com/cmds?device_id=540430665', //onenetapi地址＋设备id
      method: "post",
      data: {
        _Mark: newLock
      },
      header: {
        'api-key': 'pB2M55B9==a4Gm9K6rghKNV3cK4=',//onenet设备api-key
        'Content-Type': 'application/json' // 默认值
      },
      success(res) {
        callback(res);    
        console.log(res, self.data.lock);   
      },
      fail() {
        console.log('请求失败');
      }
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