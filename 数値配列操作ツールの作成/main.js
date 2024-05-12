//インポート文
import { total } from "./arrayUtils.js";
import { average } from "./arrayUtils.js";
import { Max } from "./arrayUtils.js";
import { Min } from "./arrayUtils.js";
import { sort } from "./arrayUtils.js";
import { Rsort } from "./arrayUtils.js";
// サンプルの数値配列を定義する
const sample = [2, 4, 6, 8, 10];
console.log("今回「sample」に指定した数字は:", sample);
// 合計値を計算する
const sum1 = total(sample); //sampleを追加
console.log("合計:", sum1);
// 平均値を計算する
const sum2 = average(sample); //sampleを追加
console.log("平均:", sum2);
// 最大値を取得する
const sum3 = Max(sample); //sampleを追加
console.log("最大:", sum3);
// 最小値を取得する
const sum4 = Min(sample); //sampleを追加
console.log("最小:", sum4);
// 昇順にソートする
const sum5 = sort(sample); //sampleを追加
console.log("大きい順:", sum5);
// 降順にソートする
const sum6 = Rsort(sample); //sampleを追加
console.log("小さい順:", sum6);
