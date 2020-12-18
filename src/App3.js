import React, { useReducer } from "react";

function App3() {
    //const [checked, toggle] = useReducer((checked) => !checked, false);
    // to pass checked as an argument is necessary  
    function test (checked){
        return checked = !checked;
    }
    const [checked, toggle] = useReducer(test, false);
    
    return (
        <div>
            <input type="checkbox" value={checked} onChange={toggle} />
            <p>{checked ? "checked" : "not checked"}</p>
        </div>
    )
}
export default App3;