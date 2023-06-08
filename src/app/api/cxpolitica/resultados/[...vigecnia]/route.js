import axios from "axios";

export async function  GET (request, {params}){
    const Vigencia = params.vigecnia
    console.log(Vigencia);
    let resultadoselecciones;
    const  result = await axios.get(`http://3.129.17.12:3001/estado/resultados/elecciones/${Vigencia}`).then(async function(response) {
        resultadoselecciones = response.data.data
    }).catch(function (error){ console.error('Error GET Grupo Poblacion', error);})
    return    Response.json(resultadoselecciones)
}