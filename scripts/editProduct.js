// Importa el inventario 
import { inventory } from "./products.js";

// Función para editar un producto
export function editProduct(item, cleanTable, listProducts) {
    /* Lógica para editar el producto */
    const index = inventory.findIndex(product => product.id === item.id);
    if (index !== -1) {
        const editedProduct = { ...inventory[index] }; // Crear una copia del producto a editar
        // Aquí puedes abrir un formulario o una ventana modal para la edición
        // Por ejemplo, podrías mostrar un formulario con los campos para editar

        // Supongamos que hay un formulario con campos de edición
        
        const editedName = prompt("Introduce el nuevo nombre", editedProduct.nombre);
        const editedQuantity = parseInt(prompt("Introduce la nueva cantidad", editedProduct.cantidad));
        const editedPrice = parseFloat(prompt("Introduce el nuevo precio", editedProduct.precio));
        
        // Verificar si los campos no están vacíos y son válidos 
        if (editedName && !isNaN(editedQuantity) && !isNaN(editedPrice) && editedQuantity>=1 && editedPrice>0) {
            // Actualizar los detalles del producto
            editedProduct.nombre = editedName;
            editedProduct.cantidad = editedQuantity;
            editedProduct.precio = editedPrice;

            // Reemplazar el producto editado en el inventario
            inventory[index] = editedProduct;

            // Limpiar la tabla y volver a listar los productos
            cleanTable.innerHTML = "";
            listProducts();
        } else {
            alert("Por favor, introduce valores válidos para editar el producto.");
        }
    }
}