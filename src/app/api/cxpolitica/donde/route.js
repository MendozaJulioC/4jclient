import axios from "axios";
export async function GET(request){

let porcentajelideresbarrios;
   const lidres = await axios.get('http://3.129.17.12:3001/estado/dondeestamos/barrios').then( async function(response) {                
    porcentajelideresbarrios= response.data
})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(porcentajelideresbarrios)
}