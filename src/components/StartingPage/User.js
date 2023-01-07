// import classes from "./User.module.css";
import Card from "react-bootstrap/Card";

const User = ({ name, id, address, phoneNumber }) => {
  return (
    <center>
      <Card style={{ width: "25rem", padding: "1rem" }}>
        <Card.Body>
          <b>Name: {name}</b> <br/>
          <b>ID:</b> {id} <br/>
          <b>Address:</b> {address} <br />
          <b>Phone Number:</b> {phoneNumber}
        </Card.Body>
      </Card>
    </center>
  );
};

export default User;
