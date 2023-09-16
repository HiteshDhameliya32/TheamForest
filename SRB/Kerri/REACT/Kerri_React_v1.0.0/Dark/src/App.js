import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/mobiriseicons.css";
import 'magnific-popup/dist/magnific-popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/style.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Layout from "./components/Layout";
import Index2 from "./components/Pages/Index2";
import Index1 from "./components/Pages/Index1";
import Index4 from "./components/Pages/Index4";
import Index5 from "./components/Pages/Index5";
import Index7 from "./components/Pages/Index7";
import Index15 from "./components/Pages/Index15";
import Index8 from "./components/Pages/Index8";
import Index3 from "./components/Pages/Index3";
import Index10 from "./components/Pages/Index10";
import Index11 from "./components/Pages/Index11";
import Index12 from "./components/Pages/Index12";
import Index14 from "./components/Pages/Index14";
import Index16 from "./components/Pages/Index16";
import Index17 from "./components/Pages/Index17";
import Index18 from "./components/Pages/Index18";
import Index9 from "./components/Pages/Index9";
import Index13 from "./components/Pages/Index13";
import Index6 from "./components/Pages/Index6";
import Layout1 from "./components/Layout1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Index1 />} />
          <Route path="/Index1" index element={<Index1 />} />
          <Route path="/Index2" index element={<Index2 />} />
          <Route path="/Index3" index element={<Index3 />} />
          <Route path="/Index4" index element={<Index4 />} />
          <Route path="/Index5" index element={<Index5 />} />
          <Route path="/Index6" index element={<Index6 />} />
          <Route path="/Index7" index element={<Index7 />} />
          <Route path="/Index8" index element={<Index8 />} />
          <Route path="/Index9" index element={<Index9 />} />
          <Route path="/Index10" index element={<Index10 />} />
          <Route path="/Index11" index element={<Index11 />} />
          <Route path="/Index12" index element={<Index12 />} />
          <Route path="/Index13" index element={<Index13 />} />
          <Route path="/Index14" index element={<Index14 />} />
          <Route path="/Index16" index element={<Index16 />} />
          <Route path="/Index17" index element={<Index17 />} />
          <Route path="/Index18" index element={<Index18 />} />
        </Route>
        <Route path="/Index15" element={<Layout1 />}>
          <Route path="/Index15" index element={<Index15 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
