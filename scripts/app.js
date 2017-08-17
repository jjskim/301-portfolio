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
    // $('#tabs li').css('display', 'inline');
  });
};

$(document).ready(function() {
  portfolio.handle();
  portfolio.handleClick();
});
