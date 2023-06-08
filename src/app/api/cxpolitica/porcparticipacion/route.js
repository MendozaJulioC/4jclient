import axios from "axios";
export async function GET(request){

let porcparticipacion;
   const porce = await axios.get('http://3.129.17.12:3001/estado/history/porc-participacion').then( async function(response) {                
    porcparticipacion= response.data
})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(porcparticipacion)
}