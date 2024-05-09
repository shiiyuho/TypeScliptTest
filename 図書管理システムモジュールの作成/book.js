// book.ts、エクスポート
export class Book {
    title;
    author;
    stock;
    constructor(title, author, stock) {
        this.title = title;
        this.author = author;
        this.stock = stock;
    }
    displayInfo() {
        console.log(`title: ${this.title}, author: ${this.author}, stock: ${this.stock}`);
    }
    borrowBook() {
        if (this.stock > 0) {
            this.stock--;
            console.log(`貸出しました`);
        }
        else {
            console.log(`在庫切れ`);
        }
    }
}
