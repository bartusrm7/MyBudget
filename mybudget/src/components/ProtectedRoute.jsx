import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
	return !!localStorage.getItem("accessToken");
};
const ProtectedRoute = () => {
	if (!isAuthenticated()) return <Navigate to={"/login"} />;
};

export default ProtectedRoute();
