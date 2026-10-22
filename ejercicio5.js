/**
 * Ejercicio 5: El Analizador de Telemetría Web
 */

// Inicializamos un historial de pruebas vacío
const historialServidor = [];

function registrarSesion(historial, modulos, huboCaida) {
    // Uso de la notación abreviada de propiedades (Property Shorthand)
    historial.push({ ModulosCargados: modulos, caidaSistema: huboCaida });
}

function obtenerModulosUnicos(historial) {
    const unicos = [];
    for (const sesion of historial) {
        for (const modulo of sesion.ModulosCargados) {
            if (!unicos.includes(modulo)) {
                unicos.push(modulo);
            }
        }
    }
    return unicos;
}

function diagnosticarModulo(historial, nombreModulo) {
    const tabla = {
        sinModuloSinCaida: 0,
        conModuloSinCaida: 0,
        sinModuloConCaida: 0,
        conModuloConCaida: 0
    };

    for (const sesion of historial) {
        const tieneModulo = sesion.ModulosCargados.includes(nombreModulo);
        const tieneCaida = sesion.caidaSistema;

        if (!tieneModulo && !tieneCaida) tabla.sinModuloSinCaida++;
        else if (tieneModulo && !tieneCaida) tabla.conModuloSinCaida++;
        else if (!tieneModulo && tieneCaida) tabla.sinModuloConCaida++;
        else if (tieneModulo && tieneCaida) tabla.conModuloConCaida++;
    }

    return tabla;
}

// Ejemplo de prueba básica
registrarSesion(historialServidor, ["auth", "pagos"], false);
registrarSesion(historialServidor, ["auth"], true);
console.log(obtenerModulosUnicos(historialServidor)); // ["auth", "pagos"]
console.log(diagnosticarModulo(historialServidor, "pagos"));
