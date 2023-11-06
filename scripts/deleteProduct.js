// Importa el inventario 
import { inventory } from "./products.js";

// Función para borrar un producto
export function deleteProduct(item, cleanTable, listProducts) {
     /* Lógica para borrar el producto, el confirm es como el alert pero con lógica que admite si o no */   
    if (confirm(`¿Estás seguro de que deseas borrar ${item.nombre}`)) {
           /* Encuentra el índice del producto a eliminar: dentro del Foreach, comparamos el producto con el índice */
        const index = inventory.findIndex(product => product.id === item.id);
           /* Si el índice resultante no es -1, tenemos coincidencia */
        if (index !== -1) {
            inventory.splice(index, 1);
        }
    }
    cleanTable.innerHTML = "";  //Con esta línea limpiamos la tabla y la vaciamos 
    listProducts();
}