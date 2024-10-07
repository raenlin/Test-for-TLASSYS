import styles from './Form.module.css';

function Form() {
  return (
    <form>
      <div className={styles.form_inner}>
        <div className={styles.form_side}>
          <div className={styles.form_item}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Charlene Reed"
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="charlenereed@gmail.com"
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="birth">Date Of Birth</label>
            <input
              id="birth"
              type="text"
              name="birth"
              placeholder="25 January 1990"
            />
            <img className={styles.mark} src="mark.png" alt="Check" />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="permanent-address">Permanent Address</label>
            <input
              id="permanent-address"
              type="text"
              name="permanent-address"
              placeholder="San Jose, California, USA"
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="postal">Postal Code</label>
            <input
              id="postal"
              type="number"
              name="postal"
              placeholder="45962"
            />
          </div>
        </div>
        <div className={styles.form_side}>
          <div className={styles.form_item}>
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Charlene Reed"
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="passeord"
              name="password"
              placeholder="************"
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="present-address">Present Address</label>
            <input
              id="present-address"
              type="text"
              name="present-address"
              placeholder="San Jose, California, USA"
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="city">City</label>
            <input id="city" type="text" name="city" placeholder="San Jose" />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="country">Country</label>
            <input id="country" type="text" name="country" placeholder="USA" />
          </div>
        </div>
      </div>
      <button className={styles.submit} type="submit">
        Save
      </button>
    </form>
  );
}

export default Form;
