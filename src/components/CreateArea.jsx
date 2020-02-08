import React, { useState } from "react";

function CreateArea(props) {

    const [expanded, setExpansion] = useState(false);

    function expasionControl() {
        setExpansion(true);
    }

    return (
        <div>
            <form onSubmit={props.handleText}>      
                <input type="text" placeholder="Title" name={props.inputName} value={props.title} onChange={props.handleText} hidden={!expanded} maxLength="30"/>
                <textarea placeholder="...Take a note" name={props.textAreaName} rows={expanded ? 3 :1} value={props.content} onChange={props.handleText} onClick={expasionControl}/>
               <button onClick={(props.useButton)} hidden={!expanded} className="formButton">+</button>

            </form>

        </div>

    )
}

export default CreateArea;