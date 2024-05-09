export class Book {
  title: string = "ishii";
  author: string = "ishii";
  stock: number = 10;

  borroowBook(): boolean {
    return this.stock >= 0;
  }
}
