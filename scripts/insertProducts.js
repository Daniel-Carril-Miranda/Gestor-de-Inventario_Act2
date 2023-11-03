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

// Función buscar Productos:
export const searchProduct = (productName) => {
    const foundProduct = inventory.find(product => product.nombre === productName);
    const resultArea = document.getElementById("message");

    if (foundProduct) {
        resultArea.innerHTML = `
            <tr>
                <td>${foundProduct.id}</td>
                <td>${foundProduct.nombre}</td>
                <td>${foundProduct.cantidad}</td>
                <td>${foundProduct.precio}</td>
            </tr>
        `;

        const cleanTable = document.getElementById("cleartable");
        cleanTable.innerHTML = "";
    } else {
        resultArea.textContent = "Producto no encontrado";
    }
}
