import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row as="main">
        <Col xs={8} as="section">
          <Row as="ul" className="list-unstyled">
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton gt30">Equipos asignados a mayores de 30</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton tarragona">Equipos asignados a personas de Tarragona</Button>
            </Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton provincias">Provincias donde hay equipos</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton puestos">Puestos de trabajadores con equipo</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton edad-media">Media de edad de trabajadores</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton orden-edad">Equipos ordenados por edad</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton sobremesa">Equipos de tipo sobremesa</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton trabajadores-portatil">Trabajadores con equipo
          portátil</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton equipos-tipo">Equipos organizados por tipo</Button></Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton portatiles-tarragona">Equipos portátiles asignados en
          Tarragona</Button>
            </Col>
            <Col sm={4} lg={3} as="li"><Button variant="warning" className="boton resumen">Resumen de equipos asignados</Button></Col>
          </Row>
        </Col>
        <Col xs={4} as="aside">
          <div className="consola">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ex optio quia, consequatur, voluptate ratione tempore cupiditate saepe modi porro,
          commodi impedit quam rerum amet fugit perferendis est. Et, enim dolores.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ex optio quia, consequatur, voluptate ratione tempore cupiditate saepe modi porro,
          commodi impedit quam rerum amet fugit perferendis est. Et, enim dolores.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ex optio quia, consequatur, voluptate ratione tempore cupiditate saepe modi porro,
          commodi impedit quam rerum amet fugit perferendis est. Et, enim dolores.
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
