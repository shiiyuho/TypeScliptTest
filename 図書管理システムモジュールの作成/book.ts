// bookクラスをエクスポート
export class Book {
  //bookクラスの作成
  title: string;
  author: string; //プロパティ
  stock: number;

  constructor(title: string, author: string, stock: number) {
    this.title = title;
    this.author = author; //コンストラクタで初期化
    this.stock = stock;
  }

  displayInfo(): void {
    //ディスプレイインフォで出力
    console.log(
      `title: ${this.title}, author: ${this.author}, stock: ${this.stock}` //
    );
  }

  borrowBook(): void {
    //ひとつずつ減らしていく「if文」
    if (this.stock > 0) {
      this.stock--;
      console.log(`貸出しました`);
    } else {
      console.log(`在庫切れ`);
    }
  }
}
