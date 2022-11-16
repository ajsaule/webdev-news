import styles from '../styles/Header.module.css'

const Header = () => {
  const x = 1
  return (
    <div>
      <h1 className={styles.title}>
        <span>Web Dev</span> News
      </h1>
      <p className={styles['sub-title']}>
        Keep up to date with the latest wed dev news
      </p>
    </div>
  )
}

export default Header
