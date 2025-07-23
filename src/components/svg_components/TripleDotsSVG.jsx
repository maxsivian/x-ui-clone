import { useState } from 'react'
import styles from "./TripleDotsSVG.module.css"

const TripleDotsSVG = () => {
    const [color, setColor] = useState("gray")

    return (
        <div onMouseEnter={() => setColor("rgb(29, 155, 240)")} onMouseLeave={() => setColor("gray")} className={styles.container}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i" fill={color}>
                <g>
                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </g>
            </svg>
        </div>
    )
}

export default TripleDotsSVG