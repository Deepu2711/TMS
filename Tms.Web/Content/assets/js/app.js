$(".forgot-password").click(function(){    
    $("#forgotpwd_container").show(); 
    $("#login_container").hide();   
       
});


$(".back_login").click(function(){
    $("#login_container").show();
    $("#forgotpwd_container").hide();    
    
});

$(".more_widgets").click(function(){
    $(".fms_showmore_widgets").show();
    $(".more_widgets").hide();
    $(".less_widgets").show();    
});

$(".less_widgets").click(function(){
    $(".fms_showmore_widgets").hide();
    $(".more_widgets").show();
    $(".less_widgets").hide();    
});





$(document).on('click','.smart_close',(function(){
    $(this).parent().remove();
}));

/* Image Upload */ 

function bg_firstimage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#bg_img_firstpreview').attr('src', e.target.result).width(155).height(150);
    };
    reader.readAsDataURL(input.files[0]);
  }
}


/** HEADER SETTINGS **/

$("#head_setting").click(function () {
    var effect = 'slide';
    var options = { direction: 'right' };
    var duration = 400;
 
    $('#control-sidebar').toggle(effect, options, duration);
});


/*SLIDING*/
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      $('#header').hide();
      $('#sidebar').hide();
      $("#main-content").addClass("strech");
      $(".fa-expand").toggleClass("fa-compress");
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      $('#header').show();
      $('#sidebar').show();
      $("#main-content").removeClass("strech");
      $(".fa-expand").removeClass("fa-compress");
    }
  }
  /* SLIDE
  -------------------------------------
   */
$(function() {
  var is_mini = false;
  //SLIDES LEFT MENU HIDE OR SHOW
  $("#base_config").on('click', function() {
    $("#base_conf_body").slideToggle("fast");
  });
  $("#adv_confg").on('click', function() {
    $("#adv_conf_body").slideToggle("fast");
  });
  $("#adv_confg").on('click', function() {
    $("#adv_conf_body1").slideToggle("fast");
  });
  // RIGHT SLIDE
  $("#right_slide_button,.pull_right_slide, .pull_right_slide_view").click(function() {
    is_mini = $('#sidebar').hasClass('mini-menu');
    if (!is_mini) {
      $('#sidebar').addClass('mini-menu');
      $('#main-content').addClass('margin-left-50');
    }
    $("#right_content").hide();
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = {
      direction: 'right'
    };
    // Set the duration in milliseconds
    var duration = 400;
    $('#right_slide_div').toggle(effect, options, duration);
  });
  $("#right_close,#right_close1,#companylogo").click(function() {
    is_mini = $('#sidebar').hasClass('mini-menu');
    if (is_mini) {
      $('#sidebar').removeClass('mini-menu');
      $('#main-content').removeClass('margin-left-50');
    }
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = {
      direction: 'right'
    };
    // Set the duration in milliseconds)
    var duration = 400;
    $('#right_slide_div').toggle(effect, options, duration).promise().done(function() {
      $("#right_content").show();
    });

  });
  /* SLIDE RIGHT CONTENTS
  -------------------------------------
   */
  $('#refresh_right').on('click', function() {
    $('#slide_right').find('input').val('');
    $('select').prop('selectedIndex', 0);
    $('.head_right_text').empty();
    $('.head_right_edit').css("display", "none");
    $('.date_span').empty();
  });
  
  /* SHOW/HIDE SLIDE RIGHT CONTENTS
  -------------------------------------
   */
  $(".panel_top a").click(function(e) {
    $("#slide_right > div").hide();
    $(".panel_top a").css("color", "#777777");
    $(this).css("color", "#222222");
    $(this.hash).show();
    e.preventDefault();
  });
  $("#slide_right > div").not("#slide_right1, #slide_right1 div").hide();
});


/*EOF SLIDING*/


$(".btn_minimize").click(function(){  
             /*$(".minimize_body").slideToggle('1000');
            $(this).find('i').toggleClass('fa-plus fa-minus');*/ 
            $(this).closest('.common_style').find(".minimize_body").slideToggle("1000");
            $(this).find('i').toggleClass('fa-plus fa-minus');
         });