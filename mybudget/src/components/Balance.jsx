import { useEffect } from "react";
import { useBalanceContext } from "./BalanceContext";
import Navigation from "./Navigation";

export default function Balance() {
	const { activeCard, setActiveCard } = useBalanceContext();

	useEffect(() => {
		const savedActiveCard = localStorage.getItem("activeCard");
		if (savedActiveCard) {
			setActiveCard(JSON.parse(savedActiveCard));
		}
	}, []);

	return (
		<div>
			<Navigation />
			<div className='balance'>
				<div className='balance__main-container'>
					<div className='balance__containers'>
						<h3 className='balance__label'>Your Balance</h3>
						<div className='balance__current-balance'>
							{activeCard ? activeCard.balance : "No active card selected!"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
