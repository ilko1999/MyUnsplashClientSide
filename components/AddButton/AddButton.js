import React from "react";

function AddButton(props) {
  return (
    <div>
      <input type={props.type} onChange={props.fileSelectHandler}/>
      <button onClick={props.fileUploadHandler}>Upload</button>
    </div>
  );
}

export default AddButton;
