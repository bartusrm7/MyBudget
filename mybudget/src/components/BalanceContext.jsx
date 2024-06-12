import React, { createContext, useContext, useState } from "react";

const BalanceContextToPass = createContext();

export default function BalanceContext({ balance }) {
	const [ownerBalance, setOwnerBalance] = useState("");

	return (
		<BalanceContextToPass.Provider value={{ ownerBalance, setOwnerBalance }}>{balance}</BalanceContextToPass.Provider>
	);
}

export const useBalanceContext = () => useContext(BalanceContextToPass);
