import {getByText, render } from "@testing-library/react";
import App4 from "./App4";

test("heading string",()=>{
    const { getByText } = render(<App4/>);
    const div = getByText(/Github/);
    expect(div).toHaveTextContent("Github");
});