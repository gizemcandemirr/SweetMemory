import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
const initialState = {
  title: "",
  description: "",
  tags: [],
};

const AddEditMemory = () => {
  const [memoryData, setMemoryData] = useState(initialState);
  const { title, description, tags } = initialState;

  const handleSubmit = () => {};
  const handleAddTag = () => {};
  const handleDeleteTag = () => {};
  const onInputChange = () => {};
  const handleClear = () => {};

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "52rem", padding: "25px", marginTop: "50px" }}>
        <Card.Body>
          <Card.Title>Add Memory</Card.Title>
          <Card.Text>Some quick example text to build on the card</Card.Text>
        </Card.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3 align-items-center">
            <Form.Group md="4" className="mt-4">
              <Form.Control
                required
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={onInputChange}
              />
            </Form.Group>

            <Form.Group md="4" className="mt-4">
              <Form.Control
                required
                type="textarea"
                placeholder="Description"
                value={description}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group md="4" className="mt-4">
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Tags"
                  value={tags}
                  onAdd={(tag) => handleAddTag(tag)}
                  onDelete={(tag) => handleDeleteTag(tag)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 mt-4">
              <Form.Control
                type="file"
                onDone={({ base64 }) =>
                  setMemoryData({ ...memoryData, imageFile: base64 })
                }
              />
            </Form.Group>
          </Row>

          <Button type="submit">Submit</Button>
          <Button
            type="submit"
            style={{ marginLeft: "15px" }}
            onClick={handleClear}
          >
            Clear
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddEditMemory;
