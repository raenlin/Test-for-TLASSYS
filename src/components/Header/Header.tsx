import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <img
            className={styles.logo}
            src="../../src/assets/logo.png"
            alt="Logo"
          />
          <h1>BankDash.</h1>
        </div>
        <div className={styles.content}>
          <p>Setting</p>
          <div className={styles.account}>
            <div className={styles.search}>
              <img src="../../src/assets/search.png" alt="Search" />
              <input type="text" placeholder="Search for something" />
            </div>
            <div className={styles.settings}>
              <img src="../../src/assets/settings.png" alt="Settings" />
            </div>
            <div className={styles.notification}>
              <img src="../../src/assets/notification.png" alt="Notification" />
            </div>
            <div className={styles.ava}>
              <img src="../../src/assets/ava.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
