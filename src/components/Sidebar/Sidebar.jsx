import React from 'react'
import styles from './Sidebar.module.scss';
import { RiDashboardFill } from 'react-icons/ri'
import { TbBellRinging } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
import { RiUserSettingsLine } from 'react-icons/ri'
import { AiOutlineLogout } from 'react-icons/ai'
import { BsFillGearFill } from 'react-icons/bs'

const data = [
    {
        icon: <RiDashboardFill />,
        title: 'Dashboard',
        isActive: false
    },
    {
        icon: <BiSupport />,
        title: 'Suport Request',
        isActive: true
    },
    {
        icon: <TbBellRinging />,
        title: 'Subscription',
        isActive: false
    },
    {
        icon: <RiUserSettingsLine />,
        title: 'Manage Employee',
        isActive: false
    },
    {
        icon: <BsFillGearFill />,
        title: 'Settings',
        isActive: false
    },
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <a href='#'><img src="/logo.png" alt="Stamplify" /></a>
            </div>
            <nav className={styles.middle}>
                <ul>
                    {
                        data.map((d, i) => (
                            <li key={i}><a href="#" className={`${d.isActive ? styles.active : ''}`}><span className={styles.icon}>{d.icon}</span><span className={styles.text}>{d.title}</span></a></li>
                        ))
                    }
                </ul>
            </nav>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <img src="/avatar.png" alt="Selina" />
                    <div className={styles.info}>
                        <span className={styles.name}>Selina</span>
                        <span className={styles.scale}>Signature design</span>
                    </div>
                </div>
                <div className={styles.right}><span><AiOutlineLogout /></span></div>
            </div>
        </div>
    )
}

export default Sidebar