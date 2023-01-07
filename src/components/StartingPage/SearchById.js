import { useRef } from "react";
import classes from "./SearchById.module.css";
import User from "./User";

const SearchById = () => {
  const searchId = useRef();
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.control}>
          <center><h3>Search All Users:</h3></center>
          <input type="text" id="search-id" ref={searchId} />
          {/* // if and for and stuff */}
        </div>
      </form>
      <User></User>
    </div>
  );
};

export default SearchById;
