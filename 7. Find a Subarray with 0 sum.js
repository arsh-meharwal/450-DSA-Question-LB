function subArray(arr,n){
    var sum = 0;
    const set = new Set();
    for(i=0;i<n;i++){
        sum+=arr[i];
        if(sum ===0 || set.has(sum)){
            return true;
        }
        set.add(sum);
    }
    return false;
}

subArray([1, 2, 3, 4, 5], 5)
