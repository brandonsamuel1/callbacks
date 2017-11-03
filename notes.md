# W1D4

* Expressions

// What is an expression?

var x = 2

x == 2

[1, 2, 3].forEach(function(i) { console.log(i) });

var y = [1, 2, 3]
var log = function(i) {
  console.log(i);
}
y.forEach(log)

====================================================

* Functions

function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Brandon');

var sayHi = function(name) {
  var gretting = 'Hello, ' + name + '!';
  console.log(greeting);
}

====================================================

* Callbacks

[1, 2, 3].forEach(function(i) {
  console.log(i)
});

function forEach(collection, callback) {
  for(var i = 0; i < collection.length; i++) {
    var item = collection[i];
    callback(item);
  }
}

forEach(['Hello', 'there', 123], function(i) {
  console.log(i)
})