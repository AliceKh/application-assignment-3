import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ChangePass.module.css";
import { useHistory } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import {db} from "../../store/firebase.js" 

const AddDetails = () => {
  const nameInputRef = useRef();
  const idInputRef = useRef();
  const addressInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    //add validation

    

    console.log("started");
    // Add a new document in collection "cities"
    setDoc(doc(db, "users", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    }).then(res => {
      console.log("written");
    });

    // fetch(
    //   "https://application-assignment-3-default-rtdb.firebaseio.com/users.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       localID:
    //       displayName: nameInputRef,
    //       id: idInputRef,
    //       address: addressInputRef,
    //       phoneNumber: phoneNumberInputRef,
    //     }),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   }
    // ).then((res) => res.json());
    // .then(data => console.log(data.users[0].localId))
    // history.replace("/");
  };

  //   fetch(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCiIZRbpwfmboVOVVMN4-WQ9UIS7lWMi7M",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         idToken: authCtx.token
  //       }),
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     }
  //   ).then(res => res.json()).then(data => console.log(data.users[0].localId))
  //     // history.replace("/");
  // };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="input-name">Enter name:</label>
        <input type="text" id="input-name" ref={nameInputRef} />
        <label htmlFor="input-id">Enter ID: </label>
        <input type="text" id="input-id" ref={idInputRef} />
        <label htmlFor="input-address">Enter address:</label>
        <input type="text" id="input-address" ref={addressInputRef} />
        <label htmlFor="input-phone-number">Enter phone number:</label>
        <input type="text" id="input-phone-number" ref={phoneNumberInputRef} />
      </div>
      <div className={classes.action}>
        <button>Update Details</button>
      </div>
    </form>
  );
};

export default AddDetails;
