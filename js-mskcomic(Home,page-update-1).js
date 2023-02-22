 $(document).ready(function() {
      $('img').attr({
        'data-src': function() {
          return $(this).attr('src');
        },
        'class': 'lazyload',
        'loading': 'lazy'
      }).removeAttr('src');
    });
$("img[src*='s1600']").attr("src", function(i, val) {return val.replace("s1600", "s1600-rw");});
$("img[src*='w144']").attr("src", function(i, val) {return val.replace("w144", "w144-rw");});
$("img[src*='w72']").attr("src", function(i, val) {return val.replace("w72", "w72-rw");});
$("[style*='s500']").each(function() {
  var style = $(this).attr("style");
  style = style.replace("s500", "s500-rw");
  $(this).attr("style", style);
});
$(document).ready((function(){$(".tabx span").click((function(){var a=$(this).attr("data-tab");$(".tabx span").removeClass("active"),$(".PopularPosts").removeClass("current"),$(this).addClass("active"),$("#"+a).addClass("current")}))}));
