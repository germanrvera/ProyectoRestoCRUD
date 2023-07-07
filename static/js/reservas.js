const { createApp } = Vue

  createApp({
    data() {
      return {
        //url:"http://localhost:5000/reservas",
        url:"https://germanrvera.pythonanywhere.com/reservas",
        reservas:[],
        error:false,
        cargando:true
      }
    },
    
    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.reservas = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        
        eliminar(reserva) {
            const url = 'http://localhost:5000/reservas/' + reserva;
            //const url = 'https://germanrvera.pythonanywhere.com/reservas/' + reserva;
            var options = {
                method: 'DELETE'
            }
            fetch(url, options).then(res => res.text()) 
                .then(res => {
                    location.reload();
                })
        }


    },
    



  }).mount('#app')