$(document).ready(function() {
  function handleButtonClick(event, soundId) {
    event.preventDefault();
    playSound(soundId);
    var container = $('.container');
    container.removeClass('visible');
    setTimeout(function() {
      window.location.href = event.target.href;
    }, 1000);
  }

  function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.play();
  }

  $('#recipe1').click(function(event) {
    handleButtonClick(event, 'sound');
  });

  $('#recipe2').click(function(event) {
    handleButtonClick(event, 'sound');
  });

  $('#recipe3').click(function(event) {
    handleButtonClick(event, 'sound');
  });

  $('.container').addClass('visible');
});

function scaleImage(image) {
  image.style.transform = 'scale(1.1)';
}

function resetImage(image) {
  image.style.transform = 'scale(1)';
}
