import React from 'react';
import Image from 'next/image';

import { icons } from '../../../public';

const Header = () => {
	const { MainLogo } = icons;

	return (
		<header className="py-7 px-40">
			<Image src={MainLogo} alt="A-ADS main logo" width={140} height={33} />
		</header>
	);
};

export default Header;
