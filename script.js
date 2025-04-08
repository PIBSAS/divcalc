const valoresEstandar = [
  100, 220, 330, 470, 560, 680, 1000, 2200, 3300, 4700,
  5600, 6800, 10000, 22000, 33000, 47000, 56000, 68000,
  100000, 220000, 330000, 470000, 560000, 680000, 1000000
];

function calcular() {
  const vin = parseFloat(document.getElementById('vin').value);
  const voutDeseado = parseFloat(document.getElementById('vout').value);
  const tolerancia = parseFloat(document.getElementById('tolerancia').value);
  const tbody = document.querySelector('#resultados tbody');
  tbody.innerHTML = '';

  if (isNaN(vin) || isNaN(voutDeseado)) {
    tbody.innerHTML = `<tr><td colspan="4">⚠️ Por favor, ingrese valores válidos.</td></tr>`;
    return;
  }

  let resultados = [];
  for (let r1 of valoresEstandar) {
    for (let r2 of valoresEstandar) {
      let vout = vin * r2 / (r1 + r2);
      let error = Math.abs((vout - voutDeseado) / voutDeseado) * 100;

      if (error <= tolerancia) {
        resultados.push({ r1, r2, vout, error });
      }
    }
  }

  if (resultados.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">❌ No se encontraron combinaciones dentro del margen de error especificado.</td></tr>`;
  } else {
    resultados.sort((a, b) => a.error - b.error);
    resultados.forEach(res => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${res.r1}</td>
        <td>${res.r2}</td>
        <td>${res.vout.toFixed(2)}</td>
        <td>${res.error.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });
  }
}
