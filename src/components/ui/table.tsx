import React from 'react';

export type Column = {
	header: string;
	accessor: string;
};

export type Action = {
	label: string;
	onClick: (row: any) => void;
	icon: React.ReactNode;
};

export type Pagination = {
	currentPage: number;
	totalPages: number;
	pageSize: number;
	totalItems: number;
	onPageChange: (page: number) => void;
};

export type TableProps = {
	columns: Column[];
	data: any[];
	actions?: Action[];
	pagination?: Pagination;
};

const Table = React.forwardRef<HTMLInputElement, TableProps>(
	({ columns, data, actions, pagination }, ref) => {
		const getVisiblePages = (currentPage: number, totalPages: number) => {
			const pages = [];
			const maxPagesToShow = 5;
			const half = Math.floor(maxPagesToShow / 2);

			let start = Math.max(currentPage - half, 1);
			let end = Math.min(currentPage + half, totalPages);

			if (currentPage - 1 <= half) {
				end = Math.min(maxPagesToShow, totalPages);
			}

			if (totalPages - currentPage <= half) {
				start = Math.max(totalPages - maxPagesToShow + 1, 1);
			}

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			return pages;
		};

		const startItem = pagination ? (pagination.currentPage - 1) * pagination.pageSize + 1 : 0;
		const endItem = pagination ? Math.min(pagination.currentPage * pagination.pageSize, pagination.totalItems) : 0;

		return (
			<div className="w-full overflow-hidden rounded-lg shadow-xs">
				<div className="w-full overflow-x-auto">
					<table className="w-full whitespace-no-wrap">
						<thead>
							<tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
								{columns.map((column) => (
									<th key={column.accessor} className="px-4 py-3">
										{column.header}
									</th>
								))}
								{actions && <th className="px-4 py-3">Actions</th>}
							</tr>
						</thead>
						<tbody className="bg-white divide-y">
							{data.map((row, rowIndex) => (
								<tr key={rowIndex} className="text-gray-700">
									{columns.map((column) => (
										<td key={column.accessor} className="px-4 py-3 text-sm">
											{row[column.accessor]}
										</td>
									))}
									{actions && (
										<td className="px-4 py-3">
											<div className="flex items-center space-x-4 text-sm">
												{actions.map((action, actionIndex) => (
													<button
														title={action.label}
														key={actionIndex}
														className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
														onClick={() => action.onClick(row)}
														aria-label={action.label}
													>
														{action.icon}
													</button>
												))}
											</div>
										</td>
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{pagination && (
					<div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
						<span className="flex items-center col-span-3">
							Showing {startItem}-{endItem} of {pagination.totalItems}
						</span>
						<span className="col-span-2"></span>
						<span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
							<nav aria-label="Table navigation">
								<ul className="inline-flex items-center">
									<li>
										<button
											className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-primary"
											aria-label="Previous"
											onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
											disabled={pagination.currentPage === 1}
										>
											<svg
												className="w-4 h-4 fill-current"
												aria-hidden="true"
												viewBox="0 0 20 20"
											>
												<path
													d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
													clip-rule="evenodd"
													fill-rule="evenodd"
												></path>
											</svg>
										</button>
									</li>
									{getVisiblePages(pagination.currentPage, pagination.totalPages).map((page) => (
										<li key={page}>
											<button
												className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary ${pagination.currentPage === page
													? 'text-white bg-primary-600 border border-r-0 border-primary-600'
													: ''
													}`}
												onClick={() => pagination.onPageChange(page)}
											>
												{page}
											</button>
										</li>
									))}
									<li>
										<button
											className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-primary"
											aria-label="Next"
											onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
											disabled={pagination.currentPage === pagination.totalPages}
										>
											<svg
												className="w-4 h-4 fill-current"
												aria-hidden="true"
												viewBox="0 0 20 20"
											>
												<path
													d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
													clip-rule="evenodd"
													fill-rule="evenodd"
												></path>
											</svg>
										</button>
									</li>
								</ul>
							</nav>
						</span>
					</div>
				)}
			</div>
		);
	}
);

Table.displayName = 'Table';

export { Table };