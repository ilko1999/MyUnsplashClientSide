import React, { useContext } from "react";
import styles from '../AddButton/AddButton.module.css'
import { CardContext } from '../../context/CardProvider';

function AddButton(props) {

  const {setLabel} = useContext(CardContext);

  const memorizeLabel = (e) => {
    setLabel(e.target.value);
  }

  return (
    <div className={styles.uploadComp}>
      <input onChange={memorizeLabel} placeholder="Enter image label..."></input>
      <input type={props.type} onChange={props.fileSelectHandler}/>
      <button onClick={props.fileUploadHandler}>Upload</button>
    </div>
  );
}

export default AddButton;
