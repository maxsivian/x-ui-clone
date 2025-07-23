import styles from "./MobileNavbar.module.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"




import home from "/icons/home.svg"
import explore from "/icons/explore.svg"
import grok from "/icons/grok.svg"
import notifications from "/icons/notifications.svg"
import messages from "/icons/messages.svg"
import communities from "/icons/communities.svg"

import home_solid from "/icons/home-solid.svg"
import explore_solid from "/icons/explore-solid.svg"
import grok_solid from "/icons/grok-solid.svg"
import notifications_solid from "/icons/notifications-solid.svg"
import messages_solid from "/icons/messages-solid.svg"
import communities_solid from "/icons/communities-solid.svg"


let content = [
    {
        label: "Home",
        name: "home"
    },
    {
        label: "Explore",
        name: "explore"
    },
    {
        label: "Grok",
        name: "grok"
    },
    {
        label: "Notifications",
        name: "notifications"
    },
    {
        label: "Messages",
        name: "messages"
    },
    {
        label: "Communities",
        name: "communities"
    },
]

const icons = {
    home,
    explore,
    grok,
    notifications,
    messages,
    communities,
};

const solidIcons = {
    home: home_solid,
    explore: explore_solid,
    grok: grok_solid,
    notifications: notifications_solid,
    messages: messages_solid,
    communities: communities_solid,
};


const MobileNavbar = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [activeLinkName, setActiveLinkName] = useState("")

    const handleClick = (e) => {
        let name = e.currentTarget.getAttribute("data-name")
        navigate(`/${name}`)
    }

    useEffect(() => {
        if (location.pathname) {
            setActiveLinkName(location.pathname.slice(1,))
        }
    }, [location])


    return (
        <div className={styles.container}>
            {
                content.map((value, index) => {
                    return (
                        <div className={styles.link} onClick={handleClick} data-name={value.name} key={index}>
                            <div className={styles.iconContainer}>
                                <img
                                    src={activeLinkName === value.name ? solidIcons[value.name] : icons[value.name]}
                                    alt=""
                                    className={`${styles.icon} icon`}
                                />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MobileNavbar