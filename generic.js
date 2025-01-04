var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        // T型の配列を準備
        this.array = [];
        // T型の値を配列に追加する
        this.push = function (item) {
            _this.array.push(item);
        };
        // T型の配列の先頭の値を取り出す
        this.pop = function () {
            return _this.array.shift();
        };
        // 配列の中身を表示
        this.show = function () {
            console.log(_this.array);
        };
    }
    return Queue;
}());
var queue = new Queue(); // 数値を扱うキューを作成
queue.push(111);
queue.push(112);
// queue.push('abc'); // エラー
queue.show();
