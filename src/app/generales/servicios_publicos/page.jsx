'use client'
import { useEffect } from "react";
import Router, { useRouter } from 'next/navigation'

import Coming from "../../components/Pronto/ProntoCooming";
export default function Page() {
    useEffect(()=>{ const session = sessionStorage.getItem('UserCook') ;  if(!session){  router.push('/login')}})
    const router = useRouter()
    return (
        <div className="container">
          <h1>Servicios Públicos</h1>
            <div>Información sector servicios públicos</div>
            <ul>
           
                <li>Cobertura acueducto</li>
                <li>cobertura alcantarillado</li>
                <li>cobertura aseo</li>
                <li>telefonía fija conmutada</li>
                <li>internet dedicado(fijo)</li>
                <li>minimo vital de agua</li>
                <li>desconexion de servicios públicos</li>
                <li>prestación de servicio alumbrado publico
                    <ul>
                        <li>puntos luminosos</li>
                        <li>porcentaje de tecno led</li>
                    </ul>
                </li>
                <li>
                    acceso a agua potable
                    <ul>
                        <li>viviendas que acceden al agua potable</li>
                        <li>viviendas con sistemas alternativos de agua potable</li>
                        <li>viviendas con conexion a servicios de acueducto y alcantarillado</li>
                    </ul>
                </li>
                <li>inversion planes de desarrollo </li>
            </ul>
            <Coming />
        </div>
    );
}