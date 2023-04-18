import React from 'react';
import Image from 'next/image';

import { icons } from '../../../public';

const Header = () => {
	const { MainLogo } = icons;

	return (
		<header className="py-7 px-7 xl:px-40 max-w-[1440px] mx-auto ">
			<Image src={MainLogo} alt="A-ADS main logo" width={140} height={33} />
		</header>
	);
};

export default Header;
