import React from "react";
import Card from "react-bootstrap/Card";

function StaffField() {
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
          <div>
            <div
              onDragStart={(e) => {}}
              onDragLeave={(e) => {}}
              onDragEnd={(e) => {}}
              onDragOver={(e) => {}}
              draggable={true}
              className="bg-info"
            >
              Item1
            </div>
            <div className="bg-success">Item2</div>
          </div>
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

export default StaffField;
