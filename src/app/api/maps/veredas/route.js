import axios from "axios";
export async function GET(request){

let dategeo;
   const resgeo = await axios.get('http://3.129.17.12:3001/api/gis/veredas').then( async function(response) {
    
    dategeo= response.data.data[0].jsonb_build_object
})
.catch(function (error) {
    // handle error
    console.log(error);
})
    return    Response.json(dategeo)
}