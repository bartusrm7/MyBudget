import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Log() {
	const [userLogin, setUserLogin] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isRegisteredSuccessful, setIsRegisteredSuccessful] = useState(false);
	const navigate = useNavigate();

	const validateEmail = email => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};
	const validatePassword = password => {
		return password.length >= 8;
	};

	const userRegisterData = async () => {
		try {
			const response = await fetch("http://localhost:5174/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userLogin: userLogin,
					userEmail: userEmail,
					userPassword: userPassword,
				}),
			});
			if (!response.ok) {
				throw Error("Wrong data!");
			}
			if (!validateEmail(userEmail)) {
				console.log("Invalid email format!");
			}
			if (!validatePassword(userPassword)) {
				console.log("Password is to short!");
			}
			const data = await response.json();
			console.log("Registration successful:", data);

			setIsRegisteredSuccessful(true);
			navigate("/main-component");
		} catch (error) {
			console.error("Error", error);
		}
	};

	return (
		<div>
			<div className='reg'>
				<div className='reg__container'>
					<div className='reg__input-container'>
						<input
							className='reg__input reg-login'
							type='text'
							placeholder='Login'
							value={userLogin}
							onChange={e => setUserLogin(e.target.value)}
						/>
						<input
							className='reg__input reg-email'
							type='email'
							placeholder='Email'
							value={userEmail}
							onChange={e => setUserEmail(e.target.value)}
						/>
						<input
							className='reg__input reg-password'
							type='password'
							placeholder='Password'
							value={userPassword}
							onChange={e => setUserPassword(e.target.value)}
						/>
					</div>
					<button className='reg__register-btn' onClick={userRegisterData}>
						REGISTER
					</button>

					<div className='reg__switch-container'>
						<div>or</div>
						<button className='reg__switch-for-login-btn'>
							<Link to='/log'>LOGIN</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
