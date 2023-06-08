import axios from "axios";


    export async function  GET (request, {params}){
        const Cedula = params.cedula
      
        let validalider;
        const  result = await axios.get(`http://localhost:3001/admin/j4/consulta/lider/${Cedula}`).then(async function(response) {
            validalider = response.data.data
        }).catch(function (error){ console.error('Error GET Grupo Poblacion', error);})
        return    Response.json(validalider)
    }
    