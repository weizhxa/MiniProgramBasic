// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        "text": "基础入门",
        "iconPath": '/images/basic_black_48.png',
        "selectedIconPath": '/images/basic_green_48.png'
      },
      {
        "text": "登录实例",
        "iconPath": '/images/login_black_48.png',
        "selectedIconPath": '/images/login_green_48.png'
      }
    ]
  },
  tabChange(e) {
    console.log('tab change', e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})