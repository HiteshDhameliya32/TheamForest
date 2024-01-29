import { useEffect } from "react";

// css imports
import "bootstrap/dist/css/bootstrap.min.css";
import 'simplebar-react/dist/simplebar.min.css';
import "@icon/dripicons/dripicons.css"
import '@/styles/style.scss'

import { ThemeContextProvider } from '@/context/ThemeContext'

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
   
  }, []);

  const getLayout = Component.getLayout || ((page)=>page)
  return (
    <ThemeContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </ThemeContextProvider>
  )
}
