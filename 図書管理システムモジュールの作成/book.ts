export class Book {
  title: string = "";
  author: string = "";
  stock: number = 0;

  public displayInfo() {
    console.log(
      `title: ${this.title}, author: ${this.author},stock:${this.stock}`
    );
  }
  public borrowBook() {
    for (let i = 1; i >= 0; i--) {
      console.log(i + "貸し出しされました");
    }
    console.log("在庫なし");
  }
}
