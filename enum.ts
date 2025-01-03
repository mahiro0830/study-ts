/**
 * uNum型の準備（数値列挙型）
 */
enum Direction1 {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
};

let left: Direction1 = Direction1.Left;

console.log(left); // 2

// 以下、string型を代入しようとするとエラーになる
// left = 'Left';

/**
 * uNum型の準備（文字列列挙型）
 */
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
};

// APIなど外部から値が渡された想定
const value = 'DOWN';
// 文字列をeNum型に変換
let enumValue = value as Direction2;

// 列挙型の値を使って処理を分岐
switch (enumValue) {
  case Direction2.Up :
    console.log('上');
    break;
  case Direction2.Down :
    console.log('下');
    break;
  case Direction2.Left :
    console.log('左');
    break;
  case Direction2.Right :
    console.log('右');
    break;
  default :
}
