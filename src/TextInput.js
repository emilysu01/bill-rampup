import React, { useState } from "react";

function TextInput(props) {

    const [endpoint, setEndpoint] = useState("");

    const [apiResponse, setApiResponse] = useState("");
    
    const submitValue = () => {
        const url = "https://api.thedogapi.com/v1/" + endpoint
        fetch(url, {
                method: "GET",
                withCredentials: true,
                headers: {
                    "x-api-key": process.env.API_KEY,
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => setApiResponse(JSON.stringify(data)));
    }
    
    return (
        <div>
            <input type="text" onChange={ e => setEndpoint(e.target.value) } />
            <button onClick={submitValue}>Send</button>
            <p>{apiResponse}</p>
        </div>
    )
}

export default TextInput;