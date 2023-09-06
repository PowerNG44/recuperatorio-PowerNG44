/* Ejercicio 1: Calcular el Área de un Triángulo

  Implementa una función llamada `calcularAreaTriangulo` que tome la base y la altura de un triángulo como argumentos y devuelva el área del triángulo.

   El área de un triángulo se calcula como (base * altura) / 2.

  Ejemplo de uso:
   calcularAreaTriangulo(5, 8); // Debería devolver 20.
*/

function calcularAreaTriangulo() {}


/* Ejercicio 2: Calcular la Suma de Dígitos

    Implementa una función llamada `sumarDigitos` que tome un número entero positivo como argumento y devuelva la suma de sus dígitos.
    AYUDA:
    IMPLEMENTAR Math.floor(number) para que redondee para abajo el numero que se le pase como argumento
    Ejemplo de uso:

    sumarDigitos(12345); // Debería devolver 15 (1 + 2 + 3 + 4 + 5).
*/

function sumarDigitos() {}


/* Ejercicio 3: Cantidad de letras en una cadena
  Implementa la funcion contarLetras que tome una cadena de caracteres ( string ) como argumento y devuelva la cantidad de letras que contiene.
  (recuerden que para recorrer un string, podemos usar un FOR)
  LOS ESPACIOS NO SON LETRAS
  Ejemplo de uso:
   contarVocales("Hola, Mundo"); // Debería devolver 10
   contarVocales("asd"); // Debería devolver 3
   contarVocales(""); // Debería devolver 0
*/

function contarLetras() {}



// ❌NO ELIMINAR NI MODIFICAR NADA DEBAJO DE ESTA LINEA❌
module.exports = {
  calcularAreaTriangulo,
  contarLetras,
  sumarDigitos
}