/**
 * Ejercicio 4: Explorador de Rutas de Directorios Web (Recursión y Backtracking)
 */
function encontrarRutaAcceso(nivelObjetivo, nivelBloqueado) {
    function explorar(actual, historial) {
        // Casos base de descarte (abortar rama)
        if (actual > nivelObjetivo || actual === nivelBloqueado) {
            return null;
        }
        // Caso base de éxito
        if (actual === nivelObjetivo) {
            return historial;
        }

        // Ramificación: Operación A (Multiplicar por 2)
        const ramaA = explorar(actual * 2, `(${historial} * 2)`);
        
        // Ramificación: Operación B (Sumar 3) - Se ejecuta si ramaA da null gracias a ??
        const ramaB = explorar(actual + 3, `(${historial} + 3)`);

        return ramaA ?? ramaB;
    }

    return explorar(1, "1");
}

// Ejemplo de uso/prueba
console.log(encontrarRutaAcceso(11, 5)); // Retorna una secuencia válida si existe
