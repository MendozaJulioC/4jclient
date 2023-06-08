import axios from "axios";
export async function GET(request){

let barrios;
   const respcomunas = await axios.get('http://3.129.17.12:3001/api/datos/listado/barrios').then( async function(response) {                
   barrios= response.data
})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(barrios)
}