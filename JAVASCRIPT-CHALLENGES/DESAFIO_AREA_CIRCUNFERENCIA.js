/* Area da circunferência é calculada por:
PI * raio * raio
PI sendo uma constante = 3.141592
*/

let raio = 10;
const PI = 3.141592;

let areaCirc= PI * raio * raio;

console.log("A área da circunferência é " + areaCirc + "m²");

areaCirc = Math.PI * raio * raio;
console.log("A área da circunferência é " + areaCirc + "m²");
/* Math.PI utilizado pois oferece um valor mais preciso
no cálculo da área da circunferência.
*/