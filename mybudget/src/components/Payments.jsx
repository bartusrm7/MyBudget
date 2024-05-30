import { useState } from "react";
import Navigation from "./Navigation";

export default function Payments() {
	const [payments, setPayments] = useState([{ date: [] }, { title: [] }, { type: [] }, { amount: [] }]);

	return (
		<div>
			<Navigation />
			<div className='payments'>
				<div className='payments__main-container'>
					<div className='payments__containers'>
						<div className='payments__container-name'>History payments</div>
						<div className='payments__container'>
							<div className='payments__type-name'>
								{payments.map((payment, index) => (
									<div key={index} className='payments__name'>
										{payment.date}
									</div>
								))}
								{payments.map((payment, index) => (
									<div key={index} className='payments__name'>
										{payment.title}
									</div>
								))}
								{payments.map((payment, index) => (
									<div key={index} className='payments__name'>
										{payment.type}
									</div>
								))}
								{payments.map((payment, index) => (
									<div key={index} className='payments__name'>
										{payment.amount}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
