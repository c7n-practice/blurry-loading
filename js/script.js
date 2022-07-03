const loadText = document.querySelector(`.loading-text`)
const bg = document.querySelector(`.bg`)

let load = 0

function blurring(){
  load++
    if(load > 99) {
      clearInterval(int)
    }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100,20,0)}px)`
}

let int = setInterval(blurring, 30)

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}





// メモ----------
// queryselectour・・・CSSのセレクタを使って要素を取得できる＝getElementByClassName置き換え可
//DOM・・・APIの一種。HTML等のソースをオブジェクトとして扱う
// queryselectourで引っ張ってこれるのはCSSだけじゃない？
// JqueryではDOM使わない？

// function blurring はconst blurring = function(){ と同じ？


// clearInterval・・・setIntervalで設定したものを取り消す
// ＄は呼び出し？ 値を文字に埋め込むことができる
// ``をつけるところ 