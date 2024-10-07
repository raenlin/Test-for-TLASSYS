import Form from './Form/Form';
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile_inner}>
        <nav className={styles.profile_nav}>
          <a href="#">Edit Profile</a>
          <a href="#">Preferences</a>
          <a href="#">Security</a>
        </nav>
        <div className={styles.content}>
          <img className={styles.avatar} src="/ava.jpg" alt="Avatar" />
          <div className={styles.form_wrapper}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
