import React, { useEffect, useState } from "react";
import Card from "../components/card"
import { getAllmeme } from "../api/memes";

function Homepage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllmeme().then((memes) => {
            setData(memes.data.memes);
            console.log(data);
        })
    }, []);

    return (
        <div className="main">
            {
                data.map((el) => 
                    <Card title={el.name} url={el.url} /> 
                )
            }
        </div>
    )
};

export default Homepage;