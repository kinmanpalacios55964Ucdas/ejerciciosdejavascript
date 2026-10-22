/**
 * Ejercicio 1: El Validador de Parámetros HTTP (Cortocircuito y Coerción)
 */
function configurarPaginacion(pagina, limite, mostrarOcultos) {
    // Coerción a número y cortocircuito para defaults falsy ("", null, undefined, 0)
    const p = Number(pagina) || 1;

    // Fusión nula para mantener el 0 si el usuario lo pasa explícitamente
    const l = limite ?? 10;

    // Comparación estricta para forzar un booleano real
    const m = mostrarOcultos === "true" || mostrarOcultos === true;

    // Retorno de cadena formateada mediante Template Literals
    return `Página: ${p} | Límite: ${l} | Ocultos: ${m}`;
}

// Ejemplo de prueba requerido por el enunciado
console.log(configurarPaginacion("", 0, "true")); 
// Salida esperada: "Página: 1 | Límite: 0 | Ocultos: true"
