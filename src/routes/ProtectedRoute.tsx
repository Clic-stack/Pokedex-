import { Navigate, Outlet } from "react-router"
import { useName } from "../context/nameContext"

function ProtectedRoute({children}: {children?: React.ReactNode}) {
    const {name} = useName()
    const activeName = name || window.localStorage.getItem('name')

    if (!activeName) {
        return <Navigate to="/" />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute