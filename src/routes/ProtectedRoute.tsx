import { Navigate, Outlet } from "react-router"
import { useName } from "../context/nameContext"

function ProtectedRoute({children}: {children?: React.ReactNode}) {
    const {name} = useName()

    if (!name) {
        return <Navigate to="/" />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute