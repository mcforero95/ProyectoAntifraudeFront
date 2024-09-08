export function detectarFraude(transaccion) {
  // Implementar lógica de detección de fraude
  const montoInusual = transaccion.monto > 10000; // Ejemplo de umbral
  const ubicacionInusual = transaccion.ubicacion !== 'ubicacion_habitual'; // Ejemplo
  const intentosMultiples = transaccion.intentos > 3; // Ejemplo

  return montoInusual || ubicacionInusual || intentosMultiples;
}
