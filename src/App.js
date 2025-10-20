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
    const sum=numbers.reduce((sum,num)=>sum+num,0);
    return sum;
  }
  async run() {}
}

export default App;
