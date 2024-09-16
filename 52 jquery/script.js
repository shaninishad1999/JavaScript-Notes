$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(2000);
    });
    $("#hide").click(function(){
        $("p").show(2000);
    });
})

$(document).ready(function(){

    $('#show-hide').click(function(){
        $("p").toggle();
    });
});

$("#fadein").click(function(){
    $(".box1").fadeIn();
    $(".box2").fadeIn(2000);
    $(".box3").fadeIn(3000);

})

$("#fadeout").click(function(){
    $(".box1").fadeOut();
    $(".box2").fadeOut(2000);
    $(".box3").fadeOut(3000);

})


$("#togglefade").click(function(){
    $(".box1").fadeToggle();
    $(".box2").fadeToggle(1000);
    $(".box3").fadeToggle(3000);

})

$(".container").click(function(){
    $(".content").slideDown();
})
$(".container").click(function(){
    $(".content").slideUp(3000);
})