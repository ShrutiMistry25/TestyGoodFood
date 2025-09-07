import  ReactDOM from "react-dom/client";
import AppRoute from "./src/App";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={AppRoute}/>);
