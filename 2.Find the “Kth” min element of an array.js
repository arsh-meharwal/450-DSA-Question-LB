var kthSmallest = function(arr, k){
  var a,b;
  a = arr.sort();
  b = a[k-1];
  return b;
}

kthSmallest([0,20,21,59,35,87,699],2)
