layui.define(function (exports) {
  "use strict";
  var checkLogin = {
    check: function () {
      var userInfo = layui.data('userInfo');
      var localToken = userInfo.currentUserToken;
      if (localToken == undefined) {
        window.location.href = "/page/login/login.html";
      }
    }
  }
  exports('checkLogin', checkLogin);
});