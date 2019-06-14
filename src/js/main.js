 $(function(){
    
  $('#gamb').on('click', function(){
    $('.list').slideToggle(400, function(){
        
        if($(this).css('display') === 'none'){
            $(this).removeAttr('style');
        }
     });
     
   });
   
   
 //   ГАРМОШКА   //

$('.similar').on('click', function(){
     var answer = $(this).next();
     
       $('.answer').not(answer).slideUp(400);
       answer.slideToggle(400);
    });
    
    // СЛАЙДЕР // 
    
   $('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
    
 });
