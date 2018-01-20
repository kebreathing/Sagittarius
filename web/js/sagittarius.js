/*
* 用于主页面的js
*/


// 展开折叠菜单
function unfold_menu_mindevice(){
  $('#nav-min-device').click(function(){
    display = $('#nav-small').css('display')
    if(display == 'none'){
      $('#nav-small').css('display', 'inline-block')
    } else {
      $('#nav-small').css('display', 'none')
    }

  })
}

$(document).ready(function(){
  unfold_menu_mindevice()
})
