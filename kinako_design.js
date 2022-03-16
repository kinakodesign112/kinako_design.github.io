$(function(){

  $('.menu-icon').click(function(){
    $('.modal-wrapper').fadeIn();
  });

  $('.close-btn').click(function(){
    $('.modal-wrapper').fadeOut();
  });

 $('.top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },500);
  });


  $('.header-list a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });


  // toggleChangeBtn関数を定義
  // toggleとは、2つの状態を切り替えること
  function toggleChangeBtn(){

    // 変数slideIndexに「.active」要素のインデックス番号を代入
    var slideIndex = $('.slide').index($('.active'));

    // change-btn要素を表示
    // 一度隠れたボタンが二度と表示されなくなるのを防ぐ
    $('.change-btn').show();

    // ifとelse ifを用いて、「.change-btn」の表示/非表示を行う
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == $('.slide').length-1) {
      $('.next-btn').hide();
    }
  }


  $('.index-btn').click(function() {
    $('.active').removeClass('active');

    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');

    toggleChangeBtn();
    
  });


  $('.change-btn').click(function() {
    // 変数$displaySlideを定義
    var $displaySlide = $('.active');
    
    // 変数$displaySlideからactiveクラスを取り除く
    $displaySlide.removeClass('active');
    
    // ifとelseを用いて、$displaySlideの前もしくは次の要素に
    // activeクラスをつける
    if($(this).hasClass('next-btn')){
      $displaySlide.next().addClass('active');
    }else{
      $displaySlide.prev().addClass('active');
    }

    toggleChangeBtn();
    
  });

});
