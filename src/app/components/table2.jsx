'use client'
import React, { useEffect, useRef, useState, useMemo } from "react"
import $ from 'jquery'
import axios from "axios";
import Script from 'next/script'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import TblFunc2 from '../components/table3'
import { checkChange } from "@amcharts/amcharts5/.internal/core/util/Time";

{ <link rel="stylesheet" crossOrigin="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.css" > </link> }
{/* <script crossorigin src="https://code.jquery.com/jquery-3.5.1.js" async > </script>; */}
<script crossorigin src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js" async> </script>;

export default function TblFunc(props) {
    <Script  crossorigin src="https://code.jquery.com/jquery-3.5.1.js"></Script>
    $.DataTable = require('datatables.net')
    const tableRef = useRef()
    // const [dataSet, setDataSet] = useState()
    const [show, setShow] = useState(false);
    const [datoslider, setDatosLider] = useState()
    let datobarrio = []
    var dataSet1 = [];
    useEffect(() => { getTableData() }, [])
    async function getTableData() {
        const respuesta = await axios.get('/api/cxpolitica/querylideres')
        respuesta.data.data.forEach((element) => {
            dataSet1.push(["", element.cedula, element.nom_lider,
                element.celular,
                element.codbarrio, element.nombre,
                element.codcomuna, element.nombre_com,
            ])
        })
        getTable()
    }

    async function getTable() {
        const table = $(tableRef.current).DataTable({
            scrollX: true,
            language: {
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "Nothing found - sorry",
                "info": "Vistas página _PAGE_ of _PAGES_",
                "infoEmpty": "No hay registros Disponibles",
                "infoFiltered": "(filtered from _MAX_ total registros)",
                "search": "Buscar",

                paginate: {
                    first: "Primera",
                    last: "Última",
                    next: "Siguiente",
                    previous: "Anterior"
                },
                sProcessing: "Procesando..."
            },
            data: dataSet1,
            fixedHeader: true,
            scrollCollapse: true,
            sProcessing: "Procesando...",
            columns: [
                {
                    name: "gestion",
                    title: 'Revisar',
                    sortable: true,
                    width: "2rem"                       // another for example
                },
                {
                    name: "cedula",
                    title: 'Cédula',
                    selector: "id",
                    sortable: true,
                    width: "10rem",
                    headerStyle: (selector, id) => {
                        return { textAlign: "center" };   // removed partial line here
                    },
                },
                {
                    name: "lider",
                    title: 'Líder',
                    sortable: true,
                    width: "10rem",
                    textAlign: 'center'                          // another for example
                },

                {
                    name: "celular",
                    title: 'Celular',
                    sortable: true,
                    width: "1rem"                       // another for example
                },

                {
                    name: "codbarrio",
                    title: 'Codbarrio',
                    sortable: true,
                    width: "1rem"                       // another for example
                },
                {
                    name: "barrio",
                    title: 'Barrio',
                    sortable: true,
                    width: "10rem",


                    // another for example
                },
                {
                    name: "codcomuna",
                    title: 'Codcomuna',
                    sortable: true,
                    width: "0.5rem"                       // another for example
                },
                {
                    name: "comuna",
                    title: 'Comuna',
                    sortable: true,
                    width: "1rem"                       // another for example
                },

            ],
            columnDefs: [
                {/*sentido */  width: "5px", targets: 0, className: "text-center", searchable: false, orderable: false, data: 'cedula', defaultContent: `
                  <button type="button" class="btn btn-outline-secondary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
              </button>`
                },
                {/*cod_ind */  width: "1px", targets: 1, className: "text-center" },
                {/*unidad  */  width: "10rem", targets: 2, className: "text-center" },

                {/*unidad  */  width: "1px", targets: 3, className: "text-center" },
                {/*unidad  */  width: "1px", targets: 4, className: "text-center" },
                {/*unidad  */  width: "10rem", targets: 5, },
                {/*unidad  */  width: "1px", targets: 6, className: "text-center" },
                {/*unidad  */  width: "1px", targets: 7 }

            ],
            destroy: true
        }
        )

        $(tableRef.current).on('click', 'button', function () {
            var data = table.row($(this).parents('tr')).data();

            setDatosLider(data)
            setShow(true)


        })
        // Extra step to do extra clean-up.
        return function () {
            console.log("Table destroyed")
            table.destroy()
        }
    }

    return (
        <div>
            <table className=" hover stripe" style={{ width: '100%' }} ref={tableRef}></table>
            <GestionLider
                show={show}
                size="xl"
                backdrop="static"
                keyboard={false}
                onHide={() => setShow(false)}
                lider={datoslider}
            />
        </div>
    )

    function GestionLider(props) {
        const [datos, setDatos] = useState()
        useEffect(() => { getDataLider() }, [])
        async function getDataLider() {
            try {
                const respuesta = await axios.get(`/api/cxpolitica/querylideres/${props.lider[1]}`)
                respuesta.data.forEach((element) => {

                    datobarrio.push({
                        cedula: element.cedula,
                        codbarrio: element.codbarrio,
                        nombre: element.nombre,
                        codcomuna: element.codcomuna,
                        nombre_com: element.nombre_com
                    })
                })
                setDatos(datobarrio)
            } catch (error) {
                console.error(error);
            }
        }

        const inputCedula = useRef()
        const inputNombre = useRef()
        const inputCelular = useRef()
        if (!props.lider) {
            inputCedula.current = ''
            inputNombre.current = ''
            inputCelular.current = ''
        } else {
            inputCedula.current = props.lider[1]
            inputNombre.current = props.lider[2]
            inputCelular.current = props.lider[3]
        }
        const handleBorrar = async (e) => {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: <strong>Eliminar??</strong>,
                html: <i>Selecciona una opción!!</i>,
                showDenyButton: true,
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                denyButtonText: `No Eliminar`,
                iconColor: '#DB005B',
                confirmButtonColor: '#DB005B',
                denyButtonColor: '#5C8984',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */

                if (result.isConfirmed) {
                    MySwal.fire({
                        html: <i>Tú registro ha sido borrado!!</i>,
                        icon: 'info',
                        iconColor: '#DB005B',
                    }, borrado())
                } else if (result.isDenied) {
                    MySwal.fire({
                        html: <i>Ok conservamos los registros!!</i>,
                        icon: 'info',
                    })
                }
            })
            async function borrado() {
                const response = await axios.delete(`/api/cxpolitica/querylideres/${inputCedula.current}`)
                getTableData()
                setShow(false)
            }
        }
        const handleUpdate = async (e) => {
            alert('pasos para actualzar primero en tabla de barrios luego en tabla de lideres')
        }
        return (
            <>
                <Modal
                    {...props}
                    // fullscreen = {true}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <b>Líderes</b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="row p-2">
                                <div className="col-sm-12 col-md-6 col-lg-6  p-1" >
                                    <label for="inputCedula" className="form-label">Cédula</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCedula"
                                        name="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        ref={inputCedula}
                                        value={inputCedula.current}
                                        disabled
                                    />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6   p-1" >
                                    <label for="inputCelular" className="form-label">Celular</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCelular"
                                        name="inputCelular"
                                        aria-describedby="emailHelp"
                                        ref={inputCelular}
                                        value={inputCelular.current}
                                        disabled
                                    />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-12  p-1" >
                                    <label for="inputNombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputNombre"
                                        name="inputNombre"
                                        aria-describedby="emailHelp"
                                        ref={inputNombre}
                                        value={inputNombre.current}
                                        disabled
                                    />
                                </div>
                                <div className="mt-2">
                                    <hr />
                                    <TblFunc2 dateo={datobarrio} />
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" size="sm" onClick={handleBorrar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </Button>
                        {/* <Button variant="warning" size="sm" onClick={handleUpdate}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
                                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                            </svg>
                        </Button> */}
                        <Button variant="primary" size="sm" onClick={props.onHide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg>

                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
    }
}