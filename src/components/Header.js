import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import cart from '../Assets/cart.png';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [Login, SetLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const onClickHandler = () => {
    Login === "Login" ? SetLogin("Logout") : SetLogin("Login");
  };
  // subscribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items pt-7 pr-8 text-lg">
        <ul className="flex items-center">
          {/* <li className="mx-2">onlineStatus : {onlineStatus ? "yes":"no"}</li> */}
          <li className="mx-7"><Link to="/">Home</Link></li>
          <li className="mx-7"><Link to="/about">About</Link></li>
          <li className="mx-7"><Link to="/contact">Contact us</Link></li>
          <li className="mx-7 font-bold flex"><Link className="flex justify-center items-center" to="/cart">Cart<span className="absolute top-14 right-48">{cartItems.length}</span><span><img className="mx-1" src={cart} alt="" /></span></Link></li>
          <button className="login mx-7" onClick={onClickHandler}>
            {Login}  
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
