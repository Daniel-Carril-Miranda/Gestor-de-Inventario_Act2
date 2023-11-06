import { inventory } from "./products.js";
import { deleteProduct } from "./deleteProduct.js";
import { editProduct } from "./editProduct.js";
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
            deleteProduct(item, cleanTable, listProducts); // Llama a la función de borrado
        });
        cell4.appendChild(deleteButton);
        
        /* Botón editar el producto */
        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR"; //Esto hace mención al texto que hay entre las etiquetas del botón
        editButton.addEventListener("click",()=>{
            editProduct(item, cleanTable, listProducts); // Llama a la función de edición
        });
        cell4.appendChild(editButton);
    });
}