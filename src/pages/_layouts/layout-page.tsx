import React, { useState } from 'react';
import Sidebar from '../../components/side-bar';
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../components/header-bar';

const LayoutPage: React.FC = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const toggleSideMenu = () => {
		setIsSideMenuOpen((prev) => !prev);
	};

	const closeSideMenu = () => {
		setIsSideMenuOpen(false);
	};

	return (
		<div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
			<HeaderBar toggleSideMenu={toggleSideMenu} />
			<div className="flex flex-1">
				<Sidebar isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
				<div className="flex-1 overflow-y-auto pt-20">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default LayoutPage;