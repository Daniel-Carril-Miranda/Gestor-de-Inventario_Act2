import { inventory } from "./products.js";
import { listProducts } from "./productsList.js";

console.log("Buscar_producto cargado")

// Función buscar Productos:
export const searchProducts = (productName) => {
  const foundProduct = inventory.find(product => product.nombre.toLowerCase() === productName.toLowerCase()); /* Con esto nos busca los productos de mismo nombre aunque esté en mayúsculas */
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