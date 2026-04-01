import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>My Todo List</h1>
      <p className={styles.subtitle}>Stay organized, stay productive</p>
    </div>
  );
}
