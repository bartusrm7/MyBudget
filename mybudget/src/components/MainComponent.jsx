import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function MainComponent() {
	return (
		<div>
			<Navigation />
			<div className='main-component'>
				<div className='main-component__main-container'>
					<div className='main-component__containers'>
						<div className='main-component__container'>
							<div className='main-component__name-component'>
								<span className='material-symbols-outlined'>attach_money</span>Balance
							</div>
							<div className='main-component__name-component'>
								<Link to='/transactions'>
									<span className='material-symbols-outlined'>check_box</span>Transactions
								</Link>
							</div>
							<div className='main-component__name-component'>
								<Link to='/payments'>
									<span className='material-symbols-outlined'>database</span>
									Payments
								</Link>
							</div>
							<div className='main-component__name-component'>
								<Link to='/cards'>
									<span className='material-symbols-outlined'>credit_card</span>
									Cards
								</Link>
							</div>
							<div className='main-component__name-component'>
								<span className='material-symbols-outlined'>group</span>Groups
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
