const data = require("./history.json");
const axios = require("axios");

const getUserImages = async () => {
  const response = await axios({
    url: `http://localhost:5013/images`,
    method: "GET",
  });
  if ((response.status !== 200) & (response.status !== 201)) {
    if (response.status === 401) {
      throw new Error(`Error! Unauthorized(401)`);
    } else {
      throw new Error(`Error! Status ${response.status}`);
    }
  }
  return response.data;
};

const postImagesUserData = (date, id, user) => {
  const requestBody = {
    date: date,
    id: id,
    user: user,
  };

  try {
    axios({
      url: `http://localhost:5013/images/user`,
      method: "POST",
      data: requestBody,
    });
  } catch (err) {
    console.log(err);
  }
};

getUserImages().then((dataImages) => {
  dataImages.forEach((image, index) => {
    const image_file_path = image.file_path;
    const photoDataIndex = data.messages.findIndex(
      (message) => message.photo && message.photo.includes(image_file_path)
    );
    const fileDataIndex = data.messages.findIndex(
      (message) => message.file && message.file.includes(image_file_path)
    );
    const dataIndex = photoDataIndex >= 0 ? photoDataIndex : fileDataIndex;
    if (dataIndex >= 0) {
      let user = "";
      const date = data.messages[dataIndex].date.substring(0, 10);
      if (data.messages[dataIndex].from_id) {
        user = data.messages[dataIndex].from_id.replace("user", "");
      } else {
        user = data.messages[dataIndex].actor_id.replace("user", "");
      }

      console.log(`> image id${image.id}`);
      console.log("image:", image_file_path);
      console.log("user:", user);
      console.log("date:", date);

      postImagesUserData(date, image.id, user);
    }
  });
});
