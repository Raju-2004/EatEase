import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withDiscountLabel } from "../RestaurantCard";
import "@testing-library/jest-dom"
import MOCK_DATA from '../../mocks/ResCardMock.json'

it("should restaurant card component data with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Food Park Family Restaurant");
    expect(name).toBeInTheDocument();
})

// it("should have restaurant card component with discount",()=>{
//     render(<withDiscountLabel resData={MOCK_DATA}/>)
//     const name = screen.getByText("");
//     expect(name).toBeInTheDocument();
// })