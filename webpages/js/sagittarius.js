/*
* 用于主页面的js
*/
var _cardArr = [
  {
    'id' : 'card1', 'love_ed' : false,
  },
  {
    'id' : 'card2', 'love_ed' : false,
  }
]



/* 动画补充 */
/*
  spin 动画：是要为每一个元素添加的动画
  注释：添加一个card，就要为其添加动画
*/
/*
  Javascript 不强制检类型。所以如果获取变量的时候，需要转成对应的数值类型！
*/
function spin_animate(index){
  var formatted_id = '#' + _cardArr[index].id + ' '
  var love_cnt = parseInt($(formatted_id + '.spin-love .spin-bottom-square span').text())
  var love_background_color = $(formatted_id +  '.spin-love .inner-circle')
  $(formatted_id +  '.spin-love').hover(function(){
      // enter
      if(!_cardArr[index].love_ed){
        $(formatted_id +  '.spin-love .inner-circle').css('background-color', 'rgba(211, 69, 153, 100)')
        $(formatted_id +  '.spin-love .spin-bottom-square span').css('color', 'rgba(211, 69, 153, 100)')
        $(formatted_id +  '.spin-love .spin-bottom-square span').text('Love')
      } else {
        $(formatted_id +  '.spin-love .inner-circle').css('background-color', 'black')
        $(formatted_id +  '.spin-love .spin-bottom-square span').css('color', 'white')
        $(formatted_id + '.spin-love .spin-bottom-square span').text('UN')
      }
  }, function() {
    // leave
    if(!_cardArr[index].love_ed){
      $(formatted_id +  '.spin-love .inner-circle').css('background-color', 'black')
      $(formatted_id +  '.spin-love .spin-bottom-square span').css('color', 'white')
      $(formatted_id +  '.spin-love .spin-bottom-square span').text(love_cnt)
    } else {
      $(formatted_id +  '.spin-love .inner-circle').css('background-color', 'rgba(211, 69, 153, 100)')
      $(formatted_id +  '.spin-love .spin-bottom-square span').css('color', 'white')
      $(formatted_id +  '.spin-love .spin-bottom-square span').text(love_cnt)
    }
  })

  var comment_cnt = $(formatted_id +  '.spin-comment .spin-bottom-square span').text()
  $(formatted_id +  '.spin-comment').hover(function(){
    // enter
    $(formatted_id +  '.spin-comment .inner-circle').css('background-color', '#48B8B6')
    $(formatted_id +  '.spin-comment .spin-bottom-square span').css('color', '#48B8B6')
  }, function() {
    // leave
    $(formatted_id +  '.spin-comment .inner-circle').css('background-color', 'black')
    $(formatted_id +  '.spin-comment .spin-bottom-square span').css('color', 'white')
    $(formatted_id +  '.spin-comment .spin-bottom-square span').text(comment_cnt)
  })

  // like + 1
  $(formatted_id + '.spin-love').click(function(){
    if(!_cardArr[index].love_ed){
      love_cnt += 1
      _cardArr[index].love_ed = true
      $(formatted_id +  '.spin-love .spin-bottom-square span').text(love_cnt)
      $(formatted_id +  '.spin-love .inner-circle').css('background-color', 'rgba(211, 69, 153, 100)')
      $(formatted_id +  '.spin-love .spin-bottom-square span').css('color', 'rgba(211, 69, 153, 100)')
    } else {
      love_cnt -= 1
      _cardArr[index].love_ed = false
      $(formatted_id +  '.spin-love .spin-bottom-square span').text(love_cnt)
      $(formatted_id +  '.spin-love .inner-circle').css('background-color', 'rgba(211, 69, 153, 100)')
      $(formatted_id +  '.spin-love .spin-bottom-square span').css('color', 'rgba(211, 69, 153, 100)')
    }

  })
}

function spin_animate_elements(cardArr){
  // console.log(cardArr)
  if(Array.isArray(cardArr)){
    for(var i = 0; i < cardArr.length; i++)
      spin_animate(i, cardArr[i])
  }
}



/****************************
  事件绑定函数
*****************************/
/* 展开折叠菜单 */
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

/* 点击喜欢按钮：增加喜欢个数*/
function spin_like_click(){

}

$(function(){

});

// 加入 ready 中的函数只会被执行一次
$(document).ready(function(){
  // 动画添加
  spin_animate_elements(_cardArr)
  // 菜单动作
  unfold_menu_mindevice()
})
