import React from "react";
import Card from "react-bootstrap/Card";
import StaffItem from "../StaffItem";
import { staff } from "../staffConfig";

function Staff() {
  return (
    <div className="bg-white text-dark border border-primary rounded p-3">
      <div className="alert alert-primary" role="alert">
        Staff:
      </div>

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Drag to field
          </Card.Subtitle>

          <div className="d-flex justify-content-between align-items-center">
            {staff.map((item, index) => {
              return (
                <StaffItem
                  key={Date.now() + index}
                  name={item.table}
                  imageUrl={item.imgUrl}
                  sizeX={item.sizeX}
                  sizeY={item.sizeY}
                />
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Staff;
