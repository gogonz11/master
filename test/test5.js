
function muridTerbaik(nilai) {
  // convert nilai from object to associative array with it's key
  var nilaiMurid = [];
  for (var key in nilai) {
      // get the average of nilai[key] as average
      var average = nilai[key].reduce(function(a, b) { return a + b; }) / nilai[key].length;
      nilaiMurid.push([key,  average]);
  }

  

  // filter undefined from nilaiMurid
  nilaiMurid = nilaiMurid.filter(function(n) { return n != undefined });
  
  // get the highest average
  var highestAverage = nilaiMurid.reduce(function(a, b) { return a[1] > b[1] ? a : b; })[1];

  // get the highest average student
  var highestAverageStudent = nilaiMurid.filter(function(n) { return n[1] === highestAverage; });
  
  // return the highest average student's name string
  return highestAverageStudent.map(function(n) { return n[0]; }).join(', ');
  
}





console.log(muridTerbaik({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
}))// John

console.log(muridTerbaik({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
})) // Mike

console.log(muridTerbaik({
  Tim: [93, 84, 49, 71, 76, 83],
  Nick: [88, 91, 74, 72, 63, 68],
  Brad: [100, 94, 72, 64, 58, 81],
    Annie: [79, 93, 82, 82, 63, 87]
})) //Annie

console.log(muridTerbaik({
    Eddie: [65, 85, 72, 76],
  Brock: [55, 97, 82, 91],
  Jessica: [78, 62, 79, 99]
})) //Brock