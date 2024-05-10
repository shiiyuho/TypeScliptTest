//インポート文
import { long } from "./stringUtils.js";
import { big } from "./stringUtils.js";
import { small } from "./stringUtils.js";
import { times } from "./stringUtils.js";
import * as readline from "readline"; //node_moduleの機能インポート

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

user.question("文字列を入力: ", (input: string) => {
  console.log(`文字列の長さ: ${long(input)}`);
  console.log(`大文字: ${big(input)}`);
  console.log(`小文字: ${small(input)}`);

  user.question("出現回数を数える文字: ", (char: string) => {
    console.log(`出現 '${char}' 文字列中で: ${times(input, char)}`);
    user.close(); //user呼び出し
  });
});
