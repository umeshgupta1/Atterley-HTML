jQuery(document).ready(function($) {
  if ($(window).scrollTop() > 40) {
    $('.header-main').addClass('sticky');
  }
  else {
    $('.header-main').removeClass('sticky');
  }
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 40) {
      $('.header-main').addClass('sticky');
    }
    else {
      $('.header-main').removeClass('sticky');
    }
  });
  $(".filter-box").each(function() {
    var $this = $(this).find(".filter-title");
    $this.click(function() {
      if ($(this).parent(".filter-box").hasClass("active")) {
        $(".filter-box").removeClass("active");
      } else {
        $(".filter-box").removeClass("active");
        $(this).parent(".filter-box").addClass("active");
      }
    });
  });
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".filter-box.active").length) {
      $(".filter-box").removeClass("active");
    }
  });
});