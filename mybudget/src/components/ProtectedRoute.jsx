import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
	return localStorage.getItem("accessToken");
};

const ProtectedRoute = ({ children }) => {
	if (!isAuthenticated()) {
		return <Navigate to='/log' />;
	}
	return children;
};

export default ProtectedRoute;
