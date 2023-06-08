'use client'
import React, { useEffect, useRef, useState, useMemo } from "react"
import $ from 'jquery'


{ <link  rel="stylesheet" crossOrigin="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.css" > </link>}
<script crossorigin src="https://code.jquery.com/jquery-3.5.1.js"> </script>;
<script crossorigin src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js"> </script>;

export default function TblFunc2({ dateo }) {
    $.DataTable = require('datatables.net')
    const tableRef2 = useRef()
    var dataSet2 = [];
    async function getTableData2() {
        dateo.forEach((element) => {
            dataSet2.push([element.cedula,
            element.codbarrio,
            element.nombre,
            element.codcomuna,
            element.nombre_com,
            ])
        })
        getTable2()
    }
    getTableData2()

    async function getTable2() {
        console.log(dataSet2)
        const table2 = $(tableRef2.current).DataTable({
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
            data: dataSet2,
            fixedHeader: true,
            scrollCollapse: true,
            sProcessing: "Procesando...",
            columns: [
                {
                    name: "id",
                    title: 'IdLider',
                    sortable: true,
                    width: "2rem"                       // another for example
                },
                {
                    name: "codbarrio",
                    title: 'CodBarrio',
                    selector: "id",
                    sortable: true,
                    width: "10rem",
                    headerStyle: (selector, id) => {
                        return { textAlign: "center" };   // removed partial line here
                    },
                },
                {
                    name: "nombre",
                    title: 'Barrio',
                    sortable: true,
                    width: "10rem",
                    textAlign: 'center'                          // another for example
                },

                {
                    name: "codcomuna",
                    title: 'CodComuna',
                    sortable: true,
                    width: "1rem"                       // another for example
                },

                {
                    name: "nombre_com",
                    title: 'Comuna',
                    sortable: true,
                    width: "1rem"                       // another for example
                },

            ],
            columnDefs: [
                {/*cod_ind */  width: "1px", targets: 0, className: "text-center" },
                {/*unidad  */  width: "10rem", targets: 1, className: "text-center" },
                {/*unidad  */  width: "1px", targets: 2, className: "text-center" },
                {/*unidad  */  width: "1px", targets: 3, className: "text-center" },
            ],
            destroy: true
        }
        )


        // Extra step to do extra clean-up.
        return function () {
            console.log("Table destroyed")

            table2.destroy()
        }

    }
    return (
        <div>
            <table className=" hover stripe" style={{ width: '100%' }} ref={tableRef2}></table>
        </div>
    )
}








