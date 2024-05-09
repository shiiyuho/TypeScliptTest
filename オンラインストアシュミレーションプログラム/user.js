"use strict";
class User {
    constructor() {
        this.ID = 0;
        this.name = "";
        this.mail = "";
    }
    displayInfo() {
        console.log(`title: ${this.ID}, author: ${this.name},this:${this.mail}`);
    }
}
