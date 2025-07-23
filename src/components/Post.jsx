import styles from "./Post.module.css"
import { useState } from 'react'
import TextCounterCircle from './TextCounterCircle'
import WCR_popup from "./popups/WCR_popup"

const Post = () => {

  // const textRef = useRef("")
  // const text = textRef.current.innerText;
  // console.log('text', text);

  const [inputText, setInputText] = useState("")
  const [isInputFocused, setIsInputFocused] = useState(false)
  // const [inputTextLength, setInputTextLength] = useState(inputText.trim().length)
  const handleInput = (e) => {
    setInputText(e.currentTarget.innerText)
  }

  // useEffect(() => {
  //   console.log('inputText', inputText);
  // }, [inputText])

  const [isMoreActive, setIsMoreActive] = useState(false)
  const [whoCanReply, setWhoCanReply] = useState({ label: "Everyone", name: "everyone" })

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
    <div className={styles.postContainer}>
      <div className={styles.profile}>
        <div className={styles.profileImageContainer}>
          <img src="./profile_pics/maxsivian.jpg" alt="" className={styles.profileImage} />
        </div>
      </div>
      <div className={styles.postContent}>

        <div className={styles.postTypeContainer}>
          <div className={styles.postType}
            contentEditable
            // ref={textRef}
            suppressContentEditableWarning
            onInput={handleInput}
            onFocus={() => setIsInputFocused(true)}
          // onBlur={() => setIsInputFocused(false)}
          >
          </div>
          <div className={styles.postTypePlaceholder}>
            {(inputText.trim() === "") && (
              <div>
                Whats's happening?
              </div>
            )
            }
          </div>
        </div>

        {
          isInputFocused && (
            <div className={styles.postAccess}>
              <div className={styles.postAccessIconContainer}>
                <img src={`./post_icons/${whoCanReply.name}.svg`} alt="" className={styles.postAccessIcon} />
              </div>



              <div className={styles.postAccessText}
                onClick={handleMoreClick}
                onBlur={handleMoreBlur}
                tabIndex={1}
              >
                {whoCanReply.label} can reply
                <WCR_popup visibility={isMoreActive} whoCanReply={whoCanReply} setWhoCanReply={setWhoCanReply} />
              </div>




            </div>
          )
        }

        <div className={styles.grayLine}>

        </div>
        <div className={styles.postControls}>
          <div className={styles.left}>
            <div className={styles.iconContainer}>
              <img src="./post_icons/gallery.svg" alt="" className={styles.postIcon} />
            </div>
            <div className={styles.iconContainer}>
              <img src="./post_icons/gif.svg" alt="" className={styles.postIcon} />
            </div>
            <div className={styles.iconContainer}>
              <img src="./post_icons/blue_grok.svg" alt="" className={styles.postIcon} />
            </div>
            <div className={styles.iconContainer}>
              <img src="./post_icons/poll.svg" alt="" className={styles.postIcon} />
            </div>
            <div className={styles.iconContainer}>
              <img src="./post_icons/emoji.svg" alt="" className={styles.postIcon} />
            </div>
            <div className={styles.iconContainer}>
              <img src="./post_icons/schedule.svg" alt="" className={styles.postIcon} />
            </div>
            <div className={styles.iconContainer}>
              <img src="./post_icons/location.svg" alt="" className={styles.postIcon} />
            </div>
          </div>
          <div className={styles.right}>
            {(inputText.trim() != "") && (
              <>
                <div>
                  <TextCounterCircle yellowAtLength={260} redAtLength={281} currentLength={inputText.trim().length} maxLength={280} />
                  <div className={styles.verticalLine}></div>
                  <button className={styles.addTweet} disabled={inputText.trim().length > 280}>+</button>
                </div>
                <div>
                  
                </div>
              </>
            )
            }

            <button className={styles.postButton} disabled={inputText.trim().length > 280}
            // onClick={()=>console.log('text',textRef.current.innerText)} 
            >Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post