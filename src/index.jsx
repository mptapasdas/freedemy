import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context-provider/context-provider.jsx";
import AuthProvider from "./context-provider/auth-provider.jsx";

import { BrowserRouter } from "react-router-dom";
import "../public/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <App />
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
