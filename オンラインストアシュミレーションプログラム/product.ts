class product {
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
}
