import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', ...props }, ref) => {
		return (
			<input
				type={type}
				className={`block w-full mt-1 text-sm border rounded-md border-gray-300 bg-white focus:border-primary-400 focus:outline-none focus:shadow-outline-primary text-gray-800 focus:shadow-outline-gray h-input px-2 py-2 ${className}`}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';

export { Input };
