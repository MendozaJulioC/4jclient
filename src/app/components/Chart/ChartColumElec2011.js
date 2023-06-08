
'use client'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import axios from "axios"
// Resolves charts dependancy
Charts(FusionCharts ,ReactFusioncharts, FusionTheme);
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
import  React,{useEffect, useState, useRef , useMemo} from "react";
import { color } from "@amcharts/amcharts5";

let dataprint =[]
let colorbarra;

function ChartColumElec2011(props) {
    const [dateo, setDateo]= useState()
    
    useEffect(()=>{

        getVotos()
       }, [])

       async function getVotos() {
        try {
            
          const respuesta = await axios.get(`/api/cxpolitica/resultados/${props.year}` );

          dataprint.splice(0, dataprint.length);
          respuesta.data.forEach((element) => {
       
            dataprint.push({
              label: element.candidato,
              value: element.votos,
              color: props.color,
            });
        
          });
        } catch (error) {
          console.error("Error ");
        }
        setDateo(dataprint);
      }

  const dataSource = {
    chart: {
      caption: "Resultados",
     subcaption: (props.year).toString(),
      xaxisname: "Candidatos",
      yaxisname: "total votos",
      showvalues: "1",
      formatnumberscale: "0",
      theme: "fusion",


   
    
    },
    data:dateo
  };
  
        return (
          <ReactFusioncharts
          type="bar2d"
      width={'100%'}
      height={350}
          dataFormat="JSON"
          dataSource={dataSource}
          />
        );
 // }
}
export default ChartColumElec2011; 