import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
const AppLayout = () => {
  return (
    <Provider store = {appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path:"/", 
    element:<AppLayout/>,
    children:[ 
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      } ,
      {
        path:"/about",
        element:<About/>,
        errorElement:<Error/> 
      },
      {
        path:"/contact",
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:"/cart",
        element:<Cart/>,
        errorElement:<Error/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
        errorElement:<Error/>
      }
    ],
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
