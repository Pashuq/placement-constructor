import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Placement from "../Placement";

function Layout() {
  const [isConfigField, setConfigField] = useState(true);
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Placement
            isConfigField={isConfigField}
            setConfigField={setConfigField}
          />
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Layout;
