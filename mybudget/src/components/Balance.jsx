import { useEffect } from "react";
import { useBalanceContext } from "./BalanceContext";
import Navigation from "./Navigation";

export default function Balance() {
	const { activeCard, setActiveCard, ownerBalance, setOwnerBalance } = useBalanceContext();

	const formatBalance = (number, symbols = "$") => {
		const formated = Number(number)
			.toFixed(2)
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return `${symbols}${formated}`;
	};

	useEffect(() => {
		const savedActiveCard = localStorage.getItem("activeCard");
		setActiveCard(JSON.parse(savedActiveCard));
		const savedBalance = localStorage.getItem("balance");
		setOwnerBalance(Number(savedBalance));
	}, [setActiveCard, setOwnerBalance]);

	return (
		<div>
			<Navigation />
			<div className='balance'>
				<div className='balance__main-container'>
					<div className='balance__containers'>
						<h3 className='balance__label'>Your current balance</h3>
						<div className='balance__current-balance'>
							{activeCard ? formatBalance(activeCard.balance) : "No active card selected!"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
