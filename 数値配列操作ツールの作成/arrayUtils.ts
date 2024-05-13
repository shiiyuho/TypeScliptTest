// 配列の合計を計算する
export function total(tasi: number[]): number {
  return tasi.reduce((zan, val) => zan + val, 0);
}

// 配列の平均を計算する
export function average(hei: number[]): number {
  const sum = total(hei);
  return sum / hei.length;
}

// 配列の最大を表示
export function Max(sai: number[]): number {
  return Math.max(...sai);
}

// 配列の最小を表示
export function Min(ti: number[]): number {
  return Math.min(...ti);
}

// 配列を大きい順にに並べ替える
export function sort(oo: number[]): number[] {
  return oo.slice().sort((a, b) => a - b);
}

// 配列を小さい順に並べ替える
export function Rsort(tiisai: number[]): number[] {
  return tiisai.slice().sort((a, b) => b - a);
}
