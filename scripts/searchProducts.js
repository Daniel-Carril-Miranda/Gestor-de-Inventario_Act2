import { inventory } from "./products.js";
import { listProducts } from "./productsList.js";

console.log("Buscar_producto cargado")

// Función buscar Productos:
export const searchProducts = (productName) => {
  const foundProduct = inventory.find(product => product.nombre.toLowerCase() === productName.toLowerCase()); /* Con esto nos busca los productos de mismo nombre aunque esté en mayúsculas */
  const resultArea = document.getElementById("search-result");


/*   const cleanTable = document.getElementById("cleartable");
  cleanTable.innerHTML = ""; */

  if (foundProduct) {

    resultArea.innerHTML = `
    <table class="inventory-table-styles">
        <tr> 
            <th>Nombre</th> 
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
        </tr>
        <tr>
            <td>${foundProduct.nombre}</td>
            <td>${foundProduct.cantidad}</td>
            <td>${foundProduct.precio}</td>
        </tr>       
    </table>
      `;

  } else {
      resultArea.textContent = "Producto no encontrado";
  }
}