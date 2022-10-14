var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})


$('#slide_banner').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
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