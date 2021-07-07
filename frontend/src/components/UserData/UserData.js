import React, {useState, useEffect} from "react";
import { getUserData } from "../../Calls/getUserData";

export const UserData = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = async () => {
        try {
            const fetchedData =  await getUserData();
            setUserData(fetchedData);
            console.log(fetchedData)
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    } 

    useEffect(() => {
        fetchUserData();
    }, [])

    const userDataFormated = userData.map((user) => {
        return <div><b>{user.first_name}</b>, last seen : {user.last_seen_date}</div>
    })

        return isLoading ? <div>Loading</div> : <div>{userDataFormated}</div>
}