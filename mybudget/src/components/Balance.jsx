import { useEffect } from "react";
import { useBalanceContext } from "./BalanceContext";
import Navigation from "./Navigation";

export default function Balance() {
	const { activeCard, setActiveCard, ownerBalance, setOwnerBalance } = useBalanceContext();
	zrobić ownerBalance i setOwnerBalance

	const formatBalace = (number, symbols = "$") => {
		const formated = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		return `${symbols}${formated}`;
	};

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
						<h3 className='balance__label'>Your current balance:</h3>
						<div className='balance__current-balance'>
							{activeCard ? formatBalace(activeCard.balance) : "No active card selected!"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
