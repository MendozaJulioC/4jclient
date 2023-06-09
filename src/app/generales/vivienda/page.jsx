'use client'
import { useEffect } from "react";
import Router, { useRouter } from 'next/navigation'
import Coming from "../../components/Pronto/ProntoCooming";
export default function Page() {
    useEffect(()=>{ const session = sessionStorage.getItem('UserCook') ;  if(!session){  router.push('/login')}})
    const router = useRouter()
    return (
        <div className='container'>
            <h1>Vivienda</h1>
            <div>Información sector vivienda</div>
            <ul>
                <li> deficit cuantitqtivo de vivienda </li>
                <li> deficit cualitativo de vivienda </li>
                <li> extension del municipio  rural</li>
                <li>cantidad de viviendas</li>
                <li>cantidad de vivienda por estratos</li>
                <li>mapa area por comuna y corregimiento</li>
              
                <li>Tabla Inversión  plan de desarrollo indicadores vivienda</li>
                <li></li>
                <li></li>
            </ul>
      
            <Coming />

       
          
        </div>
     );
    }
    