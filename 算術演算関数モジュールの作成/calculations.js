export function add(x, y) {
    return x + y;
}
export function subtract(x, y) {
    return x - y;
}
export function multiply(x, y) {
    return x * y;
}
export function divide(x, y) {
    if (y != 0) {
        return x / y;
    }
    else {
        console.log("第二引数が「0」のため:error");
    }
}
