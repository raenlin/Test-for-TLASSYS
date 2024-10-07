import styles from './Item.module.css';

function Item({ text, src }: { text: string; src: string }) {
  return (
    <a href="#" className={styles.item}>
      <img src={src} alt="Icon" />
      <p>{text}</p>
    </a>
  );
}

export default Item;
