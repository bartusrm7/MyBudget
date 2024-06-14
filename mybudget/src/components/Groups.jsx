import Navigation from "./Navigation";

export default function Groups() {
	const createNewGroup = () => {};

	return (
		<div>
			<Navigation />
			<div className='groups'>
				<div className='groups__main-container'>
					<div className='groups__containers'>
						<h3 className='groups__label'>Create your payments group</h3>
						<div className='groups__create-new-group-container group-container'>
							<input className='groups__group-input' type='text' />
							<button className='groups__add-group-btn'>CREATE GROUP</button>
						</div>
						<div className='groups__created-group-container group-container'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
