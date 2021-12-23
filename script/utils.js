// Utility functies
// function norm(value, min, max) {
//   return (value - min) / (max - min);
// }

function translateRegio(input) {
  let regio = undefined;
  if (input.toLowerCase() == 'wallonie') {
    return 'wallonia';
  } else if (input.toLowerCase() == 'vlaanderen') {
    return 'flanders';
  } else {
    return 'brussels';
  }
}

function positionPopup() {
  if (!$('#overlay_form').is(':visible')) {
    return;
  }
  $('#overlay_form').css({
    left: ($(window).width() - $('#overlay_form').width()) / 2,
    top: ($(window).width() - $('#overlay_form').width()) / 7,
    position: 'absolute',
    'z-index': 0
  });
}

function toggleContainer() {
    document.querySelector(".container").classList.toggle('hidden')
}


$(window).bind('resize', positionPopup);
