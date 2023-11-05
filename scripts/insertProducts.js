import { inventory } from "./products.js";
import { listProducts } from "./productsList.js";
console.log("insertar_Producto.js cargado");

// Función insertar Productos:
export const insertProducts = ()=> {
    const productForm = document.getElementById("product-form-events");
    productForm.addEventListener("submit", function(event){
        // Quiero recoger todo el formulario pero no quiero que te comportes como un formulario (puedes hacer lo que quieras con él)
        event.preventDefault(); 
        // Enlazamos elementos
        const productName = document.getElementById("product-name").value;
        const productQuantity = parseInt(document.getElementById("product-quantity").value);
        const productPrice = parseFloat(document.getElementById("product-price").value);
        const outputMessage = document.getElementById("notification");
        // El "productName" significa que haya un valor simplemente
        if (productName && !isNaN(productQuantity) && !isNaN(productPrice) && productQuantity>0 && productPrice>0){

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
            outputMessage.textContent = "Producto añadido";
            // Después de 1 segundo, se borra el mensaje.
            setTimeout(function() {
            outputMessage.textContent = "";
            }, 1000); // 1000 milisegundos equivale a 1 segundo
        } else {
            outputMessage.textContent = "Producto NO añadido, revisa que los valores sean positivos";
        // Después de 2 segundos, se borra el mensaje.
        setTimeout(function() {
        outputMessage.textContent = "";
        }, 2000); 
        }
    });
}

