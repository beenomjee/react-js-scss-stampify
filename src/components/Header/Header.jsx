import React from 'react'
import styles from './Header.module.scss'
import { CgMenuRightAlt } from 'react-icons/cg'
const Header = ({ handler, isSideOpen }) => {
    return (
        <>
            <div onClick={handler} className={`${styles.bgWrapper} ${(isSideOpen) ? styles.show : ''}`}></div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <a href='#'><img src="/logo.png" alt="Stamplify" /></a>
                </div>
                <div className={styles.right}>
                    <button onClick={handler}><CgMenuRightAlt /></button>
                </div>
            </div>
        </>
    )
}

export default Header