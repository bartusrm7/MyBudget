import { Link } from "react-router-dom";

export default function LogReg() {
	return (
		<div>
			<div className='log-reg'>
				<div className='log-reg__container'>
					<div className='log-reg__log-reg-container login-container'>
						<div className='log-reg__name-of-container'>
							<Link to='/log'>LOGIN</Link>
						</div>
					</div>
					<div className='log-reg__log-reg-container register-container'>
						<div className='log-reg__name-of-container'>
							<Link to='/reg'>REGISTER</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
