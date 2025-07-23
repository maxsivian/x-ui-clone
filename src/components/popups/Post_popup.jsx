import styles from "./Post_popup.module.css"
import Post from "../Post"
import closeSvg from "/icons/close.svg"

const Post_popup = ({ visibility = false, setVisibility }) => {

    const handleClose = ()=>{
        setVisibility(false)
    }

    const handleOverlayClick = (e)=>{
        if(e.target.classList.contains(styles.overlay)){
            setVisibility(false)
        }
        else{
           
        }
    }

    if (!visibility) return null;


    return (
            <div className={styles.overlay} onClick={handleOverlayClick}>
                <div className={`${styles.container} post_popup`}>
                    <div className={styles.header}>
                        <button className={styles.closeButton} onClick={handleClose}>
                            <img src={closeSvg} alt="" className={styles.closeSvg} />
                        </button>
                        <button className={styles.draftButton}>Drafts</button>
                    </div>
                    <Post />
                </div>
            </div> 
    );
}


export default Post_popup