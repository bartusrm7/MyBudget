import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Log() {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
	const navigate = useNavigate();

	const validateEmail = email => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};
	const validatePassword = password => {
		return password.length >= 8;
	};

	const userLoginData = async () => {
		try {
			const response = await fetch("http://localhost:5174/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userEmail: userEmail,
					userPassword: userPassword,
				}),
			});
			if (!response.ok) {
				throw Error("Wrong data!");
			}
			if (!validateEmail(userEmail)) {
				console.log("Invalid email format!");
				return;
			}
			if (!validatePassword(userPassword)) {
				console.log("Password is to short!");
				return;
			}
			const data = await response.json();
			localStorage.setItem("accessToken", data.accessToken);

			setIsLoginSuccessful(true);
			navigate("/main-component");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<div className='log'>
				<div className='log__container'>
					<div className='log__input-container'>
						<input
							className='reg__input reg-email'
							type='email'
							placeholder='Email'
							value={userEmail}
							onChange={e => setUserEmail(e.target.value)}
						/>
						<input
							className='log__input log-password'
							type='password'
							placeholder='Password'
							value={userPassword}
							onChange={e => setUserPassword(e.target.value)}
						/>
					</div>
					<button className='log__login-btn' onClick={userLoginData}>
						LOGIN
					</button>

					<div className='log__switch-container'>
						<div>or</div>
						<button className='log__switch-for-register-btn'>
							<Link to='/reg'>REGISTER</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
