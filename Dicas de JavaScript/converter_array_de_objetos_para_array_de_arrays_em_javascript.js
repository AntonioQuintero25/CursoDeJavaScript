let arrObjs = [
    {id: 1,nome:"Antonio"},
    {id: 2, nome:"Test 1"},
    {id: 3, nome:"Odin"},
    {id: 4, nome:"Vidar"},
];

//array de arrys

let arr = arrObjs.map(function(obj){

 return Object.keys(obj).map(function(key){
    return obj[key];
 });

});

console.log(arr);