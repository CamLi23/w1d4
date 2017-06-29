function map (arr, cb) {
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = cb(arr[i]);
    resultArr.push(result);

  }
  return resultArr;

}





var words = ["ground", "control", "to", "major", "tom"];

var words2 = map(words, function(word) {
  return word.length;
});

console.log(words2);