import axios from "axios";
export async function GET(request){

let comunas;
   const respcomunas = await axios.get('http://3.129.17.12:3001/api/datos/lista/comunas').then( async function(response) {                
   comunas= response.data
})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(comunas)
}