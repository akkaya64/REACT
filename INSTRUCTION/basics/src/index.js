import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/style.scss"
import AppRouter, { router } from "./router/router";
import { RouterProvider } from "react-router-dom";


const root = createRoot(document.getElementById("root"));

root.render(
    //<React.StrictMode>
        <RouterProvider router={router}/>
    //</React.StrictMode>
);

