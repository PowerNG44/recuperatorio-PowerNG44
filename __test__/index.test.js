const {
  calcularAreaTriangulo,
  contarLetras,
  sumarDigitos
} = require('../index');

// Pruebas para calcularAreaTriangulo
describe("Ejercicio 1: calcularAreaTriangulo", () => {
  it("debe calcular el área de un triángulo con base y altura positivas correctamente", () => {
    expect(calcularAreaTriangulo(5, 8)).toBe(20);
  });

  it("debe calcular el área de un triángulo con base y altura decimales correctamente", () => {
    expect(calcularAreaTriangulo(2.5, 4.2)).toBe(5.25);
  });

  it("debe calcular el área de un triángulo con base y altura iguales correctamente", () => {
    expect(calcularAreaTriangulo(7, 7)).toBe(24.5);
  });
});

// Pruebas para contarVocales
describe("Ejercicio 3: contarCaracteres", () => {
  it("debe contar las vocales en una cadena con mayúsculas y minúsculas correctamente", () => {
    expect(contarLetras("Hola, Mundo")).toBe(10);
  });

  it("debe contar las vocales en una cadena sin vocales correctamente", () => {
    expect(contarLetras("XYZ")).toBe(3);
  });

  test("debe devolver 0 al pasarle un string vacio", () => {
    expect(contarLetras("")).toBe(0);
  })

});

// Pruebas para sumarDigitos
describe("Ejercicio 2: sumarDigitos", () => {
  it("debe calcular la suma de dígitos de un número positivo correctamente", () => {
    expect(sumarDigitos(12345)).toBe(15);
  });

  it("debe calcular la suma de dígitos de un número grande correctamente", () => {
    expect(sumarDigitos(987654321)).toBe(45);
  });

  it("debe calcular la suma de dígitos de un número de un solo dígito correctamente", () => {
    expect(sumarDigitos(7)).toBe(7);
  });
});