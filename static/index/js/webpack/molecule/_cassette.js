export default class Cassette {
    // cassetteの振る舞いを定義

    constructor($dom) {
        this.$dom = $dom;
        // 初期の背景色
        this.initBackgroundColor = $dom.style.backgroundColor;
        // 背景色が初期化した色かどうか
        this.isInitBackgroundColor = true;
    }

    toggleColor(backgroundColor) {
        // 背景色を変更するメソッド
        if (this.isInitBackgroundColor) {
            this.$dom.style.backgroundColor = backgroundColor;
        }
        else {
            this.$dom.style.backgroundColor = this.initBackgroundColor;
        }
        this.isInitBackgroundColor = !this.isInitBackgroundColor;
    }

    setClickEvent(changeColor) {
        // カセットを押したらイベントを発火させる
        // コールバック関数とthisの罠
        // = function() {~}とかくと, 受け取るthisはクリックされたオブジェクトになっている...違うものが渡されている
        // アロー関数を使うと解決できる
        // https://qiita.com/sanriyochan/items/6773e4f28d680ba085ee
        this.$dom.onclick = () => { this.toggleColor(changeColor) };
    }
}
