$(function () {
  $('nav>ul>li').mouseenter(function () {
    $(this).addClass('show');
  })
  $('nav>ul>li').mouseleave(function () {
    $(this).removeClass('show');
  })
});