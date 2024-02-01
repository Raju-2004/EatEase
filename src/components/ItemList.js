import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }
  return (
    <div className="">
      {items.map((item) => (
        <div
          data-testId = "foodItems"
          key={item.card.info.id}
          className="flex justify-between m-3 p-6 border-gray border-b-2"
        >
          <div className="text-left">
            <p>{item.card.info.name}</p>
            <p>{item.card.info.price}</p>
            <p className="font-light">{item.card.info.description}</p>
          </div>
          <div className="relative">
            <button
              className="absolute w-20 shadow-md bg-white text-green-400 p-1 rounded-md z-1 -bottom-2 right-6"
              onClick={() => handleAddItem(item)}
            >
              Add +{" "}
            </button>
            <img
              className="w-[130] rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
