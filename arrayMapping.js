function pythag(x, y) {
  var pResults = Math.pow(x, 2) + Math.pow(y, 2);
  var output = Math.sqrt(pResults);
  return output;
}

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },
  {x: 4, y: 5 }
];


var result = input.map(function(a) {
  return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
});



console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


//Old hardcoded version
/*var value1 = 0;
var value2 = 0;
var result = [];
result = input.map(function (x){
    Object.keys(x).map(function(objectKey) {
      value1 = x["x"];
      value2 = x["y"];

    });
    x = pythag(value1, value2);
    result.prototype.push(x);
    console.log(x);
  });
console.log(result);*/