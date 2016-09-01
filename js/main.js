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

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/


// Fixed navbar on Scroll
/*if(!$('.navbar-toggle').is(':visible')) {
  $('.navbar').affix({
    offset: {
      top: $('header').innerHeight()
    }
  }); 
}*/

// Highlight the top nav as scrolling occurs
/*$('body').scrollspy({
    target: '.navbar-fixed-top'
})*/

// Navbar class active
/*$(document).ready( function () {
  $(".nav li").click( function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
});*/

// Dropdowns on hover on desktop
/*var navbarToggle = '.navbar-toggle'; // name of navbar toggle, BS3 = '.navbar-toggle', BS4 = '.navbar-toggler'  
$('.dropdown, .dropup').each(function() {
  var dropdown = $(this),
    dropdownToggle = $('[data-toggle="dropdown"]', dropdown),
    dropdownHoverAll = dropdownToggle.data('dropdown-hover-all') || false;
  
  // Mouseover
  dropdown.hover(function(){
    var notMobileMenu = $(navbarToggle).size() > 0 && $(navbarToggle).css('display') === 'none' && $(document).width() >= 992 ;
    if ((dropdownHoverAll === true || (dropdownHoverAll === false && notMobileMenu))) { 
      dropdownToggle.trigger('click');
    }
  });
});*/


// Close dropdowns on "esc"
/*$('.dropdown-menu').bind('keydown',function(event) {
  // ESC = Keycode 27
  if (event.keyCode == 27) {
    $(this).parrent().find('.dropdown-toggle').dropdown('toggle');
  }
});*/

// Closes the Responsive Menu on Menu Item Click
/*$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});*/

// Equal height
/*$('.equial').equialHeight();*/

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

$('.map-keeper [data-href]').focus( function() {
  var $svg_width        = $(this)[0].getBBox().width,
      $svg_height       = $(this)[0].getBBox().height,
      $svg_top          = $(this).position().top,
      $svg_left         = $(this).position().left,
      $legend_link      = $(this).data('href'),
      $legend_item      = $('.main-legend').find('[href=' + $legend_link + ']').find('.legend-link-title'),
      $legend_descr     = $($legend_item).data('descr'),
      $legend_url       = $($legend_item).data('url'),
      $legend_url_text  = $($legend_item).text(),
      $legend_logo      = $($legend_item).data('logo'),
      $map_buble        = $('.map-bubble');

      console.log($(this));

      $map_buble.find('.map-bubble-logo').attr('src', $legend_logo);
      $map_buble.find('.map-bubble-url').attr($legend_url);
      $map_buble.find('.map-bubble-title a').attr('href', $legend_url);
      $map_buble.find('.map-bubble-title a').text($legend_url_text);
      $map_buble.find('.map-bubble-descr').text($legend_descr);

      $map_buble.css('top', $svg_top + $svg_height / 2);
      $map_buble.css('left', $svg_left + $svg_width / 2);
      $map_buble.css('display', 'block');
}).blur( function () {
  var $map_buble        = $('.map-bubble');
  $map_buble.css('display', 'none');
});