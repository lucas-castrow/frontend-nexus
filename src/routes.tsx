import React from 'react';
import LayoutPage from './pages/_layouts/layout-page';
import Home from './pages/app/home/home';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/app/auth/sign-in';
import Transporter from './pages/app/transporter/transporter';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		// errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/transporter/:id',
				element: <Transporter />,
			},

		],
	},
	{
		path: '/login',
		element: <SignIn />,
	},
])
