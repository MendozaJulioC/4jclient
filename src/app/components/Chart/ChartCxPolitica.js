'use client'
import  React,{useEffect, useState, useRef , useMemo} from "react";
import axios from "axios"
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";
import { getDateIntervalDuration } from '@amcharts/amcharts5/.internal/core/util/Time';
// Resolves charts dependancy
Charts(FusionCharts ,ReactFusioncharts, FusionTheme);
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

let dataprint =[]
let colorbarra;

function ChartCxPolitica() {
  const [dateo, setDateo]= useState()
  useEffect(()=>{
    getData()
   }, [])

   async function getData() {
     try {
       const respuesta = await axios.get("/api/cxpolitica/totalesvotos");
       dataprint.splice(0, dataprint.length);
       respuesta.data.data.forEach((element) => {
         if (element.vigecnia == "2022") {
           colorbarra = "#116D6E";
         } else {
           colorbarra = "#F79327";
         }
         dataprint.push({
           label: element.vigecnia.toString(),
           value: element.votos,
           color: colorbarra,
           link: "j-showAlert-Apple,$810K"
         });
       });
     } catch (error) {
       console.error("Error ");
     }
     setDateo(dataprint);
   }

  const dataSource = {
    chart: {
      caption: "Total votos por Elección",
      yaxisname: "Nuúmero de votos total por Elección",
      subcaption: "2011-2022",
      drawanchors: "0",
      showvalues: "1",
      plottooltext: "<b>$dataValue</b> votos en $label",
      theme: "ocean",
      formatnumberscale: "0",
      decimalSeparator: ".",
      valuefontsize: "18",
      labelfontsize: "12",
    },
    events: {
      dataplotClick: function(evt) {
        window.showAlert = function(str) {
          var arr = str.split(",");
          modal.style.display = "block";
          document.getElementById("info").innerHTML =
            "\n" + arr[0] + " juice sales for the last year: " + arr[1];
        };
      }
    },
    data: dateo,
  };
  return (
     <ReactFusioncharts
      type="column2d"
      width={'100%'}
      height={290}
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}


export default ChartCxPolitica; 