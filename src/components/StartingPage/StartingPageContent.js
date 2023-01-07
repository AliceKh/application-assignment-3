import classes from "./StartingPageContent.module.css";
import SearchById from "./SearchById";

const StartingPageContent = () => {
  return (
    <div>
      <section className={classes.starting}>
        <h1>Welcome on Board!</h1>
      </section>
      <section>
        <SearchById></SearchById>
      </section>
    </div>
  );
};

export default StartingPageContent;
