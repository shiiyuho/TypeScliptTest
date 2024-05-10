// bookクラスをエクスポート
export class Book {
    //bookクラスの作成
    title;
    author; //プロパティ
    stock;
    constructor(title, author, stock) {
        this.title = title;
        this.author = author; //コンストラクタで初期化
        this.stock = stock;
    }
    displayInfo() {
        //ディスプレイインフォで出力
        console.log(`title: ${this.title}, author: ${this.author}, stock: ${this.stock}` //
        );
    }
    borrowBook() {
        //ひとつずつ減らしていく「if文」
        if (this.stock > 0) {
            this.stock--;
            console.log(`貸出しました`);
        }
        else {
            console.log(`在庫切れ`);
        }
    }
}
