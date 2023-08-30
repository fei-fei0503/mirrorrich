//質問１回答ボタンの切り替え
$(".a1-a1,.a1-a2,.a1-a3,.a1-a4,.a1-a5,.a2-a1,.a2-a2,.a3-a1,.a3-a2,.a3-a3,.a3-a4,.a3-a5,.a4-a1,.a4-a2,.a4-a3,.a4-a4,.a4-a5")
.on("click", function () {
    $(this).toggleClass("change");
});


/*-----------
    回答後
-------------*/
/*Q1*/
$(function () {
    /*Q1*/
    //ボタンのイベント
    $(".a1-btn").click(function () {
        $("#q2").fadeIn("3000");
        const qTop = $('#q2').offset().top;
        $("html").animate({ scrollTop: qTop });
    });
    /*Q2*/
    //ボタンのイベント
    $(".a2-btn").click(function () {
        $("#q3").fadeIn("3000");
        const qTop = $('#q3').offset().top;
        $("html").animate({ scrollTop: qTop });
    });
    $(".a2-a1").click(function () { 
        $('.a2-a2').removeClass('change')
    });
    $(".a2-a2").click(function () {
        $('.a2-a1').removeClass('change')
    });


    /*Q3*/
    //ボタンのイベント
    $(".a3-btn").click(function () {
        $("#q4").fadeIn("3000");
        $("#send").fadeIn("3000");
        // const qTop = $('#q4').offset().top;
        // $("html").animate({ scrollTop: qTop });
    });
    $(".a3-btn-last").click(function () {
        $("#send").fadeIn("3000");
        // const qTop = $('#q4').offset().top;
        // $("html").animate({ scrollTop: qTop });
    });

    //Q3ボタンと連動する画像
    $(".a3-a1").click(function () { 
        $('#q3-img1').css("display", "block");
    });
    $(".a3-a2").click(function () { 
        $('#q3-img2').css("display", "block");
    });

    $(".a3-a3").click(function () { 
        $('#q3-img3').css("display", "block");
    });
    $(".a3-a3").click(function () { 
        $('#q3-img4').css("display", "block");
    });

    $(".a3-a4").click(function () { 
        $('#q3-img4').css("display", "block");
    });
    $(".a3-a4").click(function () { 
        $('#q3-img4').css("display", "block");
    });

    $(".a3-a5").click(function () { 
        $('#q3-img5').css("display", "block");
    });
    $(".a3-a5").click(function () { 
        $('#q3-img5').css("display", "block");
    });

    //Q4送信ボタンのイベント
    $("#send").click(function () {
        //質問を隠す
        $("#question,#fv").css("display", "none");
        $(".form").css("display", "none");
        $("#offer").fadeIn("3000");
        const qTop = $('#offer').offset().top;
        $("html").animate({ scrollTop: qTop });
    });


});

//アコーディオン
$(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.q3 .accordion_one .accordion_header').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
      //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
      $('.q3 .accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
      $('.q3 .accordion_one .accordion_header').not($(this)).removeClass("open");
    });
  });

//内部リンクスクロール
$(function () {
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function () {
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = 0;
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整
        var position = target.offset().top + adjust;
        // スムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

//質問３
$(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.q3-box .accordion_one .accordion_header').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
      //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
      $('.q3-box .accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
      $('.q3-box .accordion_one .accordion_header').not($(this)).removeClass("open");
    });
  });


//   $(function(){
//     //.accordion_oneの中の.accordion_headerがクリックされたら
//     $('.accordion_one .accordion_header').click(function(){
//       //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
//       $(this).next('.accordion_inner').slideToggle();
//       $(this).toggleClass("open");
//       //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
//     //   $('.accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
//     //   $('.accordion_one .accordion_header').not($(this)).removeClass("open");
//     });
//   });


// .s_01 .accordion_one
$(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.s_01 .accordion_one .accordion_header').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });

  