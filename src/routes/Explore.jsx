import SideContent from '../components/SideContent'
import styles from './Explore.module.css'

const Explore = () => {
  return (
    <div className={styles.maincontainer}>
      <SideContent visibility={true}/>
    </div>
  )
}

export default Explore