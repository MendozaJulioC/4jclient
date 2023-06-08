import axios from "axios";
export async function GET(request){

let potencialporsex;
   const votpontsex = await axios.get('http://3.129.17.12:3001/estado/total/potencial/porsex').then( async function(response) {                
    potencialporsex= response.data
})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(potencialporsex)
}