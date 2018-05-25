function encodeRailFence(p) {
    var arr=p.split("");
    var line01,line02,line03;
    line01=line02=line03="";
    for (var i in arr){
        k=parseInt(i)+1;
        if (k%4==1) line01+=arr[i];
        if (k%4==2 || k%4==0) line02+=arr[i];
        if (k%4==3) line03+=arr[i];
    }
    return line01+line02+line03;
}
function decodeRailFence(c){
    var arr=c.split("");
    var totalLength=arr.length;
    var m=totalLength%4;
    var section,p;
    var line=[0,0,0];

    section=(totalLength-m)/4;
    line[1]=section;
    if (m>=1) line[1]++;
    line[2]=line[1]+(section*2);
    if (m>=2) line[2]++;

    p="";
    //we sliced the section,now we combine.
    //here is 2 ways of loop function
    //##### 1st way #####

    var control=0;
    var statePlus=true;
    arr.forEach(() => {
        p+=arr[line[control]];
        line[control]++;
        if (statePlus) control++;
        else control--;
        if (control>=2 || control<=0) statePlus=!statePlus;
    });

    //##### 2nd way #####
    /*
    for (var i=0;i<totalLength;i++){
        if ((i+1)%4==1){
            p+=arr[line[0]];
            line[0]++;
        }
        if ((i+1)%4==2 || (i+1)%4==0){
            p+=arr[line[1]];
            line[1]++;
        }
        if ((i+1)%4==3){
            p+=arr[line[2]];
            line[2]++;
        }
    }
    */

    return p;
}

var word="Hello, my name is Lucien.We should keep fighting on this coding road.";
//word="Happy Birthday !!";
var d=encodeRailFence(word);
console.log(d);
console.log(decodeRailFence(d));