// 関数をインポート
import { long, big, small, nagasa } from "./stringUtils.js"; // 適切なファイルパスを指定
// プロンプトでユーザーからの入力を受け取る
const userInput = prompt("文字列を入力してください:");
// 入力があれば関数を起動し、結果をコンソールに表示する
if (userInput !== null) {
    console.log("文字列の長さ:", long(userInput));
    console.log("大文字:", big(userInput));
    console.log("小文字:", small(userInput));
    const target = prompt("出現回数を数えたい文字を入力してください:");
    if (target !== null) {
        console.log(`${target} の出現回数:`, nagasa(userInput, target));
    }
    else {
        console.log("出現回数を数えたい文字が入力されていません。");
    }
}
else {
    console.log("文字列が入力されていません。");
}
