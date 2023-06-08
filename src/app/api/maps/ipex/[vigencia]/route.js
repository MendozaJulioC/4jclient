import axios from "axios";

export async function  GET (request, {params}){
    const Vigencia = params.vigencia

    let dataipexcomunas;
    const  respoblamedvigencia = await axios.get(`http://3.129.17.12:3001/api/gis/ipex/${Vigencia}`).then(async function(response) {
        
        dataipexcomunas = response.data.data[0].jsonb_build_object
        
    }).catch(function (error){ console.error('Error GET IPM Comunas', error);})
    return    Response.json(dataipexcomunas)
}