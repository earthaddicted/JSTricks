var obj ={
  name: "Стол"
};

var newObj = {
  name: "Сундук",
  test: function () {
    console.log('test');
  }
}

var Foo = function () {
  //this.name = 'Фуу';
  //то что скрыто
  //this.__proto__ = Foo.prototype;
  //при создании объекта с помощью функции-конструктора
  //и оператора new
  // прототип этого объекта
  //становится равным свойству prototype этой
  // функции-конструктора
};

var boo = new Foo();
// console.log(boo.__proto__ === Foo.prototype);
// console.log(Foo.prototype);
// console.log(boo.__proto__);

//все потомки и Foo будут иметь прототип newObj
Foo.prototype = newObj;
//т.е. new Foo().__proto__ = newObj;
//значением Foo.prototype = может быть только объект

var boo2 = new Foo();

console.log(boo2);



