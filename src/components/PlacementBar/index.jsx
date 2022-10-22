import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ImportPlacementConfig from "../ImportPlacementConfig";

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
            placeholder="Длина помещения в метрах"
            name="y"
            required
            max="50"
            min="1"
          />
          <Form.Text className="text-muted">
            Введите длину помещения в метрах
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicX">
          <Form.Label>X &#8594;</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ширина помещения в метрах"
            name="x"
            required
            max="50"
            min="1"
          />
          <Form.Text className="text-muted">
            Введите ширину помещения в метрах
          </Form.Text>
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
