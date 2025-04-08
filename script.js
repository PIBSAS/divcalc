const valoresEstandar = [
  100, 220, 330, 470, 560, 680, 1000, 2200, 3300, 4700,
  5600, 6800, 10000, 22000, 33000, 47000, 56000, 68000,
  100000, 220000, 330000, 470000, 560000, 680000, 1000000
];

function calcular() {
  const vin = parseFloat(document.getElementById('vin').value);
  const voutDeseado = parseFloat(document.getElementById('vout').value);
  const tolerancia = parseFloat(document.getElementById('tolerancia').value);
  const resultados = document.getElementById('resultados');

  if (isNaN(vin) || isNaN(voutDeseado)) {
    resultados.textContent = 'Por favor, ingrese valores válidos.';
    return;
  }

  let salidas = [];
  for (let r1 of valoresEstandar) {
    for (let r2 of valoresEstandar) {
      let vout = vin * r2 / (r1 + r2);
      let error = Math.abs((vout - voutDeseado) / voutDeseado) * 100;

      if (error <= tolerancia) {
        salidas.push(`R1: ${r1} Ω, R2: ${r2} Ω → Vout: ${vout.toFixed(2)} V (error: ${error.toFixed(2)}%)`);
      }
    }
  }

  resultados.textContent = salidas.length > 0 ? salidas.join('\n') : 'No se encontraron combinaciones dentro del margen de error especificado.';
}
