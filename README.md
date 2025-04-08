# 🔌 Calculadora de Divisor de Tensión

Este proyecto es una calculadora interactiva para encontrar combinaciones de resistencias estándar que permiten obtener una tensión de salida deseada (Vout) a partir de una tensión de entrada (Vin) usando un divisor resistivo.

💻 **Demo en vivo**: [Ir a la calculadora](https://pibsas.github.io/divcalc/)  
*(Cambiar el enlace al que corresponda a tu GitHub Pages)*

---

## 📐 Fórmula del divisor

La fórmula utilizada para el cálculo es:

```
Vout = Vin × (R2 / (R1 + R2))
```

Dado un valor de entrada (**Vin**) y una salida deseada (**Vout**), el script busca las mejores combinaciones posibles de **R1** y **R2** usando valores comerciales de resistencias.

---

## 🚀 ¿Cómo usar?

1. Cloná o descargá este repositorio.
2. Abrí `index.html` en tu navegador.
3. Ingresá los valores de Vin, Vout y una tolerancia máxima en %.
4. El programa mostrará las mejores combinaciones encontradas.

---

## 📁 Estructura del proyecto

```
divisor-calc/
├── index.html    # Interfaz principal
├── style.css     # Estilos
├── script.js     # Lógica del cálculo
└── README.md     # Este archivo
```

---

## 📦 Lista de resistencias usadas

La búsqueda se realiza sobre los siguientes valores típicos (serie E6 a E12 extendida hasta 1MΩ):

```
100, 220, 330, 470, 560, 680, 820,
1k, 2.2k, 3.3k, 4.7k, 5.6k, 6.8k, 8.2k,
10k, 22k, 33k, 47k, 56k, 68k, 82k,
100k, 220k, 330k, 470k, 560k, 680k, 820k,
1M
```

---

## 🛠 Tecnologías usadas

- HTML5
- CSS3
- JavaScript (vanilla, sin frameworks)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Usalo libremente y mejoralo si querés. ¡Pull requests bienvenidos!
