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
  $('i').on('click', function() {
    $('#tabs li').toggle();
    $('#tabs li').css('display', 'inline');
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
    imgList[index].show();
  });

  $('#left-button').on('click', function() {
    index--;
    $('section#carousel img').hide();
    if (index === -1) {
      index = 2;
    }
    imgList[index].show();
  });

  $('section#carousel img').hide();
  imgList[index].show();
};

$(document).ready(function() {
  portfolio.handle();
  portfolio.handleClick();
  portfolio.showCarousel();
});
