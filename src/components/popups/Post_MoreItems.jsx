import styles from "./Post_MoreItems.module.css"
import content from "../../../config/post_moreitem.json"



const Post_MoreItems = ({visibility = false, handle="SAMPLE"}) => {
    const handleClick = (v) => {
        console.log(v);
    }

    return (
        <>
            {
                visibility && (
                    <div className={`${styles.linksContainer} moreitems`}>
                        {
                            content.map((value, index) => {
                                return (
                                    <div className={styles.link}
                                        // onClick={handleClick}
                                        data-name={value.name} key={index}
                                        onClick={() => handleClick(value.name)}
                                    >
                                        <div className={styles.iconContainer}>
                                            <img src={`./post_icons/${value.name}.svg`} alt="" className={`${styles.icon} icon`} />
                                        </div>
                                        <div className={`${styles.name}`}>
                                            {(value.label).replace("x", handle)}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default Post_MoreItems