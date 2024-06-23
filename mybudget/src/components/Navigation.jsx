import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";

export default function Navigation() {
	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const navigate = useNavigate();
	const { userName, setUserName } = useUserContext();

	const handleHamburgerMenu = () => setHamburgerMenu(!hamburgerMenu);
	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		console.log(userName);
		setUserName("");
		navigate("/log");
	};
	useEffect(() => {
		const userLogin = localStorage.getItem("userLogin");
		setUserName(userLogin);
		console.log(userLogin);
	}, [setUserName]);

	return (
		<div>
			<div className='navigation'>
				{hamburgerMenu ? (
					<span className='material-symbols-outlined hamburger' onClick={handleHamburgerMenu}>
						close
					</span>
				) : (
					<span className='material-symbols-outlined hamburger' onClick={handleHamburgerMenu}>
						menu
					</span>
				)}
				<div className='navigation__main-container'>
					<div className={`navigation__navigation-container ${hamburgerMenu ? "open-menu" : ""}`}>
						<div className='navigation__navigation-item'>
							<Link to='/main-component'>
								<span className='material-symbols-outlined'>home</span>Start
							</Link>
						</div>
						<div className='navigation__navigation-item'>
							<Link to='/statistics'>
								<span className='material-symbols-outlined'>monitoring</span>Statistics
							</Link>
						</div>
						<div className='navigation__navigation-item'>
							<span className='material-symbols-outlined'>person</span>
							{userName}
						</div>
						<div className='navigation__navigation-item' onClick={handleLogout}>
							<span className='material-symbols-outlined'>logout</span>Logout
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
