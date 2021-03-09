import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row as="main">
        <Col xs="8" as="section">
          <ul className="list-unstyled">
            <li><Button variant="warning" className="boton gt30">Equipos asignados a mayores de 30</Button></li>
            <li><Button variant="warning" className="boton tarragona">Equipos asignados a personas de Tarragona</Button>
            </li>
            <li><Button variant="warning" className="boton provincias">Provincias donde hay equipos</Button></li>
            <li><Button variant="warning" className="boton puestos">Puestos de trabajadores con equipo</Button></li>
            <li><Button variant="warning" className="boton edad-media">Media de edad de trabajadores</Button></li>
            <li><Button variant="warning" className="boton orden-edad">Equipos ordenados por edad</Button></li>
            <li><Button variant="warning" className="boton sobremesa">Equipos de tipo sobremesa</Button></li>
            <li><Button variant="warning" className="boton trabajadores-portatil">Trabajadores con equipo
          portátil</Button></li>
            <li><Button variant="warning" className="boton equipos-tipo">Equipos organizados por tipo</Button></li>
            <li><Button variant="warning" className="boton portatiles-tarragona">Equipos portátiles asignados en
          Tarragona</Button>
            </li>
            <li><Button variant="warning" className="boton resumen">Resumen de equipos asignados</Button></li>
          </ul>
        </Col>
        <Col xs="4" as="aside">
          <div className="consola"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
