import styles from './Item.module.css';

function Item({ text, src }: { text: string; src: string }) {
  return (
    <button className={styles.item}>
      <img src={src} alt="Icon" />
      <p>{text}</p>
    </button>
  );
}

export default Item;
