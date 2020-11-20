import React, {useState} from 'react';
import {Button, Alert, Card, Col, Container, Row} from "react-bootstrap";
import SelectComponent from "./SelectComponent";
import DescriptionComponent from "./DescriptionComponent";


const SearchFlightComponent = ({airportList = {}, onClickSearch, error, errorSearch}) => {
  const [departureValue, setDepartureValue] = useState({});
  const [arrivalValue, setArrivalValue] = useState({});

  const setDeparture = (value) => {
    errorSearch('')
    if (value.selectType === 'Partenza') {
      setDepartureValue(value);
    } else {
      setArrivalValue(value)
    }
  }


  return <>
    <Container style={{width: '30rem', marginTop: '10rem'}}>
      <Card className="justify-content-sx-center">
        <Card.Body>
          <Card.Title>Trova il volo piu' economico</Card.Title>
          <Row>
            <Col>
              <SelectComponent airportList={airportList} placeHolder={'Partenza'} setSearch={setDeparture}/>
            </Col>
            <Col>
              <SelectComponent airportList={airportList} placeHolder={'Arrivo'} setSearch={setDeparture}/>
            </Col>
          </Row>
          {error && <Alert variant={'danger'} style={{marginTop: '1rem'}}>
            {error}
          </Alert>}
        </Card.Body>
        <Button variant="secondary" onClick={() => onClickSearch(departureValue, arrivalValue)}>
          Trova Volo !
        </Button>
      </Card>
      <DescriptionComponent arrivalValue={arrivalValue} departureValue={departureValue}/>
    </Container>
  </>
}

export default SearchFlightComponent;
