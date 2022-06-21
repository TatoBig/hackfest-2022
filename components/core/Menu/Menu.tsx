import MenuButton from 'components/core/MenuButton'
import styles from './Menu.module.scss'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

const Menu = ({ open, setOpen }: Props) => {
  return (
    <div>
      <div className={open ? styles.open : styles.closed} />
      <div className={open ? styles.openMenu : styles.closedMenu}>
        <div className={styles.menuContent}>
          <h1>Test</h1>
        </div>
      </div>
      <button onClick={() => setOpen(!open)} className={styles.button}>
        <MenuButton open={open} />
      </button>
    </div>
  )
}

export default Menu
