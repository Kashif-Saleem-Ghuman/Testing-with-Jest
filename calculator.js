class calculator {
  constructor(x,y){
    this.x = x;
    this.y =y;
  }
  add() {
    return (this.x + this.y);
  }
  
  divide(){
    return (this.x/this.y);
  }
  subtract() {
    return Math.abs(this.x - this.y);
  }
  multiply(){
    return this.x*this.y
  }
}

const calc = new calculator(4,8)

module.exports = calculator;