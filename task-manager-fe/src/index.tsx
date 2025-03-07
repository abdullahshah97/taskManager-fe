import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {AuthProvider} from "./contextProvider/AuthContext";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement); // Create the root using createRoot

// Render the App
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);