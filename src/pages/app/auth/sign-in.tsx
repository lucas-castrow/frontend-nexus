import React from 'react';
import { Input } from '../../../components/ui/input';

const SignIn: React.FC = () => {
	return (
		<div className="flex items-center min-h-screen p-6 bg-gray-50">
			<div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
				<div className="flex flex-col overflow-y-auto md:flex-row">
					<div className="h-32 md:h-auto md:w-1/2">
						<img
							aria-hidden="true"
							className="object-cover w-full h-full"
							src="/yard-login.webp"
							alt="Office"
						/>
					</div>
					<div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
						<div className="w-full">
							<h1 className="mb-4 text-2xl font-semibold text-gray-700">
								Login
							</h1>
							<label className="block text-sm">
								<span className="text-gray-700">Email</span>
								<Input placeholder="admin@patio.com" />
							</label>
							<label className="block mt-4 text-sm">
								<span className="text-gray-700">Password</span>
								<Input placeholder='***************' type='password' />
							</label>

							<a
								className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary"
								href="../index.html"
							>
								Entrar no sistema
							</a>

							<hr className="my-8" />

							<p className="mt-4">
								<a
									className="text-sm font-medium text-primary-600 hover:underline"
									href="./forgot-password"
								>
									Esqueceu sua senha?
								</a>
							</p>
							<p className="mt-1">
								<a
									className="text-sm font-medium hover:underline"
									href="./create-account"
								>
									Criar uma conta para o meu pátio
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
