(function($) {
 $.fn.flexgrid = function(options) { 
   var grid = $(this);
   grid.find(" > div > div").click(function() {
    grid.find("div").removeClass("active");
    grid.find("div").addClass("inactive");
    $(this).parent().addClass("active");
    grid.find(" > div > div:nth-of-type(" + ($(this).index()+1) + ")").addClass("active");
    /*var thisindex = $(this).index();
    grid.find(" > div").each(function() {
      $(this).find(" > div").each(function(index) {
        if(index == thisindex) {
          $(this).addClass("active");
        }
      });
    });
    */
   });
 };
})(jQuery);
