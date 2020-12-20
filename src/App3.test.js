import {render , fireEvent} from "@testing-library/react";
import  App3 from "./App3";

test("check box ",()=>{
    const{getByLabelText} =  render(<App3/>);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(ckbox);
    expect(checkbox.checked).toEqual(true);
});