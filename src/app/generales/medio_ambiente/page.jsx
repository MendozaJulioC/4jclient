'use client'
import { useEffect } from "react";
import Router, { useRouter } from 'next/navigation'
import Coming from "../../components/Pronto/ProntoCooming";
export default function Page() {
  useEffect(()=>{ const session = sessionStorage.getItem('UserCook') ;  if(!session){  router.push('/login')}})
  const router = useRouter()
    return (
        <div className="text-center mt-4">
        <h2 className="p-4">Medio Ambiente </h2> 
          <Coming />
      </div>
    );
}
