/**
 * uNum型の準備（数値列挙型）
 */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; // 3
})(Direction1 || (Direction1 = {}));
;
var left = Direction1.Left;
console.log(left); // 2
// 以下、string型を代入しようとするとエラーになる
// left = 'Left';
/**
 * uNum型の準備（文字列列挙型）
 */
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
;
// APIなど外部から値が渡された想定
var value = 'DOWN';
// 文字列をeNum型に変換
var enumValue = value;
// 列挙型の値を使って処理を分岐
switch (enumValue) {
    case Direction2.Up:
        console.log('上');
        break;
    case Direction2.Down:
        console.log('下');
        break;
    case Direction2.Left:
        console.log('左');
        break;
    case Direction2.Right:
        console.log('右');
        break;
    default:
}
