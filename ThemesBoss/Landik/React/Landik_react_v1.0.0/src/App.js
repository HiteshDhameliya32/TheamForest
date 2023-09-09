import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index1 from "./pages/Index1";
import Index2 from "./pages/Index2";
import Layout from "./pages/Layouts/Layout";
import Layout2 from "./pages/Layouts/Layout2";
import Layout3 from "./pages/Layouts/Layout3";
import Index3 from "./pages/Index3";
import Layout4 from "./pages/Layouts/Layout4";
import Index4 from "./pages/Index4";
import Login from "./pages/Login";
import Ragister from "./pages/Ragister";
import Pricing from "./pages/Pricing";
import Pwreset from "./pages/Pwreset";
import Service from "./pages/Service";
import Testimonial from "./pages/Testimonial";
import Changelog from "./pages/Changelog";
import Documentation from "./pages/Documentation";
import Faqs from "./pages/Faqs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index1 />} />
          </Route>
          <Route path="/Index2" element={<Layout2 />}>
            <Route path="/Index2" element={<Index2 />} />
          </Route>
          <Route path="/Index3" element={<Layout3 />}>
            <Route path="/Index3" element={<Index3 />} />
          </Route>
          <Route path="/Index4" element={<Layout4 />}>
            <Route path="/Index4" element={<Index4 />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/documetation" element={<Documentation />} />
          <Route path="/" element={<Index1 />} />
          <Route path="/index2" element={<Index2 />} />
          <Route path="/index3" element={<Index3 />} />
          <Route path="/index4" element={<Index4 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ragi" element={<Ragister />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/pwrese" element={<Pwreset />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
