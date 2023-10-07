import React from "react";
import { render } from "@testing-library/react"
import Box from "./Box";

it("renders a box", () => {
    render(<Box />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box />);
    expect( asFragment() ).toMatchSnapshot();
});