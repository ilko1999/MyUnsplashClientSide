import React, { useContext } from "react";
import AddButton from "../AddButton/AddButton";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { CardContext } from "../../context/CardProvider";
import styles from "../Header/Header.module.css";
import {uploadImage} from '../../lib/db';


function Header() {
  const { setSearchField, on, setOn, label } = useContext(CardContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgData, setImgData] = useState("");

  

  const fileSelectHandler = async (e) => {
    setSelectedFile(e.target.files[0]);
      
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      console.log(file)

      const blob = new Blob([file], {
        type : file.type
      }); 

      reader.readAsDataURL(blob);

      reader.onload = () =>{
        resolve(reader.result);
      };

      reader.onerror = (error) =>{
        reject(error);
      };

    })
  }

  const fileUploadHandler = async (e) => {
    console.log(selectedFile)
    const base64 = await convertBase64(selectedFile);
    console.log(base64)
    // const blob = new Blob([selectedFile], {
    //   type : selectedFile.type
    // }); 

    // reader.readAsArrayBuffer(blob);
    
    
    // reader.onload = () => {
    // setImgData(reader.result);
    // console.log(reader.result);
    //setSelectedFile({...selectedFile, base64})
    // }


    // console.log(imgData);
    
    // console.log(blob)
    // console.log(selectedFile)
    uploadImage(selectedFile, base64, label);
  };

 const toggle = () => {
    setOn(!on);
  };

  return (
    <div className={styles.headerStyle}>
      <SearchBar
        placeholder="Search image.."
        handleChange={(e) => {
          setSearchField(e.target.value);
        }}
      />

      <div>
        <button className={styles.toggleBtn} onClick={toggle}>Add Photo</button>

        {on && (
          <AddButton
            type="file"
            fileSelectHandler={fileSelectHandler}
            fileUploadHandler={fileUploadHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
