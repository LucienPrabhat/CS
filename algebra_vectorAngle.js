var vectorA=[-4,0,2,-2];
var vectorB=[2,0,-1,1];

function vectorAngle(v,u) {
    var uv=0;
    var uu=0;
    var vv=0;
    for (var i=0;i<v.length;i++){
        uv+=v[i]*u[i];
        vv+=v[i]*v[i];
        uu+=u[i]*u[i];
    }
    return uv/(Math.sqrt(uu)*Math.sqrt(vv));
}

console.log(vectorAngle(vectorA,vectorB));