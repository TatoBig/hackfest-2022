type Props = {
  open: boolean
}

const MenuButton = ({ open }: Props) => {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23"
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
    >
      <path
        d={open ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}
        style={{ transition: 'all 0.2s ease-in-out' }}
      />
      <path
        style={{ opacity: open ? 0 : 1, transition: 'all 0.2s ease-in-out' }}
        d="M 2 9.423 L 20 9.423"
      />
      <path
        d={open ? 'M 3 2.5 L 17 16.5' : 'M 2 16.5 L 20 16.5'}
        style={{ transition: 'all 0.2s ease-in-out' }}
      />
    </svg>
  )
}

export default MenuButton
