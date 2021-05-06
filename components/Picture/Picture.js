import React from 'react'
import styles from '../Picture/Picture.module.css';

function Picture( {item} ) {
    return (
        <div className={styles.card}>
            <button className={styles.delete}>delete</button>
            <img className={styles.imgStyling} src={item.photo}/>
            <h2 className={styles.pictureText}>{item.description}</h2>
        </div>
    )
}

export default Picture
