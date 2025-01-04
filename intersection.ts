type Identry = {
  id: number | string;
  name: string;
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}

// 積集合による新たなIntersection型の定義
type Employee = Identry & Contact;

// 以下は問題なし
const emploryee: Employee = {
  id: '111',
  name: '山田太郎',
  email: 'test@example.com',
  phone: '000-1234-5678'
};

// 以下は電話番号がないのでエラー
// const emploryee2: Employee = {
//   id: '111',
//   name: '山田太郎',
//   email: 'test@example.com'
// };
