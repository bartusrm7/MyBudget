import React, { createContext, useContext, useState } from "react";

const GroupsContext = createContext();

export default function GroupsProvider({ children }) {
	const [createGroup, setCreateGroup] = useState([]);
	const [nameGroup, setNameGroup] = useState("");
	const [transactionName, setTransactionName] = useState("");
	const [transactionAmount, setTransactionAmount] = useState("");
	const [transactionTitle, setTransactionTitle] = useState("");
	const [transactionGroup, setTransactionGroup] = useState("");
	const [transactionData, setTransactionData] = useState("");
	const [createdTransaction, setCreatedTransaction] = useState([]);

	return (
		<GroupsContext.Provider
			value={{
				createGroup,
				setCreateGroup,
				nameGroup,
				setNameGroup,
				transactionName,
				setTransactionName,
				transactionAmount,
				setTransactionAmount,
				transactionTitle,
				setTransactionTitle,
				transactionGroup,
				setTransactionGroup,
				createdTransaction,
				setCreatedTransaction,
				transactionData,
				setTransactionData,
			}}>
			{children}
		</GroupsContext.Provider>
	);
}

export const useGroupsContext = () => useContext(GroupsContext);
