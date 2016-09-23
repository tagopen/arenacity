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
  autoplay: true,
  speed: 1500,
  slidesToShow: 1,
  variableWidth: true
});

$('.map__slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
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
  var $map_buble = $('.map-bubble'),
      $map       = $('.map-keeper [data-href]');
  $map.on('click', function(e) {
    var $svg          = $(this)[0].getBBox(),
    $svg_width        = $svg.width,
    $svg_height       = $svg.height,
    $svg_top          = $svg.y,
    $svg_left         = $svg.x,
    $legend_link      = $(this).data('href'),
    $legend_item      = $('.main-legend').find('[href=' + $legend_link + ']').find('.legend-link-title'),
    $legend_descr     = $($legend_item).data('descr'),
    $legend_url       = $($legend_item).data('url'),
    $legend_url_text  = $($legend_item).text(),
    $legend_logo      = $($legend_item).data('logo');

    $map_buble.hide();
    if ($(this).closest('[data-aria]').attr('data-aria') == 'true') {
      $svg_width *= 2;
      $svg_height *= 2;
      $svg_top *= 2;
      $svg_left *= 2;
    }

    if ($legend_item.length != '0') {
      $map_buble.find('.map-bubble-logo').attr('src', $legend_logo);
      $map_buble.find('.map-bubble-url').attr($legend_url);
      $map_buble.find('.map-bubble-title a').attr('href', $legend_url);
      $map_buble.find('.map-bubble-title a').text($legend_url_text);
      $map_buble.find('.map-bubble-descr').text($legend_descr);

      $map_buble.css('top', $svg_top + $svg_height / 2);
      $map_buble.css('left', $svg_left + $svg_width / 2);
      $map_buble.show();

      var firstClick = true;
      $(document).bind('click.myEvent', function(e) {
        if (!firstClick && $(e.target).closest($map).length == 0) {
          $map_buble.hide();
          $(document).unbind('click.myEvent');
        }
        firstClick = false;
      });
    }
    e.preventDefault();
  });

   $('.legend-link').on('click', function(e) {
    e.preventDefault();
    var $svg_id       = $(this).attr('href'),
        $svg          = $('[data-href=' + $svg_id + ']');

    $('.legend-link').removeClass('active');
    $(this).addClass('active');
    $(document).unbind('click.myEvent');
    $svg.triggerHandler('click');
  });

  // zoom x1, x2 btn
  $('.map-keeper__btn').on('click', function (e) {
    e.preventDefault();
    var $this       = $(this),
        $map        = $($this.data('toggle') ),
        $map_width  = $map.width(),
        $map_height = $map.height(),
        $zoom       = 2;

    if ($this.hasClass('js-x2') && ( $map.attr('data-aria') === 'false' )) {
      $map.attr('data-aria', 'true');
      $map.css({width: $map_width * $zoom, height: $map_height * $zoom});
      $map.closest('.map-keeper').css('overflow-x', 'scroll');
    } else {

      if (!($this.hasClass('js-x2')) && ( $map.attr('data-aria') === 'true' )) {
        $map.attr('data-aria','false');
        $map.css({width: $map_width / $zoom, height: $map_height / $zoom});
        $map.closest('.map-keeper').css('overflow-x', 'hidden');
      } 
    }
 });
});