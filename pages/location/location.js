// pages/location/location.js
var QQMapWX = require('../qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //默认未获取地址  
    hasLocation: false
  },
  //获取经纬度  
  getLocation: function (e) {
    console.log(e)
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //根据经纬度在地图上显示  
  openLocation: function (e) {
    var value = e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
    })
  },
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'EMEBZ-O6XWJ-XMBFE-KUOXK-5EXMV-SZFUJ'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  //   var that = this;
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success: function (res) {
  //       console.log(res)
  //       var latitude1 = res.latitude
  //       var longitude1 = res.longitude
  //       qqmapsdk.reverseGeocoder({
  //         location: {
  //           latitude: latitude1,
  //           longitude: longitude1
  //         },
  //         success: function (res) {
  //           console.log(res);
  //           var add = res.result.address
  //           that.setData({
  //             wd: latitude1,
  //             jd: longitude1,
  //             address: add
  //           })
  //         }
  //       });
  //     }
  // });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 调用接口
    qqmapsdk.search({
      keyword: '酒店',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    })
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
    console.log("下拉刷新");
    wx.showNavigationBarLoading()//在标题栏中显示加载
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