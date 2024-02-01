import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  // console.log(resInfo);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <div className="w-6/12 bg-slate-50 m-auto flex justify-between p-4">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p className="text-sm">{cuisines ? cuisines.join(", ") : "No cuisines available"} <span>{sla.lastMileTravelString}</span></p>
          {/* <p>{costForTwoMessage}</p> */}
        </div>
        <div>
          <p>{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <h3>menu</h3>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItem={index=== showIndex ? true : false}
          setShowIndex = {(()=>setShowIndex(index))}
        />
      ))}
      {/* <ul>
        {itemCards && itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.price / 100}
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;
