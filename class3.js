var animal = {
  canRun: true
}

var Wolf = function () {
  this.name = "wolf"
}

var Grey = function () {
  this.color = "Grey"
}

var Black = function () {
  this.color = "Black"
}


//.prototype к функции-конструктору
Wolf.prototype = animal;

var wolfy = new Wolf();

Grey.prototype = wolfy;
Black.prototype = wolfy;

var wolfyGrey = new Grey();
var wolfyBlack = new Black();

//.__proto__ к объекту-наследнику
//wolfy.__proto__ = animal;


console.log(wolfy);
console.log(wolfyGrey);
console.log(wolfyBlack);