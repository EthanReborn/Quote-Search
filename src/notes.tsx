import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { Root } from "./pages/rootNotes"
import { User } from "./pages/User";
import { Home } from "./pages/Home";
import { useState } from "react";
import { Api } from "./lib/api";
import { ApiContext } from "./contexts/api";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/users/:id",
                element: <User />
            },
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: 'home/room',
        element: <h1> i am on the room page </h1>
    },
    {
        path: 'users/:id',
        element: <h1> i am on the id search page </h1>
    }
]);

export const App = () => {

    const [api, setApi] = useState( new Api() )
    //api available to any child of component 

    return (
    <>
        <ApiContext.Provider value={api}> 
            <RouterProvider router={router} />
        </ApiContext.Provider>
    </>
    )
}