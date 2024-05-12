export class user {
  //class userのエクスポート文
  ID: number = 0;
  name: string = "";
  mail: string = "";

  constructor(ID: number, name: string, mail: string) {
    //constructorでの初期化文
    this.ID = ID;
    this.name = name;
    this.mail = mail;
  }

  public displayInfo() {
    //実装文
    console.log(`ID: ${this.ID}, name: ${this.name},mail:${this.mail}`);
  }
}
