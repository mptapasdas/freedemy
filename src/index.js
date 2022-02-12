import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context-providerr/context-provider";
import AuthProvider from "./context-providerr/auth-provider";

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <App />
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
