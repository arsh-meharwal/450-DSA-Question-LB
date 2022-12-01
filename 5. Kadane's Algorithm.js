maxSubarraySum(arr, N){
        var sum= arr[0] ;
        var maximum = arr[0] ;
        for (let i = 1; i < arr.length; i++) {
        sum = Math.max(arr[i],sum+arr[i]);
        maximum = Math.max(maximum,sum);
        
    }
    return maximum;
    } 
