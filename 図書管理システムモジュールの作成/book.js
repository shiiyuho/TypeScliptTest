export class Book {
    title = "";
    author = "";
    stock = 0;
    displayInfo() {
        console.log(`title: ${this.title}, author: ${this.author},stock:${this.stock}`);
    }
    borrowBook() {
        for (let i = 1; i >= 0; i--) {
            console.log(i + "貸し出しされました");
        }
        console.log("在庫なし");
    }
}
