import Item from './Item/Item';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.wrapper}>
      <Item text="Dashboard" src="../../src/assets/nav/home.png" />
      <Item text="Transactions" src="../../src/assets/nav/transfer.png" />
      <Item text="Accounts" src="../../src/assets/nav/user.png" />
      <Item text="Investments" src="../../src/assets/nav/investment.png" />
      <Item text="Credit Cards" src="../../src/assets/nav/card.png" />
      <Item text="Loans" src="../../src/assets/nav/loan.png" />
      <Item text="Services" src="../../src/assets/nav/service.png" />
      <Item text="My Privileges" src="../../src/assets/nav/econometrics.png" />
      <Item text="Setting" src="../../src/assets/nav/settings.png" />
    </div>
  );
}

export default Nav;
