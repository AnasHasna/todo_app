import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "react-query";
import { addTodo } from "../api/todoApi";

const AddTodoModal = (props) => {
  const [text, setText] = React.useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (text) => {
    let data = {
      text: text,
    };
    mutate(data);
  };

  const { isLoading, mutate } = useMutation(addTodo, {
    mutationKey: "addTodo",
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static" // Prevents closing on click outside the modal
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Your Todo Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fff" }}>
        {" "}
        <h4>Enter Your Task</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            handleSubmit(text);
          }}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodoModal;
