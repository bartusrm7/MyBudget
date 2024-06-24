import Navigation from "./Navigation";

export default function Statistics() {
	


	return (
		<div>
			<Navigation />
			<div className='statistics'>
				<div className='statistics__main-container'>
					<div className='statistics__containers'>
						<h3 className='statistics__label'>Your statistics</h3>
						<div className='statistics__create-new-group-container group-container'></div>
						<div className='statistics__created-group-container group-container'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
