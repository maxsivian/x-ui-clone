import styles from "./WCR_popup.module.css"

// 
// 

let content = [
    {
        label: "Everyone",
        name: "everyone"
    },
    {
        label: "Accounts you follow",
        name: "accounts_you_follow"
    },
    {
        label: "Only verified accounts",
        name: "only_verified_accounts"
    },
    {
        label: "Only accounts you mention",
        name: "only_accounts_you_mention"
    }
]

const WCR_popup = ({ visibility = false, whoCanReply = { label: "Everyone", name: "everyone" }, setWhoCanReply }) => {

    const handleClick = (label, name) => {

        console.log({ label, name });
        setWhoCanReply({ label, name })
    }

    return (
        <>
            {
                visibility && (
                    <div className={`${styles.linksContainer} moreitems`}>
                        <div className={styles.heading}>
                            <div>
                                Who can reply?
                            </div>
                            <div>
                                Choose who can reply to this post.
                            </div>
                            <div>
                                Anyone mentioned can always reply.
                            </div>
                        </div>
                        {
                            content.map((value, index) => {
                                return (
                                    <div className={styles.link}
                                        // onClick={handleClick}
                                        data-name={value.name} key={index}
                                        onClick={() => handleClick(value.label, value.name)}
                                    >
                                        <div className={styles.iconContainer}>
                                            <img src={`./post_icons/${value.name}.svg`} alt="" className={`${styles.icon} icon`} />
                                        </div>
                                        <div className={`${styles.label}`}>
                                            {value.label}
                                        </div>

                                        <div className={styles.tickC}>
                                            {
                                                whoCanReply.name == value.name && (
                                                    <img src="./post_icons/tick.svg" alt="" className={styles.tick} />
                                                )
                                            }
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

export default WCR_popup