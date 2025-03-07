import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import Signup from "./Signup";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Login />
        <Signup />
    </React.StrictMode>
);
