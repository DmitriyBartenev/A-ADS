import React from 'react';

const MonetizationOptions: React.FC = () => {
  return (
    <div className='flex justify-center items-start py-16 px-7 xl:py-28 xl:px-64 max-w-[1440px] mx-auto flex-col sm:flex-row bg-slate-100 sm:bg-white'>
      <h3 className='text-black text-3xl leading-[48px] font-bold max-w-md mr-8'>
        A-ADS provides alternative technologies for{' '}
        <span className='text-blue'>monetizing your traffic</span>
      </h3>
      <div className='font-inter text-base font-medium text-lightGray max-w-sm'>
        <p className='mb-5 mt-6 sm:mt-0'>
          In addition to the ability to sell ads on your website directly, you
          can also earn from the pool of our active advertisers.
        </p>
        <p>
          Our advertising model doesn't limit your earnings by clicks and
          impressions, but expands it with advertiser's budgets they eager to
          spend on your website.
        </p>
      </div>
    </div>
  );
};

export default MonetizationOptions;
