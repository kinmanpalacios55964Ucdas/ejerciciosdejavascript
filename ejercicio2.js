/**
 * Ejercicio 2: Generador de Grillas ASCII Dinámicas (Bucles y Condicionales)
 */
function generarGrillaASCII(ancho, alto) {
    let resultado = "";

    for (let f = 0; f < alto; f++) {
        for (let c = 0; c < ancho; c++) {
            // Evaluamos las 4 esquinas
            const esEsquina = (f === 0 || f === alto - 1) && (c === 0 || c === ancho - 1);
            // Evaluamos los bordes superior o inferior (sin contar esquinas)
            const esBordeHorizontal = (f === 0 || f === alto - 1);
            // Evaluamos los bordes laterales (sin contar esquinas)
            const esBordeVertical = (c === 0 || c === ancho - 1);
            // Evaluamos la fila de la barra de direcciones
            const esBarraDirecciones = (f === 1);

            if (esEsquina) {
                resultado += "+";
            } else if (esBordeHorizontal) {
                resultado += "-";
            } else if (esBordeVertical) {
                resultado += "|";
            } else if (esBarraDirecciones) {
                resultado += "=";
            } else {
                resultado += " ";
            }
        }
        // Agregamos salto de línea al final de cada fila excepto la última
        if (f < alto - 1) {
            resultado += "\n";
        }
    }

    console.log(resultado);
}

// Ejemplo de prueba requerido por el enunciado (ancho = 6, alto = 5)
generarGrillaASCII(6, 5);
