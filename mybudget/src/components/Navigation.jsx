import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const navigate = useNavigate();
	const handleHamburgerMenu = () => {
		setHamburgerMenu(!hamburgerMenu);
	};
	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		navigate("/log");
	};

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
							<span className='material-symbols-outlined'>monitoring</span>Statistics
						</div>
						<div className='navigation__navigation-item'>
							<span className='material-symbols-outlined'>settings</span>Settings
						</div>
						<div className='navigation__navigation-item'>
							<span className='material-symbols-outlined'>person</span>Account
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
