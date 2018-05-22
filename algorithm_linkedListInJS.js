var LinkedList=function () {

    var head,tail;
    //record the first and latest node.

    var node=function (value) {
        this.pre01;
        this.next01;
        this.val=value;
    }

    //add to the end position
    this.put=function (value) {
        var n=new node(value);
        if (head==null){
            head=n;
            n.pre01=null;
        }
        else {
            n.pre01=tail;
            tail.next01=n;
        };
        tail=n;//newest always be the tail
        n.next01=null;
    };

    //add to head
    this.putToHead=function (value) {
      var n=new node(value);
      if (head==null){
          head=tail=n;
          n.pre01=n.next01=null;
      }
      else {
          n.pre01=null;
          n.next01=head;
          head.pre01=n;
          head=n;
      }
    };

    //remove from last
    this.pop=function () {
        tail=tail.pre01;
        tail.next01=null;
        //Q?? this has been detached ,but how could I know the memory is released?
    };

    //find value from index
    this.valueOfIndex=function (index) {
        if (index<0) return "Index must >= 0 !!";
        var i=0;
        var current=head;
        while(i<index){
            if (current.next01==null) return "There is no Object !!";
            current=current.next01;
            ++i;
        }
        return current;
    };

    this.size=function () {
        var current=head;
        var i=0;
        while (current.next01 != null){
            current=current.next01;
            i++;
        }
        return i+1;
    };

    //remove the index
    this.remove=function (index) {
        var current=this.valueOfIndex(index);
        if (typeof current==='string') return console.log("There is no Object can be remove,or index less than 0.");
        current.pre01.next01=current.next01;
        current.next01.precision=current.pre01;
        //QUESTION >> detaching,and the data which we remove keep occupy the memories?
    };

    //replace by index
    this.replace=function (index,value) {
        var current=this.valueOfIndex(index);
        if (typeof current==='string') return console.log("There is no Object can be replace,or index less than 0.");
        current.val=value;
    }

    //clear all
    this.clear=function () {
        head=null;
        tail=null;
        //Don't know how to released the memory.
    };
};

var AA=new LinkedList();
AA.put(15);
AA.put(17);
AA.put(19);
AA.putToHead(13);
AA.putToHead(11);
AA.pop();
AA.remove(1);
AA.replace(0,21);
AA.replace(1,23);
AA.replace(2,25);
AA.replace(-2,999);
console.log(AA.valueOfIndex(0).val);
console.log(AA.valueOfIndex(1).val);
console.log(AA.valueOfIndex(2).val);
AA.remove(55);
AA.put(27);
console.log(AA.size());

//console.log(AA.valueOfIndex(3));
//console.log(AA.valueOfIndex(4));

