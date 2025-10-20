class App {
  _calculate(text){
    if(!text){
      return 0;
    }
    const numbers=text.split(/[,:]/).map(Number);
    return numbers.reduce((sum,num)=>sum+num,0);
  }
  async run() {}
}

export default App;
