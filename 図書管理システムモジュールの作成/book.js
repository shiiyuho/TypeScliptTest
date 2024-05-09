export class Book {
    title = "ishii";
    author = "ishii";
    stock = 10;
    borroowBook() {
        return this.stock >= 0;
    }
}
