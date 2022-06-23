import AnimationText from 'components/animation/AnimationText'
import BlurredText from 'components/animation/BlurredText'
import MenuButton from 'components/core/MenuButton'
import Link from 'next/link'
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
          <BlurredText text="Menu" delay={0.5} show={open} />
          <Link href="./credits">
            <AnimationText text="Créditos" show={open}/>
          </Link>
        </div>
      </div>
      <button onClick={() => setOpen(!open)} className={styles.button}>
        <MenuButton open={open} />
      </button>
    </div>
  )
}

export default Menu
