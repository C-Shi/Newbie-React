import Navigation from "../Navigation";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("Test Navigation Component", () => {
    it("Should see a Home button", () => {
        const { getByTestId } = render(<Navigation />, { wrapper: BrowserRouter});

        expect(getByTestId('home-icon').textContent).toBe('Home')
    });

    it("Should see a About button", () => {
        const { getByTestId } = render(<Navigation />, { wrapper: BrowserRouter});

        expect(getByTestId('about-icon').textContent).toBe('About')
    });

    it("Should see a Connect button", () => {
        const { getByTestId } = render(<Navigation />, { wrapper: BrowserRouter});

        expect(getByTestId('connect-icon').textContent).toBe('Connect')
    });
})