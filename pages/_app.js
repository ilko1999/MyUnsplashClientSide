import Pictures from "../components/Pictures/Pictures";
import SearchBar from "../components/SearchBar/SearchBar";
import "../styles/globals.css";
import { useState } from "react";
import AddButton from "../components/AddButton/AddButton";
import data from "../utils/data.json";
import axios from "axios";

function MyApp() {
  const [searchField, setSearchField] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const filteredData = data.filter((picture) =>
    picture.description.toLowerCase().includes(searchField.toLowerCase())
  );

  const fileSelectHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedFile, selectedFile.name);
    axios.post("endpointa na koki", formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      
      <SearchBar
        placeholder="Search image.."
        handleChange={(e) => {
          setSearchField(e.target.value);
        }}
      />

      <AddButton
        type="file"
        fileSelectHandler={fileSelectHandler}
        fileUploadHandler={fileUploadHandler}
      />
      <div>
        <Pictures data={filteredData} />
      </div>
    </>
  );
}

export default MyApp;
