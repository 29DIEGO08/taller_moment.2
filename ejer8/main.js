const productos = [
    { nombre: 'Laptop', categoria: 'tecnología', precio: 1000 },
    { nombre: 'Smartphone', categoria: 'tecnología', precio: 600 },
    { nombre: 'Camisa', categoria: 'ropa', precio: 30 },
    { nombre: 'Teclado', categoria: 'tecnología', precio: 50 },
    { nombre: 'Zapatillas', categoria: 'ropa', precio: 80 }
];

const productosTecnologia = productos.filter(producto => producto.categoria === 'tecnología');

const productosConDescuento = productosTecnologia.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9 
}));

const precioTotalConDescuento = productosConDescuento.reduce((total, producto) => total + producto.precio, 0);

console.log("Productos de tecnología con descuento aplicado:", productosConDescuento);
console.log("Precio total con descuento:", precioTotalConDescuento);
