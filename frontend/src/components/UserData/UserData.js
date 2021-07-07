import React, { useState, useEffect } from "react";
import { getUserData } from "../../Calls/getUserData";
import { Tooltip } from "antd";

import "./UserData.css";

export const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const fetchedData = await getUserData();
      setUserData(fetchedData);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="ListUserData">
      <ol>{userData.map((user) => {
    return (
      <li>
        <b>{user.first_name}</b> {" "}
        <span className="SmallFont">
          ({user.activity})
          last seen : {user.last_seen_date}
        </span>
      </li>
    );
  })}</ol>
    </div>
  );
};

/*
<Tooltip title="How many messages this user wrote since we started tracking">
    ({user.activity})
</Tooltip>
*/