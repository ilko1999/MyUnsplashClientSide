export const uploadImage = (data, base64, label) => {

  console.log(data)

    const information = {
        label: label,
        type: data.type,
        size: data.size,
        data: base64 
    }

    console.log(information)

  fetch("http://localhost:4000/upload", {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode : "no-cors", 
    body: JSON.stringify(information),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
    })
    .then((information) => {
      console.log("Success:", information);
    })
    .catch((error) => {
      console.log("Error:", error); 
    });
};
