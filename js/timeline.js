/**
 * not a plugin, more like a mess.
 * i wrote this so I could power my about page.
 * enjoy stealing.
 *
 * for some reason it lags with a lot of images, probably cause the images weight a lot. chrome bugs ftw.
*/

$(function() {

  var timelineItem = $('.about-timeline li');
  
  $('.about-year').each(function(){
    $(this).addClass('hide'); // yo kids, yo husbands, cuz they rapin errybody!
  });

  timelineItem.click(function(){
    var year = $(this).find('.year').text();
    
    $('.about-year').each(function(){
      $(this).removeClass('show');
      $(this).addClass('hide'); // YOLO
    });
    
    timelineItem.each(function(){
      $(this).removeClass('active'); // cuz i can
    });
    
    $('.about-year[rel="' + year +'"]').addClass('show');
    
    $(this).addClass('active');
    
  });
  
});
