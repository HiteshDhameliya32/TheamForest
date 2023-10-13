
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index1 from "./Components/Pages/Index1";
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './Components/helperComponents/Navbar';
import Layout from './Components/Layout/Layout';
import Index2 from './Components/Pages/Index2';
import Index3 from './Components/Pages/Index3';
import Index4 from "./Components/Pages/Index4";
import Index5 from "./Components/Pages/Index5";
import Index6 from "./Components/Pages/Index6";
import Index7 from "./Components/Pages/Index7";
import Index8 from "./Components/Pages/Index8";
import Index9 from "./Components/Pages/Index9";
import Index10 from "./Components/Pages/Index10";
import Index11 from "./Components/Pages/Index11";
import Index12 from "./Components/Pages/Index12";
import Index13 from "./Components/Pages/Index13";
import Index14 from "./Components/Pages/Index14";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorSchemesExample />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Index1 />} />
            <Route path="*"  element={<Index1 />} />
            <Route path="/index1" element={<Index1 />} />
            <Route path="/index2" element={<Index2 />} />
            <Route path="/index3" element={<Index3 />} />
            <Route path="/index4" element={<Index4 />} />
            <Route path="/index5" element={<Index5 />} />
            <Route path="/index6" element={<Index6 />} />
            <Route path="/index7" element={<Index7 />} />
            <Route path="/index8" element={<Index8 />} />
            <Route path="/index9" element={<Index9 />} />
            <Route path="/index10" element={<Index10 />} />
            <Route path="/index11" element={<Index11 />} />
            <Route path="/index12" element={<Index12 />} />
            <Route path="/index13" element={<Index13 />} />
            <Route path="/index14" element={<Index14 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
