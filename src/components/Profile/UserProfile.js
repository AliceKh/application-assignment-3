import ChangePass from './ChangePass';
import AddDetails from './AddDetails';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <AddDetails/>
      <ChangePass />
    </section>
  );
};

export default UserProfile;
