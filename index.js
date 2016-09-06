var Stack = {
    arr : [],
    push: function(value){
        this.arr[this.arr.length] = value;
    },
    pop: function(){
        this.arr.splice(this.arr.length -1,1);
    },
    peek: function(){
        console.log(this.arr[this.arr.length-1]);
    }
};

function StackConstructor() {
    var s = Object.create(Stack);
    s.arr = [];
    return s;
}

var newStack = StackConstructor();
newStack.push("Mike");
newStack.push("Rom");
newStack.peek(); //should print Ron
newStack.pop();
newStack.peek(); //should print Mike

exports.Stack = Stack;
exports.StackConstructor = StackConstructor;
