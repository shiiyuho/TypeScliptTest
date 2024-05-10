export function processPurchase(user_id, product) {
    //main.tsへのエクスポート文
    console.log(`ユーザー IDは: ${user_id} です.`); //出力
    product.decreaseStock(); //関数呼び出し
}
