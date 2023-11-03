import { inventory } from "./products.js";
import { listProducts } from "./productsList.js";
console.log("insertar_Producto.js cargado");

export const insertProducts = ()=> {
    const productForm = document.getElementById("product-form-events");
    productForm.addEventListener("submit", function(event){
        // Quiero recoger todo el formulario pero no quiero que te comportes como un formulario (puedes hacer lo que quieras con él)
        event.preventDefault(); 
        // Enlazamos elementos
        const productName = document.getElementById("product-name").value;
        const productQuantity = parseInt(document.getElementById("product-quantity").value);
        const productPrice = parseFloat(document.getElementById("product-price").value);
        // El "productName" significa que haya un valor simplemente
        if (productName && !isNaN(productQuantity) && !isNaN(productPrice)){

            const newProduct = {
                id : inventory.length + 1,
                nombre : productName,
                cantidad: productQuantity,
                precio: productPrice,
            }
            // Agregar el nuevo objeto al inventario
            inventory.push(newProduct);
            const cleanTable = document.getElementById("cleartable");
            // Limpiar la tabla antes de la nueva insercción
            cleanTable.innerHTML = "";
            // Limpiar los campos del formulario
            productForm.reset();
            listProducts();
        }
    });
}
export const searchProducts = () => {
    const searchForm = document.getElementById("product-form-search");
    searchForm.addEventListener("submit", function(event){
        event.preventDefault();  
        // Enlazamos elementos   
        const name = document.getElementById("searchProduct").value.trim();
        if (name){
            // Limpiar los campos del formulario
            const cleanTable = document.getElementById("cleartable");
            cleanTable.innerHTML = "";
        } else {alert("Introduce un nombre de búsqueda")}
    });
}





/* //Buscar producto 
const name = document.getElementById("searchProduct").value;
export const searchProducts = (inventory, name) => {
    for (let i = 0; i < lista.length; i++) {
        // Si el nombre del objeto coincide con el nombre buscado
        if (lista[i].name === name) {
          // Se devuelve el objeto
          return lista[i];
        }
      }
      return undefined;
} */