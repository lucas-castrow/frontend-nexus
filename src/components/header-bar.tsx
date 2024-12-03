import React, { useState } from 'react';
import { SearchBar } from './ui/search-bar';
import { useTheme } from '../theme-provider';
import ThemeLight from './icons/theme-light';
import ThemeDark from './icons/theme-dark';

interface HeaderBarProps {
	toggleSideMenu: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ toggleSideMenu }) => {
	const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const toggleProfileMenu = () => {
		setProfileMenuOpen(!isProfileMenuOpen);
	};

	return (
		<header className="z-10 py-4 bg-headerBar dark:bg-headerBar-dark shadow-md fixed w-full top-0 left-0">
			<div className="container flex items-center justify-between h-full px-6 mx-auto text-headerBar-foreground dark:text-headerBar-foreground-dark">
				<button
					className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-primary"
					onClick={toggleSideMenu}
					aria-label="Menu"
				>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>

				<SearchBar placeholder="ABC" />

				<ul className="flex items-center flex-shrink-0 space-x-6">
					<li className="relative">
						<button
							className="flex items-center align-middle"
							onClick={toggleProfileMenu}
							aria-label="Account"
							aria-haspopup="true"
						>
							<span className="mr-2 text-headerBar-foreground dark:text-headerBar-foreground-dark">Pátio GRP</span>
							<img
								className="object-cover w-8 h-8 rounded-full"
								src="https://imgs.search.brave.com/1WFIpUNAOtVXo51SuasJnMAgOsPwQQXErqrO6H1Ps1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk4LzFk/LzZiLzk4MWQ2YjJl/MGNjYjVlOTY4YTA2/MThjOGQ0NzY3MWRh/LmpwZw"
								alt="User avatar"
								aria-hidden="true"
							/>
						</button>
						{isProfileMenuOpen && (
							<ul
								className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-headerBar-foreground dark:text-headerBar-foreground-dark bg-headerBar dark:bg-headerBar-dark border border-gray-100 dark:border-gray-700 rounded-md shadow-md"
								aria-label="submenu"
							>
								<li>
									<a className="block px-4 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
										Profile
									</a>
								</li>
								<li>
									<a className="block px-4 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
										Settings
									</a>
								</li>
								<li>
									<hr className="my-2 border-gray-200 dark:border-gray-600" />
								</li>
								<li>
									<button
										onClick={toggleTheme}
										className="flex items-center w-full px-4 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										{theme === 'dark' ? (
											<>
												<ThemeLight />
												<span style={{ paddingLeft: '10px' }}>Modo claro</span>
											</>
										) : (
											<>
												<ThemeDark />
												<span style={{ paddingLeft: '10px' }}>Modo escuro</span>
											</>
										)}
									</button>
								</li>
								<li>
									<a className="block px-4 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
										Sign out
									</a>
								</li>
							</ul>
						)}
					</li>
				</ul>
			</div>
		</header>
	);
};

export default HeaderBar;