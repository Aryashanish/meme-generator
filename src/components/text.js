import React, { useState } from "react";
import Draggable from 'react-draggable'

function Text() {
    const [editMode, seteditMode] = useState(false);
    const [textval, setTextval] = useState("Double Click to Edit Text");

    return (
        <Draggable>
            {
                editMode ?
                    <input
                        onDoubleClick={()=>seteditMode(false)}
                        value={textval}
                        onChange={(e) => setTextval(e.target.value)} 
                    />
                    : 
                    <h3 onDoubleClick={() => { seteditMode(true)}}>
                        {textval}
                    </h3>
            }
        </Draggable>
    )
}

export default Text;