const data = require("./history.json");
const axios = require("axios");

const getSingleUser = async (id) => {
  const requestBody = {
    id: id,
  };
  const response = await axios({
    url: `http://localhost:5013/users/single`,
    method: "POST",
    data: requestBody,
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

const postImageGetId = async (file_path) => {
  const requestBody = {
    file_path: file_path,
  };
  const response = await axios({
    url: `http://localhost:5013/images/id`,
    method: "POST",
    data: requestBody,
  });
  return response.data;
};

const postUserMainImage = async (picId, telegramId) => {
  const requestBody = {
    pic_id: picId,
    telegram_id: telegramId,
  };
  await axios({
    url: `http://localhost:5013/users/main_image`,
    method: "POST",
    data: requestBody,
  });
};

const postNewUser = async (telegramId, joinedDate) => {
  const requestBody = {
    joined_date: joinedDate,
    telegram_id: telegramId,
  };
  await axios({
    url: `http://localhost:5013/users/new`,
    method: "POST",
    data: requestBody,
  });
};

const postUserJoinDate = async (telegramId, joinedDate) => {
  const requestBody = {
    joined_date: joinedDate,
    telegram_id: telegramId,
  };
  await axios({
    url: `http://localhost:5013/users/joined`,
    method: "POST",
    data: requestBody,
  });
};

const run = async () => {
  for (const message of data.messages) {
    if (message.type === "message") {
      if (message.from_id.includes("user")) {
        date = message.date.substring(0, 10);
        telegram_id = message.from_id.replace("user", "");
        //if Telegram_id not in DB, add it to bd, and put first message date as Joined_date
        const userData = await getSingleUser(telegram_id);
        if (userData.length) {
          // Check if has a join_date
          if (userData[0].joined_date === null) {
            // Add joined_date to user
            await postUserJoinDate(telegram_id, date);
          }
          if (message.photo) {
            // Check if has a main_image
            if (userData[0].main_image === null) {
              // Get photo_id based on name
              const photoName = message.photo.replace("photos/", "");
              const photoId = await postImageGetId(photoName);
              // Set photoId as Main Image
              await postUserMainImage(photoId, telegram_id);
            }
          }
        } else {
          // Add user to db
          await postNewUser(telegram_id, date);
          // If message is a photo:
          if (message.photo) {
            // Check if has a main_image
            if (userData[0].main_image === null) {
              // Get photo_id based on name
              const photoName = message.photo.replace("photos/", "");
              const photoId = await postImageGetId(photoName);
              // Set photoId as Main Image
              await postUserMainImage(photoId, telegram_id);
            }
          }
        }
      }
    }
  }
};

run();
