import styles from "./PostedContent.module.css"
import posts from "../../config/posts.json"
import Post_MoreItems from "./popups/Post_MoreItems"

import TripleDotsSVG from "./svg_components/TripleDotsSVG"
import GrokSVG from "./svg_components/GrokSVG"
import CommentSVG from "./svg_components/CommentSVG"
import RepostSVG from "./svg_components/RepostSVG"
import LikeSVG from "./svg_components/LikeSVG"
import ViewSVG from "./svg_components/ViewSVG"
import ShareSVG from "./svg_components/ShareSVG"
import BookmarkSVG from "./svg_components/BookmarkSVG"
import { useState } from "react"


const PostedContent = () => {

    const [isMoreActive, setIsMoreActive] = useState(false)
    const [selectedHandle, setSelectedHandle] = useState("")

    const handleMoreClick = (e, handle="SAMPLE 1") => {
        // console.log(e); 
        // console.log(e.currentTarget.children);  
        // console.log("target",e.currentTarget.querySelector(".moreitems"));  
        // console.log('Clicked..');  

        setSelectedHandle(handle)
        // setTimeout(() => {
            if (e.currentTarget.querySelector(".moreitems")) {
                setTimeout(() => {
                    setIsMoreActive(!isMoreActive)
                }, 100);
            }
            else {
                setIsMoreActive(!isMoreActive)
            }
        // }, 0);
    }

    const handleMoreBlur = () => {
        setTimeout(() => {
            console.log('Blur..');
            setIsMoreActive(false)
        }, 100);
    }



    return (
        <div className={styles.container}>
            <Post_MoreItems visibility={isMoreActive} handle={selectedHandle}/>

            <div className={styles.posts}>
            {
                posts.map((value, index) => {
                    return (
                        <div className={styles.post} key={index}>
                            <div className={styles.profile}>
                                <div className={styles.profilePicContainer}>
                                    <img src={value.profilePic} alt="" className={styles.profilePic} />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <div className={styles.left}>
                                        <div className={styles.name}>
                                            {value.name}
                                        </div>
                                        <div className={styles.statusSymbols}>
                                            {
                                                value.metadata.statusSymbols.map((value, index) => {
                                                    return (
                                                        <div className={styles.statusSVGContainer} key={index}>
                                                            <img src={`./status_symbols/${value}`} alt="" className={styles.statusSVG}/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={styles.handle}>
                                            {value.handle}
                                        </div>
                                        <div className={styles.handle}>
                                            •
                                        </div>
                                        <div className={styles.uploadDate}>
                                            {value.metadata.uploadDataTime}
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <button>
                                            <GrokSVG />
                                        </button>
                                        <button
                                            onClick={(e)=>{handleMoreClick(e, value.handle)}}
                                            // onClick={handleMoreClick}
                                            onBlur={handleMoreBlur}
                                            tabIndex={1}

                                        >
                                            <TripleDotsSVG />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    {value.content}
                                </div>
                                <div className={styles.imageC}>
                                    <img src={value.image} alt="" className={styles.image} />
                                </div>
                                <div className={styles.footer}>
                                    <button className={styles.commentsC}>
                                        <CommentSVG comments={value.metadata.comments} />
                                    </button>

                                    <button className={styles.commentsC}>
                                        <RepostSVG reposts={value.metadata.reposts} />
                                    </button>


                                    <button className={styles.commentsC}>
                                        <LikeSVG likes={value.metadata.likes} />
                                    </button>

                                    <button className={styles.commentsC}>
                                        <ViewSVG views={value.metadata.views} />
                                    </button>

                                    <div className={styles.extras}>
                                        <button className={styles.bookmarkC}>
                                            <BookmarkSVG />
                                        </button>
                                        <button className={styles.shareC}>
                                            <ShareSVG />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>



        </div>
    )
}

export default PostedContent
