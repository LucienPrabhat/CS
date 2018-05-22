function binarySearch01 (target,arr,s,l) {
    var x=parseInt((s+l)/2);
    if (s>l) return "Not found.";
    if (target==arr[x]) return x;
    else{
        if (target>arr[x]) s=x+1;
        else l=x-1;
        return binarySearch01(target,arr,s,l);
    }
};

function binarySearch02(target,arr) {
    var l=arr.length;
    var s=0;
    var x=parseInt((s+l)/2);
    while (s<=l){
        if (target==arr[x]) return x;
        else {
            if (target>arr[x]) s=x+1;
            else l=x-1;
            x=parseInt((s+l)/2);
        }
    }
    return "Not found ..";
};

var letter=[0,12,26,38,43,59,63,73,85,99];
console.log(binarySearch01(0,letter,0,9));
console.log(binarySearch02(63,letter));