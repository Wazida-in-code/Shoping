import React from 'react';

const Header = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.magnific.com/free-photo/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-look-amused-shop-buying-thi_1258-119761.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
       Welcome To My Products House
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Header;