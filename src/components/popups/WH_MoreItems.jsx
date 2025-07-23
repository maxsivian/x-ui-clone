import styles from "./WH_MoreItems.module.css"

let content = [
    {
        label: "The associated content is not relevant",
        name: "The associated content is not relevant"
    },
    {
        label: "This trend is spam",
        name: "This trend is spam"
    },
    {
        label: "This trend is abusive or harmful",
        name: "This trend is abusive or harmful"
    },
    {
        label: "Not interested in this",
        name: "Not interested in this"
    },
    {
        label: "This trend is a duplicate",
        name: "This trend is a duplicate"
    },
    {
        label: "This trend is harmful or spammy",
        name: "This trend is harmful or spammy"
    },
]

const WH_MoreItems = ({visibility = false}) => {
   const handleClick = (v)=>{
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
                                              onClick={()=>handleClick(value.name)}
                                              >
                                              <div className={styles.iconContainer}>
                                                  <img src={`./icons/sad_emoji.svg`} alt="" className={`${styles.icon} icon`} />
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

export default WH_MoreItems