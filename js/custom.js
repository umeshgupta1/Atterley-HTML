jQuery(document).ready(function($) {
  if ($(window).scrollTop() > 40) {
    $('.header-main').addClass('sticky');
  } else {
    $('.header-main').removeClass('sticky');
  }
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 40) {
      $('.header-main').addClass('sticky');
    } else {
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

  function mobAction() {
    $(window).on("resize", function() {
      if ($(window).width() < 767) {
        $(".menu-btn").click(function(e) {
          $("body").addClass("menu-open");
          $(".cat-menu").fadeIn(150).animate({ left: "0" }, 150);
        });
        $(".close-menu-btn").click(function(e) {
          $("body").removeClass("menu-open");
          $(".cat-menu").animate({ left: "-100%" }, 150).fadeOut(150);
        });
        $("nav>ul>li>a").click(function(e) {
          e.preventDefault();
          $("nav>ul>li").removeClass("active");
          $(this).parent("li").addClass("active");
        });
        $(".nav-div li.parent a").click(function(e) {
          e.preventDefault();
          $(this).toggleClass("active");
        });
        $(".shop-by-category .submenu-wrap").each(function() {
          var $this = $(this);
          var $thisul = $this.find("ul:first-child");
          $this.find(".last").prependTo($thisul);
        });
        $(".mobile-filter").click(function(e) {
          $(".filter-wrapper .filter-inner").fadeIn(150).animate({ left: "0" }, 150);
          $("body").addClass("menu-open");
        });
        $(".filter-close-btn").click(function(e) {
          $("body").removeClass("menu-open");
          $(".filter-wrapper .filter-inner").animate({ left: "-100%" }, 150).fadeOut(150);
        });
        $(".mob-acco .row-heading").click(function() {
          $(this).toggleClass("active");
        });
      } else {
        $("body").removeClass("menu-open");
        $(".cat-menu").attr("style", "");
        $(".filter-wrapper .filter-inner").attr("style", "");
        $(".mob-acco .row-heading").removeClass("active");
      }
    }).resize();
  }
  mobAction();
});