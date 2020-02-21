//app.js
App({
  onLaunch: function() {
    console.log("App onLaunch");
  },

  onShow: function() {
    console.log("App onShow");
  },

  onHide: function() {
    console.log("App onHide");
  },

  onError: function() {
    console.log("App onError");
  },

  globalData: {
    userInfo: null
  }
})