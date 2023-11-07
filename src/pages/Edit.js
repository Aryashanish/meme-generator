import React, { useState , createRef } from "react";
import { useSearchParams} from 'react-router-dom';
import Text from "../components/text";
import { exportComponentAsJPEG} from "react-component-export-image";

function Edit() {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div className="editpage">
            <h4>Instruction: If You Add Text then Click Over Add Text Button , double click to enable edit mode and again double click to make draggable Text.</h4>
            <div ref={memeRef} className="edit-img">
                <img src={params.get("url")}></img>
                {
                    Array(count).fill(0).map((e) => <Text />)
                }
            </div>
            <button
                onClick={addText}
                className="btn">Add Text</button>
            <button
                onClick={(e) => exportComponentAsJPEG(memeRef)}
                className="btn success">Save
            </button>
        </div>
    )
}

export default Edit;