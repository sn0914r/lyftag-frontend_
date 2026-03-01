import AppRoutes from "./AppRoutes";
import InitialPage from "../pages/initialPage";
import { useAuthContext } from "../modules/auth/AuthContext";
const App = () => {
  const { loading } = useAuthContext();
  return <>{loading ? <InitialPage /> : <AppRoutes />}</>;
};

export default App;
