import { ProtectedRoute, RejectedRoute } from '@/guard/protected.guard';

import Cart from '@/pages/cart';
import Checkout from '@/pages/checkout';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import ProductDetail from '@/pages/[productId]';
import Profile from '@/pages/profile';
import RootLayout from '@/layouts/root-layout';
import { createBrowserRouter } from 'react-router-dom';
import path from '@/configs/path.config';
import AboutUs from '@/pages/aboutus';
import RegisterPage from '@/pages/register';
import { OrderStatus } from '@/pages/order-status';

export const routes = createBrowserRouter([
	{
		path: path.login,
		element: <RejectedRoute />,
		children: [{ index: true, element: <LoginPage /> }],
	},
	{
		path: path.register,
		element: <RejectedRoute />,
		children: [{ index: true, element: <RegisterPage /> }],
	},
	{
		path: path.home,
		element: <ProtectedRoute />,
		children: [
			{
				path: path.profile,
				element: (
					<RootLayout>
						<Profile />
					</RootLayout>
				),
			},
			{
				path: path.checkout,
				element: (
					<RootLayout>
						<Checkout />
					</RootLayout>
				),
			},
			{
				path: path.orderStatus,
				element: (
					<RootLayout>
						<OrderStatus />
					</RootLayout>
				),
			},
		],
	},
	{
		path: path.home,
		index: true,
		element: (
			<RootLayout>
				<HomePage />
			</RootLayout>
		),
	},
	{
		path: path.aboutus,
		element: (
			<RootLayout>
				<AboutUs />
			</RootLayout>
		),
	},
	{
		path: path.productDetail,
		element: (
			<RootLayout>
				<ProductDetail />
			</RootLayout>
		),
	},
	{
		path: path.cart,
		element: (
			<RootLayout>
				<Cart />
			</RootLayout>
		),
	},
]);

// /profile/checkout
