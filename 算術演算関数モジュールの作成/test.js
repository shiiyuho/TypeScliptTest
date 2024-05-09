//test.tsファイルで、インポートした関数を呼び出してテストするコード
import { add } from "./calculations.js";
const a = add(10, 10); //値の代入
console.log(a); //答えの出力
import { subtract } from "./calculations.js";
const b = subtract(10, 0); //値の代入
console.log(b);
import { multiply } from "./calculations.js";
const c = multiply(10, 10); //値の代入
console.log(c);
import { divide } from "./calculations.js";
const d = divide(10, 10); //値の代入
const e = divide(10, 0);
console.log(d);
console.log(e);
