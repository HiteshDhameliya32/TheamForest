import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
import Email from "./components/Apps/Email"
import Index from "./components/Index";

function App() {
  const context = useContext(AppContext);
  
  const {
    sidebar,
    fullScreen,
    mode,
    notificationMode,
  } = context;

  useEffect(() => {
    const body = document.body;
    //const root = document.getElementById('root');
  
    // Remove existing classes
    body.classList.remove(
      'font-cerebri',
      'antialiased',
      'relative',
      'text-black',
      'dark:text-white',
      'text-sm',
      'font-normal',
      'overflow-x-hidden',
      'vertical',
      'toggle-sidebar',
      'full',
      'light',
      'dark'
    );
  
    // Add classes based on states
    body.classList.add(
      'font-cerebri',
      'antialiased',
      'relative',
      'text-black',
      'dark:text-white',
      'text-sm',
      'font-normal',
      'overflow-x-hidden',
      'vertical',
    );
    if (!sidebar) {
      body.classList.add('toggle-sidebar');
    }
    if (fullScreen) {
      body.classList.add('full');
    }
    console.log(mode)
    if (mode === "light") {
      body.classList.add('light');
    }
    if (mode === "dark") {
      body.classList.add('dark');
    }
    // Update the data attributes for later access if needed
    // root.setAttribute('data-sidebar', sidebar);
    // root.setAttribute('data-fullscreen', fullScreen);
  }, [sidebar, fullScreen,mode,notificationMode]);


  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="/" index element={<Index />} />
              <Route exact path="/apps/email" element={<Email />} />
              {/* <Route exact index path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/party" element={<PartyMaster />} />
              <Route exact path="/transaction" element={<Transaction/>} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
