import Navigation from "./Navigation";

export default function Cards() {
	return (
		<div>
			<Navigation />
			<div className='cards'>
				<div className='cards__main-container'>
					<div className='cards__containers'>
						<button className='cards__add-card-btn'>ADD CARD</button>
						<div className='cards__container'>
							<div className='cards__card'>
								<div className='cards__object'>Card</div>
								<div className='cards__object'>1234 1234 1234 1234 1234</div>
								<div className='cards__object card-name-date'>
									<span>Name</span>
									<span>Date</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
