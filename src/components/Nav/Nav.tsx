import Item from './Item/Item';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.wrapper}>
      <Item text="Dashboard" src="/nav/home.png" />
      <Item text="Transactions" src="/nav/transfer.png" />
      <Item text="Accounts" src="/nav/user.png" />
      <Item text="Investments" src="/nav/investment.png" />
      <Item text="Credit Cards" src="/nav/card.png" />
      <Item text="Loans" src="/nav/loan.png" />
      <Item text="Services" src="/nav/service.png" />
      <Item text="My Privileges" src="/nav/econometrics.png" />
      <Item text="Setting" src="/nav/settings.png" />
    </div>
  );
}

export default Nav;
