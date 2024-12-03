import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchBar = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', ...props }, ref) => {
		return (
			<div className="flex justify-center flex-1 lg:mr-32">
				<div className="relative w-full max-w-xl mr-6 focus-within:text-primary-500">
					<div className="absolute inset-y-0 flex items-center pl-2">
						<svg className="w-4 h-4 text-primary-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<input
						className={`w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md focus:placeholder-gray-500 focus:bg-white focus:border-primary-300 focus:outline-none focus:shadow-outline-primary h-input px-2 py-2 ${className}`}
						type="text"
						ref={ref}
						{...props}
					/>
				</div>
			</div>

		);
	},
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
