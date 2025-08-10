import { RouterProvider } from "react-router-dom"
import router from "./Routes"
import { AppProviders } from "./Context/Wrapper/AppProvider"
export default function App() { 
    return (

        <AppProviders>
            <RouterProvider router={router} />
        </AppProviders>
    )
}