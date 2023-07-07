console.log(location.search)     
var args = location.search.substr(1).split('&');  

console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts);

document.getElementById("id").value = decodeURIComponent(parts[0][1]);
document.getElementById("nombre").value = decodeURIComponent(parts[1][1]);
document.getElementById("email").value = decodeURIComponent(parts[2][1]);
document.getElementById("telefono").value =decodeURIComponent(parts[3][1]);
document.getElementById("fecha").value =decodeURIComponent(parts[4][1]);
document.getElementById("hora").value = decodeURIComponent(parts[5][1]);
document.getElementById("numPer").value =decodeURIComponent(parts[6][1]);
document.getElementById("coment").value =decodeURIComponent(parts[7][1]);

function modificar() {
    let id = document.getElementById("id").value
    let n = document.getElementById("nombre").value
    let e = document.getElementById("email").value
    let t = document.getElementById("telefono").value
    let f = document.getElementById("fecha").value
    let h = document.getElementById("hora").value
    let p = parseInt(document.getElementById("numPer").value)
    let c = document.getElementById("coment").value
   
    let reserva = {
        nombre: n,
        email: e,
        telefono: t,
        fecha:f,
        hora: h,
        numPer: p,
        coment:c
    }
    //let url = "http://localhost:5000/reservas/"+id
    let url = "https://germanrvera.pythonanywhere.com/reservas/"+id
    var options = {
        body: JSON.stringify(reserva),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "Reservas.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
