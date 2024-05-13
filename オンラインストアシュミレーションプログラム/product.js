export class product {
    constructor(Id, name, price, stock) {
        //productクラスの設定
        this.Id = 0;
        this.name = ""; //プロパティ
        this.price = 0;
        this.stock = 0;
        //constructorで初期化
        this.Id = Id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    displayInfo() {
        //displayInfoで出力
        console.log(`title: ${this.Id}, author: ${this.name},this:${this.price},stock:${this.stock}`);
    }
    decreaseStock() {
        //在庫減少メソッド
        if (this.stock > 0) {
            //stockが0より多ければ以下が作動する
            this.stock--; //作動したら1つずつ減少
            console.log(`在庫が減少します ${this.name}. 在庫数: ${this.stock}`); //出力
        }
        else {
            //stockが0なら以下を出力する
            console.log(`${this.name} 在庫切れです。`);
        }
    }
}
