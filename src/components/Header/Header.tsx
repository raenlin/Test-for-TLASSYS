import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.burger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.logo_wrapper}>
          <img className={styles.logo} src="/logo.png" alt="Logo" />
          <h1>BankDash.</h1>
        </div>
        <div className={styles.content}>
          <p>Setting</p>
          <img className={styles.ava_mobile} src="/ava.png" alt="Avatar" />
          <div className={styles.account}>
            <div className={styles.search}>
              <img src="/search.png" alt="Search" />
              <input type="text" placeholder="Search for something" />
            </div>
            <div className={styles.settings}>
              <img src="/settings.png" alt="Settings" />
            </div>
            <div className={styles.notification}>
              <img src="/notification.png" alt="Notification" />
            </div>
            <div className={styles.ava}>
              <img src="/ava.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.search_mobile}>
        <img src="/search.png" alt="Search" />
        <input type="text" placeholder="Search for something" />
      </div>
    </header>
  );
}

export default Header;
