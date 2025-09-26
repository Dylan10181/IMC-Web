document.getElementById("calcular").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  let mensaje = "";

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    mensaje = "Por favor, ingresa datos válidos.";
  } else {
    const imc = (peso / (altura * altura)).toFixed(2);

    if (imc < 18.5) {
      mensaje = `${nombre}, tu IMC es ${imc} → Peso bajo. Recomendación: consulta un nutricionista.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      mensaje = `${nombre}, tu IMC es ${imc} → Peso normal. ¡Sigue manteniendo hábitos saludables!`;
    } else {
      mensaje = `${nombre}, tu IMC es ${imc} → Sobrepeso. Recomendación: cuida tu alimentación y haz ejercicio.`;
    }
  }

  document.getElementById("mensaje").textContent = mensaje;
});
