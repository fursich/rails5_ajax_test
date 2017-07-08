

//  ajax返信時に呼び出してもらうための､｢待ち受け関数｣を定義する
function set_ajax() {

  // .ajax-btnクラスのajax通信が成功に終わったタイミングで呼ばれる
  $(function() { $('.ajax-btn').on('ajax:success', function(event) { // eventの中に､呼ばれた時点での情報が詰めてある

    data = event.detail[0]    // コントローラーで渡したJSONは､event.detail[0]に入ってやってきます
    $('.timestamp').text(data['time']);  // 渡したデータの中で､キー'time'に対応する値を取り出す
    });
  })

  // ajax通信が失敗したらこちらが呼ばれる
  $('.ajax-btn').on('ajax:error', function(event) {
    alert("失敗！");
  });
}

// ↑で定義したイベント待ち関数をセットするための命令
// 表示ページが整ったら（つまりdivとかclassが白紙のページにセットされてから､ここが作動する｡
// (それより早くに作動するとセットするべき対象がいないくて失敗します)
// 普通は$(document).on('ready')でよい｡なぜこうなっているのか気になれば､
// turbolinks 5で検索してください
$(document).on('turbolinks:load', set_ajax);
