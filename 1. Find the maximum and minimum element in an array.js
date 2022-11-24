var getMinMax = function(arr, n){
  var a = [];
  arr.sort();
  var min = arr[0];
  var max = arr[n - 1];
  var b = `min = ${min}, max = ${max}`;
  return b;
}

getMinMax([1,5,2,3,8,6],6)
