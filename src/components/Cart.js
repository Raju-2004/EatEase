import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const onHandleDelete = ()=>{
    dispatch(clearCart());
  }
  return (
    <div className="text-center ">
      <h1 className="text-2xl font-bold">cart</h1>
      {items.length === 0 ? (
        <h1>cart is Empty </h1>
      ) : (
        <div>
          <button className="p-2 bg-black text-white" onClick={onHandleDelete}>Clear</button>
          <div className="border-gray-200 border-b-8 w-6/12 m-auto">
            <ItemList items={items} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
