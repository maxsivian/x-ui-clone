import styles from "./MobilePostButton.module.css"
import postIcon from "/icons/pen.svg"

const MobilePostButton = ({showPostPopUp=false, setShowPostPopUp}) => {

    const handleClick = () => {
        setShowPostPopUp(!showPostPopUp)
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <img src={postIcon} alt="" className={styles.image} />
        </div>
    )
}

export default MobilePostButton