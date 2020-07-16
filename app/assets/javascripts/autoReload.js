$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main__message__list__text__box" data-message-id=${message.id}>
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
            <img class="main__message__form__box__image" src="${message.image}">
          </div>
        </div>`
        return html;
      } else {
        let html =
        `<div class="main__message__list__text__box"data-message-id=${message.id}>
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
        </div>`
        return html;
      };
  }


  let reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    let last_message_id = $('.main__message__form__box:last').data("message-id") || 0;
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      // 更新するメッセージがなかった場合は.doneの後の処理が動かないようにする
      if (messages.length !== 0) {
        //追加するHTMLの入れ物を作る
        let insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
        $('.main__message__list').append(insertHTML);
        $('.main__message__list').animate({ scrollTop: $('.main__message__list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});