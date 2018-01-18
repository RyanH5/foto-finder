$('#add_image__file').on('click', prependCard);
$('#select_image__file').on('change', function() {
  selectFile(this)
});



function prependCard(event) {
  event.preventDefault();
  $('#photo_album__section').prepend(`<article class="prepend_card"><h2 class="prepend_card__title">${$('#photo_create_title__input').val()}</h2><img src="#" class="prepend_card__image"><p>${$('#photo_create_caption__input').val()}</p><footer><button class="remove_btn"><img src="images/trash-can.svg" id="trash_can"></button><button class="favorite_btn"><img src="images/beige-heart.svg" id="beige_heart"></button></footer></article>`);
  var camera = new Audio ("images/camera-sound.mp3");
  camera.play();
  $('#photo_create_title__input').val('');
  $('#photo_create_caption__input').val('');
  $('#photo_create_title__input').focus();
}

function selectFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(event) {
      $('.prepend_card__image').attr('src', event.target.result)
    }
      reader.readAsDataURL(input.files[0]);
  }
}
