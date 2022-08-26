let pessoas = {
    01: "Antonio",
    02:"João",
    03:"Pedro"
};

//forEach
Object.keys(pessoas).forEach(function(item){

    console.log(item + " - " + pessoas[item]);

});

//for in
for(let item in pessoas){
    console.log(item + " - " + pessoas[item]);
}

//Object.entries

for(let [key, value] of Object.entries(pessoas)){

    console.log(key + " - " + value);

}