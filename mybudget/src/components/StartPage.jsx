import { Link } from "react-router-dom";

export default function StartPage() {
	return (
		<div>
			<div className='start-page'>
				<h1 className='start-page__name'>MyBudget</h1>
				<button className='start-page__start-btn'>
					<Link to='/log-reg'>START</Link>
				</button>
			</div>
		</div>
	);
}
