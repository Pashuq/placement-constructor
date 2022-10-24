import React from "react";
import Card from "react-bootstrap/Card";
import StaffItem from "../StaffItem";

function Staff() {
  return (
    <div className="bg-white text-dark border border-primary rounded p-3">
      <div className="alert alert-primary" role="alert">
        Stuff
      </div>

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Horizontal stuff
          </Card.Subtitle>

          <StaffItem name="tab" />
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Vertical stuff
          </Card.Subtitle>
          <div>Vertical stuff</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Staff;
