import React, { useState } from 'react';
import MenuItem from './menu-item';
import TransporterIcon from './icons/transporter';

interface SidebarProps {
	isSideMenuOpen: boolean;
	toggleSideMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSideMenuOpen, toggleSideMenu }) => {
	const [activeMenu, setActiveMenu] = useState<string>('transporters');

	const handleMenuClick = (menu: string) => {
		setActiveMenu(menu);
	};

	return (
		<div className={`flex bg-headerBar dark:bg-headerBar-dark ${isSideMenuOpen ? 'overflow-hidden' : ''}`}>
			<aside
				className={`fixed inset-0 z-20 w-64 h-screen overflow-y-auto bg-headerBar dark:bg-headerBar-dark transition-transform duration-300 transform ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0`}
			>
				<div className="py-4 text-foreground dark:text-foreground-dark">
					<div className="flex items-center justify-between px-6">
						<a className="text-lg font-bold text-headerBar-foreground dark:text-headerBar-foreground-dark" href="#">
							Nexus Yard
						</a>
						<button
							className="md:hidden text-headerBar-foreground dark:text-headerBar-foreground-dark"
							onClick={toggleSideMenu}
							aria-label="Close menu"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<ul className="mt-6">
						<MenuItem
							label="Transportadoras"
							icon={<TransporterIcon />}
							href="/"
							isActive={activeMenu === 'transporters'}
							onClick={() => handleMenuClick('transporters')}
						/>
						<MenuItem
							label="Forms"
							icon={
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
								</svg>
							}
							href="forms.html"
							isActive={activeMenu === 'Forms'}
							onClick={() => handleMenuClick('Forms')}
						/>
						<MenuItem
							label="Pages"
							icon={
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
								</svg>
							}
							hasSubMenu={true}
							subMenuItems={[
								{ label: 'Login', href: 'pages/login.html' },
								{ label: 'Create account', href: 'pages/create-account.html' },
								{ label: 'Forgot password', href: 'pages/forgot-password.html' },
							]}
							isActive={activeMenu === 'Pages'}
							onClick={() => handleMenuClick('Pages')}
						/>
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;