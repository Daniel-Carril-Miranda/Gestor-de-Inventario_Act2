export { inventory };
console.log("products.js loaded")

//Hacemos esta función para que cada vez que actualizamos aparezcan números diferentes hasta 20
const getRandomQuantity = ()=> {
    return Math.floor(Math.random() * 20) +1 ;
}

//Creamos el inventario: un arreglo que contiene objetos.
const inventory = [
    { id: 1, nombre: "Martillo", cantidad: getRandomQuantity(), precio: 10.99 },
    { id: 2, nombre: "Destornillador", cantidad: getRandomQuantity(), precio: 3.99 },
    { id: 3, nombre: "Taladro", cantidad: getRandomQuantity(), precio: 39.99 },
    { id: 4, nombre: "Llave inglesa", cantidad: getRandomQuantity(), precio: 12.99 },
    { id: 5, nombre: "Sierra", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 6, nombre: "Clavos", cantidad: getRandomQuantity(), precio: 2.99 },
    { id: 7, nombre: "Tornillos", cantidad: getRandomQuantity(), precio: 1.99 },
    { id: 8, nombre: "Madera", cantidad: getRandomQuantity(), precio: 10.99 },
    { id: 9, nombre: "Cemento", cantidad: getRandomQuantity(), precio: 39.99 },
    { id: 10, nombre: "Azulejos", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 11, nombre: "Pintura", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 12, nombre: "Cerámica", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 13, nombre: "Vidrio", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 14, nombre: "Puertas", cantidad: getRandomQuantity(), precio: 99.99 },
    { id: 15, nombre: "Ventanas", cantidad: getRandomQuantity(), precio: 79.99 },
    { id: 16, nombre: "Iluminación", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 17, nombre: "Herramientas eléctricas", cantidad: getRandomQuantity(), precio: 39.99 },
    { id: 18, nombre: "Equipo de seguridad", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 19, nombre: "Materiales de construcción", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 20, nombre: "Herramientas manuales", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 21, nombre: "Materiales de decoración", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 22, nombre: "Materiales de jardinería", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 23, nombre: "Materiales de bricolaje", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 24, nombre: "Materiales de fontanería", cantidad: getRandomQuantity(), precio: 19.99 },
    { id: 25, nombre: "Materiales eléctricos", cantidad: getRandomQuantity(), precio: 19.99 },
];