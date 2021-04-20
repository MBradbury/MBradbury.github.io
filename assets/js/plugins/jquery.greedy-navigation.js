/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Move item to the hidden list
    while($vlinks.width() > availableSpace) {
      last = $vlinks.children().last();
      last.remove();
      last.prependTo($hlinks);
    }

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // Try adding a hidden item to the visible items
    while($vlinks.width() <= availableSpace && $hlinks.children().length > 0) {
      first = $hlinks.children().first();
      first.remove();
      first.appendTo($vlinks);
    }

    // Woops, too big, hide it again
    if($vlinks.width() > availableSpace) {
      // Move item to the hidden list
      last = $vlinks.children().last();
      last.remove();
      last.prependTo($hlinks);
    }

    // Hide the dropdown btn if hidden list is empty
    if($hlinks.children().length == 0) {
      $btn.addClass('hidden');
    }
  }
}

// Window listeners
$(window).on('resize', function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
