export function long(font: string): number {
  return font.length;
}
export function big(uppercase: string): string {
  return uppercase.toUpperCase();
}
export function small(LowerCase: string): string {
  return LowerCase.toLowerCase();
}
export function times(what: string, moji: string): number {
  const regex = new RegExp(moji, "");
  const matches = what.match(regex);
  return matches ? matches.length : 0;
}
