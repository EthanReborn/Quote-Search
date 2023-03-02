import { Outlet, useLocation } from "react-router-dom"

export const Root = () => {
    const location = useLocation()
    let name = "Home"
    if (location.pathname === '/home'){
        name = "Profile"
    } else {
        name = "Users"
    }
    return (
        <>
            <nav className="navbar"> location </nav>
            <Outlet />
        </>
    )
}