var textoSaida = document.getElementById("area-resultado");
let textoEntrada = document.getElementById("area-entrada");
var btnEcrypt = document.getElementById("btn-encrypt");
var btnDescrypt = document.getElementById("btn-descrypt");
var btnCopiar = document.getElementById("btn-copy");
document.getElementById("div-saida").style.display = "none";

var evento1 = btnEcrypt.addEventListener("click", (e) => {
  let textoEntrada = document
    .getElementById("area-entrada")
    .value.toLowerCase();

  let textoEncriptografado = textoEntrada
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  return (textoSaida.innerHTML = textoEncriptografado);
});

var evento2 = btnDescrypt.addEventListener("click", (e) => {
  let textoEntrada = document
    .getElementById("area-entrada")
    .value.toLowerCase();

  let textoDescriptografado = textoEntrada
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  return (textoSaida.innerHTML = textoDescriptografado);
});

var evento3 = btnCopiar.addEventListener("click", (e) => {
  let textoEntrada = document
    .getElementById("area-entrada")
    .value.toLowerCase();
  navigator.clipboard.writeText(textoSaida.value);
  textoSaida.innerHTML = `${textoSaida.value}`;
});

textoEntrada.addEventListener("keydown", () => {
  document.getElementById("div-saida").style.display = "";

  if (!document.getElementById("area-entrada").value) {
    document.getElementById("div-saida").style.display = "none";
  }
});
