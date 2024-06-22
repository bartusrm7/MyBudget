import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import LogReg from "./components/LogReg";
import Log from "./components/Log";
import Reg from "./components/Reg";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./components/UserContext";
import MainComponent from "./components/MainComponent";
import Balance from "./components/Balance";
import BalanceProvider from "./components/BalanceContext";
import Transactions from "./components/Transactions";
import Payments from "./components/Payments";
import Cards from "./components/Cards";
import Groups from "./components/Groups";
import GroupsProvider from "./components/GroupsContext";

export default function App() {
	return (
		<Router>
			<>
				<BalanceProvider>
					<GroupsProvider>
						<UserProvider>
							<Routes>
								<Route path='/' element={<StartPage />} />
								<Route path='/log-reg' element={<LogReg />} />
								<Route path='/log' element={<Log />} />
								<Route path='/reg' element={<Reg />} />
								<Route
									path='/main-component'
									element={
										<ProtectedRoute>
											<MainComponent />
										</ProtectedRoute>
									}
								/>
								<Route
									path='/balance'
									element={
										<ProtectedRoute>
											<Balance />
										</ProtectedRoute>
									}
								/>
								<Route
									path='/transactions'
									element={
										<ProtectedRoute>
											<Transactions />
										</ProtectedRoute>
									}
								/>
								<Route
									path='/payments'
									element={
										<ProtectedRoute>
											<Payments />
										</ProtectedRoute>
									}
								/>
								<Route
									path='/cards'
									element={
										<ProtectedRoute>
											<Cards />
										</ProtectedRoute>
									}
								/>
								<Route
									path='/groups'
									element={
										<ProtectedRoute>
											<Groups />
										</ProtectedRoute>
									}
								/>
							</Routes>
						</UserProvider>
					</GroupsProvider>
				</BalanceProvider>
			</>
		</Router>
	);
}
