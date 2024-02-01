import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../mocks/mockResList.json";

// it("should render the body component with Search", async () => {
//   // Define a jest mock function for global fetch
//   global.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(MOCK_DATA),
//     })
//   );

//   render(
//     <BrowserRouter>
//       <Body />
//     </BrowserRouter>
//   );

//   // Simulate user input
//   const searchInput = screen.getByTestId("searchInput");
//   fireEvent.change(searchInput, { target: { value: "foods" } });
//   // Simulate search button click
//   fireEvent.click(screen.getByRole("button", { name: "search" }));

//   // Wait for the mock fetch call to be made and the state update to occur
//   await waitFor(() => {
//     // expect(global.fetch).toHaveBeenCalledTimes(1);
//     const cards = screen.getAllByTestId("resCard");
//     expect(cards.length).toBe(2);
//   });

//   // Restore original fetch implementation after the test
//   global.fetch.mockRestore();
// });

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for foods text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "foods" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);

});

it("should display the top rated restaurants in the body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  
  const ratedButton = screen.getByRole('button',{name:"Top Rated Restaurants"})
  fireEvent.click(ratedButton);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(14);
});
