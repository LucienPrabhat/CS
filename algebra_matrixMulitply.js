var tes01=[[1,0,1],[0,1,0],[3,1,0]];
//var tes02=[[1,2,3,2,1],[1,0,1,0,1],[1,1,2,1,1]];
var tes02=[[1,3],[4,5],[1,2]];

function print(A) {
    for (var k=0;k<A.length;k++){
        console.log(A[k]);
    }
}

//矩陣沒有交換率
function multipliedMatrix(arrA,arrB){
    //
    var Am=arrA.length;
    var An=arrA[0].length;
    var Bm=arrB.length;
    var Bn=arrB[0].length;
    //
    if (An!=Bm) console.log("Invalid matrix multiply");
    else {
        var Cm,Cn,Cp;
        if (An==Bm){
            Cm=Am;
            Cn=Bn;
            Cp=An;
        }
        var arrC=[];
        for (var i=0;i<Cm;i++){
            arrC[i]=[];
            for (var j=0;j<Cn;j++){
                var cnt=0;
                arrC[i][j]=0;
                while (cnt<Cp){
                    arrC[i][j]+=arrA[i][cnt]*arrB[cnt][j];
                    cnt++;
                }
            }
        }
        print(arrC);
    }
}

print(tes01);
print(tes02);
console.log("The array C is . . .");
multipliedMatrix(tes01,tes02);
