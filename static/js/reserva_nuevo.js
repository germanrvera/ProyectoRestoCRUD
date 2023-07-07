function guardar() {
    let n = document.getElementById("nombre").value;
    let e = document.getElementById("email").value;
    let t = document.getElementById("telefono").value;
    let f = document.getElementById("fecha").value;
    let h = document.getElementById("hora").value;
    let p = parseInt(document.getElementById("numPer").value);
    let c = document.getElementById("coment").value;
;
    

    let reserva = {
        nombre: n,
        email: e,
        telefono: t,
        fecha:f,
        hora: h,
        numPer: p,
        coment:c
    }
    //let url = "http://localhost:5000/reservas"
    let url = "https://germanrvera.pythonanywhere.com/reservas"
        var options = {
        body: JSON.stringify(reserva),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Reserva registrada")
            // Devuelve el href (URL) de la página actual
            window.location.href = "Reservas.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar. Verifique los datos ingresados" )
            console.error(err);
        })
}

