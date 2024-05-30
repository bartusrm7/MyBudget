import React from "react";
import Navigation from "./Navigation";

export default function Transactions() {
	return (
		<div>
			<Navigation />
			<div className='transactions'>
				<div className='transactions__main-container'>
					<div className='transactions__containers'>
						<div className='transactions__transaction'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
