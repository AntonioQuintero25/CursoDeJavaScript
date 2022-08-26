let texto = "BMW";

let select = document.querySelector('#marcas');

for(let i = 0; i < select.options.length; i++){
    console.log(select.options[i].text);
    if(select.options[i].text === texto){
        select.selectedIndex = i;
        break;
    }
}