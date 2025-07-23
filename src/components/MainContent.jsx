import { useRef, useState } from "react"
import styles from "./MainContent.module.css"
import { useEffect } from "react"
import PostedContent from "./PostedContent"
import Post from "./Post"
import TwitterSvg from "/icons/twitter.svg"
import user from "../../config/user.json"
import MobileSidebar from "./MobileSidebar"
import OverlayPortal from "./OverlayPortal"

const Header = () => {
  const [activeRoute, setActiveRoute] = useState("foryou")

  const handleClick = (e) => {
    let name = e.currentTarget.getAttribute("data-name")
    setActiveRoute(name)
    console.log('name', name);
  }


  return (
    <div className={styles.header}>
      <div className={styles.mobileHeaderC}>
        <MobileHeader />
      </div>

      <div className={styles.routes}>
        <div className={styles.forYou} onClick={handleClick} data-name={"foryou"}>
          <div>
            <div></div>
            <div className={`${styles.route} ${activeRoute == "foryou" ? styles.bolder : ""}`}>
              For you
            </div>
            <div className={`${styles.line} ${activeRoute == "foryou" ? styles.blue : ""}`}></div>
          </div>
        </div>

        <div className={styles.following} onClick={handleClick} data-name={"following"}>
          <div>
            <div></div>
            <div className={`${styles.route} ${activeRoute == "following" ? styles.bolder : ""}`}>
              Following
            </div>
            <div className={`${styles.line} ${activeRoute == "following" ? styles.blue : ""}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}



const MobileHeader = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false)

  const handleClick = ()=>{
    setSidebarVisibility(!sidebarVisibility)
  }

  return (
    <div className={styles.mobileHeaderBox}>
      <OverlayPortal>
        <MobileSidebar visibility={sidebarVisibility} setVisibility={setSidebarVisibility}/>
      </OverlayPortal>
      <button className={styles.userButton} onClick={handleClick}>
        <img src={user.profilePicPath} alt="" className={styles.userImage} />
      </button>
      <div className={styles.logoC}>
        <img src="./icons/twitter.svg" alt="" className={styles.logo} />
      </div>
      <div>
      </div>
    </div>
  )
}


const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <Header />
      <div className={styles.PostComponent}>
        <Post />
      </div>
      <PostedContent />
    </div>
  )
}

export default MainContent


