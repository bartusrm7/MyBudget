import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export default function Cards() {
	const [isSwaped, setIsSwaped] = useState(false);
	const [ownerCard, setOwnerCard] = useState("");
	const [numberCard, setNumberCard] = useState("");
	const [dateCard, setDateCard] = useState("");
	const [ownerBalance, setOwnerBalance] = useState("");
	const [cards, setCards] = useState([]);

	// UTWORZYĆ WARUNKI DO NAME(IMIE I NAZWISKO), NUMBER(ILOŚĆ CYFR), DATE(00/00) ITD.
	const handleSwapCard = () => setIsSwaped(!isSwaped);
	const createNewCard = () => {
		const newCard = {
			owner: ownerCard,
			number: numberCard,
			expirationDate: dateCard,
			balance: ownerBalance,
		};
		if (ownerCard === "" || numberCard === "" || dateCard === "" || ownerBalance === "") {
			return;
		}
		const updatedCards = [...cards, newCard];
		setCards(updatedCards);
		localStorage.setItem("cards", JSON.stringify(updatedCards));
		setOwnerCard("");
		setNumberCard("");
		setDateCard("");
		setOwnerBalance("");
	};
	useEffect(() => {
		const savedCards = localStorage.getItem("cards");
		if (savedCards) {
			setCards(JSON.parse(savedCards));
		}
	}, []);

	// const handleCard = async () => {
	// 	try {
	// 		const response = await fetch("http://localhost:5174/save-card", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({
	// 				owner: ownerCard,
	// 				number: numberCard,
	// 				expirationDate: dateCard,
	// 				balance: ownerBalance,
	// 			}),
	// 		});
	// 		if (!response.ok) {
	// 			throw Error("Error!");
	// 		}
	// 		createNewCard();
	// 		const data = await response.json();
	// 		console.log("Card data:", data);
	// 	} catch (error) {
	// 		console.error("Error:", error);
	// 	}
	// };

	return (
		<div>
			<Navigation />
			<div className='cards'>
				<div className='cards__main-container'>
					<div className='cards__containers'>
						<h3 className='cards__label'>Complete your data cards</h3>
						<div className='cards__container'>
							{isSwaped ? (
								<div className='cards__card balance'>
									<input
										className='card-data'
										type='number'
										placeholder='Enter owner balance...'
										value={ownerBalance}
										onChange={e => setOwnerBalance(e.target.value)}
									/>
									<span className='material-symbols-outlined turn-around' onClick={handleSwapCard}>
										replay
									</span>
								</div>
							) : (
								<div className='cards__card'>
									<div className='cards__object first-input'>
										<input
											className='card-data'
											type='text'
											placeholder='Enter owner name...'
											value={ownerCard}
											onChange={e => setOwnerCard(e.target.value)}
										/>
										<span className='material-symbols-outlined turn-around' onClick={handleSwapCard}>
											replay
										</span>
									</div>
									<div className='cards__object'>
										<input
											className='card-data'
											type='number'
											placeholder='Enter number of card...'
											value={numberCard}
											onChange={e => setNumberCard(e.target.value)}
										/>
									</div>
									<div className='cards__object card-last-data'>
										<span>Card</span>
										<input
											className='card-data last-input'
											type='number'
											placeholder='Enter expiration date...'
											value={dateCard}
											onChange={e => setDateCard(e.target.value)}
										/>
									</div>
								</div>
							)}
						</div>
						<button className='cards__add-card-btn' onClick={createNewCard}>
							ADD CARD
						</button>

						<div className='cards__card-container cards-display-devide'>
							{cards.map((card, index) => (
								<div key={index} className='cards__card card-element-display-devide'>
									<div className='cards__object card-view'> {card.owner}</div>
									<div className='cards__object card-view'> {card.number}</div>
									<div className='cards__object card-last-data'>
										<span>Card</span>
										<span className='card-view'>{card.expirationDate}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
