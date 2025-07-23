import { useEffect, useState } from "react"
import styles from "./MobileSidebar.module.css"
import slider from "../../config/slider.json"
import user from "../../config/user.json"

const MobileSidebar = ({ visibility = false, setVisibility }) => {

    if (!visibility) {
        return null
    }

    const [animate, setAnimate] = useState(false)


    useEffect(() => {
        if (visibility) {
            setAnimate(true)
        }
    }, [])


    const handleOverlayClick = (e) => {
        // if(e.target.classList.contains(styles.overlay)){
        console.log('Clicked');
        setAnimate(false)
        setTimeout(() => {
            setVisibility(false)
        }, 300);
        // }
    }


    const handleClick = (v) => {
        console.log(v);
    }


    return (
        <>
            <div className={styles.overlay} onClick={handleOverlayClick}>
                <div
                    className={`${styles.container} ${animate ? styles.show : styles.hide}`}
                >
                    <div className={styles.header}>
                        <div className={styles.top}>
                            <button className={styles.userButton}>
                                <img src={user.profilePicPath} alt="" className={styles.userImg} />
                            </button>
                            <button className={styles.addAccount}>
                                +
                            </button>
                        </div>
                        <div className={styles.middle}>
                            <div className={styles.name}>
                                {user.name}
                            </div>
                            <div className={styles.handle}>
                                {user.handle}
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.following}>
                                <span>{user.following}</span>
                                <span>Following</span>
                            </div>
                            <div className={styles.followers}>
                                <span>{user.followers}</span>
                                <span>Followers</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            slider.map((value, index) => {
                                return (
                                    <div className={styles.link}
                                        // onClick={handleClick}
                                        data-name={value.name} key={index}
                                        onClick={() => handleClick(value.name)}
                                    >
                                        <div className={styles.iconContainer}>
                                            <img src={`./icons/${value.name}.svg`} alt="" className={`${styles.icon} icon`} />
                                        </div>
                                        <div className={`${styles.name}`}>
                                            {value.label}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.horizontalLine}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileSidebar