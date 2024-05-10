import { product } from "./product.js"; //productクラスのインポート文

export function processPurchase(user_id: number, product: product): void {
  //main.tsへのエクスポート文
  console.log(`ユーザー IDは: ${user_id} です.`); //出力
  product.decreaseStock(); //関数呼び出し
}
