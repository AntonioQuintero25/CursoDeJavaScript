let arr = [
    {marca: "VW", motor: 2.0},
    {marca: "Fiat", motor: 1.0},
    {marca: "BMW", motor: 1.4}
];

function removeItem(arr, prop, value)
{
    return arr.filter(function(i){
        return i[prop] !== value
    });
}

let arr2 = removeItem(arr, "marca", "BMW");

console.log(arr2);

console.log(arr);

