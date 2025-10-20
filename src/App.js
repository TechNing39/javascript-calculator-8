import { Console } from '@woowacourse/mission-utils';

class App {
  _calculate(text){
    if(!text){
      return 0;
    }
    let delimiter=/[,\:]/;
    let numberString=text;

    const customDelimiter=text.match(/^\/\/(.)\n(.*)/s);
    if(customDelimiter){
      delimiter=new RegExp(customDelimiter[1]);
      numberString=customDelimiter[2];
    }

    const numbers = numberString.split(delimiter).map(Number);
    const sum=numbers.reduce((sum,num)=>{
      if(isNaN(num)){
        throw new Error('[ERROR] 유효하지 않은 숫자가 포함되어 있습니다');
      }
      if (num < 0) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다');
      }
      return sum+num;
    },0);
    return sum;
  }
  
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this._calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
