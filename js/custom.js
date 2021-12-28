jQuery(document).ready(function($) {
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