/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

$('.carousel-2').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoPlay: true,
  speed: 1500,
  slidesToShow: 1,
  variableWidth: true
});

$('.map__slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoPlay: true,
  speed: 1500,
  slidesToShow: 1,
  variableWidth: true
});

$('.additional-legend-item').mouseover(function(){
  var $map_selector = 'map-' + $(this).attr('data-type'),
      $map_class    = '.' + $map_selector;
  $('.map-keeper').find($map_class).attr("class", $map_selector + " hover");
}).mouseout(function(){
  var $map_selector = 'map-' + $(this).attr('data-type'),
      $map_class    = '.' + $map_selector;
  $('.map-keeper').find($map_class).attr("class", $map_selector);
});

$(document).ready(function () {
  $map_buble = $('.map-bubble');

  $('.map-keeper [data-href]').on('click', function(e) {
    e.preventDefault();
    var $svg_width    = $(this)[0].getBBox().width,
    $svg_height       = $(this)[0].getBBox().height,
    $svg_top          = $(this).position().top,
    $svg_left         = $(this).position().left,
    $legend_link      = $(this).data('href'),
    $legend_item      = $('.main-legend').find('[href=' + $legend_link + ']').find('.legend-link-title'),
    $legend_descr     = $($legend_item).data('descr'),
    $legend_url       = $($legend_item).data('url'),
    $legend_url_text  = $($legend_item).text(),
    $legend_logo      = $($legend_item).data('logo');

    $map_buble.find('.map-bubble-logo').attr('src', $legend_logo);
    $map_buble.find('.map-bubble-url').attr($legend_url);
    $map_buble.find('.map-bubble-title a').attr('href', $legend_url);
    $map_buble.find('.map-bubble-title a').text($legend_url_text);
    $map_buble.find('.map-bubble-descr').text($legend_descr);

    $map_buble.css('top', $svg_top + $svg_height / 2);
    $map_buble.css('left', $svg_left + $svg_width / 2);
    $map_buble.show();

  });
});