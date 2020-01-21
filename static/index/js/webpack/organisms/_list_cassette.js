import Cassette from '../molecule/_cassette';

export default class ListCassette {
    // list_cassetteの振る舞いを定義

    constructor($dom) {
        // cassetteのリスト
        this.$dom = $dom;

        // 1つ1つ初期化していく
        var color = ['red', 'green']
        this.listCassetteInstance = [];
        for (let index = 0; index < $dom.length; index++) {
            // クラス追加
            this.listCassetteInstance[index] = new Cassette(this.$dom[index]);
            // イベント追加
            this.listCassetteInstance[index].setClickEvent(color[index%2]);
        }
    }
}
