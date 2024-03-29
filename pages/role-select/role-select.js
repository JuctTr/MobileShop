// pages/select/select.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData);   
  },
  bindGetUserInfo(res) {
    if(res.detail.userInfo == undefined) {
      app.globalData.hasLogin = false;
      wx.showToast({
        title: '微信登录失败',
        image: 'images/icon_error.png'
      })      
    } else {
      app.globalData.hasLogin = true;
      wx.navigateBack({
        delta: 1
      });
      app.globalData.userInfo = res.detail.userInfo;
      wx.showToast({
        title: '微信登录成功',
        image: 'images/successed.png'
      })
    }
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