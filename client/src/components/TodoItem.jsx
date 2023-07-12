import React from "react";
import Card from "react-bootstrap/Card";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import { useMutation } from "react-query";
import { deleteTodo, doneTodo } from "../api/todoApi";
import ModifyTodoModel from "./ModifyTodoModel";

function MyCard(props) {
  const createdAt = props.todo.createdAt;
  const currentTime = new Date().getTime();
  const createdAtTime = new Date(createdAt).getTime();
  const timeDiff = currentTime - createdAtTime;
  const timeDiffInHours = Math.floor(timeDiff / (1000 * 3600));

  const [data, setData] = React.useState({});

  const { isLoading, mutate } = useMutation(deleteTodo, {
    mutationKey: "deleteTodo",
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [modalShow, setModalShow] = React.useState(false);

  const handleDelete = () => {
    mutate({ id: props.todo._id });
  };

  const mutation = useMutation(doneTodo, {
    mutationKey: "doneTodo",
    onSuccess: (data) => {
      setData(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDone = () => {
    mutation.mutate({ id: props.todo._id });
  };

  return (
    <div>
      <Card
        style={{
          border: "none",
          marginBottom: "1rem",
        }}>
        <Card.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "20px",
          }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div>
              <FormCheck
                type="checkbox"
                style={{ fontSize: "23px", paddingRight: ".4rem" }}
                onChange={handleDone}
              />
            </div>
            <div
              style={{
                color: "#9B9A9A",
              }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  textDecoration: data.done ? "line-through" : "none",
                }}>
                {props.todo.text}
              </h5>
              <p style={{ fontSize: "bold" }}>
                Time passed : {timeDiffInHours} hours
              </p>
            </div>
          </div>
          <div>
            <Button variant="danger" size="sm">
              <TrashFill
                style={{ fontSize: "20px", background: "none" }}
                onClick={handleDelete}
              />
            </Button>{" "}
            <Button variant="success" size="sm">
              <PencilFill
                style={{ fontSize: "20px", background: "none" }}
                onClick={() => {
                  setModalShow(true);
                }}
              />
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ModifyTodoModel
        id={props.todo._id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default MyCard;
