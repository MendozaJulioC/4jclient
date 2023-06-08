import axios from "axios";
export async function GET(request){

let listlideresbarrios;
   const lidres = await axios.get('http://3.129.17.12:3001/estado/lideres/territoriales').then( async function(response) {                
    listlideresbarrios= response.data
})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(listlideresbarrios)
}