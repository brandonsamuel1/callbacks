var array = [9, 1, 5, 2, 10];
array.sort(function(a,b) {
  return b - a
});

// console.log(array)


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a,b) {

  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();

   if (nameA < nameB) {

    return -1;

  } else if (nameA > nameB) {

    return 1;

  } else if (students['age'] === students['age']) {

    return 1
  }

  //return a - b
})

console.log(students)