function maxP(arr) {
    var  min=arr[0],maxDiff = 0,pair=[];
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] < min){
            min = arr[i]
        }
        if (maxDiff < arr[i]-min) {
            maxDiff = arr[i]-min
        }
    }
    return maxDiff
    
}

maxP([1,2,3,6,4])
