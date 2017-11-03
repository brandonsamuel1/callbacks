function findWaldo(arr, found) {

  arr.forEach(function f(a, b) {
    console.log(b)
    if (arr[b] === "Waldo") {
      found(b);
    }
  })
       // execute callback


}

function actionWhenFound(i) {
  //var index = arr[i];
  console.log("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
