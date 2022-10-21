import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Placement from "../Placement";
import StaffField from "./staffField";

function Layout() {
  const [isConfigField, setConfigField] = useState(false);
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Placement
            isConfigField={isConfigField}
            setConfigField={setConfigField}
          />
        </Col>
        {!isConfigField ? (
          <Col sm={4}>
            <StaffField />
          </Col>
        ) : null}
      </Row>
    </Container>
  );
}

export default Layout;
