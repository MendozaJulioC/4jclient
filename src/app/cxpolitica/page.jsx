'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from './page.module.css'

import ChartCxPolitica from '../components/Chart/ChartCxPolitica'
import ChartStakedParticipacion from '../components/Chart/ChartStakedParticipacion'
import ChartBarSexParticipa from '../components/Chart/ChartBarSexParticipa'
import ChartColumElec2011 from '../components/Chart/ChartColumElec2011'
import ChartColumElec2015 from '../components/Chart/ChartColumnElec2015'
import ChartColumElec2019 from '../components/Chart/ChartColumnElec2019'

function CxPoltica() {
  return (
    <>
      <div className='text-center'> <h1 className={styles.texto1}>Información Estratégica Histórica</h1>  </div>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title className={styles.label1}>Total votos por fecha</Card.Title>
            <Card.Text>
              <ChartCxPolitica />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className={styles.label1}>% Partcipación de la Jornada</Card.Title>
            <Card.Text>
              <ChartStakedParticipacion />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Body className='text-center'>
            <h1 className={styles.texto1}> Potencial Total de Votantes </h1>
            <hr />
            <h1 className='p-5' style={{ color: '#025464', fontSize: '2vw', fontWeight: '800', lineHeight: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '3rem 0' }}>1.708.033</h1>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Elecciones 2022...</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <ChartBarSexParticipa />
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Elecciones 2022...</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body className='text-center'>
            <h1 className={styles.texto1}> Puntos de Votación </h1>
            <hr />
            <h1 className='p-5' style={{ color: '#025464', fontSize: '2vw', fontWeight: '800', lineHeight: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '3rem 0' }}>224</h1>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Elecciones 2022...</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          {/* <Card.Img variant="top" src="/img/maps-location-2.svg" width={200} height={200} /> */}
          <Card.Body>
            <Card.Text>
              <ChartColumElec2011
                year={2011}
                color={'#F79327'}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="/img/maps-location-2.svg" width={200} height={200} /> */}
          <Card.Body>
            <Card.Text>
              <ChartColumElec2015
                year={2015}
                color={'#5C8984'}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          {/* <Card.Img variant="top" src="/img/maps-location-2.svg" width={200} height={200} /> */}
          <Card.Body>
            <Card.Text>
              <ChartColumElec2019
                year={2019}
                color={'#545B77'}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>

  );
}

export default CxPoltica;
