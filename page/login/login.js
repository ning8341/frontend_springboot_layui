layui.use(['form', 'layer', 'jquery'], function () {
  var form = layui.form,
    layer = parent.layer === undefined ? layui.layer : top.layer
  $ = layui.jquery;

  $(".loginBody .seraph").click(function () {
    layer.msg("来了老弟", {
      time: 5000
    });
  })

  //登录按钮
  form.on("submit(login)", function (data) {
    $(this).text("登录中...").attr("disabled", "disabled").addClass("layui-disabled");
    $.ajax({
      type: 'POST',
      url: '/api/sys/login',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(data.field),
      success: function (data) {
        if (data.code === 0) {
          layui.data('userInfo', {
            key: 'currentUserToken'
            , value: data.token
          });
          window.location.href = "../../index.html";
        }
      }
    })
    return false;
  })

  //表单输入效果
  $(".loginBody .input-item").click(function (e) {
    e.stopPropagation();
    $(this).addClass("layui-input-focus").find(".layui-input").focus();
  })
  $(".loginBody .layui-form-item .layui-input").focus(function () {
    $(this).parent().addClass("layui-input-focus");
  })
  $(".loginBody .layui-form-item .layui-input").blur(function () {
    $(this).parent().removeClass("layui-input-focus");
    if ($(this).val() != '') {
      $(this).parent().addClass("layui-input-active");
    } else {
      $(this).parent().removeClass("layui-input-active");
    }
  })
})
