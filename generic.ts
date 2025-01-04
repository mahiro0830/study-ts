class Queue<T> {
  // T型の配列を準備
  private array: T[] = [];

  // T型の値を配列に追加する
  push = (item: T) : void => {
    this.array.push(item);
  }

  // T型の配列の先頭の値を取り出す
  pop = () : T | undefined => {
    return this.array.shift();
  }

  // 配列の中身を表示
  show = () : void => {
    console.log(this.array);
  }
}

const queue = new Queue<number>(); // 数値を扱うキューを作成
queue.push(111);
queue.push(112);
// queue.push('abc'); // エラー

queue.show();
