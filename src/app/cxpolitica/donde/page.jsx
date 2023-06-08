
'use client'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import L from 'leaflet'
import styles from '../donde/page.module.css'
import { useEffect } from 'react';
import axios from "axios"
import  React,{ useState, useRef , useMemo} from "react";
import { MapContainer, TileLayer,LayersControl ,LayerGroup,Marker, Popup,  FeatureGroup,  Polygon,  GeoJSON , useMap} from 'react-leaflet'

import TblFunc from '../../components/table2'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function page() {
    const [donde, setDonde] = useState();
    const [numbarrios, setNumBarrios] = useState();
    const [cobertura, setCobertura] = useState();
   

    const MyData = () => {
        const [geojson, setGeojson] = useState();
       
     
     
        const map = useMap()
        const ifGeoJsonFirst = useRef(true)
        const paintmap = useMemo(() => { return pintamapa() }, [geojson])

        useEffect(() => {
            if (ifGeoJsonFirst.current) {
                getData()
            }
        }, [])

        async function getData() {
            try {
            
              
                const response = await axios.get('/api/maps/donde');
                setGeojson(response.data.features)
                ifGeoJsonFirst.current = false
                const response2 = await axios.get('/api/cxpolitica/donde')
                setDonde(response2.data.data[0].donde )
                setNumBarrios(response2.data.data[0].barrios )
                setCobertura(parseFloat(response2.data.data[0].porce).toFixed(2) )
               } catch (error) {
                console.error(error);
            }
        
        }
     
        async function pintamapa() {
        
            if (!ifGeoJsonFirst.current) {
                const geojsonObject = L.geoJSON(geojson, {
                    onEachFeature: function (features, layer) {
                        let popupContent = `                       
                            <div className="card" style="width: 18rem;">
                            <!-aquí podemos colocar una imagen-->     
                        <div class="card-body">
                            <h5 className="card-title">` + features.properties.NOMBRE + `</h5>
                            <p className="card-text">
                            <p  className="text-muted"  ;">Código Territorio <br> <b>`+ (features.properties.CODBARRIO) + `</b> </p>
                            <table className="table table-hover table-inverse table-responsive">
                                <tbody>
                                <tr>
                                <td>Líder</td>
                                <td>` + features.properties.NOMLIDER + `</td>
                            </tr>
                            <tr>
                              <td>Celular</td>
                              <td>` + features.properties.CELULAR + `</td>
                            </tr>
                            <tr>
                               <td>Email.</td>
                                <td>` + features.properties.EMAIL + `</td>
                            </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>`
                        let ToolTip = `${features.properties.NOMBRE} <br/>  `
                        layer.bindPopup(popupContent)
                        layer.bindTooltip(ToolTip, { permanent: false, direction: 'center' });
                    }
                }).addTo(map);

                map.fitBounds(geojsonObject.getBounds())

                return <GeoJSON data={geojson.features} />

            } else { return null }
        }
    };


    const position = [6.25, -75.50];

    return (<>
     <CardGroup className='p-2 '>
        <Card className='shadow-lg'>
          <Card.Body className='text-center'>
            <Card.Title className={styles.texto1}>Total Barrios/Veredas con Líderes</Card.Title>
            <hr />
            <Card.Text className='mt-2' style={{fontSize:'3.5vw', color:'#4F709C', fontWeight:'520'}}>
       {donde }
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='shadow-lg'>
          <Card.Body className='text-center'>
            <Card.Title className={styles.texto1}>Total Barrios/Veredas Ciudad </Card.Title>
            <hr />
            <Card.Text className='mt-2' style={{fontSize:'3.5vw', color:'#4F709C', fontWeight:'520'}}>
    {numbarrios}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='shadow-lg'>
        <Card.Body className='text-center'>
            <Card.Title className={styles.texto1}>% Presencia Ciudad </Card.Title>
    <hr />
            <Card.Text className='mt-2' style={{fontSize:'3.5vw', color:'#40128B', fontWeight:'520'}}>
 {cobertura} %
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
        <MapContainer className={styles.map} center={position} zoom={12} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyData />
            </MapContainer>
            <div className='mt-4'>
                <TblFunc />
            </div>
    </>
    )
}


