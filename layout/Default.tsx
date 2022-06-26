import { ReactNode, useState } from 'react'
import Menu from 'components/core/Menu'
import styles from './Default.module.scss'

type Props = {
  children: ReactNode
}

const Default = ({ children }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ marginRight: open ? undefined : '0px' }} className={styles.webContainer}>
      <Menu open={open} setOpen={setOpen} />
      <div className={styles.default} style={{ overflow: open ? 'hidden' : 'auto' }}>
        {children}
      </div>
    </div>
  )
}

export default Default
