

$(".fa-times").click(

function(){
    $(".open").hide(1000)
    $(".open-list").animate({left:'0px'},1000)
   
}

)
$(".open-list").click(

function(){
    $(".open").show(1000)
    $(".open-list").animate({left:'320px'},1000)
   
}

)


$(".up").click(

function(){
    $(".down").slideToggle(1000)
  
     $(".down3").slideUp(1000)
     $(".down2").slideUp(1000)
   
}

)
$(".up2").click(

function(){
    $(".down2").slideToggle(1000)
     $(".down").slideUp(1000)
     $(".down3").slideUp(1000)
    
   
}

)
$(".up3").click(

function(){
    $(".down3").slideToggle(1000)
     $(".down").slideUp(1000)
     $(".down2").slideUp(1000)
   
}

)





var myDate = new Date();

myDate.setDate(myDate.getDate() + 2);

$("#countdown").countdown(myDate, function (event) {

  $(this).html(

      event.strftime(

          '<div class="timer-wrapper"><div class="time" >%D</div></div><div class="timer-wrapper"><div class="time">%H</div></div><div class="timer-wrapper"><div class="time">%M</div></div><div class="timer-wrapper"><div class="time">%S</div></div>'

      )

  );

});












$('#textarea').characterCounter(


{

 

  // minLength

  minlength: 0,

  // maxLength

  maxlength: 100,

 

  // blocks characters that go over the maxlength value

  blockextra: false,

 

  // or 'top'

  // or a specific element

  position: 'bottom',

 

  // CSS class of the counter

  counterclass: 'character-counter-indicator',

 

  // CSS class when out of range

  alertclass: 'out-of-range',

 

  // custom counter format

  // possible values: '[used]', '[under]', '[over]', '[left]', '[min]', '[max]'

  textformat: '[used] Characyer Reamining',

 

  // callback functions

  onOutOfRange: function(count, min, max){},

  onBackToRange: function (count, min, max){}

 
 

}

);

$('#input').characterCounter();

$('#editableElement').characterCounter();






var pp=$("#two").offset().top
$("#one2").click(function(){
    
    
    $("body").animate({scrollTop:pp},1000)
    
})


var pp2=$("#three").offset().top
$("#one3").click(function(){
    
    
    $("body").animate({scrollTop:pp2},1000)
    
})



var pp3=$("#four").offset().top
$("#one4").click(function(){
    
    
    $("body").animate({scrollTop:pp3},1000)
    
})








/*------------------------------------------------- */



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




























