var arr=[["a","b","c"], ["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"]];

function print(A) {
    for (var k=0;k<A.length;k++){
        console.log(A[k]);
    }
}

function transposeMatrix(arrayA){
    var arrayATrans=[];
    for (var i=0;i<arrayA.length;i++){
        for (var j=0;j<arrayA[i].length;j++){
            if (i==0) arrayATrans[j]=[];
            arrayATrans[j][i]=arrayA[i][j];
            //console.log(arrayA[j][i]);
        }
    }
    return arrayATrans;
}

print(arr);
console.log("transpose A . . .");
print(transposeMatrix(arr));