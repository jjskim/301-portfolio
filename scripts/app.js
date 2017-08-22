'use strict';

var portfolio = {};

portfolio.handle = function() {

  $('nav').on('click', 'li', function() {
    $('section').hide();
    var $showThis = $(this).data('content');
    $('section.' + $showThis).fadeIn();
  });
};

portfolio.handleClick = function() {
  $('a#icon').on('click', function() {
    if ($('nav.topnav').hasClass('responsive')) {
      $('nav.topnav').removeClass('responsive');
    } else {
      $('nav.topnav').addClass('responsive');
    }
    // $('#tabs li').toggle();
    // $('#tabs li').css('display', 'inline');
  });
};

portfolio.showCarousel = function() {
  var index = 0;
  var imgList = [$('#1'), $('#2'), $('#3')];

  $('#right-button').on('click', function() {
    index++;
    $('section#carousel img').hide();
    if (index === 3) {
      index = 0;
    }
    imgList[index].fadeIn();
  });

  $('#left-button').on('click', function() {
    index--;
    $('section#carousel img').hide();
    if (index === -1) {
      index = 2;
    }
    imgList[index].fadeIn();
  });

  $('section#carousel img').hide();
  imgList[index].show();
};

$(document).ready(function() {
  portfolio.handle();
  portfolio.handleClick();
  portfolio.showCarousel();
});
