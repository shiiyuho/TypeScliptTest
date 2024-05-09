class User {
  ID: number = 0;
  name: string = "";
  mail: string = "";

  public displayInfo() {
    console.log(`title: ${this.ID}, author: ${this.name},this:${this.mail}`);
  }
}
