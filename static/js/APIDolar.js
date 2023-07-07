const apiurl="https://api.bluelytics.com.ar/v2/latest"

async function obtenervalor(){
    try{
        const response = await fetch(apiurl)
        const data = await response.json()

        document.getElementById("lon").innerHTML = data.blue.value_buy        

        
    }
    catch(error) {console.log('ocurrio un error grave', error)}
}

obtenervalor()
