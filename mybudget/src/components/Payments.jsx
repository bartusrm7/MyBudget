import { useEffect } from "react";
import { useGroupsContext } from "./GroupsContext";
import Navigation from "./Navigation";

export default function Payments() {
	const { createdTransaction, setCreatedTransaction } = useGroupsContext();

	useEffect(() => {
		const savedTransactions = localStorage.getItem("transaction");
		if (savedTransactions) {
			setCreatedTransaction(JSON.parse(savedTransactions));
		}
	}, []);

	return (
		<div>
			<Navigation />
			<div className='payments'>
				<div className='payments__main-container'>
					<div className='payments__containers'>
						<h3 className='payments__container-name'>History payments</h3>
						<div className='payments__main-container'>
							<div className='payments__container'>
								<div className='payments__name-container'>
									<div className='payments__name-of-type'>Name</div>
									<div className='payments__name-of-type'>Amount</div>
									<div className='payments__name-of-type'>Title</div>
									<div className='payments__name-of-type'>Group</div>
								</div>
								<div className='payments__transaction-type'>
									{createdTransaction.map(transaction => (
										<div key={transaction.id} className='payments__transaction-container'>
											<div className='payments__transaction'>{transaction.name}</div>
											<div className='payments__transaction'>{transaction.amount}</div>
											<div className='payments__transaction'>{transaction.title}</div>
											<div className='payments__transaction' style={{ textTransform: "capitalize" }}>
												{transaction.group}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
