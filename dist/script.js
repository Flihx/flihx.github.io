// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
  // startSlide: 4,
  // auto: 3000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
});

// with jQuery
// window.mySwipe = $('#mySwipe').Swipe().data('Swipe');

function refresh() {
  document.getElementById("refresh-icon").className += "fa fa-refresh fa-spin";
  location.reload();
}


$('.next').on('click', function(e) {
  e.preventDefault();
  mySwipe.next();
});
$('.prev').on('click', function(e) {
  e.preventDefault();
  mySwipe.prev();
});