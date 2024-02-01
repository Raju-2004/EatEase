
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItem,setShowIndex})=>{
    // const [showItem,setShowItem] = useState(false);
    const onHandleClick = ()=>{
        // setShowItem(!showItem);
        setShowIndex();
    }
    // console.log(data);
    return (
        <div className="border-gray-200 border-b-8 w-6/12 m-auto">
            <div className="flex  justify-between cursor-pointer m-5 font-bold" onClick={onHandleClick}>
                {data.title}({data.itemCards.length})
                <span>
                    {!showItem ? '⬇️' : '⬆️'}
                </span>
            </div>
             {showItem && <ItemList items={data.itemCards}/>}
        </div>
    )
}
export default RestaurantCategory;