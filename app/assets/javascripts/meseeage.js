$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        <div class="main__message__list__text__box">
          <div class="main__message__list__texts">
            <div class="main__message__list__username">
              ${message.user_name}
            </div>
            <div class="main__message__list__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main__message__list__message">
            <p class="main__message__from">
              ${message.content}
            </p>
          </div>
        </div>
      return html;
    } else {
      let html =
        <div class="main__message__list__text__box">
          <div class="main__message__list__texts">
            <div class="main__message__list__username">
              ${message.user_name}
            </div>
            <div class="main__message__list__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main__message__list__message">
            <p class="main__message__from">
              ${message.content}
            </p>
          </div>
        </div>
        return html;
      };
    }
  
  $('.main__message__form__box').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageField').append(html); 
      $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});     
      $('form')[0].reset();
    })  
  });
});