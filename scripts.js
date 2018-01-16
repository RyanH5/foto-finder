var camera = new Audio ("images/camera-sound.mp3");
$('#add_image__file').on('click', prependCard);



function prependCard(event) {
  event.preventDefault();
  $('#photo_album__section').prepend(`<article class="prepend_card"><h2 class="prepend_card__title">${$('#photo_create_title__input').val()}</h2><img src="" class="prepend_card__image"><p>${$('#photo_create_caption__input').val()}</p><footer><input type="submit" class="remove_btn"><input type="submit" class="favorite_btn"</footer></article>`)
  console.log('click')
  camera.play();
}