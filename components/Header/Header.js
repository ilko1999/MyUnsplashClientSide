import React, { useContext } from "react";
import AddButton from "../AddButton/AddButton";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import { useState } from "react";
import { CardContext } from "../../pages/api/context/CardProvider";
import styles from "../Header/Header.module.css";

function Header() {
  const { setSearchField, on, setOn } = useContext(CardContext);
  const [selectedFile, setSelectedFile] = useState(null);
  

  const fileSelectHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const fileUploadHandler = () => {
    const image = new Blob();
    image.append("image", selectedFile, selectedFile.name);
    console.log(image);
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
