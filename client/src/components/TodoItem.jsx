import React from "react";
import Card from "react-bootstrap/Card";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import { useMutation } from "react-query";
import { deleteTodo } from "../api/todoApi";

function MyCard(props) {
  const createdAt = props.todo.createdAt;
  const currentTime = new Date().getTime();
  const createdAtTime = new Date(createdAt).getTime();
  const timeDiff = currentTime - createdAtTime;
  const timeDiffInHours = Math.floor(timeDiff / (1000 * 3600));

  const { isLoading, mutate } = useMutation(deleteTodo, {
    mutationKey: "deleteTodo",
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = () => {
    mutate({ id: props.todo._id });
  };
  return (
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
            />
          </div>
          <div
            style={{
              color: "#9B9A9A",
            }}>
            <h5 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
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
            <PencilFill style={{ fontSize: "20px", background: "none" }} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
