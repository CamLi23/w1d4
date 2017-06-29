// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //for (var i = 0; i < arr.length; i++)
  arr.forEach(function(item, i) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him!" + "He is at " + index + ".");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
