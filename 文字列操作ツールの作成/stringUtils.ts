// 関数を書き込んでいるファイル（長さ、大文字、小文字、出現回数の関数）

// 文字列の長さを返す関数
export function long(input: string): number {
  return input.length;
}

// 文字列を大文字に変換する関数
export function big(input: string): string {
  return input.toUpperCase();
}

// 文字列を小文字に変換する関数
export function small(input: string): string {
  return input.toLowerCase();
}

// 文字列内の特定の文字の出現回数を数える関数
export function nagasa(input: string, target: string): number {
  // 正規表現を使用して、対象文字の出現回数を数える
  const regex = new RegExp(target, "g");
  const matches = input.match(regex);
  return matches ? matches.length : 0;
}
