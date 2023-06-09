import axios from "axios";
export async function  GET (request, {params}){
    const Comuna = params.codcomuna
    let datalistbarrios;
    const  respoblamedvigencia = await axios.get(`http://3.129.17.12:3001/api/datos/lista/barrios/${Comuna}`).then(async function(response) {
        datalistbarrios = response.data
        console.log(datalistbarrios)
    }).catch(function (error){ console.error('Error GET Listado barrios por comuna', error);})
    return    Response.json(datalistbarrios)
}
