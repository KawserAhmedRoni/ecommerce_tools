import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<header className="header-area">
				<div className="container">
					<div className="header__wrp justify-content-center">
						{/* <Link className="logo" to={"/"}>
							<img
								src="/public/assets/images/logo/logo.png"
								alt="logo"
							/>
						</Link> */}

						<div className="header__menu">
							<ul className="menu">
								<li>
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="/product">Product</NavLink>
								</li>
								<li>
									<NavLink to="/productDetails">
										Product Details
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
