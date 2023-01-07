import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ChangePass.module.css';
import { useHistory } from 'react-router-dom';
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    setDoc,
  } from "firebase/firestore";
  import { auth, db, storage } from "../../firebase.js";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
  import { getDatabase, ref, set } from "firebase/database";


const AddDetails = () => {

    const nameInputRef = useRef();
    const idInputRef = useRef();
    const addressInputRef = useRef();
    const phoneNumberInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = event => { 
    event.preventDefault(); 
    handleAdd();
    
  }
  const handleAdd = async (e) => {

    // e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredID = idInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneNumberInputRef.current.value;


// function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
// }
   
    // try {




    //   const res = await createUserWithEmailAndPassword(
    //     auth,
    //     enteredName,
    //     enteredID,
    //     enteredAddress,
    //     enteredPhone
    //   );
//       await setDoc(doc(db, "users", "lc9BlELZMAfw0S9bGSA00j8Wrbo2"), {
//         ...{
//             "name":"sss"
//         },
//         timeStamp: serverTimestamp(),
//       });
//     //   navigate(-1)
//     } catch (err) {
//       console.log(err);
//     }
//   };
    // add validation

    // const handleInput = (e) => {
    //     const id = e.target.id;
    //     const value = e.target.value;
    
    //     setData({ ...data, [id]: value });
    //   };

    
    


//     fetch ('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCiIZRbpwfmboVOVVMN4-WQ9UIS7lWMi7M', 
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         idToken: authCtx.token,
//         // password: enteredNewPassword,
//         displayName: enteredName,
//         id: enteredID,
//         address: enteredAddress,
//         phoneNumber: enteredPhone,
//         returnSecureToken: true
//       }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     }
//     ).then(res => {
//         ___

//       console.log("details updated");
//       history.replace('/');
//     })
//   }


    // }

  }

    
  return (
    <form className={classes.form} onSubmit ={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='input-name'>Enter name:</label>
        <input type='text' id='input-name' ref={nameInputRef}/>
        <label htmlFor='input-id'>Enter ID: </label>
        <input type='text' id='input-id' ref={idInputRef}/>
        <label htmlFor='input-address'>Enter address:</label>
        <input type='text' id='input-address' ref={addressInputRef}/>
        <label htmlFor='input-phone-number'>Enter phone number:</label>
        <input type='text' id='input-phone-number' ref={phoneNumberInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Update Details</button>
      </div>
    </form>
  );
}

export default AddDetails;
