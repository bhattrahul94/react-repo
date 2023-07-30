import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello World From React!!!")


const Heading1 = () => <h1 id="heading1"> Inside Heading1 </h1>

const number = 10000
const Heading2 = () => (
        <div id="container">
            {number}
            <h1 id="heading2"> Inside Heading2 😇 </h1>
        </div>
    )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading2 />)