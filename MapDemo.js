let KeyString1='a string'
let KeyObj={};
let KeyFunc= function(){

}

let myMap=new Map();
myMap.set('a string',"value associated with a string");
myMap.set(KeyObj,'value associated with KeyObj');
myMap.set(KeyFunc,'value associated with KeyFunc');

let size=myMap.size;
//console.log(size);
let valStr=myMap.get(KeyString1);
//console.log(valStr);
let iskeyExit=myMap.has('a string');

//console.log(iskeyExit);

for(let [Key,value] of myMap)
console.log(Key + " - " + value);
console.log("----------------");

let deleteKey=myMap.delete(KeyFunc);

for(let [Key,value] of myMap)
console.log(Key + " - " + value);