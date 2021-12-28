jQuery(document).ready(function($) {
  /*$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 100) {
      $('header').addClass('fixed');
      $(".logo a img").attr("src", "images/logo-black.png")
    } else {
      $('header').removeClass('fixed');
      $(".logo a img").attr("src", "images/logo-white.png")
    }
  });*/




  $(".filter-box").each(function(){
    var $this = $(this).find(".filter-title");
    $this.click(function(){
      if ($(this).parent(".filter-box").hasClass("active")) {
        $(".filter-box").removeClass("active");
      }
      else {
        $(".filter-box").removeClass("active");
        $(this).parent(".filter-box").addClass("active");
      }
    });
  });
  $(document).on("click", function(event){
    if(!$(event.target).closest(".filter-box.active").length){
      $(".filter-box").removeClass("active");
    }
  });

});