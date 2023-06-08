import axios from "axios";

export async function  GET (request, {params}){
    const Vigencia = params.vigencia
    let ipm;
       const  respimcvsector = await axios.get(`http://3.129.17.12:3001/api/datos/generales/ipm/${Vigencia}`).then(async function(response) {
        ipm = response.data.data
        
    }).catch(function (error){ console.error('Error GET IPM', error);})
    return    Response.json(ipm)
}

