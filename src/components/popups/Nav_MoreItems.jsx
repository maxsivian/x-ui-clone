import styles from "./Nav_MoreItems.module.css"
import content from "../../../config/nav_moreitems.json"


const Menu_MoreItems = ({ visibility = false }) => {

    const handleClick = (v)=>{
        console.log(v);
    }
 
    return (
        <>
            {
                visibility && (
                        <div className={`${styles.linksContainer} nav_moreitems`}>
                            {
                                content.map((value, index) => {
                                    return (
                                        <div className={styles.link}
                                            // onClick={handleClick}
                                            data-name={value.name} key={index}
                                            onClick={()=>handleClick(value.name)}
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
                )
            }
        </>
    )
}

export default Menu_MoreItems

