function validarFormulario() {
    
  var nombre = document.getElementById("nombre").value.trim();

  
  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  
  var Fecha_aux = document.getElementById("fecha").value.split("-");
  var Fecha1 = new Date(parseInt(Fecha_aux[0]),parseInt(Fecha_aux[1]-1),parseInt(Fecha_aux[2]));
   
  
   if (isNaN(Fecha1)){
      alert("Fecha introducida incorrecta");
      return false;
    }
  
  
  Hoy = new Date();

  var AnyoFecha = Fecha1.getFullYear();
  var MesFecha = Fecha1.getMonth();
  MesFecha = MesFecha + 1;
  var DiaFecha = Fecha1.getDate();
   
  var AnyoHoy = Hoy.getFullYear();
  var MesHoy = Hoy.getMonth();
  MesHoy = MesHoy + 1;
  var DiaHoy = Hoy.getDate();
   
  if (AnyoFecha < AnyoHoy){
      alert ("La fecha introducida es anterior a la fecha actual");
      return false;	        
  }
  else{
      if (AnyoFecha == AnyoHoy && MesFecha < MesHoy){
          alert ("La fecha introducida es anterior a la fecha actual");		
          return false;	
      }
      else{
          if (AnyoFecha == AnyoHoy && MesFecha == MesHoy && DiaFecha < DiaHoy){
              alert ("La fecha introducida es anterior a la fecha actual");
              return false;
          }
      }
  }    

  
  //alert(`Se registró reserva de ${nombre}`);
  return true;
}
