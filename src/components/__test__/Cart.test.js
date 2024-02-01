import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import Header from "../Header";
import { Provider } from "react-redux";
import Cart from "../Cart";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Meals(2)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(2);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
//   console.log(addBtns.length);
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart1items")).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart2items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(4);

  fireEvent.click(screen.getByRole("button",{name:"Clear"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(2);

//   expect(screen.getByText("cart is Empty ")).toBeInTheDocument();
});
