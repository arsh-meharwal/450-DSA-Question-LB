function findLongestConseqSubseq(arr,N){
    arr.sort();
    const conseq = new Set();
    for (let i = 0; i <= N-1; i++) {
        if (arr[i+1] == arr[i]+1) {
            conseq.add(arr[i])
            conseq.add(arr[i+1])
        }
        else if (arr[i+1] == arr[i]) {
            
        }
    }
    console.log(conseq);
    return conseq.size;
}

findLongestConseqSubseq([2,6,1,9,4,5,3],7)
