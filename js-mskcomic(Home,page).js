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
jQuery(document).ready(function($){ $(".tabbed-widget-content-widget-themater_tabs-1432447472-id").hide(); $("ul.tabbed-widget-widget-themater_tabs-1432447472-id li:first a").addClass("tabbed-widget-current").show(); $(".tabbed-widget-content-widget-themater_tabs-1432447472-id:first").show(); $("ul.tabbed-widget-widget-themater_tabs-1432447472-id li a").click(function() { $("ul.tabbed-widget-widget-themater_tabs-1432447472-id li a").removeClass("tabbed-widget-current a"); $(this).addClass("tabbed-widget-current"); $(".tabbed-widget-content-widget-themater_tabs-1432447472-id").hide(); var activeTab = $(this).attr("href"); $(activeTab).fadeIn(); return false; }); });
