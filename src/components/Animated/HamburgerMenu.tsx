import styles from './HamburgerMenu.module.css'

type HamburgerMenuProps = {
  isHamMenu: boolean
  toggleHamMenu: () => void
}

export const HamburgerMenu = ({ isHamMenu, toggleHamMenu }: HamburgerMenuProps) => {
  return (
    <svg
      // className="ham hamRotate ham4"
      className={`${styles.ham} ${isHamMenu ? styles.active : ""}`}
      viewBox="0 0 100 100"
      // width="80"
      onClick={toggleHamMenu}
    >
      <path
        // className="line top"
        className={`${styles.line} ${styles.top}`}
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
      />
      <path className={`${styles.line} ${styles.middle}`} d="m 70,50 h -40" />
      <path
        // className="line bottom"
        className={`${styles.line} ${styles.bottom}`}
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
      />
    </svg>
  )
}