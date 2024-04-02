import { useAuthContext } from "~context/AuthProvider";
import AppRouter from "./AppRouter";
import AuthRoutes from "./AuthRouters";


function App() {
    const { isAuthenticated } = useAuthContext();
    return isAuthenticated ? <AppRouter /> : <AuthRoutes />;
}

export default App;