import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ImportPlacementConfig from "../importPlacementConfig";

function PlacementBar({ onSubmit, onImportFile }) {
  return (
    <>
      <Form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div className="alert alert-primary" role="alert">
          Задать размеры помещения вручную
        </div>

        <Form.Group className="mb-3" controlId="formBasicY">
          <Form.Label>Y &#8593;</Form.Label>
          <Form.Control
            type="number"
            placeholder="Длина помещения"
            name="y"
            required
            max="50"
            min="1"
          />
          <Form.Text className="text-muted">Введите длину помещения</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicX">
          <Form.Label>X &#8594;</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ширина помещения"
            name="x"
            required
            max="50"
            min="1"
          />
          <Form.Text className="text-muted">Введите ширину помещения</Form.Text>
        </Form.Group>

        <Button className="mb-4" variant="primary" type="submit">
          Создать
        </Button>

        <div className="alert alert-primary" role="alert">
          Загрузить сохраненную конфигурацию
        </div>

        <ImportPlacementConfig onImportFile={onImportFile} />
      </Form>
    </>
  );
}

export default PlacementBar;
