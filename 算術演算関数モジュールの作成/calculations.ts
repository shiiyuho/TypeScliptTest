export function calculation(number1: number, number2: number) {
    const answer: number[] = [
        number1 + number2,  //足し算
        number1 - number2,  //引き算
        number1 * number2,  //掛け算
        number1 / number2,  //割り算
    ]
    if (number2 != 0){
        return answer;  //答えを戻す戻り値
    }else{
        console.log('error');
    }
  }
  

