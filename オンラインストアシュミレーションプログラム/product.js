"use strict";
class product {
    constructor(Id, name, price, stock) {
        this.Id = 0;
        this.name = "";
        this.price = 0;
        this.stock = 0;
        this.Id = Id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    displayInfo() {
        console.log(`title: ${this.Id}, author: ${this.name},this:${this.price},stock:${this.stock}`);
    }
}
