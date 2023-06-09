'use client'
import { useEffect } from "react";
import Router, { useRouter } from 'next/navigation'
import Coming from "../../components/Pronto/ProntoCooming";
export default function Page() {
    useEffect(()=>{ const session = sessionStorage.getItem('UserCook') ;  if(!session){  router.push('/login')}})
    const router = useRouter()
    return (
        <div className="container-lg">
          <h1>Salud</h1>
            <div>Información sector salud</div>
            <ul>
                <li>tasa de mortalidad infantil</li>
                <li>mapa tasa de mortalidad infantil</li>
                <li>tasa de mortalidad en menores de 5 años</li>
                <li>maoa tasa de mortalidad menores de 5 años</li>
                <li>tasa de mortalidad materna -mapa- </li>
                <li>  proporcion de embarazo adoslcente de 15-19</li>
                <li>años de vida perdidos por moratlidad evitable</li>
                <li>cobertura en afiliacion al sistema general de seguridad social</li>
                <li>red de servicios de salud
                    <ul>
                        <li>publicas</li>
                        <li>baja complejidad</li>
                        <li>mediana complejidad</li>
                        <li>alta complejidad</li>
                        <li>provadas</li>

                    </ul>
                </li>
                <li>como vamos en salud
                    <ul>
                        <li>muertes</li>
                        <li>nacimientos</li>
                        <li>muertes en menores de un año</li>
                        <li>cobertura vacunacion covid</li>
                        <li>cobertura vacunacion dpt</li>
                        <li>embarazos adoslcente de 15-19</li>
                        <li>poblacion afilidad al regimen subsidiado</li>
                       
                    </ul>
                </li>
              
                <li> eventos de salud publicas
                    <li>casos dengue</li>
                    <li>casos zika</li>
                    <li>casos covid</li>
                    <li>casos de suicidio</li>
                    <li>casos intento de suicidio</li>
                    <li>casos tuberculosis</li>
                
                </li>
                <li> inversion plan de desarrollo</li>      
                        

            </ul>
            <Coming />
        </div>
    );
}