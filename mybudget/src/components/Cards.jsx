import { useEffect, useState } from "react";
import { useBalanceContext } from "./BalanceContext";
import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navigation";

export default function Cards() {
	const [isSwaped, setIsSwaped] = useState(false);
	const [ownerCard, setOwnerCard] = useState("");
	const [numberCard, setNumberCard] = useState("");
	const [dateCard, setDateCard] = useState("");
	const { ownerBalance, setOwnerBalance, cards, setCards, activeCard, setActiveCard } = useBalanceContext();

	const handleSwapCard = () => setIsSwaped(!isSwaped);
	const createNewCard = () => {
		const newCard = {
			id: uuidv4(),
			owner: ownerCard,
			number: numberCard,
			expirationDate: dateCard,
			balance: ownerBalance,
		};
		if (ownerCard === "" || numberCard.length !== 26 || dateCard.length !== 4 || ownerBalance === "") {
			return;
		}
		const updatedCards = [...cards, newCard];
		setCards(updatedCards);
		localStorage.setItem("cards", JSON.stringify(updatedCards));

		setOwnerCard("");
		setNumberCard("");
		setDateCard("");
	};

	const handleActiveCard = card => {
		if (activeCard && activeCard.id === card.id) {
			setActiveCard(null);
			localStorage.removeItem("activeCard");
		} else {
			setActiveCard(card);
			setOwnerBalance(card.balance);
			localStorage.setItem("activeCard", JSON.stringify(card));
		}
	};

	const deleteCard = id => {
		const updatedCardAfterRemove = cards.filter(card => card.id !== id);
		setCards(updatedCardAfterRemove);
		localStorage.setItem("cards", JSON.stringify(updatedCardAfterRemove));

		if (activeCard && activeCard.id === id) {
			setActiveCard(null);
			localStorage.removeItem("activeCard");
		}
		if (activeCard && activeCard.id === "") {
			setOwnerBalance("");
		}
	};

	useEffect(() => {
		const savedCards = localStorage.getItem("cards");
		if (savedCards) {
			setCards(JSON.parse(savedCards));
		}
		const savedActiveCard = localStorage.getItem("activeCard");
		if (savedActiveCard) {
			setActiveCard(JSON.parse(savedActiveCard));
		}
	}, []);

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
									<div className='cards__object first-input'>
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
								<div
									key={index}
									className={`cards__card card-element-display-devide ${
										activeCard && activeCard.id === card.id ? "active-card" : ""
									}`}
									onClick={() => handleActiveCard(card)}>
									<div className='cards__object first-object-input'>
										<div className='card-view' style={{ textTransform: "capitalize" }}>
											{card.owner}
										</div>
										<span
											className='material-symbols-outlined turn-around delete-card'
											onClick={e => {
												e.stopPropagation();
												deleteCard(card.id);
											}}>
											delete
										</span>
									</div>
									<div className='cards__object card-view'>{card.number}</div>
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
