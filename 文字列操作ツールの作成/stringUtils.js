// stringUtils.ts
// 文字列の長さを返す関数
export function long(input) {
    return input.length;
}
// 文字列を大文字に変換する関数
export function big(input) {
    return input.toUpperCase();
}
// 文字列を小文字に変換する関数
export function small(input) {
    return input.toLowerCase();
}
// 文字列内の特定の文字の出現回数を数える関数
export function nagasa(input, target) {
    // 正規表現を使用して、対象文字の出現回数を数える
    const regex = new RegExp(target, "g");
    const matches = input.match(regex);
    return matches ? matches.length : 0;
}
