var arr=[[0,2,1],[3,-1,2],[4,-4,1]];

function print(A) {
    for (var k=0;k<A.length;k++){
        console.log(A[k]);
    }
}

function matrix3x3Determinant(arrayA){
    var detAns=0;
    var plus=true;
    for (var i=0;i<2;i++){
        //run for twice,the second is last row.
        var col=arrayA[i].length;
        var mul=0;
        if (i==1){
            i=col-1;
            plus=false;
        }
        //
        for (var k=0;k<col;k++){
            mul=arrayA[i][k];
            for (var p=1;p<col;p++){
                var xPlus=i+p;
                var xMinu=i-p;
                var y=k+p;
                if (xPlus>col-1) xPlus-=col;
                if (y>col-1)y-=col;
                if (plus) mul*=arrayA[xPlus][y];
                    else mul*=arrayA[xMinu][y];
            }
            if (plus) detAns+=mul;
            else detAns-=mul;
        }
    }
    return detAns;
}



print(arr);
console.log("The answer is . . .");
console.log(matrix3x3Determinant(arr));
