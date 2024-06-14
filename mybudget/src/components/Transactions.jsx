import React from "react";
import Navigation from "./Navigation";

export default function Transactions() {
	return (
		<div>
			<Navigation />
			<div className='transactions'>
				<div className='transactions__main-container'>
					<div className='transactions__containers'>
						<h3 className='transactions__label'>Make your transaction</h3>
						<div className='transactions__transaction-container'>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'></div>
								<input type='text' className='transactions__input' />
							</div>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'></div>
								<input type='text' className='transactions__input' />
							</div>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'></div>
								<input type='text' className='transactions__input' />
							</div>
							<div className='transactions__transaction-field'>
								<div className='transactions__transaction-name'></div>
								<input type='text' className='transactions__input' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
