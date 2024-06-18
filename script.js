/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound


20 meters = 65.616 feet | 20 feet = 6.096 meters

20 liters = 5.284 gallons | 20 gallons = 75.708 liters

20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
<p>digitEl.textContent + meters = ${feet} feet</p>
*/

let litDivEl = document.getElementById("lit-div");
let kiloDivEl = document.getElementById("kilo-div");
let btnEl = document.getElementById("btn");
let feet = 0;
let gallon = 0;
let pound = 0;
let metDivEl = document.getElementById("met-div");
btnEl.addEventListener("click", function render() {
  let inputVal = document.getElementById("one");

  metDivEl.innerHTML = metDivEl.innerHTML + inputVal.value;
  metDivEl.innerHTML = `
  <p> ${inputVal.value}  meters = ${getFeet(inputVal.value)} feet </p>

  `;
  litDivEl.innerHTML = `
  <p> ${inputVal.value} liters = ${getGallon(inputVal.value)} gallon </p>

 `;
  kiloDivEl.innerHTML = `
  <p> ${inputVal.value}  kilos = ${getPounds(inputVal.value)} pound </p>

  `;
});
// /////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////7///
function getFeet(met) {
  return (feet = met * 3.281);
}
getFeet(inputVal.value);

function getGallon(liter) {
  return (gallon = liter * 0.264);
}
getGallon(inputVal.value);

function getPounds(kilo) {
  return (pound = kilo * 2.204);
}
getPounds(inputVal.value);
// /////////////////////////////////////////////////////////////////////////
let btnReset = document.getElementById("btn-r");
function reset() {
  let inputVal = document.getElementById("one");
  inputVal.value = "";
  metDivEl.innerHTML = "";
  litDivEl.innerHTML = "";
  kiloDivEl.innerHTML = "";
}
