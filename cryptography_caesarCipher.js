var caesarCipher=function () {
    this.encode=function (plainTxt,key) {
        var ciperTxt="";
        for(var i=0;i<plainTxt.length;i++){
            var num=plainTxt.charCodeAt(i);
            num=num+key;
            if (num>122) num=96+(num%122);
            ciperTxt+=String.fromCharCode(num);
        }
        return ciperTxt;
    };
    this.decode=function (cipherTxt,key) {
        var plaincode="";
        for (var i=0;i<cipherTxt.length;i++){
            var num=cipherTxt.charCodeAt(i);
            num=num-key;
            if (num<97) num=123-(97%num);
            plaincode+=String.fromCharCode(num);
        }
        return plaincode;
    };
};

var A=new caesarCipher();
var c=A.encode("xyz",5);
console.log(c);
console.log(A.decode(c,5));
