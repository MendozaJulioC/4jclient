import axios from "axios";
export async function GET(request){

let respimcv;
   const reimcv = await axios.get('http://3.129.17.12:3001/api/datos/total/imcv').then( async function(response) {                

   respimcv= response.data

})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(respimcv)
}