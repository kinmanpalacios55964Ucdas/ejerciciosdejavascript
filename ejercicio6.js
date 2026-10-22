/**
 * Ejercicio 6: Gestión de Estado Inmutable en Carrito de Compras
 */
const inventario = [
    { id: 1, nombre: "Teclado Mecánico", precio: 100, stock: 5 },
    { id: 2, nombre: "Monitor 27", precio: 300, stock: 2 },
    { id: 3, nombre: "Mouse Gamer", precio: 50, stock: 0 } // Agregado sin stock para probar filtro
];

function aplicarDescuentoTemporada(listaProductos, porcentajeDescuento) {
    const resultado = [];

    for (const producto of listaProductos) {
        if (producto.stock > 0) {
            // Creamos un nuevo objeto usando Spread Operator para romper la referencia original
            const nuevoProducto = { ...producto };
            
            // Modificamos únicamente las propiedades de la copia independiente
            nuevoProducto.precio = nuevoProducto.precio - (nuevoProducto.precio * (porcentajeDescuento / 100));
            nuevoProducto.enOferta = true;
            
            resultado.push(nuevoProducto);
        }
    }

    return resultado;
}

// Ejemplo de verificación de inmutabilidad solicitado
const nuevoInventario = aplicarDescuentoTemporada(inventario, 10);

console.log("¿El inventario original quedó intacto? (Debe ser true):", inventario[0].precio === 100);
console.log("¿Tienen referencias de memoria distintas? (Debe ser false):", inventario[0] == nuevoInventario[0]);
