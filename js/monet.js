$(function(){
var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $(".content");
        $nav = $(".header a");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 3){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
        $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
    };
    
};

scroll();




    $('#slide_banner').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,   //한 화면에 보여줄 아이템수
        slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템수
        responsive: [
            {
                breakpoint: 1024,  //미만
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,   // 600 미만
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,     // 480 미만
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    });    
    $('#slide_banner2').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        adaptiveHeight:true,
        centerMode:true,
        centerPadding:'30vw',
        
    });    


    $(".tt").click(function(){
        $(".ttimg").stop().fadeIn(400);
    });
    
    $(document).mouseup(function (e){
        var LayerPopup = $(".ttimg");
        if(LayerPopup.has(e.target).length === 0){
          LayerPopup.stop().fadeOut(400);
        }
      });
    


    $(".reserve div:not("+$(".lside li a.selected").attr("href")+")").hide();
    $(".lside li a").click(function(){
        $(".lside li a").removeClass("selected");
        $(this).addClass("selected");
        $(".reserve div").hide();
        $($(this).attr("href")).show();
        return false;
    });
});