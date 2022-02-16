import React from "react";

function inputs(props) {

    function updateData(e) {
        props.stateController(e.target.value);
    }

    return(
        <div>
            <input type="number" placeholder="Type a value..." onChange={updateData}></input>
        </div>
    );
}

export default inputs;