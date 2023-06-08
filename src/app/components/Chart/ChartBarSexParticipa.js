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


function ChartBarSexParticipa(props) {
  const [dateo, setDateo] = useState();

  useEffect(() => {
    getData3();
  }, []);

  async function getData3() {
    try {
      const respuesta = await axios.get("/api/cxpolitica/potencialvotossex");
      dataprint.splice(0, dataprint.length);
      respuesta.data.data.forEach((element) => {
        dataprint.push(
          {
            label: "Hombres",
            value: parseInt(element.hombres),
            color: "#068DA9",
          },
          {
            label: "Mujeres",
            value: parseInt(element.mujeres),
            color: "#9376E0",
          }
        );
      });
    } catch (error) {
      console.error("Error ");
    }
    setDateo(dataprint);
  }

  const dataSource = {
    chart: {
      caption: "Potenciales votantes por tipo de Sexo",
      subcaption: "Datos ",
      drawanchors: "0",
      showvalues: "1",
      plottooltext: "<b>$dataValue</b> votos en $label",
      theme: "ocean",
      formatnumberscale: "0",
      decimalSeparator: ".",
      valuefontsize: "14",
      labelfontsize: "12",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      plottooltext:" Número de <b>$label</b>",
      centerlabel: "# Users: $value",
      theme: "ocean",
    },
    data: dateo,
  };

  return (
    <ReactFusioncharts
      type="bar2d"
      width={"100%"}
      height={220}
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}


export default ChartBarSexParticipa; 