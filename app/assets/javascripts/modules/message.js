$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
      `<div class="message-box" data-message-id=${message.id}>
        <div class="message-info">
          <div class="message-list-name">
            ${message.user_name}
          </div>
          <div class="message-list-name__calender">
            ${message.created_at}
          </div>
        </div>
        <div class="message-text">
          <p class="message__content">
            ${message.content}
          </p>
          <img class="message__image" src="${message.image}">
        </div>
      </div>`
      return html;
    }
    else {
      let html =
      `<div class="message-box"data-message-id=${message.id}>
      <div class="message-info">
        <div class="message-list-name">
          ${message.user_name}
        </div>
        <div class="message-list-name__calender">
          ${message.created_at}
        </div>
      </div>
      <div class="message-text">
        <p class="message__content">
          ${message.content}
        </p>
      </div>
    </div>`
    return html;
    }
  }
  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data)
      $('.chat-main__message-list').append(html);      
      $('form')[0].reset();
      $('.form__Btn').prop('disabled', false);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.form__Btn').prop("disabled", false);
    });
  });
});
