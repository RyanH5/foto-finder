$('#add_image__file').on('click', addCardToPage);


function addCardToPage() {
  $('#photo_album__section').prepend(`<article><h2>${$('#photo_create_title__input').val()}</h2><img src=""><p>${$('#photo_create_caption__input')}</p><footer><footer><input type="submit" class="trash_can__btn"><input type="submit class="heart__btn"</footer></article>`)
}