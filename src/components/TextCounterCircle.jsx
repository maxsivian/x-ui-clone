import React from 'react'
import styles from "./TextCounterCircle.module.css"
//use memo

const TextCounterCircle = ({ yellowAtLength = 0, redAtLength = 0, currentLength = 0, maxLength = 0 }) => {
    const MAX_CHARS = maxLength;
    const percent = Math.min((currentLength / MAX_CHARS) * 100, 100);
    const radius = 18;
    const stroke = 2;
    const normalizedRadius = radius - stroke;
    const circumference = 2 * Math.PI * normalizedRadius;
    const strokeDashoffset =
        circumference - (percent / 100) * circumference;

    const charsLeft = MAX_CHARS - currentLength
    const strokeColor = currentLength >= yellowAtLength ? (currentLength >= redAtLength ? "red" : "yellow") : "rgb(29, 155, 240)"
    const charsLeftClass = charsLeft <= 20 ? (charsLeft<0? "red": "yellow") : ""

    // console.log('charsLeft', charsLeft);
    // console.log('charsLeftClass', charsLeftClass);


    return (
        <div className={styles.circle}>
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                className={styles.circleSvg}>
                <g transform={`rotate(-90, ${radius}, ${radius})`}>
                    <circle
                        stroke="gray"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle 
                        stroke={strokeColor}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + " " + circumference}
                        strokeDashoffset={strokeDashoffset.toString()}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        style={{ transition: "stroke-dashoffset 0.35s" }}
                    />
                </g> 
            </svg> 
            <div className={`${styles.textLeft} ${styles[charsLeftClass]}`}>{charsLeft}</div>
        </div>
    )
}

export default TextCounterCircle