import { inventory } from "/scripts/products.js";
console.log("productsList.js is loaded");

export const listProducts = () => {
    console.log("listProducts ejecutado");
    const cleanTable = document.getElementById("cleartable");
    
    inventory.forEach(item =>{
        // Creamos la fila
        const row = cleanTable.insertRow();
        // Creamos las celdas dentro de la fila
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = item.nombre;
        cell2.innerHTML = item.cantidad;
        cell3.innerHTML = item.precio;

        // Botón de borrar producto

        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "BORRAR"; //Esto hace mención al texto que hay entre las etiquetas del botón
        deleteButton.addEventListener("click",()=>{
            /* Lógica para borrar el producto, el confirm es como el alert pero con lógica que admite si o no */   
            if (confirm(`¿Estás seguro de que deseas borrar ${item.nombre}`)){
            /* Encuentra el índice del producto a eliminar: dentro del Foreach, comparamos el producto con el índice */
                const index = inventory.findIndex(product => product.id === item.id)
                /* Si el índice resultante no es -1, tenemos coincidencia */
                if (index !== -1) {
                    inventory.splice(index, 1);
                }
            }
            cleanTable.innerHTML = ""; //Con esta líne limpiamos la tabla y la vaciamos 
            listProducts()
        });
        cell4.appendChild(deleteButton);
        
        /* Botón editar el producto */
        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR"; //Esto hace mención al texto que hay entre las etiquetas del botón
        editButton.addEventListener("click",()=>{
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
                if (editedName && !isNaN(editedQuantity) && !isNaN(editedPrice)) {
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
        });
        cell4.appendChild(editButton);
    });
}