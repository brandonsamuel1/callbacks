
var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];
    newArr.push(callback(elm));
  }
  return newArr;
}

var lengths = map(words, function(word) {
  return word.length;
});

var uppercases = map(words, function(word) {
  return word.toUpperCase();
});

var reversed = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(lengths, uppercases, reversed);




// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

// for(var i = 0; i < words.length; i++){
//   console.log(words[i]);
// }


// function addTwoNumbers(a,b,callBackFunction) {
//   callBackFunction((a+b))
// }


// function plusTwoNumbers(output) {
//   console.log(output)
// }


// addTwoNumbers(50,50,plusTwoNumbers)





// function subtractTwoNumbers(a,b,callBackFunction) {
//   callBackFunction((a-b))
// }



// function minusTwoNumbers(output) {
//   console.log(output)
// }



// subtractTwoNumbers(40,20,minusTwoNumbers)