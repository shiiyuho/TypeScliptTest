export class product {
  Id: number = 0;
  name: string = "";
  price: number = 0;
  stock: number = 0;

  constructor(Id: number, name: string, price: number, stock: number) {
    this.Id = Id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  public displayInfo() {
    console.log(
      `title: ${this.Id}, author: ${this.name},this:${this.price},stock:${this.stock}`
    );
  }
  public decreaseStock(): void {
    if (this.stock > 0) {
      this.stock--;
      console.log(`Stock decreased for ${this.name}. New stock: ${this.stock}`);
    } else {
      console.log(`${this.name} is out of stock.`);
    }
  }
}
