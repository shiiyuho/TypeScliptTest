export class user {
    constructor(ID, name, mail) {
        //class userのエクスポート文
        this.ID = 0;
        this.name = ""; //内容
        this.mail = "";
        //constructorでの初期化文
        this.ID = ID;
        this.name = name;
        this.mail = mail;
    }
    displayInfo() {
        //実装文
        console.log(`ID: ${this.ID}, name: ${this.name},mail:${this.mail}`);
    }
}
