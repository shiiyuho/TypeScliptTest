export class product {
  //productクラスの設定
  Id: number = 0;
  name: string = "";
  price: number = 0;
  stock: number = 0;

  constructor(Id: number, name: string, price: number, stock: number) {
    //constructorで初期化
    this.Id = Id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  public displayInfo() {
    //displayInfoで出力
    console.log(
      `title: ${this.Id}, author: ${this.name},this:${this.price},stock:${this.stock}`
    );
  }
  public decreaseStock(): void {
    //在庫減少メソッド
    if (this.stock > 0) {
      //stockが0より多ければ以下が作動する
      this.stock--; //作動したら1つずつ減少
      console.log(`在庫が減少します ${this.name}. 在庫数: ${this.stock}`); //出力
    } else {
      //stockが0なら以下を出力する
      console.log(`${this.name} 在庫切れです。`);
    }
  }
}
