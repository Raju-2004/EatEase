import { useEffect, useState } from "react";
import RestaurantCard,{withDiscountLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";

const Body = () => {
  const [ListRestaurants, SetListRestaurants] = useState([]);
  const [FilteredRestaurants, SetFilteredRestaurants] = useState([]);
  const [Categories,SetCategories] = useState([]);
  const DiscountCard = withDiscountLabel(RestaurantCard);
  const [searchText, SetsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json?.data?.cards[1]?.card?.card?.imageGridCards?.info); 
      SetListRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // if(ListRestaurants.length === 0 ){

  //   return (<Shimmer/>)
  // }
  const onHandleClick = () => {
    const FilteredList = ListRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    SetFilteredRestaurants(FilteredList);
  };
  const onSearchClick = () => {
    const FilteredRestaurants = ListRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    SetFilteredRestaurants(FilteredRestaurants);
  };

  // console.log(ListRestaurants);
  // console.log(FilteredRestaurants);

  return (
    <div className="body px-12">
      <div className="Filter flex">
        <div className="search">
          <input
            type="text"
            data-testid = "searchInput"
            className="search-box mx-2"
            value={searchText}
            onChange={(e) => {
              SetsearchText(e.target.value);
            }}
          />
          <button onClick={onSearchClick}>search</button>
        </div>
        <div className="mx-4 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
          <button onClick={onHandleClick} className="filter-btn">
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {FilteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          FilteredRestaurants.map((restaurant) => (
            <Link
              data-testid = "resCard"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3!=null?<DiscountCard resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
              
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
