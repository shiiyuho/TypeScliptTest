export function calculation(number1, number2) {
    const answer = [
        number1 + number2,
        number1 - number2,
        number1 * number2,
        number1 / number2, //割り算
    ];
    if (number2 != 0) {
        return answer; //答えを戻す戻り値
    }
    else {
        console.log('error');
    }
}
