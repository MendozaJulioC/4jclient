'use client'

import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../page.module.css'

import Router, { useRouter } from 'next/navigation'
import { Button } from "react-bootstrap";
import { useKeys } from "../context/CtxLogin";
import { useEffect } from 'react';
import  React,{ useState, useMemo } from "react";
import { useRef } from "react";


export default function Header() {
    const { credenciales, createCredenciales } = useKeys()
    const [keylogin, setKeyLogin] = useState({ nombre: '' })


    // const [nombre, setNombre] = useState()
    // const permiso = useRef()

    // const storage = useMemo(() => {

    //     permiso.current = JSON.parse(localStorage.getItem('User'));

    // }, [])




   
   
    const router = useRouter()  

    const handleExit = () => {

    
        sessionStorage.clear();
   
     
        router.push('/login')
        // router.replace()
    }

    return (
        <header >
            <nav className="navbar collapseOnSelect fixed-top bg-dark navbar-expand-lg bg-body-tertiary">


                <div className="container-fluid">
                    <div className="logo">
                        <div className={styles.description}>
                            Get started by editing&nbsp;
                            <code className={styles.code}>j4/katría/analitik</code>
                        </div>
                    </div>
                    <div className=" justify-content-end">
                        <ul className="navbar-nav links">
                            <li className="px-2"><Link href="/"><b>KratíAnalitik</b></Link></li>
                            
                            <li className="nav-item px-2"><Link href="/about">Acerca de</Link></li>
                        <li className="nav-item px-2"><Link href="/dash">Home</Link></li>
                        
                      
                                <li className="nav-item px-2"  >
                                    <p style={{color:'white'}}>Hola &nbsp;
                                        <span>
                                            <b style={{ color: '#569DAA' }}>
                                                {nombre}
                                            </b>
                                        </span>
                                    </p>
                                </li>
                               

                          <li className="nav-item px-2"  >
                                <Button variant="warning" onClick={handleExit} size="sm">Salir</Button>
                            </li>
                                <li className="nav-item px-2"  >
                                    <Link href="/login"> <Button variant="success" size="sm">Ingresar</Button></Link>
                                </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


