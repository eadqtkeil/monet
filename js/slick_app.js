$(function(){
    // 컬러박스
    $(".youtube").colorbox({iframe:true,innerWidth:"85%",innerHeight:"65%"});

    $("#slick01").slick({
        centerMode:true,
        slide:"li",
        infinite:true,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:2,
        slidesToScroll:1,
        speed:2000,
        arrows:true,
        pauseOnHover:true,
        dots:false,
        responsive:[
            {
                breakpoint:641,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });
}); 