
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";

import { ThemeContextProvider } from "./context/ThemeContext";
import App from "./App";

// css imports
import "bootstrap/dist/css/bootstrap.min.css";
import 'simplebar-react/dist/simplebar.min.css';
import "@icon/dripicons/dripicons.css"
import '@/styles/style.scss'
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
);
