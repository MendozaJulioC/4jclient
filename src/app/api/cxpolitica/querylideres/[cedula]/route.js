import axios from "axios";

export async function  GET (request, {params}){
    const Cedula = params.cedula
  
    let resultbarrrioslider;
    const  result = await axios.get(`http://3.129.17.12:3001/estado/lideres/barriales/${Cedula}`).then(async function(response) {
        resultbarrrioslider = response.data.data
    }).catch(function (error){ console.error('Error GET Grupo Poblacion', error);})
    return    Response.json(resultbarrrioslider)
}



export async function DELETE( request, {params}){
    const Cedula = params.cedula
    let deletebarrrioslider;
    const  result = await axios.delete(`http://3.129.17.12:3001/estado/lideres/eliminar/${Cedula}`).then(async function(response) {
        deletebarrrioslider = response.data.data
    }).catch(function (error){ console.error('Error DELETE líder barrial', error);})
    return    Response.json(deletebarrrioslider)

}