import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/start-page.scss";
import "./sass/log-reg.scss";
import "./sass/log-reg-component.scss";
import "./sass/main-component.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
