import { useEffect } from "react";
import { useGroupsContext } from "./GroupsContext";
import { useBalanceContext } from "./BalanceContext";
import { v4 as uuid4v } from "uuid";
import Navigation from "./Navigation";

export default function Transactions() {
	const {
		createGroup,
		setCreateGroup,
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
	} = useGroupsContext();
	const { activeCard, setActiveCard, ownerBalance, setOwnerBalance } = useBalanceContext();

	const saveUserTransaction = () => {
		const newTransaction = {
			id: uuid4v(),
			name: transactionName,
			amount: transactionAmount,
			title: transactionTitle,
			group: transactionGroup,
		};
		const cardBalance = ownerBalance - transactionAmount;
		localStorage.setItem("balance", cardBalance);
		setOwnerBalance(cardBalance);

		const updatedTransaction = [...createdTransaction, newTransaction];
		setCreatedTransaction(updatedTransaction);
		localStorage.setItem("transaction", JSON.stringify(updatedTransaction));

		setTransactionName("");
		setTransactionAmount("");
		setTransactionTitle("");
		setTransactionGroup("");
	};

	useEffect(() => {
		const savedGroup = localStorage.getItem("group");
		setCreateGroup(JSON.parse(savedGroup));
		const savedCardBalance = localStorage.getItem("balance");
		setOwnerBalance(Number(savedCardBalance));
		const savedActiveCard = localStorage.getItem("activeCard");
		setActiveCard(JSON.parse(savedActiveCard));
	}, [setOwnerBalance, setActiveCard]);

	return (
		<div>
			<Navigation />
			<div className='transactions'>
				<div className='transactions__main-container'>
					<div className='transactions__containers'>
						<h3 className='transactions__name'>Make your transaction</h3>
						<div className='transactions__transaction-container'>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'>Name:</div>
								<input
									type='text'
									className='transactions__input'
									value={transactionName}
									onChange={e => setTransactionName(e.target.value)}
								/>
							</div>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'>Amount:</div>
								<input
									type='number'
									className='transactions__input'
									value={transactionAmount}
									onChange={e => setTransactionAmount(e.target.value)}
								/>
							</div>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'>Title:</div>
								<textarea
									className='transactions__input'
									value={transactionTitle}
									onChange={e => setTransactionTitle(e.target.value)}></textarea>
							</div>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'>Group:</div>
								<select
									value={transactionGroup}
									onChange={e => setTransactionGroup(e.target.value)}
									style={{ textTransform: "capitalize" }}>
									<option></option>
									{createGroup.map(group => (
										<option key={group.id}>{group.name}</option>
									))}
								</select>
							</div>
						</div>
						<button className='transactions__add-transaction-btn' onClick={saveUserTransaction}>
							ADD TRANSACTION
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
