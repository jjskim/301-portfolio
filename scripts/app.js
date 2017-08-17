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
    $('.menu').toggle('500');
  });
};

$(document).ready(function() {
  portfolio.handle();
  portfolio.handleClick();
});
