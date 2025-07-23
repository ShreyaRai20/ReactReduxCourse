import styles from './Container.module.css'

function Container({children}) {
  return (
    <div className={styles.container}>
      Container
      {children}
    </div>
  )
}

export default Container
