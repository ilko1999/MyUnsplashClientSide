import React from "react";
import styles from '../AddButton/AddButton.module.css'

function AddButton(props) {


  return (
    <div className={styles.uploadComp}>
      <input placeholder="Enter image label..."></input>
      <input type={props.type} onChange={props.fileSelectHandler}/>
      <button onClick={props.fileUploadHandler}>Upload</button>
    </div>
  );
}

export default AddButton;
