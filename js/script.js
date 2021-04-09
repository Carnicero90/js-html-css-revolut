$(function () {
  $('nav>ul>li').mouseenter(function () {
    $(this).addClass('show');
  })
  $('nav>ul>li').mouseleave(function () {
    $(this).removeClass('show');
  })
});
// TODO
// $(function () {
//   $('nav .lang i').mouseenter(function () {
//     add chevron-down class
//   })
//   $('nav .lang i').mouseleave(function () {
//    rm chevron-down class
//   })
// });