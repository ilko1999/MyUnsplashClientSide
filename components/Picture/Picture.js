import React from 'react'
import styles from '../Picture/Picture.module.css';

function Picture( {item} ) {
    return (
        <div>
            <img className={styles.imgStyling} src={item.photo}/>
            <h6>{item.description}</h6>
        </div>
    )
}

export default Picture
