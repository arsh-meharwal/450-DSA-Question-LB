var segregateElements = function(arr){
    var a = [];
    var b = [];
  
  for(var i = 0; i<=arr.length-1;i++){

      if(arr[i]<0){
          a.push(arr[i]);
      }else{
          b.push(arr[i]);
      }
    }
    b = b.concat(a);
    return b ;
}

segregateElements([1, -1, 3, 2, -7, -5, 11, 6])
