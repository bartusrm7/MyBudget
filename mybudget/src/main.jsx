import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/start-page.scss";
import "./sass/log-reg.scss";
import "./sass/log-reg-component.scss";
import "./sass/navigation.scss";
import "./sass/main-component.scss";
import "./sass/balance.scss";
import "./sass/transactions.scss";
import "./sass/payments.scss";
import "./sass/cards.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
