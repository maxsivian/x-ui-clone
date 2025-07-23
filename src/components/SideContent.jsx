import { useState } from 'react'
import styles from "./SideContent.module.css"
import { useLocation } from 'react-router-dom'
import SideSearchBar from './SideSearchBar'

import wh from "../../config/whatshappening.json"
import wf from "../../config/whotofollow.json"
import TripleDotsSVG from './svg_components/TripleDotsSVG'
import WH_MoreItems from './popups/WH_MoreItems'

const WhatsHappening = () => {

    const [isMoreActive, setIsMoreActive] = useState(false)

    const handleMoreClick = (e) => {
        // console.log(e); 
        // console.log(e.currentTarget.children);  
        // console.log("target",e.currentTarget.querySelector(".moreitems"));  
        // console.log('Clicked..');  

        if (e.currentTarget.querySelector(".moreitems")) {
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


    return (
        <div className={styles.WhatsHappeningC}>
            <h2 className={styles.WH_Heading}>What's Happening</h2>
            <div className={styles.WH_BoxC}>
                <WH_MoreItems visibility={isMoreActive} />
                {
                    wh.map((value, index) => {
                        return (
                            <div className={styles.WH_Box} key={index}>
                                <div className={styles.left}>
                                    <div className={styles.WH_category}>
                                        {value.category} • Trending
                                    </div>
                                    <div className={styles.WH_hashtag}>
                                        {value.hashtag}
                                    </div>
                                    <div className={styles.WH_posts}>
                                        {value.posts} posts
                                    </div>
                                </div>


                                {/* <div className={`${styles.link} ${styles.moreLink}`} onClick={handleMoreClick} data-name={"more"}
                                    onBlur={handleMoreBlur}
                                    tabIndex={1}
                                >
                                    <div className={styles.iconContainer}>
                                        <img src={`/icons/more.svg`} alt="" className={`${styles.icon}`} />
                                    </div>
                                    <div className={`${styles.name} ${(activeLinkName == "more") ? styles.bolder : ""}`}>
                                        More
                                    </div>
                                    <Menu_MoreItems visibility={isMoreActive} />
                                </div> */}




                                <button className={styles.right}
                                    onClick={handleMoreClick}
                                    onBlur={handleMoreBlur}
                                    tabIndex={1}
                                >
                                    {/* <img src="/icons/triple-dots.svg" alt="" /> */}
                                    <TripleDotsSVG />
                                </button>






                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.showMore}>Show more</div>
        </div>
    )
}

const WhoToFollow = () => {
    return (
        <div className={styles.WhoToFollowC}>
            <h2 className={styles.WTF_Heading}>Who To Follow</h2>
            <div className={styles.WTF_BoxC}>
                {
                    wf.map((value, index) => {
                        return (
                            <div className={styles.WTF_Box} key={index}>
                                <div className={styles.profilePicContainer}>
                                    <img src={value.profilePic} alt="" className={styles.profilePic} />
                                </div>
                                <div className={styles.handleInfoC}>
                                    <div className={styles.handleInfoBox}>
                                        <div className={styles.handleName}>{value.name}</div>
                                        <div className={styles.statusSymbols}>
                                            {
                                                value.statusSymbols.map((value, index) => {
                                                    return (
                                                        <div className={styles.statusSVGContainer} key={index}>
                                                            <img src={`./status_symbols/${value}.svg`} alt="" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.handle}>{value.handle}</div>
                                </div>
                                <button className={styles.followButton}>
                                    Follow
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.showMore}>Show more</div>
        </div>
    )
}

// const hideWH_routes = ["/explore"]
const hideComponent_routes = ["/messages", "/grok", "/explore"]

const SideContent = ({ visibility = false }) => {
    const location = useLocation()

    if (visibility) {
        return (
            <div className={styles.container}>
                <SideSearchBar />
                {/* {hideWH && <WhatsHappening />} */}
                <WhatsHappening />
                <WhoToFollow />
            </div>
        )
    }

    if (hideComponent_routes.includes(location.pathname)) {
        return null
    }

    // const hideWH = !hideWH_routes.includes(location.pathname)
    return (
        <div className={styles.container}>
            <SideSearchBar />
            {/* {hideWH && <WhatsHappening />} */}
            <WhatsHappening />
            <WhoToFollow />
        </div>
    )
}

export default SideContent