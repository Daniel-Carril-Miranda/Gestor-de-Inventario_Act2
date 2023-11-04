import { inventory } from "./products.js";
import { listProducts } from "./productsList.js";
import { insertProducts } from "./insertProducts.js";
import { searchProducts } from "./searchProducts.js";

    // Author: Daniel Carril Miranda (Student 2ºDAW)
    // GitHub: 

console.log("JS bien enlazado");
//Listamos los productos 
document.addEventListener("DOMContentLoaded",listProducts);

// Añadir producto
const btnForm = document.getElementById("addBtn");
btnForm.addEventListener("click", ()=> {
    console.log("Botón añadir pulsado");
    insertProducts();
});

// Borrar todo
const delAll = document.getElementById("delAllBtn");
delAll.addEventListener("click", ()=>{
    const cleanTable = document.getElementById("cleartable");
    if (confirm("¿Estás seguro de que deseas borrar todo el inventario?")) {
        // Vaciar el arreglo de inventario
        inventory.length = 0;

        // Limpiar la tabla y volver a listar los productos (vacía)
        cleanTable.innerHTML = "";
        listProducts();
    }
});

// Buscar Producto con "Enter"
const SearchForm = document.getElementById("searchProductInput");

// Agrega un evento para detectar la tecla "Enter" en el campo de entrada 
SearchForm.addEventListener("keyup", function (event) {
    if(event.key === "Enter"){
        console.log("Botón buscar pulsado");
        const search = document.getElementById("searchProductInput").value.trim();
        searchProducts(search);
    } 
});

// Buscar Producto con Click
const SearchForm2 = document.getElementById("searchBtn");

SearchForm2.addEventListener("click", ()=> {
    console.log("Botón buscar pulsado");
    const search = document.getElementById("searchProductInput").value.trim();
    searchProducts(search);
});