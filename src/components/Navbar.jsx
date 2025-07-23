import { useState } from "react"
import styles from "./Navbar.module.css"
import { useLocation, useNavigate } from "react-router-dom"
import Nav_MoreItems from "./popups/Nav_MoreItems"
import { useEffect } from "react"
import user from "../../config/user.json"
import Post_popup from "./popups/Post_popup"

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
        label: "Notifications",
        name: "notifications"
    },
    {
        label: "Messages",
        name: "messages"
    },
    {
        label: "Grok",
        name: "grok"
    },
    {
        label: "Communities",
        name: "communities"
    },
    {
        label: "Profile",
        name: "profile"
    },
]


const UserPopUp = () => {

    const handleClick = (v) => {
        console.log(v);
    }

    return (
        <div className={`${styles.userPopUpC} useritem`}>
            <div className={styles.ulink} onClick={() => handleClick("Add an existing account")}>Add an existing account</div>
            <div className={styles.ulink} onClick={() => handleClick("Log out")}>Log out {user.handle}</div>
        </div>
    )
}



const Navbar = ({ showPostPopUp = false, setShowPostPopUp }) => {

    //   console.log('Navbar: showPostPopUp', showPostPopUp);

    const [activeLinkName, setActiveLinkName] = useState("")
    const [isMoreActive, setIsMoreActive] = useState(false)
    const [isUserPopUpActive, setisUserPopUpActive] = useState(false)
    // const [isPostPopUpActive, setIsPostPopUpActive] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log('isMoreActive', isMoreActive);
    // }, [isMoreActive])

    useEffect(() => {
        if (location.pathname) {
            // console.log('location.pathname', location.pathname);
            // console.log('location.pathname', location.pathname.slice(1,));
            setActiveLinkName(location.pathname.slice(1,))
        }
    }, [location])




    const handleClick = (e) => {
        let name = e.currentTarget.getAttribute("data-name")
        // console.log(name);
        // setActiveLinkName(name)
        // console.log('location', location);
        navigate(`/${name}`)
        // navigate(`/${name}`, {replace: true})

        // console.log(e);
        // console.log(e.currentTarget.querySelector(".icon"));
        // console.log(e.currentTarget.querySelector(".icon").src); 

        // let src = e.currentTarget.querySelector(".icon").src 
        // console.log('src b', src);

        // if (src.includes("solid")) {
        // e.currentTarget.querySelector(".icon").src = src.replace(`${name}-solid`, name)
        // }
        // else {
        // e.currentTarget.querySelector(".icon").src = src.replace(name, `${name}-solid`)
        // }

        // console.log('src a', src);

    }

    const handleMoreClick = (e) => {
        // console.log(e); 
        // console.log(e.currentTarget.children);  
        // console.log("target",e.currentTarget.querySelector(".moreitems"));  
        // console.log('Clicked..');  

        if (e.currentTarget.querySelector(".nav_moreitems")) {
            setTimeout(() => {
                setIsMoreActive(!isMoreActive)
            }, 100);
        }
        else {
            setIsMoreActive(!isMoreActive)
        }
    }

    const handleMoreBlur = () => {
        setTimeout(() => {
            console.log('Blur..');
            setIsMoreActive(false)
        }, 100);
    }


    const handleUserClick = (e) => {
        if (e.currentTarget.querySelector(".useritem")) {
            setTimeout(() => {
                setisUserPopUpActive(!isUserPopUpActive)
            }, 100);
        }
        else {
            setisUserPopUpActive(!isUserPopUpActive)
        }
    }

    const handleUserBlur = () => {
        setTimeout(() => {
            console.log('Blur..');
            setisUserPopUpActive(false)
        }, 100);
    }


    const handlePostPopUpClick = (e) => {
        if (e.currentTarget.querySelector(".post_popup")) {
            setTimeout(() => {
                // setIsPostPopUpActive(!isPostPopUpActive)
                setShowPostPopUp(!showPostPopUp)
            }, 1000);
        }
        else {
            // setIsPostPopUpActive(!isPostPopUpActive)
            setShowPostPopUp(!showPostPopUp)
        }
    }

    // const handlePostPopUpBlur = (e) => {
    //     if (e.target.closest(".post_popup")) {
    //        console.log('Nothing');
    //     }
    //     else{
    //         setTimeout(() => { 
    //             console.log('Blur..');
    //             setIsPostPopUpActive(false)
    //         }, 1000);
    //     }
    // }

    return (

        <div className={styles.nav}>
            {/* <Post_popup visibility={isPostPopUpActive} setVisibility={setIsPostPopUpActive} /> */}

            <div className={styles.twitterLogoContainer}>
                <img src="./twitter.svg" alt="" className={styles.twitterLogo} />
            </div>

            <div className={styles.linksContainer}>

                {
                    content.map((value, index) => {
                        return (
                            <div className={styles.link} onClick={handleClick} data-name={value.name} key={index}>
                                <div className={styles.iconContainer}>
                                    <img src={(activeLinkName == value.name) ? `./icons/${value.name}-solid.svg` : `./icons/${value.name}.svg`} alt="" className={`${styles.icon} icon`} />
                                </div>
                                <div className={`${styles.name} ${styles.hide} ${(activeLinkName == value.name) ? styles.bolder : ""}`}>
                                    {value.label}
                                </div>
                            </div>
                        )
                    })
                }

                <div className={`${styles.link} ${styles.moreLink}`} onClick={handleMoreClick} data-name={"more"}
                    onBlur={handleMoreBlur}
                    tabIndex={1}
                >
                    <div className={styles.iconContainer}>
                        <img src={`./icons/more.svg`} alt="" className={`${styles.icon}`} />
                    </div>
                    <div className={`${styles.name} ${styles.hide} ${(activeLinkName == "more") ? styles.bolder : ""}`}>
                        More
                    </div>
                    <Nav_MoreItems visibility={isMoreActive} />
                </div>

                <button className={styles.postButton}
                    onClick={handlePostPopUpClick}
                    // onBlur={handlePostPopUpBlur}
                    tabIndex={1}

                >
                    <div className={`${styles.text} ${styles.hide}`}>
                        Post
                    </div>
                    <div className={styles.penImageContainer}>
                        <img src="./icons/pen.svg" alt="" />
                    </div>
                </button>

            </div>

            <div className={styles.userContainer} onClick={handleUserClick}
                onBlur={handleUserBlur}
                tabIndex={2}>
                <div className={styles.profilePicContainer}>
                    <img src={user.profilePicPath} alt="" className={styles.profilePic} />
                </div>
                <div className={`${styles.userInfo} ${styles.hide}`}>
                    <div title="Swadev Mohapatraaaaa">{user.name}</div>
                    <div>{user.handle}</div>
                </div>
                <div className={`${styles.userMore} ${styles.hide}`}>
                    •••
                </div>
                {isUserPopUpActive && <UserPopUp />}
            </div>
        </div>
    )
}

export default Navbar


