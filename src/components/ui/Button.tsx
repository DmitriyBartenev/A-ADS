import React from 'react';

interface ButtonProps {
	title: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
	return (
		<button className="bg-blue text-white text-base py-3 px-24 rounded shadow-md shadow-black/25 w-72">
			{title}
		</button>
	);
};
