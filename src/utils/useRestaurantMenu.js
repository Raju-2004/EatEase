import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setresInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[resId])
    const fetchData = async ()=>{
        try {
            const res = await fetch(MENU_API + resId);
            const json = await res.json(); // Await the json() function
            // console.log(json.data);
            setresInfo(json.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle errors (e.g., set an error state)
        }
    }
    return resInfo;
}
export default useRestaurantMenu;