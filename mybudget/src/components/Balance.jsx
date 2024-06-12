import Navigation from "./Navigation";

export default function Balance({ ownerBalance }) {
	console.log(ownerBalance);
	return (
		<div>
			<Navigation />
			<div className='balance'>
				<div className='balance__main-container'>
					<div className='balance__containers'>
						<h3 className='balance__label'>Your Balance</h3>
						<div className='balance__current-balance'>{ownerBalance}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
