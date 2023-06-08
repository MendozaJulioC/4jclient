'use client'
import  React,{useEffect, useState, useRef , useMemo} from "react";
import axios from "axios"
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";

// Resolves charts dependancy
Charts(FusionCharts ,ReactFusioncharts, FusionTheme);
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

let cate=[]
let votaron=[]
let novoto =[]

function ChartStakedParticipacion() {
  const [categ, setCateg] = useState();
  const [votos, setVotos] = useState();
  const [novotos, setNoVotos] = useState();

  useEffect(() => {
    getData2();
  }, []);

  async function getData2() {
    try {
      cate.splice(0, cate.length);
      votaron.splice(0, votaron.length);
      novoto.splice(0, cate.length);
      const respuesta = await axios.get("/api/cxpolitica/porcparticipacion");
      respuesta.data.data.forEach((element) => {
        cate.push({ label: element.vigecnia.toString() });
        votaron.push({ value: element.participacion });
        novoto.push({ value: 1 - element.participacion });
      });
    } catch (error) {
      console.error("Error ");
    }
    setCateg(cate);
    setVotos(votaron);
    setNoVotos(novoto);
  }

  const dataSource = {
    chart: {
      caption: "Porcentaje de Participación",
      numvisibleplot: "6",
      showvalues: "1",
      decimals: "1",
      stack100percent: "1",
      valuefontcolor: "#FFFFFF",
      plottooltext:
        "$label has $dataValue (<b>$percentValue</b>) $seriesName population",
      theme: "ocean",
    },
    categories: [
      {
        category: categ,
      },
    ],
    dataset: [
      {
        seriesname: "Participó",
        data: votos,
      },
      {
        seriesname: "Abstuvieron",
        data: novotos,
      },
    ],
  };

  return (
    <ReactFusioncharts
      type="scrollstackedcolumn2d"
      width={"100%"}
      height={290}
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}
export default ChartStakedParticipacion; 