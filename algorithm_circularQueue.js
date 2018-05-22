var circularQueue= function() {

    this.front=0;
    this.real=0;
    this.storeNumber=0;
    this.storeArray=[1,2,3,4,5];
    this.pop=function () {
        //remove
        if (this.front==this.real && this.storeNumber==0) {
            console.log("this object has been empty . . .");
            return;
        }
        this.storeArray[this.front]=null;
        this.front=(++this.front)%this.storeArray.length;
        --this.storeNumber;
    };
    this.push=function (value) {
        //add
        if (this.front==this.real && this.storeNumber!=0){
            console.log("It is totally full !!");
            return;
        }
        this.storeArray[this.real]=value;
        this.real=(++this.real)%this.storeArray.length;
        ++this.storeNumber;
    };

}

function printArray(arrA) {
    console.log(arrA);
}

//#############################//

var test01=new circularQueue();
test01.push("A");
test01.push("B");
test01.push("C");
printArray(test01.storeArray);
test01.pop();
test01.pop();
test01.pop();
printArray(test01.storeArray);
test01.push("X");
test01.push("Y");
test01.push("Z");
printArray(test01.storeArray);
