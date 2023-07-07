const fechaInput = document.getElementById('fecha');

// Obtener la fecha actual
const fechaActual = new Date().toISOString().split('T')[0];

// Establecer la fecha mínima permitida
fechaInput.min = fechaActual;

// Escuchar el evento de cambio de fecha
fechaInput.addEventListener('change', () => {
  // Obtener la fecha seleccionada
  const fechaSeleccionada = fechaInput.value;

  // Desactivar las fechas anteriores a la fecha seleccionada
  const opciones = fechaInput.querySelectorAll('option');
  opciones.forEach((opcion) => {
    if (opcion.value < fechaSeleccionada) {
      opcion.disabled = true;
    } else {
      opcion.disabled = false;
    }
  });
});




  


