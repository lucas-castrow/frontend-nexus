import React from 'react';

interface MenuItemProps {
	label: string;
	icon: JSX.Element;
	href?: string;
	onClick?: () => void;
	isActive?: boolean;
	hasSubMenu?: boolean;
	subMenuItems?: { label: string; href: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({
	label,
	icon,
	href,
	onClick,
	isActive,
	hasSubMenu,
	subMenuItems,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleSubMenu = () => {
		if (hasSubMenu) {
			setIsOpen((prev) => !prev);
		}
	};

	return (
		<li className={`relative px-6 py-3 ${isActive ? 'bg-gray-100' : ''}`}>
			{href ? (
				<a
					className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-600 ${isActive ? 'text-gray-800' : 'text-gray-600'}`}
					href={href}
					onClick={onClick}
				>
					{icon}
					<span className="ml-4">{label}</span>
				</a>
			) : (
				<button
					className={`inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-600 ${isActive ? 'text-gray-800' : 'text-gray-600'}`}
					onClick={toggleSubMenu}
					aria-haspopup="true"
				>
					<span className="inline-flex items-center">
						{icon}
						<span className="ml-4">{label}</span>
					</span>
					{hasSubMenu && (
						<svg
							className="w-4 h-4"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					)}
				</button>
			)}
			{hasSubMenu && isOpen && subMenuItems && (
				<ul
					className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-600 rounded-md shadow-inner bg-gray-50"
					aria-label="submenu"
				>
					{subMenuItems.map((subItem) => (
						<li key={subItem.href} className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
							<a className="w-full" href={subItem.href}>{subItem.label}</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default MenuItem;
