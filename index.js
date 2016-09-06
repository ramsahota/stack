//adding a stack class

var stackArray =[];
stackArray.add('Mike Mahon');
stackArray.add('Ram Sahota');
function push(value) {
    stackArray[stackArray.length] = value;
}
function pop(){
    stackArray.splice(stackArray.length,1);
}
function peek(){
    console.log(stackArray[stackArray.length-1]);
}
