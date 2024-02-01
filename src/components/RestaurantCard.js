import { CDN_URL } from "../utils/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props.resData);
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="m-4 p-2 w-[250px] rounded-md border-black-600 transition duration-300 ease-in-out transform hover:shadow-md">
      {/* shadow-sm shadow-indigo-500/40 */}
      <img
        className="rounded-lg w-full  h-[180px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="truncate font-semibold py-2 text-lg">{name}</h2>
      <div className="flex justify-around">
        <h4><FontAwesomeIcon icon={faStar} style={{color: "#42d75b",}} />{avgRating}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
      <p className="truncate w-full font-extralight">{cuisines.join(", ")}</p>
      
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { info } = props.resData || {};
    const { aggregatedDiscountInfoV3 } = info || {};
    const { header = "", subHeader = "" } = aggregatedDiscountInfoV3 || {};
    // console.log(props.resData); 

    return (
      <div>
        <label className="absolute font-bold bg-black text-white left-10">
          {header + subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
