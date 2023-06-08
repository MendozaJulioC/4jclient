import axios from "axios";
export async function GET(request){

let respipex;
   const reimcv = await axios.get('http://3.129.17.12:3001/api/datos/generales/ipex').then( async function(response) {                

    respipex= response.data

})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(respipex)
}