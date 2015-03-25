$(function(){

  $('.sign-up-form span:last-child').click(function(){
    $('.sign-up-form').css('display','none');
    $('.sign-in-form').css('display','block');
  });

  $('.sign-in-form span:first-child').click(function(){
    $('.sign-in-form').css('display','none');
    $('.sign-up-form').css('display','block');
  });

  //to be deleted once links are active
  $('.sign-tab span a').click(function(e) {
    event.preventDefault();
  });

  var stickyNavTop = ($('.main-bg2').offset().top) - 88;  

    var stickyNav = function(){  
      var scrollTop = $(window).scrollTop();  

      if (scrollTop >= stickyNavTop) {   
        $('.frontHeader h1').addClass('drumCircle');  
      } else {  
        $('.frontHeader h1').removeClass('drumCircle');    
      }  
    };  

  stickyNav();  

  $(window).scroll(function() {  
    stickyNav();  
  });  

  //console.log(stickyNavTop);

  $('#userPw').keydown(function(){
    //console.log("oh hai");
    if($(this).val().length > 1) {
         $('form .button').css('opacity','1');
    } else {
        $('form .button').css('opacity','0.5');
    }

    if($(this).val().length >= 6) {
      $('.strength:first-child').css('background','#2e4d6f');
    } 

    if($(this).val().length >= 9) {
      $('.strength:nth-child(2)').css('background','#2e4d6f');
    }

    if($(this).val().length >= 12) {
      $('.strength:nth-child(3)').css('background','#2e4d6f');
    }

    if($(this).val().length >= 15) {
      $('.strength:nth-child(4)').css('background','#2e4d6f');
    }
  });
});//jQuery