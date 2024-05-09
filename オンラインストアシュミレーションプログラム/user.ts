export class user {
  ID: number = 0;
  name: string = "";
  mail: string = "";

  constructor(ID: number, name: string, mail: string) {
    this.ID = ID;
    this.name = name;
    this.mail = mail;
  }

  public displayInfo() {
    console.log(`ID: ${this.ID}, name: ${this.name},mail:${this.mail}`);
  }
}
