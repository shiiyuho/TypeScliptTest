//test.tsファイルで、インポートした関数を呼び出してテストするコード
import { add } from "./calculations.js";
import { subtract } from "./calculations.js";
import { multiply } from "./calculations.js";
import { divide } from "./calculations.js";
//add(足し算)
const a = add(10, 10); //値の代入
console.log("計算をさせる値:10,10");
console.log("add関数の出力結果:", a); //答えの出力
//subtract(引き算)
const b = subtract(10, 0); //値の代入
console.log("計算をさせる値:10,0");
console.log("subtract関数の出力結果:", b);
//multiply(掛け算)
const c = multiply(10, 10); //値の代入
console.log("計算をさせる値:10,10");
console.log("multiply関数の出力結果:", c);
//divide(割り算)
const d = divide(10, 10); //値の代入
console.log("計算をさせる値:10,10");
console.log("divide関数の出力結果:", d);
//第2引数が0だった場合
console.log("計算をさせる値:10,0");
const e = divide(10, 0);
