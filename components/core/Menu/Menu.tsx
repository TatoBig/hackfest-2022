import AnimationText from 'components/animation/AnimationText'
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
        <div className={styles.menuContent} >
          <div className={styles.title}>
            Menu
          </div>
          <AnimationText text="Inicio" show={open} link="/" action={() => setOpen(!open)} />
          <AnimationText text="Objetivos" show={open} delay={0.2} link="/objectives" action={() => setOpen(!open)} />
          <AnimationText text="Créditos" show={open} delay={0.4} link="/credits" action={() => setOpen(!open)} />
        </div>
      </div>
      <button onClick={() => setOpen(!open)} className={styles.button}>
        <MenuButton open={open} />
      </button>
    </div>
  )
}

export default Menu
