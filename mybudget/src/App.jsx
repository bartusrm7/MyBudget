import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import LogReg from "./components/LogReg";
import Log from "./components/Log";
import Reg from "./components/Reg";
import MainComponent from "./components/MainComponent";
import Transactions from "./components/Transactions";
import Payments from "./components/Payments";
import Cards from "./components/Cards";

export default function App() {
	return (
		<Router>
			<>
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='/log-reg' element={<LogReg />} />
					<Route path='/log' element={<Log />} />
					<Route path='/reg' element={<Reg />} />
					<Route path='/main-component' element={<MainComponent />} />
					<Route path='//transactions' element={<Transactions />} />
					<Route path='/payments' element={<Payments />} />
					<Route path='/cards' element={<Cards />} />
				</Routes>
			</>
		</Router>
	);
}
