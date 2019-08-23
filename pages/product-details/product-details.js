// pages/seller_me/seller_me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../allPageImages/shopping-cart-swiper0.jpg',
      '../allPageImages/online-store-swiper1.jpg',
      '../allPageImages/shopping-swiper2.jpg'
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    attribute: [{
      attribute: '颜色',
      value: '米白色'
    },{
      attribute: '等级',
      value: '一等'
    },{
      attribute: '等级',
      value: '一等'
    },{
      attribute: '等级',
      value: '一等'
    },{
      attribute: '等级',
      value: '一等'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})