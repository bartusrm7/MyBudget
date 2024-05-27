import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import LogReg from "./components/LogReg";
import Log from "./components/Log";
import Reg from "./components/Reg";
import MainComponent from "./components/MainComponent";

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
				</Routes>
			</>
		</Router>
	);
}
