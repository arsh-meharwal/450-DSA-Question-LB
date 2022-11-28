function = cyclicrotate(arr,n){
          arr.unshift(arr[arr.length-1]);      
          arr.pop(arr[arr.length]);
          return arr
     }
