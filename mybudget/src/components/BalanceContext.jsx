import React, { createContext, useContext, useState } from "react";

const BalanceContext = createContext();

export default function BalanceProvider({ children }) {
	const [ownerBalance, setOwnerBalance] = useState("");
	const [cards, setCards] = useState([]);
	const [activeCard, setActiveCard] = useState(null);

	return (
		<BalanceContext.Provider value={{ ownerBalance, setOwnerBalance, cards, setCards, activeCard, setActiveCard }}>
			{children}
		</BalanceContext.Provider>
	);
}

export const useBalanceContext = () => useContext(BalanceContext);
