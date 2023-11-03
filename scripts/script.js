import { listProducts } from "./productsList.js";
import { insertProducts } from "./insertProducts.js";
import { searchProducts } from "./searchProducts.js" 

    // Author: Daniel Carril Miranda (Student 2ºDAW)
    // GitHub: 

console.log("JS bien enlazado");
//Listamos los productos 
document.addEventListener("DOMContentLoaded",listProducts);

const btnForm = document.getElementById("addBtn");
btnForm.addEventListener("click", ()=> {
    console.log("Botón añadir pulsado");
    insertProducts()
});

const SearchForm = document.getElementById("searchBtn");
btnForm.addEventListener("click", ()=> {
    console.log("Botón buscar pulsado");
    insertProducts()
});