// 配列の合計を計算する
export function total(tasi) {
    return tasi.reduce((zan, val) => zan + val, 0);
}
// 配列の平均を計算する
export function average(hei) {
    const sum = total(hei);
    return sum / hei.length;
}
// 配列の最大を表示
export function Max(sai) {
    return Math.max(...sai);
}
// 配列の最小を表示
export function Min(ti) {
    return Math.min(...ti);
}
// 配列を大きい順にに並べ替える
export function sort(oo) {
    return oo.slice().sort((a, b) => a - b);
}
// 配列を小さい順に並べ替える
export function Rsort(tiisai) {
    return tiisai.slice().sort((a, b) => b - a);
}
