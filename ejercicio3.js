/**
 * Ejercicio 3: Fábrica de Limitadores de Peticiones (Clausuras / Closures)
 */
function crearControladorIntentos(maximoIntentos, accionNombre) {
    let contador = 0; // Estado privado encerrado en la clausura

    return function(reiniciar = false) {
        if (reiniciar === true) {
            contador = 0;
            return "Contador reiniciado";
        }

        contador++;

        if (contador <= maximoIntentos) {
            return `Ejecutando [${accionNombre}] - Intento ${contador} de ${maximoIntentos}`;
        }

        return `Bloqueado: Se superó el límite de ${maximoIntentos} intentos para [${accionNombre}]`;
    };
}

// Ejemplo de uso/prueba
const intentarLogin = crearControladorIntentos(2, "Login");
console.log(intentarLogin()); // "Ejecutando [Login] - Intento 1 de 2"
console.log(intentarLogin()); // "Ejecutando [Login] - Intento 2 de 2"
console.log(intentarLogin()); // "Bloqueado: Se superó el límite..."
console.log(intentarLogin(true)); // "Contador reiniciado"
