import classes from './User.module.css';

const User = ({name, id, address, phoneNumber}) => {
  return (
    <center><card className={classes.card}>
      {console.log()}
      <h1>Name: {name}</h1>
      {/* <p class="title">Name:</p> */}
      <p>Id: {id}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Address: {address}</p>
    </card></center>
  );
};

export default User;