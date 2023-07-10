import React from "react";
import Card from "react-bootstrap/Card";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import { TrashFill, PencilFill } from "react-bootstrap-icons";

function MyCard() {
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
          <FormCheck
            type="checkbox"
            style={{ fontSize: "23px", paddingRight: ".4rem" }}
          />
          <h5
            style={{
              color: "#9B9A9A",
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}>
            Task to do
          </h5>
        </div>
        <div>
          <Button variant="danger" size="sm">
            <TrashFill style={{ fontSize: "20px", background: "none" }} />
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