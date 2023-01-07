import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      <img className={styles.header__image} alt="theme"/>
    </header>
  )
}

export default Header