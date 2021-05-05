import React from 'react'
import Picture from '../Picture/Picture'
import styles from '../Pictures/Pictures.module.css';

function Pictures( {data} ) {
    return (
        <div className={styles.picContainer}>
            {data && data?.length !== 0 ? data.map((item, index) => <Picture item={item} key={index} /> ) : "no data"}
        </div>
    )
}

export default Pictures
