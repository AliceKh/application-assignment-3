import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ChangePass.module.css";
import {db} from "../../store/firebase.js" 
import { getDatabase, ref, set } from "firebase/database";

const AddDetails = () => {
  const nameInputRef = useRef();
  const idInputRef = useRef();
  const addressInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const authCtx = useContext(AuthContext);
  

  const getUserID = async () => {
    return fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCiIZRbpwfmboVOVVMN4-WQ9UIS7lWMi7M",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) =>  data.users[0].localId);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    //add validation
   

    // console.log(nameInputRef.current.value);
    // Add a new document in collection "cities"
    const db = getDatabase();
    set(ref(db, 'users/' + await getUserID()), {
      name: nameInputRef.current.value,
      id: idInputRef.current.value,
      address: addressInputRef.current.value,
      phoneNumber: phoneNumberInputRef.current.value

    }).then(res => {
      console.log("finish")
    })


  };



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
