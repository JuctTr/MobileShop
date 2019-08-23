// pages/me/me.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: 'images/my.png',
      nickName: '未登录'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData);
  },
  getUserInfo: function() {
    wx.navigateTo({
      url: "/pages/role-select/role-select"
    });
    // wx.showModal({
    //   title: '获取你的头像和信息',
    //   content: '内容',
    //   showCancel: true,
    //   cancelText: '取消',
    //   cancelColor: '#000000',
    //   confirmText: '确定',
    //   confirmColor: '#3CC51F',
    //   success: (result) => {
    //     if(result.confirm){

    //     }
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.navigateTo({
      url: '../role-select/role-select',
      success: (result)=>{
        
      },
      fail: ()=>{

      },
      complete: ()=>{}
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
// 如果没有登录信息, 我这里就去重定向到登录页面
    if (app.globalData.hasLogin) {
      this.setData({
        userInfo: {
          avatarUrl: app.globalData.userInfo.avatarUrl,
          nickName: app.globalData.userInfo.nickName
        }
      })
    }
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