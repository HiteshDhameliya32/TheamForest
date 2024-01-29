import {useRoutes} from "hookrouter"

import Page404 from "./pages/pages/404";
// Routes import 
import routes from "./router"
function App() {
    const routeResult = useRoutes(routes);

    return (
            !routeResult ?(
                <Page404 />
            ):
            routeResult.type.getLayout ?(
                routeResult.type.getLayout(routeResult)
            ):(
               <>
                    {routeResult}
               </>
            )
    )
}

export default App


