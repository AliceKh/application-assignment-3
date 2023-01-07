import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./SearchById.module.css";
import User from "./User";
import { getDatabase, ref, onValue } from "firebase/database";

const SearchById = () => {
  const [showUser, setShowUser] = useState(false);
  const [searchedUser, setSearchedUser] = useState({});
  const searchId = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    setShowUser(false);
    setSearchedUser({});

    const db = getDatabase();
    const dbRef = ref(db, "users/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      Object.keys(data).forEach((user) => {
        if (data[user].id == searchId.current.value) {
          setShowUser(true);
          setSearchedUser(data[user]);
        }
      });

      console.log(searchedUser);
    });
  };
  return (
    <div>
      {authCtx.token && (
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <center>
              <h3>Search All Users:</h3>
            </center>
            <input type="text" id="search-id" ref={searchId} />
            {/* // if and for and stuff */}
          </div>
        </form>
      )}
      {showUser && <User {...searchedUser} />}
    </div>
  );
};

export default SearchById;
